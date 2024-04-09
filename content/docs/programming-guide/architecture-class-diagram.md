---
title: "Class Diagram"
---

## Core Components

![](/docs/programming-guide/media/ClassDiagram.png)

## Overview

The primary component class in UltimateXR is `UxrComponent`, which inherits from Unity's `MonoBehaviour`. All components within UltimateXR ultimately derive from `UxrComponent`.

`UxrComponent` provides essential functionality used throughout the framework:

- Each component is assigned a unique identifier during its whole life cycle.
- Property changes and method calls can be synchronized automatically in multiplayer sessions. 
- Component changes can also be automatically recorded in replays.
- The runtime state of all components in the scene can be output to save files.
- All active components, or from a specific type, can be enumerated from any point in the application.

Additionally, `UxrComponent` offers quick access to commonly used utilities to simplify development.

{{% callout tip %}}
Users can incorporate this functionality into their own components by inheriting from `UxrComponent` rather than `MonoBehaviour`.
{{% /callout %}}

Let's start off by taking a closer look at `UxrComponent`.