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
[SerializeField] private bool _useCustomSpeed;

[ShowIf("_useCustomSpeed")]
[SerializeField] private float _customSpeed = 5.0f;
```

### HideIfAttribute

Hides a serialized field in the inspector when a specified condition is met. This is the inverse of `ShowIfAttribute`.

```c#
[SerializeField] private bool _useDefaults = true;

[HideIf("_useDefaults")]
[SerializeField] private float _customValue;
```

### HideInNormalInspectorAttribute

Hides a serialized field in the default Unity inspector. This is useful for fields that should only be visible in custom editors or through other means.

### LayerAttribute

Displays a serialized `int` field as a layer dropdown in the inspector, similar to how Unity's built-in layer fields work.

```c#
[Layer]
[SerializeField] private int _targetLayer;
```

### InspectorButtonAttribute

Adds a button to the inspector that calls a specified method when clicked. This is useful for triggering actions directly from the inspector during development.

### StylishFoldoutAttribute

Groups serialized fields under a styled foldout section in the inspector, providing a cleaner and more organized layout for components with many properties.

## API Reference

For more information, refer to the [Attributes API Reference](/api/N_UltimateXR_Attributes).
