---
title: "State serialization and synchronization: StateSave"
---

# State serialization and synchronization: StateSave

## Introduction

**StateSave** in UltimateXR refers to the capability of a component to serialize its state to a binary stream and deserialize it. StateSave plays a key role in supporting high-level functionalities like multiplayer, state-saving, and replays. Besides serialization/deserialization, StateSave offers other interesting features such as interpolation between states.
All components that implement `IUxrStateSave`, such as those derived from `UxrComponent`, have StateSave functionality. 

Let's remember our first example, given in the introduction section:

```c#
// Save complete scene state
byte[] serializedData = UxrManager.Instance.SaveStateChanges(UxrStateSaveLevel.Complete, UxrSerializationFormat.BinaryUncompressed);

// Load state
UxrManager.Instance.LoadStateChanges(serializedData);
```

Here we showcase high-level functionality in `UxrManager` to serialize and deserialize the complete state of the current scene. The first call will iterate over all `IUxrStateSave` components and save their state to a buffer. When deserializing, it will load back all component states found in the buffer.

The ability to serialize and deserialize component states is essential for implementing functionalities such as:
- **Multiplayer**: Enabling the server to send the current state of the scene to new users upon joining. Further synchronization is achieved using **StateSync**.
- **State-saving**: Enabling games to support game saving, and training applications/simulators to support session saving/persistance.
- **Replays**: Saving complete and incremental scene changes to create a timeline with keyframes and sampling frames. The state interpolation functionality is used to smoothly interpolate between frames. Noise reduction can be used to provide a stabilized first-person view.

All these are features implemented in UltimateXR with the help of **StateSave**.

 ## Adding StateSave support

Adding StateSave support to our components is pretty straightforward:
- Derive the component from `UxrComponent` instead of `MonoBehaviour`. In case the class in the codebase already derives from another class that cannot be changed, consult the [Custom Parent Class guide](/docs/programming-guide/state-serialization-and-synchronization-custom-parent-class).

- Override `SerializeState` to add serialization of all variables comprising the state.

Let's get back to the StateSave example given in the introduction section. We were adding StateSave support to a flashlight component that had a light with a color and an enabled state:

```c#
protected override void SerializeState(bool isReading, int stateSerializationVersion, UxrStateSaveLevel level, UxrStateSaveOptions options)
{
	// Always call base implementation first using the same parameters
	base.SerializeState(isReading, stateSerializationVersion, level, options);

	if (level >= UxrStateSaveLevel.ChangesSinceBeginning)
	{
		// We can't use ref with Light properties, so we use temp vars.
		Color color        = _light.color;
		bool  lightEnabled = _light.enabled;

		// These serialize or deserialize depending on isReading.
		SerializeStateValue(level, options, nameof(color),        ref color);
		SerializeStateValue(level, options, nameof(lightEnabled), ref lightEnabled);

		if (isReading)
		{
			// If we're deserializing, update the state accordingly.
			_light.color   = color;
			_light.enabled = lightEnabled;
		}
	}
}
```

If we add this code to our flashlight component we automatically make sure that:
- The current flashlight state will be sent to users that join a networked session.
- The flashlight state will be saved in save files.
- The flashlight state will be seen in replays.

Not bad for such little effort, right? Any functionality that uses StateSave will automatically be supported by the flashlight component.

## Dissecting `SerializeState()`

Now let's get to know `SerializeState` a little better.

First, it is important to point out that here the term "serialization" is used to describe both serialization and deserialization operations. To simplify things, `SerializeState` will run for both reading and writing: deserialization when `isReading` is `true` and serialization when `isReading` is `false`. This not only helps by reducing the required lines of code, it also helps lowering the chances of serialization errors that separate read/write sections would get. 

The `SerializeStateValue()` method is where the actual serialization takes place. It uses the `ref` keyword to support both modes: In read mode it will assign the deserialized value and in write mode it will simply output the value.
In our flashlight example, the read mode will update the `Light` component with the deserialized values, and the write mode will output the current `Light` component values.

Dealing with variables that don't require access to another component's getter/setter would simplify the code even more:

