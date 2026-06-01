---
title: "UxrAutoSlideInObject"
---

# UxrAutoSlideInObject

`UxrAutoSlideInObject` adds slide-in/slide-out behaviour to a `UxrGrabbableObject`. When attached to an anchor with an `UxrAutoSlideInAnchor` component, the object behaves like a detachable drawer:

- It slides freely along a single constrained axis while held.
- If the user pulls it past the end of the rail, it detaches and becomes a free object.
- While held at any point along the rail, it automatically re-attaches to any compatible `UxrAutoSlideInAnchor` placed nearby.
- When released while still on the rail, it slides back to its resting position under simulated gravity.

{{< video src="/media/docs/manipulation/helper-components/AutoSlideInObjectExample.mp4" >}}

## How the two components relate

The system uses two components working together:

| Component | Where to add it |
|---|---|
| `UxrAutoSlideInObject` | The grabbable object (the "drawer") |
| `UxrAutoSlideInAnchor` | The anchor point (the "socket"), alongside a `UxrGrabbableObjectAnchor` |

`UxrAutoSlideInObject` scans the scene for all active `UxrAutoSlideInAnchor` instances and handles attach/detach automatically. You can have multiple sockets in the scene, the object will re-attach to whichever compatible one it passes through.

## Setup

### 1. Configure the grabbable object

Add a `UxrGrabbableObject` to the object and set its translation constraint to **Restrict Local Offset** along a single axis. The component uses this axis as the slide direction. If the constraint is not configured correctly, a warning will appear in the console and the component will fall back to the Z axis.

![](/media/docs/manipulation/helper-components/uxrautoslideinobject/AutoSlideInGrabbableInspector.png)

Add the `UxrAutoSlideInObject` component to the same GameObject. Set **Translation Constraint Min** and **Translation Constraint Max** to define the sliding range relative to the anchor. The sign and magnitude of the maximum value determine the direction and total travel distance.
These values will override the offsets from the `UxrGrabbableObject` component.

![](/media/docs/manipulation/helper-components/uxrautoslideinobject/AutoSlideInInspector.png)

### 2. Configure the anchor

Create a separate GameObject at the resting position and add:

- A `UxrGrabbableObjectAnchor` component, configured with the correct compatible tag to match the grabbable object.
- An `UxrAutoSlideInAnchor` component (no additional configuration needed on this one).

![](/media/docs/manipulation/helper-components/uxrautoslideinobject/AutoSlideInAnchorInspector.png)

{{% callout i %}}
Make sure the object starts placed on the anchor. You can use the **Start Anchor** field in the `UxrGrabbableObject` to reference it.
{{% /callout %}}

## Haptic feedback

If a `UxrManipulationHapticFeedback` component is present on the same GameObject, `UxrAutoSlideInObject` will automatically disable haptic feedback while the object is detached and free, then restore it when the object re-attaches to an anchor. This prevents haptic rattling while the object is in the air.

## Scripting

The `PlacedAfterSlidingIn` event fires once each time the object fully slides in and reaches its resting position at the anchor:

```csharp
GetComponent<UxrAutoSlideInObject>().PlacedAfterSlidingIn += () =>
{
    Debug.Log("Object fully inserted.");
};
```

You can inherit from `UxrAutoSlideInObject` to override `OnPlacedAfterSlidingIn` for custom behaviour.

## Parameter reference

- *Translation Constraint Min*: The minimum local-offset vector that defines one end of the sliding range relative to the anchor. Typically zero or a negative value along the slide axis.
- *Translation Constraint Max*: The maximum local-offset vector that defines the other end of the sliding range relative to the anchor. Typically zero or a positive value along the slide axis.
