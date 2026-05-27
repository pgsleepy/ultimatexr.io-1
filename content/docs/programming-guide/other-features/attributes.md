---
title: "Attributes"
---

# Attributes

## Overview

UltimateXR provides a set of custom attributes that enhance the Unity inspector experience. These attributes can be applied to serialized fields to control their visibility, behavior, and appearance.

You can also check the [Attributes API Reference](/api/N_UltimateXR_Attributes).

## Available Attributes

### ReadOnlyAttribute

Marks a serialized field as read-only in the inspector. The field will be displayed but cannot be edited.

```c#
[ReadOnly]
[SerializeField] private float _computedValue;
```

### ShowIfAttribute

Shows a serialized field in the inspector only when a specified condition is met. The condition is evaluated based on the value of another serialized field.

```c#
                                         public bool  _useAcceleration = true;
[ShowIf(nameof(_useAcceleration), true)] public float _acceleration    = 30.0f;
[ShowIf(nameof(_useAcceleration), true)] public float _deceleration    = 40.0f;
 ```
 
 ![](/media/docs/programming-guide/other-features/AttributeShowIf.mp4)

### HideIfAttribute

Hides a serialized field in the inspector when a specified condition is met. This is the inverse of `ShowIfAttribute`.

```c#
[SerializeField]                         private bool  _useDefaults = true;
[HideIf("_useDefaults")][SerializeField] private float _customValue;
```

### HideInNormalInspectorAttribute

Hides a serialized field in the default Unity inspector. This is useful for fields that should only be visible in custom editors or through other means.

### LayerAttribute

Displays a serialized `int` field as a layer dropdown in the inspector, similar to how Unity's built-in layer fields work.

```c#
[Layer][SerializeField] private int _targetLayer;
```

![](/media/docs/programming-guide/other-features/AttributeLayer.png)

### InspectorButtonAttribute

Adds a button to the inspector that calls a specified method when clicked. This is useful for triggering actions directly from the inspector during development.

```c#
[InspectorButton("Add Character Controller", nameof(AddCharacterController))] public bool _button;

private void AddCharacterController()
{
	// Do something
}
```

![](/media/docs/programming-guide/other-features/AttributeInspectorButton.png)

### StylishFoldoutAttribute

Groups serialized fields under a styled foldout section in the inspector, providing a cleaner and more organized layout for components with many properties.

Use parameter classes for grouping:
```c#
[SerializeField] [StylishFoldout("General")]  private GeneralParameters  _generalParameters;
[SerializeField] [StylishFoldout("Movement")] private MovementParameters _movementParameters;
[SerializeField] [StylishFoldout("Rotation")] private RotationParameters _rotationParameters;
[SerializeField] [StylishFoldout("Gravity")]  private GravityParameters  _gravityParameters;
[SerializeField] [StylishFoldout("Collider")] private ColliderParameters _colliderParameters;
```

Where a parameter class looks like this:
```c#
[Serializable]
private class GravityParameters
{
	[Tooltip(GravityToolTip)]            public float _gravity            = -9.81f;
	[Tooltip(GroundedStickForceToolTip)] public float _groundedStickForce = -2.0f;
	[Tooltip(TerminalVelocityToolTip)]   public float _terminalVelocity   = -20.0f;

	public const string GravityToolTip            = "Downward acceleration applied while falling.";
	public const string GroundedStickForceToolTip = "Small downward force applied while grounded.";
	public const string TerminalVelocityToolTip   = "Maximum falling speed.";
}
```

![](/media/docs/programming-guide/other-features/AttributeStylishFoldout.mp4)

## API Reference

For more information, refer to the [Attributes API Reference](/api/N_UltimateXR_Attributes).
