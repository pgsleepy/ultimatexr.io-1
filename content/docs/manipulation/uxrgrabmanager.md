---
title: "UxrGrabManager"
---

# UxrGrabManager

The `UxrGrabManager` is the component that drives the entire manipulation system each frame. It keeps track of all `UxrGrabber`, `UxrGrabbableObject`, and `UxrGrabbableObjectAnchor` components in the scene, processes proximity checks, triggers grabs and releases, applies object constraints, and handles placement on anchors.

You do not need to add `UxrGrabManager` to your scene. It is created automatically the first time the manipulation system is needed. As long as your scene has an avatar with `UxrGrabber` components and at least one `UxrGrabbableObject`, everything will work out of the box without any manual setup.

![](/media/docs/manipulation/uxrgrabmanager/UxrGrabManager.png)

## How it works

Every frame, the grab manager updates the state of all registered grabbable objects. It determines which objects are within reach of each grabber, selects the best candidate when multiple objects overlap (using priority and distance), and applies the appropriate grab pose and constraints once an object is grabbed.

When a grabbed object is released near a compatible `UxrGrabbableObjectAnchor`, the manager automatically places the object on the anchor instead of dropping it. If no anchor is nearby, the object is released freely.

The manager also drives the affordance system, the visual feedback that highlights objects when a hand approaches and activates the anchor indicator slots described in the `UxrGrabbableObjectAnchor` component.

## Grab selection

When more than one `UxrGrabbableObject` is within reach of a hand, the manager selects the one to grab based on two factors in order of priority:

1. **Object priority**: Objects with a higher **Priority** value (set in the `UxrGrabbableObject` component) are always preferred over lower-priority or default-priority objects, regardless of distance.
2. **Distance and orientation**: Among objects with the same priority, the manager picks the one where the grabber's position and orientation best matches the grab point.

## Placement proximity

Placement on an anchor is checked continuously while an object is being held. As soon as the held object's proximity transform comes within the anchor's **Max Place Distance**, the anchor's affordance objects activate to provide visual feedback. When the user releases the object while it is still within range, the manager places it on the anchor.

If the anchor has compatible tags configured, only objects with a matching tag are considered for placement. Objects with a non-matching or missing tag are ignored by that anchor even when in proximity.