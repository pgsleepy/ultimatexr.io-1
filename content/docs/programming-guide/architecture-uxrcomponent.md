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

A commonly used functionality in `UxrComponent` is the possibility to enumerate all components from anywhere in the code:

```c#
foreach (UxrComponent component in UxrComponent.AllComponents)
{
	Debug.Log($"Hi, I'm an UxrComponent of type {component.GetType()} on object {component.name}");
}

```

In the code above, thanks to the static `AllComponents` property, it is possible to access to all components in the scene that inherit from `UxrComponent`.
To iterate over the enabled components only, the property `EnabledComponents` can be used instead.

In the previous [Class Diagram](/docs/programming-guide/architecture-class-diagram) we also showed two typed variations of `UxrComponent`: `UxrComponent<T>` and `UxrComponent<TP, TC>`.

`UxrComponent<T>` allows iteration through all components of a specific type. For example, using `UxrAvatar` (which is defined as `class UxrAvatar : UxrComponent<UxrAvatar>`):

```c#
foreach (UxrAvatar avatar in UxrAvatar.AllComponents)
{
	Debug.Log($"Hi, I'm an UxrAvatar component on object {avatar.name}");
}

```

In `UxrComponent<T>`, `AllComponents` and `EnabledComponents` are redefined to return only the components of the specific type.

Similarly, for the `UxrComponent<TP, TC>` variant, it is possible to access the components of type `TC` in a specific parent `TP`.
For instance, to iterate over the `UxrFingerTip` components from an `UxrAvatar`:

```c#

UxrAvatar avatar = ...

foreach (UxrFingerTip fingerTip in UxrFingerTip.GetParentChildren(avatar))
{
	Debug.Log($"Hi, I'm a UxrFingerTip component from avatar {avatar.name}");
}

```

## `UxrComponent` Variations

`UxrComponent` has two typed variations:
- `UxrComponent<T>`
- `UxrComponent<TP, TC>`



## Relevant Properties

## Relevant Events

## Relevant Methods