```c#
private int _life;
private int _ammo;

protected override void SerializeState(bool isReading, int stateSerializationVersion, UxrStateSaveLevel level, UxrStateSaveOptions options)
{
	base.SerializeState(isReading, stateSerializationVersion, level, options);

	if (level >= UxrStateSaveLevel.ChangesSinceBeginning)
	{
		SerializeStateValue(level, options, nameof(_life), ref _life);
		SerializeStateValue(level, options, nameof(_ammo), ref _ammo);
	}
}
```

At this point there are many questions left:
- What are `stateSerializationVersion`, `level` and `options`?
- What type of variables can I serialize? Do you support xxx?
- What about transforms?
- Why is `nameof()` used? is the name serialized? should I use shorter names to take up less space?
- Can I use conditional serialization? Can I do it so that I serialize only when there are changes?
- What happens if I add or remove variables? Will different versions of my app be compatible with the data?
- What if I have 10k components in my scene? Won't that require a lot of space?
- You mentioned state interpolation. How does that work?

## `stateSerializationVersion`

It is very common to add or remove parameters during an application lifecycle. When data is changed in newer versions it is essential to provide backwards compatibility to keep the ability to deserialize old data.
The `IUxrStateSave` interface provides a `StateSerializationVersion` parameter which is an `int` that can be overriden on any component. Starting with 0, it should be incremented each time a change is made in the state format that breaks compatibility with the current version.

Let's say we want to add `intensity` support for our `Light` component on the flashlight. Assuming the `StateSerializationVersion` was 0, we can integrate this change while keeping compatibility with the previous versions like this:

```c#
protected override int StateSerializationVersion => 1; // Was 0, now is 1.

protected override void SerializeState(bool isReading, int stateSerializationVersion, UxrStateSaveLevel level, UxrStateSaveOptions options)
{
	base.SerializeState(isReading, stateSerializationVersion, level, options);

	if (level >= UxrStateSaveLevel.ChangesSinceBeginning)
	{
		Color color        = _light.color;
		bool  lightEnabled = _light.enabled;
		float intensity    = _light.intensity;

		SerializeStateValue(level, options, nameof(color),        ref color);
		SerializeStateValue(level, options, nameof(lightEnabled), ref lightEnabled);

		if (StateSerializationVersion >= 1)
		{
			// We are serializing/deserializing the new version.
			SerializeStateValue(level, options, nameof(intensity), ref intensity);

			if (isReading)
			{
				_light.intensity = intensity;
			}
		}

		if (isReading)
		{
			_light.color   = color;
			_light.enabled = lightEnabled;
		}
	}
}
```

When reading, the `stateSerializationVersion` method parameter will be the value of the component's `StateSerializationVersion` at the moment the component was serialized. When writing, it will take the current component's `StateSerializationVersion` value.
Using the updated version, the flashlight component has now support for the `intensity` parameter in the `Light` while still keeping support for the old version.

## `UxrStateSaveLevel`

The `level` parameter is an `UxrStateSaveLevel` enum which tells the amount of information that needs to be saved. 
The main reason to have a `level` parameter is because space and bandwidth are still limited resources. In a scene with hundreds of components and numerous state variables, it becomes impractical to store a complete serialized scene state if the majority of components remain unchanged since the scene was loaded.

Let's take the example of a sync-on-join implementation, which sends a network client that just joined the current state of the scene. New users that join need to receive the updated state of the scene so that they start correctly in sync.
There are two options:
1. Serialize the complete state of the scene and send it.
2. Send only the state variables that changed after the scene was loaded.

In a sync-on-join, we can use option 2 to drastically reduce the amount of data that needs to be transmitted. The client will load the scene and **only the state variables that changed will be overriden**.

When loading a save-game, however, the scene state is completely arbitrary. Once the scene is loaded and the user starts playing, component states begin to change and objects are created and destroyed. The scene is no longer in its initial state, so loading a save-game applying only the changes since the beginning doesn't leave the scene in the correct state. One option is to re-load the scene before a save-game is loaded, which takes time. Another option is to store a complete state of the scene so that every single component parameter gets saved. When loading, all variables will be overriden which will leave the scene in the correct absolute state including all dynamic objects that were created/destroyed.

