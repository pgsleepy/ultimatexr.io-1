---
title: "Other Manipulation Components"
---

# Other Manipulation Components

## Introduction

In addition to the core manipulation components (`UxrGrabber`, `UxrGrabbableObject`, `UxrGrabbableObjectAnchor`, and `UxrGrabManager`), UltimateXR provides several helper components that extend and simplify common manipulation tasks. These components are designed to work alongside the core system, adding functionality like automatic object return, slide-in behavior, alignment on release, and more.

## UxrGrabbableObjectComponent

`UxrGrabbableObjectComponent<T>` is a generic base class for creating components that belong to a GameObject with a `UxrGrabbableObject` (or any of its parents). It simplifies the handling of manipulation events by allowing you to override methods instead of manually subscribing and unsubscribing to events.

For a detailed guide, refer to the [UxrGrabbableObjectComponent Programming Guide](/docs/programming-guide/manipulation/uxrgrabbableobjectcomponent).

### Key Features

- **Automatic event wiring**: The component automatically subscribes to all `UxrGrabbableObject` events on enable and unsubscribes on disable.
- **Method overriding**: Instead of subscribing to events, simply override methods like `OnObjectGrabbed()`, `OnObjectReleased()`, `OnObjectPlaced()`, and more.
- **Constraint events**: Override `OnObjectConstraintsApplying()`, `OnObjectConstraintsApplied()`, and `OnObjectConstraintsFinished()` to implement custom constraint logic.
- **Easy access**: The `GrabbableObject` property provides direct access to the associated `UxrGrabbableObject`.
- **Grab state**: The `IsBeingGrabbed` property provides a quick check for whether the object is currently being grabbed.

## UxrGrabPointShape

`UxrGrabPointShape` is an abstract base class used to extend grab points on `UxrGrabbableObject` entities to support more complex shapes like cylinders, boxes, and spheres. This allows objects to be grabbed from any point along a shape, rather than just a single defined spot.

For a detailed guide, refer to the [UxrGrabPointShape Programming Guide](/docs/programming-guide/manipulation/uxrgrabpointshape).

## Helper Components

UltimateXR includes several ready-to-use helper components in the `UltimateXR.Manipulation.Helpers` namespace. These components derive from `UxrGrabbableObjectComponent` and provide common manipulation behaviors out of the box.

### UxrReturnGrabbableObject

Automatically returns a `UxrGrabbableObject` to its original position after it has been released. This is useful for objects that should always go back to a specific location, such as tools on a workbench or items in a display.

### UxrRestoreOnRelease

Restores a `UxrGrabbableObject` to its initial state when released. This can be used to reset objects that should return to their starting configuration after being manipulated.

### UxrAutoSlideInObject / UxrAutoSlideInAnchor

These components work together to create slide-in behavior, where a `UxrGrabbableObject` automatically slides into an anchor when released near it. `UxrAutoSlideInObject` is added to the grabbable object and `UxrAutoSlideInAnchor` is added to the anchor.

### UxrAlignOnRelease

Aligns a `UxrGrabbableObject` to a specific orientation when it is released. This is useful for objects that should snap to a particular rotation after being let go.

### UxrDependentGrabbable

Manages dependencies between `UxrGrabbableObject` entities. This component can be used to create relationships where grabbing or releasing one object affects another.

### UxrGrabbableResizable

Allows a `UxrGrabbableObject` to be resized during manipulation. This enables interactions where users can scale objects by grabbing them with two hands and moving them apart or together.

### UxrEnableComponentWhileGrabbable

Enables or disables a specified component while the `UxrGrabbableObject` is in a grabbable state. This can be used to toggle behaviors or visual effects based on whether the object can currently be grabbed.

## Haptic Feedback Components

UltimateXR also provides components in the `UltimateXR.Haptics.Helpers` namespace that integrate with the manipulation system:

### UxrManipulationHapticFeedback

Provides haptic feedback during manipulation interactions. This component can be configured to send haptic signals when objects are grabbed, released, or placed.

### UxrHapticOnImpact

Triggers haptic feedback when a grabbed object collides with other objects in the scene. This enhances the sense of physical interaction by providing tactile feedback on impact.
