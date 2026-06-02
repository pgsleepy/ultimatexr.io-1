---
title: "UxrGrabber"
---

# UxrGrabber

The `UxrGrabber` component is added to each hand of an avatar to give it the ability to grab `UxrGrabbableObject` objects. There is normally one per hand. The grabber transform serves as the default snap point; when an object is grabbed, the hand aligns to the object's snap transform using the grabber as the reference.

You do not need to add `UxrGrabber` manually. The built-in avatar prefabs (BigHandsAvatar and SmallHandsAvatar) already include them inside the **HandsIntegration** hierarchy. If you are setting up a custom avatar, the **Inspector Assistant** on the `UxrAvatar` component will guide you through the process.

![](/media/docs/manipulation/uxrgrabber/UxrGrabber.png)

## Hand renderer

The **Hand Renderer** field should reference the `Renderer` component for the hand mesh. When a grabbed object has the **Hide Hand Renderer** option enabled on one of its grab points, the grab system uses this reference to hide the hand while the object is held.

If left unassigned, the framework attempts to find the hand renderer automatically from the avatar rig.

## Objects to disable on grab

The **Objects To Disable On Grab** list accepts any number of GameObjects. Each entry is deactivated while the grabber is holding an object, and reactivated as soon as it releases.

## Proximity transforms

By default the grabber's own transform is used to measure distance to nearby `UxrGrabbableObject` components. This transform is usually located in the palm. For scenes where you need finer control, for example, a cockpit where small buttons should react to the tip of the index finger while larger controls react to the palm. You can add additional transforms to the **Optional Proximity Transforms** list.

Each grab point on a `UxrGrabbableObject` can then specify which proximity transform index it prefers via the **Grabber Proximity Index** field, overriding the default grabber-transform distance check.

## Parameter reference

- *Hand Renderer*: The `Renderer` for the hand mesh. Hidden while a grabbed object has **Hide Hand Renderer** active on the grab point being used.
- *Objects To Disable On Grab*: GameObjects that are deactivated while the grabber holds any object and reactivated when it releases.
- *Optional Proximity Transforms*: Additional `Transform` references used for per-grab-point proximity calculations. Indexed starting from 0 and referenced from grab points via the **Grabber Proximity Index** field.