In the case of a save-game, it's still possible to reload the scene. The user will just need to wait a little longer. In a replay, however, to implement random seeking, reloading a scene is not an option. Moving the time cursor would be a painful experience.
Instead, the system will first load a complete initial state of the scene. Then apply an incremental change determined by the nearest previous keyframe. Lastly, apply smaller incremental changes up to the desired time. It is a hierarchical process that keeps the file size small while allowing instant random seeking.

Now that we know why different levels are required, let's get to know which ones they are. `UxrStateSaveLevel` defines the following levels, **in increasing amount of information**:

- `ChangesSincePreviousSave`: **Level 1**. Saves only state variables that changed since the last time `SerializeState()` was used on the component. 
- `ChangesSinceBeginning`: **Level 2**. Saves only state variables that changed since the scene was loaded.
- `Complete`: **Level 3**. Saves all state variables.

Continuing with the previous examples: The multiplayer sync-on-join implementation sends a scene serialized using `ChangesSinceBeginning`. The first save-game option, which requires loading the scene again, can use `ChangesSinceBeginning` to work correctly. The second save-game option, which doesn't require to load the scene again, needs to use `Complete` to work correctly. The replay implementation uses a hierarchy of all 3 levels to keep filesize to a minimum and be performant: `Complete` as a single initial scene state that is loaded each time a random seek is performed, `ChangesSinceBeginning` for keyframes that are saved every n seconds and `ChangesSincePreviousSave` to save sampling frames n times per second.

## Implementing different StateSave levels

When writing, keeping track of state changes can be a burden. Supporting different `UxrStateSaveLevel` requires keeping track of all variables and write them only when they changed, depending on the requested level.
But we have good news: **UltimateXR will take care of everything**. `SerializeStateValue()` will use the `level` parameter to automatically skip variables that don't need serialization. The framework will be in charge of tracking all variables and know when they changed.

This means it's perfectly valid to write this:

```c#
protected override void SerializeState(bool isReading, int stateSerializationVersion, UxrStateSaveLevel level, UxrStateSaveOptions options)
{
	base.SerializeState(isReading, stateSerializationVersion, level, options);

	SerializeStateValue(level, options, nameof(_life), ref _life);
	SerializeStateValue(level, options, nameof(_ammo), ref _ammo);
}
```

In this example, `_life` and `_ammo` represent the state of the component. If the requested `level` is `Complete`, they will always be serialized. If it's set to `ChangesSinceBeginning`, each will be serialized only if its value has changed since the scene was loaded. Finally, if the `level` is set to `ChangesSincePreviousSave`, they will be serialized only if their value has changed since the last serialization. All automatically. Pretty cool, right?
This also means that if a component doesn't need to serialize any of its variables, **the whole component will be excluded from the serialization**, which helps to drastically reduce the amount of data required when the scene has just a few changes.

Behind the scenes, UltimateXR tracks variables using their names, which is **why `nameof()` is used**. Contrary to intuition, however, **the name itself is not serialized** alongside the value. Instead, it serves as an identifier for the variables being tracked. Therefore, assigning a variable a shorter name does not reduce data size. The variable's name can be arbitrary, as long as it remains consistent during the application run.

There was the following line in the flashlight example above that still needs explanation:
```c#
if (level >= UxrStateSaveLevel.ChangesSinceBeginning)
```

This is the primary consideration when implementing `SerializeState()`. This line efficiently skips over the `ChangesSincePreviousSave` level when unnecessary. It's a **recommended best practice**, especially when applicable.
Let's see what difference it makes:

```c#
protected override void SerializeState(bool isReading, int stateSerializationVersion, UxrStateSaveLevel level, UxrStateSaveOptions options)
{
	base.SerializeState(isReading, stateSerializationVersion, level, options);
	
	if (level >= UxrStateSaveLevel.ChangesSinceBeginning)
	{
		SerializeStateValue(level, options, nameof(_life), ref _life);
		SerializeStateValue(level, options, nameof(_ammo), ref _ammo);
	}
}
```
This `SerializeState()` version will ignore the `ChangesSincePreviousSave` level requests and only serialize levels `ChangesSinceBeginning` and `Complete`. Why is it important? It helps speeding up serialization, avoids serializing redundant information, and mitigates inconsistencies.
Natively, in the framework, `ChangesSincePreviousSave` is only used by the **replay system**. It is a serialization level used **very frequently** (n times per second) to, for example, save the `position` of a bouncing ball's `Transform`. It is the serialization level that samples high frequency, often per-frame, data changes. Think of it as curves in a timeline.

