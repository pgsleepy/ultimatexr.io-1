---
title: "UxrAlignOnRelease"
---

# UxrAlignOnRelease

`UxrAlignOnRelease` is a helper component that smoothly levels or fully upright-aligns an object whenever it is not being grabbed. It is intended for non-physics-driven grabbable objects that float in place when released rather than falling under gravity.

A common use case is a tablet, tray, or panel that can be tilted while held but should drift back to a neat horizontal or upright orientation the moment the user lets go.

{{< video src="/media/docs/manipulation/helper-components/AlignOnReleaseExample.mp4" >}}

## How it works

The component checks whether any of its tracked `UxrGrabbableObject` references is currently being grabbed. As soon as all of them are released, it begins smoothly rotating the object toward the target orientation using a smooth-damp algorithm. Grabbing the object again pauses the correction immediately.

The component does **not** require a `UxrGrabbableObject` on the same GameObject. It monitors a list of `UxrGrabbableObject` references that you assign in the inspector, which means it can sit on a parent object or any other point in the hierarchy that makes sense for the alignment pivot.

## Setup

1. Add `UxrAlignOnRelease` to the GameObject whose rotation you want to correct.
2. Drag one or more `UxrGrabbableObject` components into the **Grabbable Objects** list. The alignment animation pauses for as long as any of these objects is being held.
3. Choose whether to use **Only Level** (the default) or full upright alignment, and tune the **Smooth Factor**.

![](/media/docs/manipulation/helper-components/UxrAlignOnRelease.png)

## Parameter reference

- *Only Level*: When enabled, the component only corrects the roll so that the object's right axis stays horizontal. The object can still lean forward or backward, only the sideways tilt is corrected. When disabled, the component rotates the object so that its up axis fully aligns with world up, correcting all tilt at once.
- *Smooth Factor*: A value between 0 and 1 that controls how quickly the alignment converges. Values close to 1 produce a very slow, gentle drift. Values close to 0 produce a nearly instant snap.
- *Grabbable Objects*: The list of `UxrGrabbableObject` components to monitor. The alignment animation is not applied for as long as any object in this list is being grabbed.
