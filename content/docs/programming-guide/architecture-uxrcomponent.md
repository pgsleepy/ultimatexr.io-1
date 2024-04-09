---
title: "UxrComponent"
---

## `UxrComponent`

All components in UltimateXR originate from one of the core components shown in the [Class Diagram](/docs/programming-guide/architecture-class-diagram), all of which inherit from `UxrComponent`.

Having `UxrComponent` as the root class for all components in the framework helps consolidating core functionalities like unique identifiers, synchronization mechanisms, and state management. It also simplifies future expansion by providing a common source where new functionality can be added.

We also encourage users to inherit from `UxrComponent` instead of `MonoBehaviour` to benefit from all the capabilities it provides.

{{% callout info %}}
When deriving from `UxrComponent` is not possible, due to multiple inheritance, we also provide a way to implement the required interfaces.
Consult the [Custom Parent Class guide](/docs/programming-guide/state-serialization-and-synchronization-custom-parent-class) for the implementation details.
{{% /callout %}}

## `UxrComponent` Variations

## Component Enumeration

## Relevant Properties

## Relevant Events

## Relevant Methods