Whether a variable should skip `ChangesSincePreviousSave` does not depend on the frequency of data changes, but **who** changes the data. We can use a very simple rule of thumb:

- Use `level >= UxrStateSaveLevel.ChangesSinceBeginning` if the variable is modified exclusively in events synchronized using **StateSync** statements (BeginSync/EndSync).
- Don't use it if the variable can be modified at any time, out of a **StateSync** block (BeginSync/EndSync).

{{% callout info %}}
You might still be unfamiliar with StateSync. This functionality will be covered in the [next chapter](/docs/programming-guide/state-serialization-and-synchronization-statesync).
{{% /callout %}}

If the variable is only modified in **StateSync** blocks, these are already handled by the replay system. In our example, `_life` is likely already synchronized in a method `ApplyDamage()` or similar, and `_ammo` will also be probably updated by a synchronized `Shoot()` method.
Not filtering out `ChangesSinceBeginning` in this case would be less performant and would cause small stutters/inconsistencies in the variables right around when they change in the replay. The replay system will call the synced method on the exact timestamp, which is the desired result. At the same time, the variables will also be updated by the `ChangesSinceBeginning` deserialization and interpolated a little before and after the timestamp, which is not desired.

Finally, ensure that this `if` statement doesn't encompass the call to the `base.SerializeState()`  implementation. This call handles common state variables and leverages the user from implementing `enabled`, `active` or `Transform` states. We will cover this later.

## `UxrStateSaveOptions`

The `options` parameter only needs to be passed on to the `SerializeStateValue()` calls. It includes flags that are internally used to implement features like automatic variable change tracking.

For example, the system will perform a "dummy" component serialization at the end of the first frame to capture the values of all component variables and store them as the initial state. This initial state serves as a reference when serializing at the `ChangesSinceBeginning` level. This is accomplished by combining the `DontSerialize`, `ResetChangesCache`, and `FirstFrame` flags.

As mentioned, these options are exclusively used internally, but understanding their purpose can help paint a better picture of their role.

## Supported variable types

`SerializeStateValue()` supports a wide range of variable types, including common collection types such as arrays, `List<>`, `Dictionary<>` and `HashSet<>`.
Consult the [Serialization guide](/docs/programming-guide/other-features-serialization) for the full list of supported types.

To extend support for new types to work with `SerializeStateValue()`, the following steps can be taken:
- Implement the `IUxrSerializable` interface.
- Implement the `ICloneable` interface *
- Override the `bool Equals(object obj)` method *

(*) When dealing with big collections that easily get populated, `null` can be passed instead of the variable name using `nameof()`. Using `null` as the name, enforces serialization bypassing change checks, which internally involves creating copies and potentially comparing elements one by one. In this case, the two last steps are not necessary.
Let's see how `nameof` works, and what difference it makes to use `null`.

## `SerializeStateValue()` and `nameof()`

As seen already, `SerializeStateValue()` is a powerful method responsible for both serialization and deserialization of single variables within a component's state. It will also automatically skip serialization of unchanged variables based on the requested level.

To facilitate variable tracking, `nameof()` is used, enabling `SerializeStateValue()` to associate values with their corresponding variables. While the name can be arbitrary, it must remain consistent during the application run. It is not serialized but serves as an identifier for the variables.

A special treatment is used when passing `null`. In this case the variable will always be serialized by `SerializeStateValue()` regardless of the requested level. This can be used to avoids potentially costly change checks, which internally involve maintaining copies and comparing contents.
The use of `null` is ultimately a user decision. However, it's important to note that without `null`, each `SerializeStateValue()` call creates a deep copy of the variable or collection, which, depending on complexity or size, can impact performance.

This is relevant in the case of collections. As soon as they contain an element, checking for changes doesn't avoid serializing data on any of the 3 levels:
- `ChangesSincePreviousSave` is likely avoided by an `if` condition anyway, since collections that are part of a component state are modified in **StateSync** blocks. Collections that require serialization in this level are rare.
- `ChangesSinceBeginning` will always serialize when non-empty, because when checking for changes it will be compared against the empty initial state.
- `Complete` will serialize regardless.

