---
title: "Manipulation Programming Guide"
---

# Overview

The **manipulation system** in UltimateXR enables avatars to interact with objects in VR environments. It provides a variety of tools and components to manage how avatars can grab, move, rotate, and manipulate objects in a realistic and natural way.

This guide offers a programmatic perspective. For detailed instructions on setting up components in Unity, please refer to the [Manipulation User Guide](/docs/manipulation/overview). You can also check the [Manipulation API Reference](/api/N_UltimateXR_Manipulation).

## Key Components

### UxrGrabber

The `UxrGrabber` component is added to the avatar's hands, allowing them to grab objects in the scene.

### UxrGrabbableObject

Objects that can be manipulated have the `UxrGrabbableObject` component. This defines how an object behaves when grabbed, including setting movement constraints, rotation limits, and snap points for alignment when interacting with avatars.

### UxrGrabbableObjectAnchor

The `UxrGrabbableObjectAnchor` component is added to specific GameObjects where grabbables can be snapped to.

### UxrGrabManager

The `UxrGrabManager` component is a singleton in the scene that manages all grab interactions between avatars and grabbable objects. It provides functionality to create manipulations programmatically and includes events to respond to specific interaction changes.
