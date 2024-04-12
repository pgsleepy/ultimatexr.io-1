---
title: "State serialization and synchronization: StateSync"
---

# State serialization and synchronization: StateSync

## Introduction

**StateSync** within UltimateXR refers a component's ability to synchronize various actions, including property changes and method calls. These actions are replicated across other instances of the component, such as to the other clients during a networking session or to itself during replay playback.

Any component that implements the `IUxrStateSync` interface, such as those derived from `UxrComponent`, automatically acquires this functionality.

In cases where components are already derived from another class that cannot be modified, an implementer helper is available.
Consult the [Custom Parent Class guide](/docs/programming-guide/state-serialization-and-synchronization-custom-parent-class) for the implementation details.

**StateSync** and **StateSave** complement each other to facilitate the high-level functionalities discussed in other sections. **StateSync** assumes a pivotal role in:

-   **Multiplayer**: Facilitating synchronization among clients by propagating property changes or method calls similar to Remote Procedure Calls (RPCs). This synchronization is written using **platform-agnostic** code and will work on any multiplayer platform supported by UltimateXR.
-   **Replays**: Capturing all **StateSync** events during recording and replicating them during playback at their respective timestamps.

{{% callout tip %}}
StateSync can also be valuable in implementing analytics by intercepting relevant events within the appropriate components.
{{% /callout %}}

## Synchronization statements

**StateSync** support is incorporated by adding **synchronization statements** to identify the parts in the code that will be replicated in other instances. These synchronization statements **do not modify existing functionality** but automatically activate **StateSync** support when necessary.

 Let's go back to the flashlight example of the introduction page:

```c#
public Flashlight : UxrComponent
{
	// Inspector light reference.
	[SerializeField] private Light _light;

	// Expose color property with StateSync support.
	public Color LightColor
	{
		get => _light.color;
		set
		{
			BeginSync();
			_light.color = value;
			// Notify of new property value.
			EndSyncProperty(value);
		}
	}

	// Expose SetEnabled method call with StateSync support.
	public void SetEnabled(bool enabled, Color color)
	{
		BeginSync();
		_light.enabled = enabled;
		LightColor = color;
		// Notify of a method call with parameters.
		EndSyncMethod(new object[] { enabled, color });
	}
}
```

This flashlight component, derived from `UxrComponent`, features a public `LightColor` property for accessing and modifying the light color. Additionally, it provides a `SetEnabled()` method to toggle the light's activation while simultaneously adjusting its color. Both functionalities are encapsulated within synchronization statements. Whenever the `LightColor` property is changed or the `SetEnabled()` method is invoked, these changes will be **automatically** propagated to connected clients or recorded in a replay file if applicable. **It's that simple**.

Using platform agnostic statements helps keeping the code clean, readable and independent of any particular SDK.
In the case of multiplayer, switching from one SDK to another will not require any modifications in this code.

In the subsequent sections, we will describe the following supported synchronization statements:
- `BeginSync()`
- `EndSyncProperty()`
- `EndSyncMethod()`
- `EndSyncState()`
- `CancelSync()`

## Synchronizing properties

Properties are synchronized using `BeginSync()` and `EndSyncProperty()` within the property's setter.
For instance, let's consider a gun component with various attributes, including a `Rounds` property that controls the remaining rounds available for firing:

```c#
public int Rounds
{
	get => _rounds;
	set
	{
		BeginSync();
		_rounds = value;
		EndSyncProperty(value);
	}
}
```

This code ensures that the `Rounds` property will be synchronized among all other instances of the same gun component in other players in a multiplayer session. It will also be recorded in a replay.
In a standard single-user mode without active replay recording, these statements will work identically.

The `EndSyncProperty()` method requires the new property value as only parameter. Passing another value would change 
the ammo that the multiplayer clients or replay will receive.