Using `nameof()` is still useful if the collection is commonly empty and can't get big. Even more so if there are many instances of the component, where the benefit of using `nameof()` would be multiplied.

As an example, the `UxrGrabbableObject` component uses `nameof()` for the name to serialize an internal list containing grab point indices that have been disabled at run-time. Grab points are rarely disabled, which means the lists are commonly empty. In addition, there can be many `UxrGrabbableObject` components at the same time in the scene, which means that there is a huge benefit in letting the framework keep track of the unchanged lists so that they are not serialized.
On the other hand, the `UxrInstanceManager` internal list of instantiated GameObjects is serialized using `null` for the name. This list, if the `UxrInstanceManager` is present, is rarely empty. Not only that, it can get really big, which means that the benefit of tracking for changes is not that much versus keeping copies and doing comparisons.

## Transforms

Among the most common elements serialized are an object's position and rotation. These values are stored in a `Transform` component inside the `GameObject`.
Transforms will need to be serialized for all objects that move, rotate or scale. The `parent` property can also be serialized.
Including an object's `Transform` in the serialization is easy:

```c#
protected override UxrTransformSpace TransformStateSaveSpace => UxrTransformSpace.World;
  
protected override bool RequiresTransformSerialization(UxrStateSaveLevel level)  
{  
    return true;
}

protected override void SerializeState(bool isReading, int stateSerializationVersion, UxrStateSaveLevel level, UxrStateSaveOptions options)
{
	base.SerializeState(isReading, stateSerializationVersion, level, options);

	// Here serialize the rest of the state.
}
```

Using the first two overrides, the component will automatically include the `Transform` in the serialization.

- `TransformStateSaveSpace` tells which space is more convenient to store the values in: `World`, `Local` or `Avatar`. For objects that are parented, it might be better to use `Local`. Or if they're within an avatar hierarchy, `Avatar`.
- `RequiresTransformSerialization` allows to specify which serialization levels will serialize the transform. For an object that can be arbitrarily moved, outside of any **StateSync** BeginSync/EndSync block, it needs to be serialized in all levels. For an object that only is moved through synchronized methods/properties, the level `ChangesSincePreviousSave` can return `false`. 

It is important to ensure that the `base.SerializeState` is called when overriding `SerializeState` since the base implementation is responsible for serializing the `Transform`.
When writing, **Transform data**, like other variables, **will only be serialized if it changed**. This means that even if there are hundreds of objects in a scene whose `Transform` can be serialized, only the specific portion (position, rotation, scale or parent) will be written. Only the `Complete` serialization level will enforce output of all components.

To be able to track parenting using serialization, the parent object needs to have any component with the `IUxrUnique` interface, such as any component derived from `UxrComponent`. In case no specific component is required, a dummy `UxrSyncObject` can be used where the Sync Transform property in the inspector can be left unchecked.

What happens if we want to serialize the `Transform` of another object?
This is also supported using the `SerializeStateTransform()` method:

```c#
const string transformName = "otherObject.transform";
SerializeStateTransform(level, options, transformName, transformSpace, otherObject.transform);
```

## Conditional serialization

Conditions can be applied during serialization. They are often used to serialize values only for levels equal to or above `UxrStateStateLevel.ChangesSinceBeginning`.
Conditional serialization is also required when adding or removing variables from the state, thus breaking compatibility, which can be addressed using the versioning support discussed earlier.

The only requirement for using conditions during serialization is to ensure that whatever is written can be accurately read back. For instance, users may serialize a boolean variable to determine the presence of an optional group of variables next.

Ultimately, it's the user's discretion to determine what needs to be serialized to ensure proper integration with systems that use  **StateSave** functionality.

## Component Order

The order in which components are serialized determines the sequence in which the component data appears in the data stream. During deserialization, the system reconstructs the data in the same order, which is crucial for components with dependencies.

For instance, the `UxrInstanceManager` must be serialized before any components in instantiated GameObjects. If the `UxrInstanceManager` were serialized last, the system would attempt to deserialize component data and locate the corresponding components in the scene. However, since the `UxrInstanceManager` hadn't created those objects yet, this process, relying on the component's unique id, would fail.
By prioritizing the serialization of the `UxrInstanceManager`, we ensure that the instances are created and available for deserialization.

