---
title: "Attributes"
---

# Attributes

## Overview

UltimateXR provides a set of custom attributes to enhance the Unity inspectors. These attributes can be applied to serialized fields to control their visibility, behavior, and appearance.

## ReadOnly

Marks a serialized field as read-only in the Inspector. The field remains visible but cannot be edited, which is useful for exposing runtime or computed values for debugging purposes.

```csharp
[ReadOnly] [SerializeField] private int _readOnlyValue;
[SerializeField]            private int _writableValue;
```

![](/media/docs/programming-guide/other-features/AttributeReadOnly.png)

The attribute can also be configured to control when the field is read-only or visible.

- *OnlyWhilePlaying*: Makes the field read-only only while the application is running. In edit mode, the field remains editable.
- *HideInEditMode*: Hides the field in the Inspector while the application is not running.
- *HideInPlayMode*: Hides the field in the Inspector while the application is running.

Examples:
```csharp
// Always visible, always read-only.
[ReadOnly]
[SerializeField] private float _computedValue;

// Editable in edit mode, read-only in play mode.
[ReadOnly(OnlyWhilePlaying = true)]
[SerializeField] private float _runtimeValue;

// Hidden in edit mode, visible as read-only in play mode.
[ReadOnly(HideInEditMode = true)]
[SerializeField] private float _playModeDebugValue;

// Visible as read-only in edit mode, hidden in play mode.
[ReadOnly(HideInPlayMode = true)]
[SerializeField] private float _editModeDebugValue;
```

## ShowIf

Shows a serialized field in the inspector only when a specified condition is met. The condition is evaluated based on the value of another serialized field.

```c#
                                         public bool  _useAcceleration = true;
[ShowIf(nameof(_useAcceleration), true)] public float _acceleration    = 30.0f;
[ShowIf(nameof(_useAcceleration), true)] public float _deceleration    = 40.0f;
 ```
 
{{< video src="/media/docs/programming-guide/other-features/AttributeShowIf.mp4" >}}

Another example using an enum and multiple valid values:

```c#
private enum MovementType
{
    Walk,
    Fly,
    Swim
}

[SerializeField]                                                                    private MovementType _movementType;
[SerializeField][ShowIf(nameof(movementType), MovementType.Fly, MovementType.Swim)] private float        _flightOrSwimSpeed;
```

## HideIf

Hides a serialized field in the inspector when a specified condition is met. This is the inverse of `ShowIfAttribute`.

```c#
[SerializeField]                         private bool  _useDefaults = true;
[HideIf("_useDefaults")][SerializeField] private float _customValue;
```

## HideInNormalInspector

Hides a serialized field in the default Unity inspector and shows it only in debug mode. This is useful for fields that should only be hidden but still visible while debugging.

```c#
[HideInNormalInspector] private float _debugValue;
```

## Layer

Displays a serialized `int` field as a layer dropdown in the Inspector. Unlike a `LayerMask`, which allows selecting multiple layers using flags, this attribute shows a dropdown where a single layer can be selected.

```c#
[Layer][SerializeField] private int _targetLayer;
```

![](/media/docs/programming-guide/other-features/AttributeLayer.png)

## InspectorButton

Adds a button to the inspector that calls a specified method when clicked. This is useful for triggering actions directly from the inspector during development.

```c#
[InspectorButton("Add Character Controller", nameof(AddCharacterController))] public bool _button;

private void AddCharacterController()
{
	// Do something
}
```

![](/media/docs/programming-guide/other-features/AttributeInspectorButton.png)

{{% callout tip %}}
If the button field is inside a nested class, the method does not have to be in that class. It can also be defined in the parent `MonoBehaviour`.
{{% /callout %}}

## StylishFoldout

Groups serialized fields under a styled foldout section in the inspector, providing a cleaner and more organized layout for components with many properties.

Use parameter classes for grouping:
```c#
[SerializeField] [StylishFoldout("General")]  private GeneralParameters  _generalParameters;
[SerializeField] [StylishFoldout("Movement")] private MovementParameters _movementParameters;
[SerializeField] [StylishFoldout("Rotation")] private RotationParameters _rotationParameters;
[SerializeField] [StylishFoldout("Gravity")]  private GravityParameters  _gravityParameters;
[SerializeField] [StylishFoldout("Collider")] private ColliderParameters _colliderParameters;
```

Where a parameter class looks like this, including tooltips:
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

{{< video src="/media/docs/programming-guide/other-features/AttributeStylishFoldout.mp4" >}}

{{% callout tip %}}
`StylishFoldout` does more than improve the inspector layout. It also helps organize your code by grouping related fields into parameter classes, where you can also define their tooltips.
To keep the rest of your code clean, expose the values in the `MonoBehaviour` through properties instead of accessing them directly with expressions like `_gravityParameters._gravity`.
{{% /callout %}}

## API Reference

For more information, refer to the [Attributes API Reference](/api/N_UltimateXR_Attributes).
