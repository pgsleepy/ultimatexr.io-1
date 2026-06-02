---
title: "UxrFingerTip"
---

# UxrFingerTip

The `UxrFingerTip` component marks a `GameObject` as UI interaction point. When placed on the distal bone of a finger, it allows the avatar to touch and interact with Unity UI canvases directly, as if pressing a physical screen with the fingertip.

The component is normally added only to the index finger on each hand. This is intentional, limiting interaction to the index finger avoids accidental presses triggered by other fingers.

The built-in UltimateXR avatar prefabs already have `UxrFingerTip` components set up on both index fingers.

## Setting up a UxrFingerTip

If you are working with a custom avatar or want to add fingertip interaction manually:

1. Find the distal bone of the index finger in your avatar hierarchy.
2. Create an empty child GameObject on that bone and name it something recognizable, such as `IndexFingerTip`.
3. Add the `UxrFingerTip` component to that GameObject.
4. Orient the GameObject so that its **forward vector** (blue Z axis in the Scene view) points in the direction a natural press would come from, slightly angled downward, as if pressing with the pad of the fingertip.

This orientation step is important. The interaction system filters out contacts that are not approaching the canvas at a natural angle. If the forward vector is misaligned, presses may be ignored.

![](/media/docs/ui-interaction/uxrfingertip/Fingertip.jpg)

## How the Angle Filter Works

The `UxrPointerInputModule` checks whether the fingertip is approaching a canvas in a direction that is close enough to perpendicular to the canvas surface.

If you notice that finger presses are not registering, verify that the forward vector of the `UxrFingerTip` GameObject is pointing in approximately the correct direction. 

## No Inspector Parameters

`UxrFingerTip` has no configurable inspector parameters. Place it on the correct bone, orient the GameObject forward axis appropriately, and the interaction system handles the rest automatically.
