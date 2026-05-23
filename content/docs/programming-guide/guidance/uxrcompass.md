---
title: "UxrCompass Programming Guide"
---

# UxrCompass

## Introduction

The `UxrCompass` is a singleton component that guides the user by providing visual hints indicating where to look or what action to perform. It displays an arrow in front of the view to help bring the target into sight. Once the target is visible, it can optionally display an action icon depending on the display mode.

{{% callout info %}}
The full API can be explored in the [UxrCompass API Reference](/api/T_UltimateXR_Guides_UxrCompass).
{{% /callout %}}

As a `UxrSingleton<T>`, the compass is globally accessible and unique. It can be invoked from anywhere using `UxrCompass.Instance`.

## Properties

- `static bool` `Enabled`  
  Gets or sets whether the compass is rendered.
- `bool` `HasTarget`  
  Gets whether the compass is currently focused on a target.
- `Transform` `TargetTransform`  
  Gets the target's transform. If a `UxrCompassTargetHint` is present on the target, it will return the appropriate transform for the current display mode.
- `Vector3` `TargetPosition`  
  Gets the target's position.
- `UxrCompassDisplayMode` `DisplayMode`  
  Gets the current display mode.

## Setting Targets

### SetTarget

Sets the current target. The compass will point towards the target until a new target is set or `null` is passed.

```c#
// Point to a transform with a location icon
UxrCompass.Instance.SetTarget(doorTransform, UxrCompassDisplayMode.Location);

// Point to a world position with only the compass arrow
UxrCompass.Instance.SetTarget(new Vector3(10, 0, 5), UxrCompassDisplayMode.OnlyCompass);

// Stop the compass
UxrCompass.Instance.SetTarget(null);
```

#### Parameters

- `Transform` or `Vector3` target: The target to point to, or `null` to stop.
- `UxrCompassDisplayMode` displayMode: The display mode (default: `OnlyCompass`).
- `float` iconScale: The icon size multiplier (default: `1.0`).
- `bool` highPriority: Whether the target is high-priority and will override all other target requests (default: `false`).

### SetTargetTemporary

Works like `SetTarget`, but the action icon is only shown for a limited duration when the target comes into sight. The timer resets each time the target goes out of sight and comes back.

```c#
// Temporarily highlight an object with a grab icon
UxrCompass.Instance.SetTargetTemporary(objectTransform, UxrCompassDisplayMode.Grab);
```

## Priority System

The compass supports two priority levels:

- **Default priority**: Used for general guidance. Set by calling `SetTarget` or `SetTargetTemporary` with `highPriority = false`.
- **High priority**: Overrides the default target. Set by calling `SetTarget` or `SetTargetTemporary` with `highPriority = true`.

When a high-priority target is active, the default target is ignored. When the high-priority target is cleared, the compass returns to the default target.

## UxrCompassTargetHint

The `UxrCompassTargetHint` component can be attached to a target GameObject to customize where the compass points to depending on the current display mode. This is useful when different parts of an object should be highlighted for different actions.

### Properties

- `Transform` `DefaultTarget`  
  The default target transform, used as a fallback when no mode-specific target is set.
- `Transform` `LocationTarget`  
  The target transform when the display mode is `Location`.
- `Transform` `GrabTarget`  
  The target transform when the display mode is `Grab`.
- `Transform` `LookTarget`  
  The target transform when the display mode is `Look`.
- `Transform` `UseTarget`  
  The target transform when the display mode is `Use`.

### Methods

- `Transform` `GetTransform(UxrCompass compass)`  
  Gets the appropriate transform for the current display mode, falling back to `DefaultTarget` and then the component's own transform.

### Example

If a machine has a button that should be highlighted for the "Use" action and a handle for the "Grab" action, attach a `UxrCompassTargetHint` to the machine and assign the button transform to `UseTarget` and the handle transform to `GrabTarget`.

## API Reference

For more information, refer to the [UxrCompass API Reference](/api/T_UltimateXR_Guides_UxrCompass) and the [UxrCompassTargetHint API Reference](/api/T_UltimateXR_Guides_UxrCompassTargetHint).
