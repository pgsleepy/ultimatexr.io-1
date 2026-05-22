---
title: "Other Manipulation Components"
---

# Other Manipulation Components

## Introduction

In addition to the core manipulation components, UltimateXR provides several helper components that extend and simplify common manipulation tasks. These components are designed to work alongside the core system, adding functionality like automatic object return, slide-in behavior, alignment on release, and more.

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

Component that allows a `UxrGrabbableObject` object be grabbed only if another object is being grabbed. For instance, it can be added to a grenade pin to make sure the pin is never grabbed unless the grenade is being grabbed too. Otherwise the pin could be removed by mistake when trying to grab the grenade.

### UxrGrabbableResizable

Allows a `UxrGrabbableObject` to be resized using two-handed manipulation. This enables interactions where users can scale objects by grabbing them with two hands and moving them apart or together.

### UxrEnableComponentWhileGrabbable

Enables or disables a specified component while the `UxrGrabbableObject` is in a grabbable state. This can be used to toggle behaviors or visual effects based on whether the object can currently be grabbed.

## Haptic Feedback Components

UltimateXR also provides components in the `UltimateXR.Haptics.Helpers` namespace that integrate with the manipulation system:

### UxrManipulationHapticFeedback

Provides haptic feedback during manipulation interactions. This component can be configured to send haptic signals when objects are grabbed, released, or placed.

### UxrHapticOnImpact

Triggers haptic feedback when a grabbed object collides with other objects in the scene. This enhances the sense of physical interaction by providing tactile feedback on impact.
