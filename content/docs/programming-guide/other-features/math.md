---
title: "Math"
---

# Math

## Overview

UltimateXR provides math utilities through extension methods on Unity's vector, quaternion, and matrix types, as well as through the interpolation system. Rather than a standalone math library, the math functionality is distributed across the [Extensions](/docs/programming-guide/other-features/extensions) and [Animation](/docs/programming-guide/other-features/animation) systems.

You can also check the [Unity Math Extensions API Reference](/api/N_UltimateXR_Extensions_Unity_Math).

## Vector Extensions

Extension methods on `Vector2`, `Vector3`, and `Vector4` provide common math operations:

- **Clamping**: Clamp individual components, clamp to box, clamp to sphere.
- **Math**: Abs, Min, Max, Average, Inverse...
- **Geometry**: IsInsideBox, IsInsideSphere, Projections onto planes or other vectors...
- **Distance**: To line, to segment, to plane...
- **Comparison**: Check approximate equality with configurable tolerance.
- **Manipulation**: Set individual components, get perpendicular vectors, and compute angles.
- **Parsing**: From string.

```c#
// Check if a point is inside a box collider
bool inside = point.IsInsideBox(boxCollider);

// Get the closest axis of a transform to a given direction
Vector3 closestAxis = transform.GetClosestLocalAxis(direction);
```

## Quaternion Extensions

Extension methods on `Quaternion` provide:

- Equality comparisons.
- Math operations.
- Clamping.
- Parsing.

## Matrix Extensions

Extension methods on `Matrix4x4` provide:

- Matrix interpolation.
- Oblique and Reflection matrix computation.

## Numeric Extensions

Extension methods on `float` and `int` provide:

- **Clamping**: Clamp values to a range.
- **Approximate equality**: Check if two floats are approximately equal with a configurable epsilon.

```c#
// Check approximate equality
bool equal = a.IsAlmostEqual(b, 0.001f);
```

## Universal Local Axes

### UxrUniversalLocalAxes

The `UxrUniversalLocalAxes` class solves a fundamental problem when working with 3D avatars: different modelling packages and artists rig their models using completely different coordinate systems. One avatar might have the local X axis pointing forward along a finger bone, while another uses Z. An upper arm bone might have Y pointing up in one rig and -Z in another. This makes it impossible to write generic algorithms (such as IK solvers or hand pose systems) that work directly with local rotations.

`UxrUniversalLocalAxes` addresses this by defining a **universal convention**, a consistent coordinate system where "right", "up", and "forward" always mean the same thing, and providing the transformations needed to convert between this universal space and whatever axes the actual asset uses.

### Why It's Needed

In UltimateXR, hand poses are stored as **rotation descriptors** that describe how each finger bone is oriented relative to its parent. These descriptors need to be **independent of the avatar's coordinate system** so that a hand pose captured on one avatar can be applied to any other avatar, regardless of how it was rigged.

Without `UxrUniversalLocalAxes`, a "curl the index finger 90 degrees" operation would need to know which specific local axis to rotate around for each avatar, and that axis could be different for every rig. With universal local axes, the operation is always "rotate 90 degrees around the universal right axis", and the class handles the conversion to the actual axes automatically.

### How It Works

The class stores which local-space vectors of a transform correspond to the universal right, up, and forward directions. It also computes a `UniversalToActualAxesRotation` quaternion that converts rotations from universal space back to the transform's actual coordinate system.

There are two main ways to create a `UxrUniversalLocalAxes` object:

**1. Using a reference transform** The constructor automatically determines which local axes of the target transform align with the reference's right, up, and forward directions:

```c#
// Use the avatar root as reference. The class will figure out which local axes
// of the spine bone correspond to right, up, and forward in avatar space.
UxrUniversalLocalAxes spineAxes = new UxrUniversalLocalAxes(spineTransform, avatarTransform);
```

**2. Specifying axes explicitly** When you already know which local vectors correspond to each universal direction:

```c#
// Explicitly define which local axes of the hand correspond to universal directions.
UxrUniversalLocalAxes handAxes = UxrUniversalLocalAxes.FromAxes(wristTransform, handLocalRight, handLocalUp, handLocalForward);

// Convenience methods when you only need to specify two axes (the third is computed):
UxrUniversalLocalAxes armAxes = UxrUniversalLocalAxes.FromUpForward(upperArmTransform, elbowAxis, armForwardDirection);
```

### Usage in UltimateXR

`UxrUniversalLocalAxes` is used extensively throughout the framework:

- **Hand poses**: `UxrHandDescriptor` and `UxrFingerNodeDescriptor` use universal local axes to store and apply finger rotations independently of the avatar's rig. This is what allows hand poses to be transferred between different avatar models.
- **IK solvers**: `UxrArmIKSolver` and `UxrBodyIK` use universal local axes for the clavicle, upper arm, forearm, spine, chest, neck, and head bones to perform IK computations in a consistent coordinate system.
- **Hand tracking**: `UxrMetaHandTracking` uses universal local axes to convert hand tracking data from the device's coordinate system into the avatar's coordinate system.

Once you have a `UxrUniversalLocalAxes` object, you can perform rotations in universal space and convert back:

```c#
// Perform a rotation in universal space and apply it to the actual transform.
// universalRotation is computed using the universal convention (e.g., Y is up).
transform.rotation = universalRotation * boneAxes.UniversalToActualAxesRotation;

// Get the current rotation of a transform in universal coordinates.
Quaternion universalRot = boneAxes.UniversalRotation;
```

## Interpolation

The interpolation system in the [Animation](/docs/programming-guide/other-features/animation) module provides easing functions and smooth interpolation for all common types. See the [Animation guide](/docs/programming-guide/other-features/animation#interpolation) for details.

## API Reference

For more information, refer to the [Unity Math Extensions API Reference](/api/N_UltimateXR_Extensions_Unity_Math) and the [System Extensions API Reference](/api/N_UltimateXR_Extensions_System).
