---
title: "Core Components Diagram"
---

# Core Components Diagram

## Core Components

UltimateXR contains many components, all deriving from one of the **core components** in this diagram:

![](/docs/programming-guide/media/ClassDiagram.png)

## UxrComponent Overview

The primary component class in UltimateXR is `UxrComponent`, which inherits from Unity's `MonoBehaviour`. All components within UltimateXR ultimately derive from `UxrComponent`.

`UxrComponent` provides essential functionality used throughout the framework:

- Each component is assigned a unique identifier during its whole life cycle.
- Property changes and method calls can be synchronized automatically in multiplayer sessions. 
- Component changes can also be automatically recorded in replays.
- The runtime state of all components in the scene can be output to save files.
- All active components, or from a specific type, can be enumerated from any point in the application.

Additionally, `UxrComponent` offers quick access to commonly used utilities to simplify development.

{{% callout tip %}}
Users can incorporate this functionality into their own components by inheriting from any of the core components rather than `MonoBehaviour`.
{{% /callout %}}

## Core Components Overview

### `UxrComponent`
`UxrComponent` is the base class for all components in the framework.

### `UxrComponent<T>`
`UxrComponent<T>` is a typed version of `UxrComponent` with additional functionality to enumerate all component instances of type `T` and operate on them. For instance, `UxrAvatar` is defined as `class UxrAvatar : UxrComponent<UxrAvatar>`.

### `UxrComponent<TP, TC>`
`UxrComponent<TP, TC>` is a typed version of `UxrComponent` used for components of type `TC` that are found in a hierarchy where a component of type `TP` is the root.  For instance, `UxrButton3D` is defined as `class UxrButton3D : UxrComponent<Canvas, UxrButton3D>`.

### `UxrAvatarComponent<T>`
`UxrAvatarComponent<T>` is an `UxrComponent` of type `T` that can be found in a hierarchy under an `UxrAvatar`. For instance, `UxrFingerTip` is defined as `class UxrFingerTip : UxrAvatarComponent<UxrFingerTip>`.

### `UxrGrabbableObjectComponent<T>`
`UxrGrabbableObjectComponent<T>` is an `UxrComponent` of type `T` that has an `UxrGrabbableObject` in the same `GameObject`. For instance, `UxrWeapon` is defined as `class UxrWeapon : UxrGrabbableObjectComponent<UxrWeapon>`.

### `UxrAbstractSingleton<T>`
`UxrAbstractSingleton<T>` is a base class to build singletons for a type `T` that can be abstract. Abstract classes are used when the singleton being created is itself a base abstract class.

### `UxrSingleton<T>`
`UxrSingleton<T>` is a singleton component for a type `T`. All singletons in UltimateXR derive from `UxrSingleton<T>`. For instance, the `UxrGrabManager` is defined as `class UxrGrabManager : UxrSingleton<UxrGrabManager>`.


Let's start off by taking a closer look at `UxrComponent`.