---
title: "UxrReturnGrabbableObject"
---

# UxrReturnGrabbableObject

`UxrReturnGrabbableObject` automatically returns a grabbed object back to a `UxrGrabbableObjectAnchor` whenever it is released. This is useful for grabbable objects that must remain available to the user. The object can still be picked up, used, or even thrown away freely, but after a short delay it is returned to its initial position. This prevents the application from getting stuck because an important object was dropped, lost, or left out of reach, while still allowing natural interaction during use.

{{< video src="/media/docs/manipulation/helper-components/ReturnGrabbableExample.mp4" >}}

Add it to any GameObject that has a `UxrGrabbableObject` component. Make sure the object has a **Start Anchor** or has been placed on an anchor at some point so the return destination is known.

{{% callout info %}}
This component is different than `UxrRestoreOnRelease` in that `UxrReturnGrabbableObject` is used to move a free grabbable back to an anchor. `UxrRestoreOnRelease` moves a constrained object back to its rest position.
{{% /callout %}}

## How it works

When the object is released and no hand is still holding it (including via secondary grabs), the component places the object back on the target anchor. The destination anchor is chosen based on the **Return Policy**:

- **Most Recent Anchor**: returns to the last anchor the object was placed on. This is the default and works well when the object can travel between multiple anchors.
- **Original Anchor**: always returns to the initial anchor where the `UxrGrabbableObject` was, regardless of where the object was placed most recently.

The return only happens if the target anchor is currently empty. If another object is already on it, the return is skipped silently.

## Setup

1. Add `UxrGrabbableObject` to your object and set up its **Start Anchor** to point at the anchor it should return to.
2. Add `UxrReturnGrabbableObject` to the same GameObject.
3. Configure the desired return behaviour in the inspector.

![](/media/docs/manipulation/helper-components/UxrReturnGrabbableObject.png)

## Cancelling a return

If you need to prevent a scheduled return, call the static helper:

```csharp
UxrReturnGrabbableObject.CancelReturn(myGrabbableObject);
```

This is safe to call even if no return is pending.

## Parameter reference

- *Smooth Transition*: When enabled, the object travels back to the anchor with a smooth animation. When disabled it teleports instantly.
- *Return Delay Seconds*: How many seconds to wait after the object is released before triggering the return. A value of 0 or less returns the object immediately on the same frame it is released.
- *Return Policy*: Determines which anchor the object returns to.
  - **Most Recent Anchor**: the last `UxrGrabbableObjectAnchor` the object was placed on.
  - **Original Anchor**: the original `UxrGrabbableObjectAnchor` the object was placed on.
