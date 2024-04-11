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
Please refer to the [Custom Parent Class guide](/docs/programming-guide/state-serialization-and-synchronization-custom-parent-class) for detailed implementation instructions.
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

## Other `UxrComponent` specializations

Besides the `UxrComponent<T>` and `UxrComponent<TP, TC>` variations, there are other core components in the class diagram:

### `UxrGrabbableObjectComponent<T>`

This component is covered in the [Manipulation](/docs/programming-guide/manipulation-uxrgrabbableobjectcomponent) section.

### `UxrAbstractSingleton<T>` and `UxrSingleton<T>`

These singleton components will be covered in the [next](/docs/programming-guide/architecture-singletons) section.

## Relevant Properties

Besides all the enumeration properties, `UxrComponent` also offers additional useful functionality accessible through properties:

### `UniqueId`

UltimateXR provides a unique identifier to components within instances or prefabs. This identifier, unless manually modified, remains constant throughout the application's runtime and across various sessions.
It is a key component used by other modules such as networking, save files and replays.

{{% callout info %}}
For a detailed exploration of the unique ID functionality, refer to the dedicated section on [unique ID](/docs/programming-guide/state-serialization-and-synchronization-unique-id) in the [state serialization and synchronization](/docs/programming-guide/state-serialization-and-synchronization-introduction) guide.
{{% /callout %}}

### `IsBeingDestroyed` and `IsApplicationQuitting`

When `Destroy()` is called on a component, Unity will keep the reference and destroy the component at the end of the frame. `IsBeingDestroyed` can be used to check whether `Destroy()` was called on the component.

`IsApplicationQuitting` tells whether `Application.Quit()` was called and the application is closing. It can be used to prevent access from objects in `OnDestroy()` that are no longer available.

### Transform properties

Sometimes it can be convenient to know initial transform values. Instead of storing them in temporal variables, the following properties can be used on any type derived from `UxrComponent`:

- `InitialParent`
- `InitialLocalPosition`
- `InitialLocalRotation`
- `InitialLocalEulerAngles`
- `InitialLocalScale`
- `InitialLossyScale`
- `InitialPosition`
- `InitialRotation`
- `InitialEulerAngles`
- `InitialRelativeMatrix`
- `InitialLocalToWorldMatrix`

{{% callout info %}}
These properties are stored during `Awake()`.
They can be reset at any point using the `RecomputeInitialTransformData()` method.
{{% /callout %}}

### StateSaveMonitor

This property provides access to a `UxrStateSaveMonitor` object with events raised whenever the state of the object is being serialized or deserialized.

It can provide technical information to advanced users working with [state serialization](/docs/programming-guide/state-serialization-and-synchronization-statesave) functionality.

## Component Registration

Components inheriting from `UxrComponent` are automatically registered in the system by the base `Awake()` implementation. This makes them visible to the enumeration methods described above.
Components are unregistered once the base `OnDestroy()` is called.

## Relevant Events

### Static events

`UxrComponent` provides the following global events:

- `GlobalRegistering`: Raised right before a new component is about to be registered.
- `GlobalRegistered`: Raised right after a new component was registered.
- `GlobalUnregistering`: Raised right before a component is about to be unregistered.
- `GlobalUnregistered`: Raised right after a new component was unregistered.
- `GlobalEnabled`: Raised when the `OnEnable()` of a component is called.
- `GlobalDisabled`: Raised when the `OnDisable()` of a component is called.
- `GlobalIdChanging`: Raised right before the `UniqueId` of a component is about to change.
- `GlobalIdChanged`: Raised right after the `UniqueId` of a component changed.

### Events

`UxrComponent` provides the following events:

- `StateChanged`: Raised right after the state of the component changed. A full guide about state changes can be found in the [StateSave](/docs/programming-guide/state-serialization-and-synchronization-statesave) section.



## Relevant Methods