{{% callout tip %}}
The order in which components are serialized is determined by the `SerializationOrder` property from `IUxrStateSave`. This property can be overriden.
{{% /callout %}}

Most of the time, the `SerializationOrder` can be left unchanged. With dependencies, however, it can be overriden to control the order in which certain components are serialized. By default it is assigned a value of 0. UltimateXR defines the serialization values used by UltimateXR components in the `UxrConstants.Serialization` class:

- `SerializationOrderInstanceManager` = `SerializationOrderSingleton` - 1000
- `SerializationOrderSingleton` = -10000
- `SerializationOrderDefault` = 0

Serialization will be performed for increasing values of `SerializationOrder` which means that, by default, the `UxrInstanceManager` is serialized first, followed by all singletons, and finally, all other components.

## State interpolation

State interpolation is a feature provided by the framework to support functionality like replays.

A replay is an application session that has been recorded and can be played back. Unlike a video, a replay contains spatial data and events instead of pixels. offering the additional benefit of being viewable from any angle. Replays have many applications in videogames and simulators.

{{% callout info %}}
UltimateXR supports recording replays to a file and playing them back.
{{% /callout %}}

A replay file, in a very simplified way, represents a timeline with 2 type of elements: **StateSync** events and **StateSave** frames. Events are property changes or method calls that have been synchronized using BeginSync/EndSync statements, part of the **StateSync** functionality. **StateSave** frames, on the other hand, are serialized state changes saved at regular intervals, usually a fixed amount of times per second. These frames are written using `SerializeState()` calls with the `ChangesSincePreviousSave` level.

Playing a replay file involves executing the events in the timeline at their correct timestamp and continuously loading the state changes to update the state of objects, such as Transforms and other variables.

To ensure smooth reproduction, the framework supports interpolation from one `SerializeState()` to the next during replay playback. Without state interpolation, replays would appear jittery.

When designing the interpolation architecture, the primary goal was to provide **automatic support of variable interpolation** during playback, letting the user have control over how the values are interpolated only if necessary.

By default, all variables that can be interpolated will be interpolated linearly. These include: `int`, `float`, `Vector2`, `Vector3`, `Vector4`, `Quaternion`, `Color` and `Color32`. `Transform` values are internally interpolated using `Vector3` and `Quaternion`.

Users can control how variables are interpolated by overriding the `GetInterpolator()` method. This method receives the variable name and will return the `UxrVarInterpolator` to use for interpolation. New custom interpolators can be used by deriving from the `UxrVarInterpolator` class.
Returning null from the method indicates the default interpolator for that type will be used.

```c#
// Create color interpolator that interpolates using step interpolation instead of linear interpolation.
private UxrColorInterpolator _colorStepInterpolator = new UxrColorInterpolator(0.0f, true);

protected override UxrVarInterpolator GetInterpolator(string varName)
{
	if (string.Equals(varName, nameof(myColorVar)))
	{
		return _colorStepInterpolator;
	}

	// Return default interpolator
	return null;
}
```

In the example above, the `myColorVar` color will use a custom interpolator that uses step interpolation instead of linear interpolation, meaning it will jump from one color to the next instead of gradually moving from one to the other.

For a `Transform`, each position, rotation, and scale component are internally serialized using separate variables. This approach offers the advantage that if only one component changes, the others do not require serialization. In this case, the following methods can be used to check the name of a `Transform` component variable: `IsTransformPositionVarName()`, `IsTransformRotationVarName()`, and `IsTransformScaleVarName()`:

```c#
// Create linear interpolators with additional smoothing:
private UxrVector3Interpolator    _posSmoothDampInterpolator = new UxrVector3Interpolator(0.2f, false);
private UxrQuaternionInterpolator _rotSmoothDampInterpolator = new UxrQuaternionInterpolator(0.2f, false);
private UxrVector3Interpolator    _sclSmoothDampInterpolator = new UxrVector3Interpolator(0.2f, false);

protected override UxrVarInterpolator GetInterpolator(string varName)
{
	if (IsTransformPositionVarName(varName, UxrStateSaveImplementer.SelfTransformVarName))
	{
		return _posSmoothDampInterpolator;
	}
	if (IsTransformRotationVarName(varName, UxrStateSaveImplementer.SelfTransformVarName))
	{
		return _rotSmoothDampInterpolator;
	}
	if (IsTransformScaleVarName(varName, UxrStateSaveImplementer.SelfTransformVarName))
	{
		return _sclSmoothDampInterpolator;
	}

	// Return default interpolator
	return null;
}
```

