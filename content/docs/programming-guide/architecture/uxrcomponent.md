---
title: "UxrComponent"
---

# `UxrComponent`

## Common parent

All components in UltimateXR originate from one of the core components shown in the [Class Diagram](/docs/programming-guide/architecture-class-diagram), all of which inherit from `UxrComponent`.

Having `UxrComponent` as a common parent for all components in the framework helps consolidating core functionalities like unique identifiers, synchronization mechanisms, and state management. It also simplifies future expansion by providing a common source where new functionality can be added.

We also encourage users to inherit from `UxrComponent`, or any of the core components, instead of `MonoBehaviour` to benefit from all the capabilities it provides.

{{% callout info %}}
If inheriting directly from `UxrComponent` is not possible, as C# does not support multiple inheritance, we offer an alternative method to implement the necessary interfaces.
Please refer to the [Custom Parent Class guide](/docs/programming-guide/state-serialization-and-synchronization/custom-parent-class) for detailed implementation instructions.
{{% /callout %}}

## Inheriting from `UxrComponent`

Inheriting from `UxrComponent` or any other core component is straightforward. The following example creates a component class `MyComponent` that inherits from `UxrComponent<T>`.

```c#
public class MyComponent : UxrComponent<MyComponent>
{

}
```

Unity methods are implemented in `UxrComponent` as virtual protected. Implementing Unity methods like `Awake()` or `OnEnable()` requires overriding and calling the base implementation.
Continuing with the `MyComponent` class, the following code would be required to implement some of the Unity methods:

```c#
public class MyComponent : UxrComponent<MyComponent>
{
	protected override void Awake()
	{
		base.Awake();		
		// Add initialization code here
	}
	
	protected override void OnEnable()
	{
		base.OnEnable();		
		// Add OnEnable code here
	}
	
	protected override void OnDisable()
	{
		base.OnDisable();		
		// Add OnDisable code here
	}
	
	private void Update()
	{
		// Update doesn't have a parent implementation.
	}
}
```

In the above example we have overriden `Awake()`, `OnEnable()` and `OnDisable()` ensuring the base implementation is always called first. `Update()` is implemented normally since it does not have a base implementation.

{{% callout caution %}}
Omitting the call to the base implementations will result in core functionalities such as component enumeration or unique id not working correctly.
{{% /callout %}}


## Component Enumeration

### `UxrComponent`
A commonly used functionality in `UxrComponent` is the possibility to enumerate all components from anywhere in the code:

```c#
foreach (UxrComponent component in UxrComponent.AllComponents)
{
    Debug.Log($"Hello, I'm a UxrComponent of type {component.GetType()} on object {component.name}");
}
```

In the code above, through the static `AllComponents` property, it is possible to access all components in the scene that inherit from `UxrComponent`.
To iterate over the enabled components only, the property `EnabledComponents` can be used instead.

In the previous [Class Diagram](/docs/programming-guide/architecture-class-diagram) we also showed two typed variations of `UxrComponent`: `UxrComponent<T>` and `UxrComponent<TP, TC>`:

### `UxrComponent<T>`
In `UxrComponent<T>`, `AllComponents` and `EnabledComponents` are redefined to return only the components of the specific type `T`. For instance using `UxrAvatar`, which is defined as `class UxrAvatar : UxrComponent<UxrAvatar>`:

```c#
foreach (UxrAvatar avatar in UxrAvatar.EnabledComponents)
{
    Debug.Log($"Hello, I'm an enabled UxrAvatar component on object {avatar.name}");
}
```

### `UxrComponent<TP, TC>`
In case of the `UxrComponent<TP, TC>` variant, it is also possible to access the components of type `TC` in a specific parent `TP` by using the method `GetParentChildren()`.
For instance, to iterate over the `UxrButton3D` components in a `Canvas`:

```c#
foreach (UxrButton3D button in UxrButton3D.GetParentChildren(canvas, false))
{
    Debug.Log($"Hello, I'm a UxrButton3D component in canvas {canvas.name}");
}
```

`GetParentChildren()` will iterate over all registered `UxrButton3D` components that hang from a specific `Canvas`. The second parameter `includeDisabled` controls whether to include disabled components or from inactive GameObjects in the list.

### `UxrAvatarComponent<T>`
UxrAvatarComponent<T> is a specialization used for components that are found in an avatar. It has different enumeration methods to specifically find components hanging from an avatar:

```c#
UxrAvatar avatar = ...

foreach (UxrFingerTip fingerTip in UxrFingerTip.GetComponents(avatar, false))
{
    Debug.Log($"Hello, I'm a UxrFingerTip component from avatar {avatar.name}");
}
```