Internally, the framework is be able to store the property and the component that is synchronized. A detailed examination of this process will be provided in the [Implementation Details](/docs/programming-guide/state-serialization-and-synchronization-statesync#implementation-details) section.

UltimateXR is able to synchronize all [serializable](/docs/programming-guide/other-features-serialization#supported-types) property types. New types can be supported by [implementing](/docs/programming-guide/other-features-serialization#implementing-iuxrserializable) the `IUxrSerializable` interface.

Lastly, it's worth noting that unnecessary synchronization can be avoided by checking if the value is actually being changed:
```c#
public int Rounds
{
	get => _rounds;
	set
	{
		if (_rounds == value)
		{
			return;
		}
		
		BeginSync();
		_rounds = value;
		EndSyncProperty(value);
	}
}
```

## Synchronizing methods

Similar to properties, method calls can be synchronized using `BeginSync()` and `EndSyncMethod()`.
Let's continue with the previous gun component and implement a `Shoot()` method that will shoot a round, with **StateSync** support:
```c#
public void Shoot(Vector3 startPosition, Vector3 direction, float speed, int damage)
{
	if (Rounds == 0)
	{
		return;
	}
	
	BeginSync();
	// Calls an internal method that will take care of registering a new projectile.
	StartProjectile(startPosition, direction, speed, damage);
	// Decrease rounds available.
	Rounds--;
	EndSyncMethod(new object[] { startPosition, direction, speed, damage });
}
```

In this case, the corresponding end statement is `EndSyncMethod()`. It requires an object array passing the same parameters the method was invoked with. These parameters will be used to replicate the call in other clients and register it in a replay recording.
If the method is parameterless, it can be simply invoked using `EndSyncMethod()` without any arguments.

UltimateXR is able to synchronize all [serializable](/docs/programming-guide/other-features-serialization#supported-types) method parameter types. New types can be supported by [implementing](/docs/programming-guide/other-features-serialization#implementing-iuxrserializable) the `IUxrSerializable` interface.

## Synchronization and flow control

Often times a method or a property setter will include flow control statements that will require some attention when adding synchronization. Leaving a block open, by missing a `BeginSync()` or `EndSync()`, will result in synchronization events not being propagated correctly. They can be identified on the console windows as these error messages:

```
[UltimateXR.Core] BeginSync/EndSync mismatch when calling BeginSync. Did you forget an EndSync call? Component: the_component.
```

```
[UltimateXR.Core] BeginSync/EndSync mismatch when calling EndSync. Did you forget a BeginSync call? State call depth is < 1. Component: the_component.
```

Most of these errors come from flow statements leaving a synchronization block open. For example, the following `return` statement will not close the `BeginSync()`.

```c#
public void SetEnabled(bool enabled, Color color)
{
	BeginSync();
	if(_light == null)
	{
		return;
	}
	_light.enabled = enabled;
	LightColor = color;
	EndSyncMethod(new object[] { enabled, color });
}
```

To solve this, we can use `CancelSync()`, which helps supporting flow control and keep synchronization blocks correctly closed:

```c#
public void SetEnabled(bool enabled, Color color)
{
	BeginSync();
	if(_light == null)
	{
		CancelSync();
		return;
	}
	_light.enabled = enabled;
	LightColor = color;
	EndSyncMethod(new object[] { enabled, color });
}
```

This is also a valid workaround. The method will first ensure the light is not null before synchronization:

```c#
public void SetEnabled(bool enabled, Color color)
{
	if(_light == null)
	{
		return;
	}

	BeginSync();
	_light.enabled = enabled;
	LightColor = color;
	EndSyncMethod(new object[] { enabled, color });
}
```

## Implementation details

Up to this point we have seen **what** the StateSync functionality is able to do. In order to better understand **how** it is achieved, we will explore the internal process that happens when synchronization statements are used.

{{% callout tip %}}
Although recommended, reading the implementation details is not mandatory.
{{% /callout %}}

Analyzing the `IUxrStateSync` interface, we find the two key elements that make this functionality possible:

```c#
event EventHandler<UxrSyncEventArgs> StateChanged;

void SyncState(UxrSyncEventArgs e);
```

`StateChanged` is an event triggered whenever a state in the component is changed. Synchronized property changes or method calls will trigger the `StateChanged` event. The change is described by a `UxrStateSyncEventArgs` object.

`SyncState()` is a method that can execute the change described by a `UxrStateSyncEventArgs` object.

These two elements provide an extremely simple yet powerful way to keep components in sync: one notifies about state changes, the other mirrors them.

Using synchronization, the framework will listen for change events on all component in the scene. These changes can be the property changes or method calls seen earlier. Whenever a change is notified, the framework will intercept the event and send it to any of the systems that use it. If a network session is taking place, the networking system will serialize the `UxrStateSyncEventArgs` object and send it to all clients where it will be mirrored using `SyncState()`. In case there is a replay being recorded, the serialized `UxrStateSyncEventArgs` object will be saved in the timeline together with its timestamp.

The unique id functionality described in earlier sections makes it possible to retrieve the target component in remote clients or during replay playback. This target component will invoke the `SyncState()` call to mirror the same code as the source component.

### Raising `StateChanged`

Synchronized property changes and method calls will raise the `StateChanged` event. Internally, the `EndSyncProperty()` and `EndSyncMethod()` implementations will create a `UxrStateSyncEventArgs` object containing the necessary information and raise the event. Property changes will use a specialized `UxrPropertyChangedSyncEventArgs` object, while method calls will use `UxrMethodInvokedSyncEventArgs`.

For a property change, this object will store the component reference, as a unique id, the property name, as a string, and the new value.
For a method call, it will store the component reference, as a unique id, the method name, as a string, and all the parameters.
Both `EndSyncProperty()` and `EndSyncMethod()` use a `[CallerMemberName]` attribute to avoid requiring passing the property name or method name and register it automatically instead.

When a `UxrSyncEventArgs` object is intercepted, besides inspecting it, it can be serialized to a `byte[]` array  using the `SerializeEventBinary()` method. The object is also debug-friendly by having a descriptive  `ToString()` implementation.

### Mirroring using `SyncState()`

The other side of the synchronization is the `SyncState)` method. `SyncState)` takes a `UxrStateSyncEventArgs` object and replicates the original code, either a property change or a method call.
In a multiplayer session, these objects are serialized to a `byte[]` array using the `SerializeEventBinary()` method in `UxrStateSyncEventArgs`. A static `DeserializeEventBinary()` method is also available to deserialize a `byte[]` to the target `IUxrStateSync` component and the `UxrStateSyncEventArgs` object. Once deserialized, the original code can be mirrored using:
```c#
stateSync.SyncState(stateSyncEventArgs);
```

Internally, the implementation will use reflection on the component to modify the property or invoke the method, depending on the type of stateSyncEventArgs.

### `UxrManager` and state change monitoring

`UxrManager` has a registry of all `IUxrStateSync` components and provides access to a single event that will be raised when **any** component in the scene raises the `StateChanged` event. This is the core feature used by the networking system, to track components that require remote synchronization. The replay system uses it to record the changes in a timeline. It is also available to the user to implement new functionality, such as analytics, where the system can monitor for specific events.

**Example 1**: Log all events
```c#
protected override void OnEnable()
{
	base.OnEnable();
	// Subscribe to event
	UxrManager.ComponentStateChanged += UxrManager_ComponentStateChanged;
}

protected override void OnDisable()
{
	base.OnDisable();
	// Unsubscribe from event
	UxrManager.ComponentStateChanged -= UxrManager_ComponentStateChanged;
}

private void UxrManager_ComponentStateChanged(IUxrStateSync component, UxrSyncEventArgs eventArgs)
{
	// Use eventArgs formatted ToString() capability.
	Debug.Log($"Component {component.Component.name} (id {component.UniqueId}): {eventArgs}");
}
```

**Example 2**: Serialize all events, deserialize and mirror them
```c#
// Use the same OnEnable/OnDisable here

private void UxrManager_ComponentStateChanged(IUxrStateSync component, UxrSyncEventArgs eventArgs)
{
	// Serialize the event. Store the byte array somewhere or send it over the network.
	byte[] serializedEvent = eventArgs.SerializeEventBinary(component);
}

// On another device or session, get the byte array and mirror the code
UxrManager.Instance.ExecuteStateSyncEvent(serializedEvent);
```

This is how multiplayer synchronization is implemented internally:

![](/docs/programming-guide/media/StateSyncDiagram.png)

## Nested synchronization

A question remains after some of the examples given at the beginning. Let's get back to the synchronized `Shoot()` method in the gun component. We have removed some parts for clarity:
```c#
public int Rounds
{
	get => _rounds;
	set
	{
		BeginSync();
		_rounds = value;
		EndSyncProperty(value);
	}
}

public void Shoot(Vector3 startPosition, Vector3 direction, float speed, int damage)
{
	BeginSync();
	Rounds--;
	EndSyncMethod(new object[] { startPosition, direction, speed, damage });
}
```
The `Shoot()` method is synchronized and so is the `Rounds` property. If `Shoot()` is called, how are the nested synchronized blocks treated? The answer is the main reason why `BeginSync()` exists.

We know from the previous section that `UxrManager` raises `ComponentStateChanged` events. These events are picked up by other systems and used in different ways. Given an initial `Rounds` value of 5, a `Shoot()` call would in theory generate the following events, in order:
1. Property changed event: `Rounds` = 4, by the `EndSyncProperty()` in the `Rounds` setter.
2. Method invoked event: `Shoot()`, by the `EndSyncMethod()`.

If we execute these two events in sequence in a multiplayer session, for example, the end result would be a `Rounds` value of 3 on all other clients, which is incorrect. It will be assigned 4 by the property changed event, and it will be decremented again by the method invoked event right after.

The answer is that nested synchronization events do not need to be processed, they are redundant. If the `Shoot()` method already decrements the `Rounds` property, the property itself doesn't need to be synchronized. **Only the top-level synchronization statement should be synchronized**, because as long as the top level action gets replicated, the nested actions will execute too.

Going back to `UxrManager`, **the `ComponentStateChanged` event will only be raised for top level synchronization calls**. Nested synchronization statements will not generate any events. This is the default behavior that can be controlled using the `UseTopLevelStateChangesOnly` property in `UxrManager`.

The main role of `BeginSync()` is to keep track of nesting by incrementing an internal counter that is decremented when `EndSync()` is called. The `ComponentStateChanged` events in `UxrManager` will only be raised when the depth is 1.

Another important consideration is that events replicated through `UxrManager.Instance.ExecuteStateSyncEvent()` will not raise `ComponentStateChanged` events themselves to prevent infinite loops. Within `ExecuteStateSyncEvent` all BeginSync/EndSync statements will be ignored. This prevents multiplayer clients retransmitting the events they have received, for example.

## `BeginSync()` parameters.

`BeginSync()` is invoked commonly without any parameter, however, it receives `UxrStateSyncOptions` flags which are set to `UxrStateSyncOptions.Default` by default. `Default` is defined as `Network | Replay`, which means that by default all synchronization statements will be used in multiplayer sessions and replays.

The following flags are available:

**`Network`**: Specifies the event should be synchronized over the network. Removing this flag can help save bandwidth on events that do not need network synchronization. For instance, a `Transform` update might not be needed in a networking scenario because the `Transform` is already being synchronized using a native `NetworkTransform` component more efficiently. In replays, however, where the networking component is not used, the transform update will still be required.

**`Replay`**: Specifies the event should be saved in replays. For instance, during multiplayer sessions, `UxrGrabbableObject` can use a coroutine to synchronizes grabbable objects with rigidbodies so that the position/rotation and speed keep in sync in all devices at regular intervals. In replays, the position and rotation of grabbable objects are already sampled thanks to **StateSave** functionality, so there is no need to save these events.

**`GenerateNewFrame`**: Forces to output a new sampling frame at the end of the Unity frame when recording a replay. This can be used to avoid interpolation errors when a certain event affects how values are interpolated.
For instance, re-parenting an object between two frames will create a jump if the position is recorded in local space. Forcing to output a new frame will avoid this.

## Synchronization error messages