This will use custom interpolation for the component's `Transform` so that the position, rotation and scale are linearly interpolated using an additional smooth processing to filter out jittering.

In `Transform` variables serialized for other objects using `SerializeStateTransform()`, the name used for the `Transform` will be required instead of `UxrStateSaveImplementer.SelfTransformVarName`.

## Monitoring state serialization

To monitor state serialization, for debugging or other purposes, it is possible to subscribe to the following static events in `UxrStateSaveImplementer`:

- `StateSerializing`: Raised when a state is about to be serialized using `StateSerialize()`. The `sender` is the `IUxrStateSave` to be serialized. The event parameters is a `UxrStateSaveEventArgs` object containing all relevant parameters.
- `StateSerialized`: Same as `StateSerializing` but raised right after the state was serialized.
- `VarSerializing`: Raised when a state variable is about to be serialized inside `StateSerialize()`. The `sender` is the `IUxrStateSave` to be serialized. The event parameters is a `UxrStateSaveEventArgs` object containing all relevant parameters.
- `StateSerialized`: Same as `VarSerializing` but raised right after the state variable was serialized.

Similarly, it is possible to monitor a single component instead of all components using the `StateSaveMonitor` property in any component with the `IUxrStateSave` interface. This monitor has the same events as `UxrStateSaveImplementer` but for each component.

The `UxrStateSaveEventArgs` contains the following properties:
-  `Serializer`: Contains the serializer being used, which is useful to know if it's reading the state or writing it.
- `Level`: The state save level requested to `StateSerialize()`.
- `Options`: The options sent to `StateSerialize()`.
- `VarName`: The variable name. Only in variable serialization events.
- `OldValue`: The variable before serialization. Only in variable serialization events.
- `Value`: The variable after serialization. Only in variable serialization events.

## Low level state serialization details

Here are some additional details that may help get a better picture of how state serialization is implemented at a lower level.

Serialization details:

- A `UxrBinarySerializer` is used for serialization and deserialization. This serializer uses  `BinaryReader` and `BinaryWriter` extensions found in `BinaryReaderExt` and `BinaryWriterExt`.
- The binary serializer ultimately will call  `BinaryReaderExt.ReadAnyVar()` when reading and `BinaryWriterExt.WriteAnyVar()` when writing to handle variables of any supported type.
- A state variable will be serialized as a binary stream consisting of:
	- 1 byte storing a boolean telling whether the variable is present or not. If it's zero it means that the variable doesn't have any changes and the next part will be skipped.
	- 1 byte storing the variable type from a list of supported types (`UxrVarType` enum).
	- The variable itself serialized in binary form. `int` and `long` types will use variable length encoding to only use the required number of bytes to store the value.
- A full component will be serialized as a binary stream consisting of:
	- 16 bytes for the unique id, a `Guid` serialized in binary format.
	- 1-4 bytes for the component's serialization version (`int` using variable length encoding). 1 byte for values <= 127.
	- A sequence of all variables.

Some technical details about `SerializeStateValue()`'s automatic detection of state variables changes:

- To keep a copy of each variable at the beginning, and the last time a variable was serialized, the `ObjectExt.DeepCopy()` extension method is used. It has support for value types and reference types including collections, and will use `ICloneable` as fallback. If there is no `ICloneable` interface implemented, it will use a binary serialization copy.
- To check if a state variable remains unchanged, `SerializeStateValue()` will use the stored copies to compare them to the current value using the `ObjectExt.ValuesEqual()` extension method. This method has support for value types and reference types including collections. In addition, it will use floating point comparisons using a precision threshold to account for floating point imprecisions. The precision threshold is set by `UxrConstants.Math.DefaultPrecisionThreshold`, which is `0.0001f` by default.
- Floating point comparisons using the precision threshold will be applied to `float`, `Vector2`, `Vector3`, `Vector4` and `Quaternion` types.