Here, `GetComponents()` returns all registered `UxrFingerTip` components that belong to a specific `UxrAvatar`. The second parameter `includeDisabled` controls whether to include disabled components or from inactive GameObjects in the list.

## Component Registration

Components inheriting from `UxrComponent` are automatically registered in the system during `Awake()`. This makes them visible to the enumeration methods described above.
Components are unregistered by `OnDestroy()`.

## Other `UxrComponent` specializations

Besides the `UxrComponent<T>` and `UxrComponent<TP, TC>` variations, there are other core components in the class diagram:

### `UxrGrabbableObjectComponent<T>`

This component is covered in the [Manipulation](/docs/programming-guide/manipulation/uxrgrabbableobjectcomponent) section.

### `UxrAbstractSingleton<T>` and `UxrSingleton<T>`

These singleton components will be covered in the [next](/docs/programming-guide/architecture/singletons) section.

## Properties

These properties are inherited by any component derived from `UxrComponent`:

### `UniqueId`

UltimateXR provides a unique identifier to components within instances or prefabs. This identifier, unless manually modified, remains constant throughout the application's runtime and across various sessions.
It is a key component used by other modules such as networking, save files and replays.

{{% callout info %}}
For a detailed view of the unique ID functionality, refer to the dedicated section on [unique ID](/docs/programming-guide/state-serialization-and-synchronization/unique-id) in the [state serialization and synchronization](/docs/programming-guide/state-serialization-and-synchronization/introduction) guide.
{{% /callout %}}

### `IsBeingDestroyed` and `IsApplicationQuitting`

When `Destroy()` is called on a component, Unity will keep the reference and destroy the component at the end of the frame. `IsBeingDestroyed` can be used to check whether `Destroy()` was called on the component.

`IsApplicationQuitting` tells whether `Application.Quit()` was called and the application is closing. It can be used to prevent access from objects in `OnDestroy()` that are no longer available.

## Transform utilities

Sometimes it can be convenient to know initial transform values. Instead of storing them in temporal variables, the following properties can be used on any type derived from `UxrComponent`:

- `InitialParent`: `Transform` with the initial parent of the GameObject where the component is located.
- `InitialLocalPosition`: `Vector3` with the initial `localPosition` value.
- `InitialLocalRotation`: `Quaternion` with the initial `localRotation` value.
- `InitialLocalEulerAngles`: `Vector3` with the initial `localEulerAngles` value.
- `InitialLocalScale`: `Vector3` with the initial `localScale` value.
- `InitialLossyScale`: `Vector3` with the initial `lossyScale` value.
- `InitialPosition`: `Vector3` with the initial `position` value.
- `InitialRotation`: `Quaternion` with the initial `rotation` value.
- `InitialEulerAngles`: `Vector3` with the initial `eulerAngles` value.
- `InitialRelativeMatrix`: `Matrix4x4` with the initial relative matrix. This matrix represents the transformation relative to the parent.
- `InitialLocalToWorldMatrix`: `Vector3` with the initial `localToWorldMatrix` value.

{{% callout info %}}
These properties are stored during `Awake()`.
They can be set to the current transform values at any time using the `RecomputeInitialTransformData()` method.
{{% /callout %}}

In addition to the properties, these methods will also provide useful transform functionality:

- `RecomputeInitialTransformData()`: Sets all the transform properties described above using the current transform values.
- `RestoreInitialLocalTransform()`: Restores the object's transform using the initial local data from above.
- `RestoreInitialWorldTransform()`: Restores the object's transform using the initial world data from above.

In certain scenarios, when manipulating object transforms, the following methods add the ability to temporarily store and recover transformation values. This ensures that objects can be reverted to their original state after undergoing various operations:
- `PushTransform()`: Stores the current position, rotation and localScale values in the world transform stack.
- `PushLocalTransform()`: Stores the current localPosition, localRotation and localScale values in the local transform stack.
- `PopTransform()`: Restores the position/rotation and localScale from the world transform stack.
- `PopLocalTransform()`: Restores the localPosition/localRotation and localScale from the local transform stack.

These methods operate on a stack-based system, allowing transformation values to be pushed onto the stack and then popped off the stack to restore the original values.
The use of a stack allows not only to store and retrieve values, but also make sure that it works with nesting.

```c#
// Store current position/rotation and localScale of the object
PushTransform();

// Operate on the transform

// Restore position/rotation and localScale of the object
PopTransform();
```

Whether to use the local or world version of the methods depends on whether the object is parented or not and if it's relevant to keep the local position/orientation of the object or the world position/orientation.

## Events

`UxrComponent` provides the following static events:

