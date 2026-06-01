---
title: "UxrGrabPointShape"
---

# UxrGrabPointShape

A grab point in a `UxrGrabbableObject` defines a single position and orientation where the hand can snap to when grabbing. `UxrGrabPointShape` expands that single snap point to a geometric shape so that the object can be grabbed from anywhere along that shape with a naturally fitting grip.

This is particularly useful when an object has a common shape that can be approximated with a simple geometric primitive, such as a box, sphere or cylinder.

## UxrGrabPointShapeAxisAngle

Currently the only concrete implementation is `UxrGrabPointShapeAxisAngle`, which describes a cylindrical shape: the hand can grab anywhere along an axis segment while simultaneously rotating freely around that axis within configurable angle limits.

![](/media/docs/manipulation/extending-manipulation/GrabPointShape.png)

When an `UxrGrabPointShapeAxisAngle` component is present, a line gizmo appears in the Scene Window showing the grabbable segment. Select the component to see it.

### Setup

1. Add a `UxrGrabbableObject` to your object and configure at least one grab point with a snap transform roughly in the centre of the cylindrical section.
2. Add `UxrGrabPointShapeAxisAngle` to the same GameObject.
3. Set the **Grab Point** index to match the grab point index you want to expand (0 for the first grab point).
4. Assign a **Center** transform, or leave it empty to use the object's own transform.
5. Choose the **Center Axis** that runs along the length of the cylinder.
6. Configure the angle and offset ranges.

![](/media/docs/manipulation/extending-manipulation/UxrGrabPointShapeAxisAngle.png)

### UxrGrabPointShapeAxisAngle Parameter Reference 

- *Grab Point*: The index of the grab point in the `UxrGrabbableObject` that this shape extends. 0 refers to the main grab point; higher indices refer to the additional grab points in order.
- *Center*: An optional transform that defines the origin of the axis. If not assigned, the component's own transform is used.
- *Center Axis*: The local axis of **Center** along which the cylinder runs (X, Y, or Z).
- *Bidirectional*: When enabled, the hand can grab the object with either end of the grip facing along the axis. Useful for objects like a flashlight that can be held with either end pointing forward.
- *Angle Min*: Minimum angle in degrees the grip can rotate around the axis. Use -180 to allow grabbing from any rotation.
- *Angle Max*: Maximum angle in degrees the grip can rotate around the axis. Use 180 together with -180 to allow full 360° rotation.
- *Angle Interval*: Discrete step size in degrees for the rotation around the axis. Values close to 0 allow continuous rotation. Larger values create snap points at regular intervals.
- *Offset Min*: Minimum distance from the center along the axis the grip can slide. Negative values extend the segment in the direction opposite to the axis.
- *Offset Max*: Maximum distance from the center along the axis the grip can slide.
- *Offset Interval*: Discrete step size in metres for the position along the axis. Values close to 0 allow continuous sliding. Larger values create snap positions at regular intervals.

## Custom Shapes

You can create your own grab shape by inheriting from `UxrGrabPointShape` and implementing `GetDistanceFromGrabber` and `GetClosestSnap`. This allows modelling grab regions as boxes, circles, or any other shape required by your objects.
Check the [UxrGrabPointShape Programming Guide](/docs/programming-guide/manipulation/uxrgrabpointshape) for more information on how to create a specific implementation.
