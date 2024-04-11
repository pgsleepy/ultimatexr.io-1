---
title: "UxrComponent"
---

# `UxrComponent`

All components in UltimateXR originate from one of the core components shown in the [Class Diagram](/docs/programming-guide/architecture-class-diagram), all of which inherit from `UxrComponent`.

Having `UxrComponent` as the root class for all components in the framework helps consolidating core functionalities like unique identifiers, synchronization mechanisms, and state management. It also simplifies future expansion by providing a common source where new functionality can be added.

We also encourage users to inherit from `UxrComponent`, or any of the core components, instead of `MonoBehaviour` to benefit from all the capabilities it provides.

{{% callout info %}}
When deriving from `UxrComponent` is not possible, due to multiple inheritance, we also provide a way to implement the required interfaces.
Consult the [Custom Parent Class guide](/docs/programming-guide/state-serialization-and-synchronization-custom-parent-class) for the implementation details.
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

In the previous [Class Diagram](/docs/programming-guide/architecture-class-diagram) we also showed two typed variations of `UxrComponent`: `UxrComponent<T>` and `UxrComponent<TP, TC>`.

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

### `UxrAbstractSingleton<T>` and `UxrSingleton<T>`

These will be covered in the [Singletons](docs/programming-guide/architecture-singletons) section.

## Relevant Properties

## Relevant Events

## Relevant Methods