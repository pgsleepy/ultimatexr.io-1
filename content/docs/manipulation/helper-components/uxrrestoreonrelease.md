---
title: "UxrRestoreOnRelease"
---

# UxrRestoreOnRelease

`UxrRestoreOnRelease` is a helper component that automatically returns a grabbed object back to its original local position and rotation after it is released. The transition is played using a customizable curve allowing for different effects.

Add it to any GameObject that already has a `UxrGrabbableObject` component. No additional configuration is required for the basic use case: grab the object, move it around, and watch it spring back when you let go.

{{< video src="/media/docs/manipulation/helper-components/RestoreOnReleaseExample.mp4" >}}

## Use cases

- Levers/joysticks that must return to a neutral position after being grabbed.
- Constrained grabbable objects (sliders, dials) that should reset when not held.

The component works with both freely-placed objects and objects that have limited degrees of freedom. 

## Setup

1. Add a `UxrGrabbableObject` to your GameObject and configure it as needed.
2. Add the `UxrRestoreOnRelease` component to the same GameObject.
3. Adjust **Transition Type** and **Transition Seconds** to control how the restore feels.

![](/media/docs/manipulation/helper-components/UxrRestoreOnRelease.png)

If you grab the object before the previous restore animation finishes, the animation is cancelled immediately so there is no fighting between the restore and the grab.

## Parameter reference

- *Transition Type*: The easing curve applied to the restore animation. Uses the `UxrEasing` enum, which includes linear, ease-in, ease-out, and various bounce and elastic curves among others.
- *Transition Seconds*: Duration of the restore animation in seconds. Lower values produce a snappier return; higher values produce a more gradual, floaty one.