- `GlobalRegistering`: Raised right before a new component is about to be registered.
- `GlobalRegistered`: Raised right after a new component was registered.
- `GlobalUnregistering`: Raised right before a component is about to be unregistered.
- `GlobalUnregistered`: Raised right after a new component was unregistered.
- `GlobalEnabled`: Raised when the `OnEnable()` of a component is called.
- `GlobalDisabled`: Raised when the `OnDisable()` of a component is called.
- `GlobalIdChanging`: Raised right before the `UniqueId` of a component is about to change.
- `GlobalIdChanged`: Raised right after the `UniqueId` of a component changed.

## Interfaces

`UxrComponent` implements 3 core interfaces: `IUxrUnique`, `IUxrStateSave` and `IUxrStateSync`. They provide high level functionality used in modules such as multiplayer, state-saving and replays.

We present a brief overview of these methods below, with detailed technical documentation available in the [state serialization and synchronization](/docs/programming-guide/state-serialization-and-synchronization/introduction) guide

### IUxrUnique

The implementation of this interface provides unique id functionality.
Besides the `UniqueId` property described earlier, this interface also has the following methods:

{{% callout info %}}
This functionality is fully detailed in the [unique ID](/docs/programming-guide/state-serialization-and-synchronization/unique-id) section of the [state serialization and synchronization](/docs/programming-guide/state-serialization-and-synchronization/introduction) guide.
{{% /callout %}}

- `RegisterIfNecessary()`: Forces the component to be registered. This can be used in disabled components, where `Awake()` is not called until the object is enabled.
- `ChangeUniqueId()`: Changes the component unique id.
- `CombineUniqueId()`: Changes the component unique id by combining it with another id.

### IUxrStateSave

The implementation of this interface provides the ability for a component to serialize/deserialize its state to/from a byte stream.
It is used extensively by UltimateXR to provide high-level functionality such as multiplayer, save file and replay support.

{{% callout info %}}
This functionality is fully detailed in the [StateSave](/docs/programming-guide/state-serialization-and-synchronization/statesave) section of the [state serialization and synchronization](/docs/programming-guide/state-serialization-and-synchronization/introduction) guide.
{{% /callout %}}

#### IUxrStateSave Related Properties

- `StateSaveMonitor`: `UxrStateSaveMonitor` object, used for user debugging, with events raised whenever the state or variables of the component are being serialized or deserialized.
- `StateSerializationVersion`: Enables serialization versioning and backwards compatibility with older formats.
- `SerializationOrder`: Controls the order in which components are serialized.
- `SaveStateWhenDisabled`: Controls whether to serialize the component when it is disabled.
- `SerializeActiveAndEnabledState`: Controls whether to include the enabled and active states in the serialization.
- `TransformStateSaveSpace`: Controls the space the transform is serialized in, in components that serialize the transform.

#### IUxrStateSave Related Methods

- `RequiresTransformSerialization`: Returns whether the component should serialize its transform.
- `SerializeState`: Serializes the state of the component.
- `InterpolateState`: Interpolates the state of the component between begin and end variables.
- `GetInterpolator`: Returns a custom interpolator for a specific state variable.
- `SerializeStateValue`: Serializes a specific state variable.
- `SerializeStateTransform`: Serializes a transform.
- `InterpolateStateTransform`: Interpolates a transform.
- `IsTransformPositionVarName`: Checks whether a given variable name corresponds to the position value in a transform.
- `IsTransformRotationVarName`: Checks whether a given variable name corresponds to the rotation value in a transform.
- `IsTransformScaleVarName`: Checks whether a given variable name corresponds to the scale value in a transform.

### IUxrStateSync

The implementation of this interface provides the ability for a component to replicate actions such as property changes or method calls to other instances. These other instances can be the same component on another device, or on the same device but in another session.
It is used extensively by UltimateXR to provide high-level functionality such as multiplayer synchronization and replay support.

{{% callout info %}}
This functionality is fully detailed in the [StateSync](/docs/programming-guide/state-serialization-and-synchronization/statesync) section of the [state serialization and synchronization](/docs/programming-guide/state-serialization-and-synchronization/introduction) guide.
{{% /callout %}}

#### IUxrStateSave Events

- `StateChanged`: Raised right after a property or method in the component was called.

#### IUxrStateSave Related Methods

- `SyncState()`: Replicates a state change described by an object passed to the `StateChanged` event.
- `BeginSync`: Begins a synchronization block.
- `CancelSync`: Cancels a synchronization block.
- `EndSyncProperty`: Ends a synchronization block for a property change.
- `EndSyncMethod`: Ends a synchronization block for a method call.