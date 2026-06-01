---
title: "UxrGrabbableObjectAnchor"
---

# UxrGrabbableObjectAnchor

The `UxrGrabbableObjectAnchor` component turns a GameObject into a placement socket where `UxrGrabbableObject` objects can be placed. Think of it as a holster, a weapon rack, a tool peg, or any specific spot in the world where an object should live.

When a user releases a grabbed object close enough to a compatible anchor, the grab manager automatically snaps it into place. Picking the object up again removes it from the anchor.

No extra setup is required to make placement work in a scene, the `UxrGrabManager` handles everything automatically.

![](/media/docs/manipulation/uxrgrabbableobjectanchor/UxrGrabbableObjectAnchor.jpg)

## Setting up an anchor

Add the `UxrGrabbableObjectAnchor` component to an empty GameObject placed where you want the object to rest. The anchor's position and rotation define where the object will snap to.

If you want the snapped object to align to something other than the anchor's own transform, assign a child transform to the **Align Transform** field.

{{% callout caution %}}
On the `UxrGrabbableObject` side, make sure its **Start Anchor** field points to this anchor if the object should already be placed on it when the scene starts.
{{% /callout %}}

![](/media/docs/manipulation/uxrgrabbableobjectanchor/StartAnchor.jpg)

## Compatible tags

By default, any `UxrGrabbableObject` that has no **Anchor Compatible Tag** set can be placed on any anchor with an empty **Compatible Tags** list. To restrict which objects can land on a specific anchor, add one or more tags to the **Compatible Tags** list and set a matching **Anchor Compatible Tag** on each `UxrGrabbableObject`.

{{% callout info %}}
Compatibility tags on grabbable objects should not be confused with Unity's GameObject `tag`. Grabbable objects and grab anchors use their own **Tag** property, defined by the corresponding UltimateXR components.
{{% /callout %}}

## Visual feedback slots

The anchor provides five GameObject slots that are activated or deactivated automatically based on the current state. Assigning highlight meshes, indicator lights, or tooltip objects to these slots is a quick way to create visual feedback without any scripting.

![](/media/docs/manipulation/uxrgrabbableobjectanchor/ActivationSlots.jpg)

- **Activate On Compatible Near**: Enabled when a compatible grabbed object is close enough to trigger a placement if the user releases the grab button.
- **Activate On Compatible Not Near**: Enabled when no compatible object is within placement range.
- **Activate On Hand Near And Grabbable**: Enabled when a hand is close enough to grab the currently placed object.
- **Activate On Placed**: Enabled when an object is occupying the anchor.
- **Activate On Empty**: Enabled when the anchor has nothing placed on it.

## Parameter reference

- *Compatible Tags*: List of string tags. Only `UxrGrabbableObject` components whose **Anchor Compatible Tag** matches one of these entries can be placed here. Leave empty to accept any untagged object.
- *Max Place Distance*: Maximum distance in metres between the held object and the anchor at which a placement is triggered on release.
- *Align Transform*: The `Transform` the placed object snaps to. When left unassigned (or when **Use Self** is enabled), the anchor's own transform is used.
- *Drop Proximity Transform*: The `Transform` used to measure the distance from the held object to the anchor when deciding whether placement should trigger. When left unassigned (or when **Use Self** is enabled), the anchor's own transform is used.
- *Activate On Compatible Near*: `GameObject` to activate when a compatible grabbed object is in placement range. Deactivated otherwise.
- *Activate On Compatible Not Near*: `GameObject` to activate when no compatible grabbed object is within placement range. Deactivated otherwise.
- *Activate On Hand Near And Grabbable*: `GameObject` to activate when a hand is within grab reach of the currently placed object.
- *Activate On Placed*: `GameObject` to activate while an object is placed on the anchor.
- *Activate On Empty*: `GameObject` to activate while the anchor has no object on it.
