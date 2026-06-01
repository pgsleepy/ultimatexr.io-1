---
title: "UxrGrabbableResizable"
---

# UxrGrabbableResizable

`UxrGrabbableResizable` allows an object to be scaled at runtime by grabbing two extension handles at either end and moving them closer together or further apart.

{{< video src="/media/docs/manipulation/helper-components/GrabbableResizableExample.mp4" >}}

## Required hierarchy

The component relies on a specific object hierarchy to work correctly. All objects should use the standard axis convention (X right, Y up, Z forward):

```
Root GameObject
├── [UxrGrabbableResizable]     ← component lives here
├── [UxrGrabbableObject]        ← dummy grabbable parent, so the root can be moved by grabbing the extensions
│
├── Resizable Root              ← child object whose localScale.x is driven by the extension distance
├── Grabbable Left              ← left extension: locked rotation, translation constrained left-right
└── Grabbable Right             ← right extension: locked rotation, translation constrained left-right
```

The left and right extension objects each need a `UxrGrabbableObject` with:
- Rotation constraint set to **Locked**.
- Translation constraint set to **Restrict Local Offset** along the X axis.

The root `UxrGrabbableObject` should be set up as a **Dummy Grabbable Parent** so that grabbing either extension can also move this parent grabbable.

## Setup

1. Create the hierarchy above, configuring the extension `UxrGrabbableObject` components with the correct constraints.
2. Add `UxrGrabbableResizable` to the root GameObject.
3. Assign all four references in the inspector (Resizable Root, Grabbable Root, Grabbable Extend Left, Grabbable Extend Right).
4. Set **Start Scale** if the object should begin at a scale other than 1.

![](/media/docs/manipulation/helper-components/UxrGrabbableResizable.png)

When play mode starts, `UxrGrabbableResizable` measures the initial world-space distance between the two extensions and uses it as the reference scale. As the user grabs both handles and moves them, the component continuously updates `Resizable Root`'s local scale proportionally.

## Haptic feedback

The component includes built-in haptic feedback that fires on both hands while the object is being resized. The frequency and amplitude scale with the speed of the resize gesture. Use the **Haptics Intensity** slider to tune this or set it to 0 to disable it entirely.

## Scripting

`UxrGrabbableResizable` implements the `IUxrGrabbable` interface and exposes the standard manipulation events: `Grabbing`, `Grabbed`, `Releasing`, and `Released`:

```csharp
GetComponent<UxrGrabbableResizable>().Grabbed += (sender, e) =>
{
    Debug.Log("Resizable object is now being held.");
};
```

## Parameter reference

- *Resizable Root*: The `Transform` whose local scale is modified as the two extensions move. Only the XY component of the scale are modified.
- *Start Scale*: Initial scale applied to the object on startup. Use this to pre-set an object to a size different from the default.
- *Grabbable Root*: The `UxrGrabbableObject` on the root GameObject. Should be configured as a dummy grabbable parent.
- *Grabbable Extend Left*: The `UxrGrabbableObject` for the left extension handle.
- *Grabbable Extend Right*: The `UxrGrabbableObject` for the right extension handle.
- *Haptics Intensity*: Amplitude multiplier for the resize haptic feedback, from 0 (silent) to 1 (full intensity).
