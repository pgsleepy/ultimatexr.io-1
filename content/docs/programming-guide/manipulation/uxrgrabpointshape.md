---
title: "UxrGrabPointShape Programming Guide"
---

# UxrGrabPointShape

## Introduction

The `UxrGrabPointShape` is an abstract base class used to extend grab points on `UxrGrabbableObject` entities to support more complex shapes. While a grab point on a `UxrGrabbableObject` defines a single snap position and orientation, an `UxrGrabPointShape` component expands the snapping from that single point to a more complex shape like an axis, a cylinder, a box, or a sphere. This way, an object can be picked up from many different places just by specifying a snap point and some additional properties.

{{% callout info %}}
The full API can be explored in the [UxrGrabPointShape API Reference](/api/T_UltimateXR_Manipulation_UxrGrabPointShape).
{{% /callout %}}

Some key features include:
- **Extended grab shapes**: Allows objects to be grabbed from any point along a shape, rather than just a single defined spot.
- **Automatic integration**: Works seamlessly with the `UxrGrabManager` and `UxrGrabbableObject` without additional setup.
- **Customizable**: New grab shapes can be created by deriving from `UxrGrabPointShape` and implementing the abstract methods.

## Properties

- `UxrGrabPointIndex` `GrabPoint`  
  Gets the grab point index from the `UxrGrabbableObject` that this shape extends.

## Abstract Methods

These methods must be implemented by derived classes to define the shape's behavior.

- `float` `GetDistanceFromGrabber(UxrGrabber grabber, Transform snapTransform, Transform objectDistanceTransform, Transform grabberDistanceTransform)`  
  Gets the distance from a `UxrGrabber` to the grab point shape. The `snapTransform` is the transform on the grabbable object used to align to the grabber, `objectDistanceTransform` is the transform on the grabbable object used to compute the distance, and `grabberDistanceTransform` is the transform on the grabber used to compute the distance.
- `void` `GetClosestSnap(UxrGrabber grabber, Transform snapTransform, Transform distanceTransform, Transform grabberDistanceTransform, out Vector3 position, out Quaternion rotation)`  
  Gets the closest snap position and rotation that should be used when a `UxrGrabber` tries to grab the point. The output `position` and `rotation` define where the grabber should be placed.

## Built-in Shape: UxrGrabPointShapeAxisAngle

UltimateXR includes `UxrGrabPointShapeAxisAngle`, a built-in implementation of `UxrGrabPointShape` used to grab cylindrical objects. The cylinder is described by an axis and a length, and it is possible to specify whether the object can be grabbed in both directions or in a single direction only.

### Properties

- `Transform` `Center`  
  Gets the axis center transform. Defaults to the component's own transform if unassigned.
- `UxrAxis` `CenterAxis`  
  Gets or sets the axis around which the grab can rotate.
- `float` `AngleMin`  
  Gets or sets the minimum angle the grip can rotate around the center axis.
- `float` `AngleMax`  
  Gets or sets the maximum angle the grip can rotate around the center axis.
- `float` `AngleInterval`  
  Gets or sets the discrete angle interval steps the grip can rotate.
- `float` `OffsetMin`  
  Gets or sets the minimum offset from the center along the center axis the grip can move.
- `float` `OffsetMax`  
  Gets or sets the maximum offset from the center along the center axis the grip can move.
- `float` `OffsetInterval`  
  Gets or sets the discrete offset steps along the center axis the grip can move.

### Example Use Cases

- Grabbing a pipe or railing from any point along its length.
- Grabbing a lever or handle that can be gripped at different positions and angles.

## Creating Custom Grab Shapes

To create a custom grab shape, derive from `UxrGrabPointShape` and implement the two abstract methods:

```c#
public class UxrGrabPointShapeBox : UxrGrabPointShape
{
    public override float GetDistanceFromGrabber(UxrGrabber grabber, Transform snapTransform, Transform objectDistanceTransform, Transform grabberDistanceTransform)
    {
        // Compute and return the distance from the grabber to the closest point on the box shape.
    }

    public override void GetClosestSnap(UxrGrabber grabber, Transform snapTransform, Transform distanceTransform, Transform grabberDistanceTransform, out Vector3 position, out Quaternion rotation)
    {
        // Compute the closest snap position and rotation on the box shape.
    }
}
```

{{% callout info %}}
The `UxrGrabPointShape` component requires a `UxrGrabbableObject` on the same GameObject.
{{% /callout %}}

## API Reference

For more information, refer to the [UxrGrabPointShape API Reference](/api/T_UltimateXR_Manipulation_UxrGrabPointShape) and the [UxrGrabPointShapeAxisAngle API Reference](/api/T_UltimateXR_Manipulation_UxrGrabPointShapeAxisAngle).
