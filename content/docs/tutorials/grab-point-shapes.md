---
title: "Grab Point Shapes"
---

# Grab Point Shapes

Grab Point Shapes make it simpler and faster to extend your grabs along a shape. If you wanted to extend your grabs to anywhere along a straight line for example, a [UxrGrabPointShape](/api/T_UltimateXR_Manipulation_UxrGrabPointShape#uxrgrabpointshape-class) is a fantastic component to do just that!

# UxrGrabPointShapeAxisAngle - The Straight Line
In this section, we'll take a look at the Axis Angle. This Grab Point Shape extends grabs in a straight line along a single axis. Once added, a white line will appear on your object. Note that, depending on your models initial orientiation, the line may be set correctly and be visible inside your model or perpendicular. Ensure your 'Gizmos' are turned in the Scene view to see it.

**Component Definitions**
1) **Grab Point Index** - The index of the grab point that the axis angle will use as its base.
    Changing this will change which grab point will be used along the
2) **Center** - A Transform object that acts as the center from which the line will extend out from.
    While you can set the object itself as the Center, its good practice to create an empty object in case you need to offset the grabs a bit.
3) **Center Axis** - The axis or direction of the line.
    Basically allows you to choose which direction the grabs will extend to.
4) **Bidirectional** - A boolean field that determines whether the object can be grabbed from both directions (true) or a single direction (false).
5) **Angle Min** - The minimum angle around the object that it can be grabbed from.
6) **Angle Max** - The maximum angle around the object that it can be grabbed from.
7) **Offset Min** - The minimum point where a grab can happen along the line. 
8) **Offset Max** - The maximum point where a grab can happen along the line. These two settings basically control where the "ends" of the line will be.
9) **Offset Interval** - The interval along the line that grabs can occur. The default setting will allow the user to grab anywhere along the line. Increasing this value will allow for less grab points to populate along the line, giving a more "segmented" feel.

![](/docs/tutorials/media/grabpointshape/02AxisAngleComponent.png)

**Setup**

- Ensure your "Base" grab is already set up on your object. If you haven't, check out [Create a Grabbable Ball](/docs/tutorials/creating-a-grabbable-ball) for details on setting up the [UxrGrabbableObject](/api/T_UltimateXR_Manipulation_UxrGrabbableObject#uxrgrabbableobject-class)
![](/docs/tutorials/media/grabpointshape/04GrabbableComponent.png)
-  To set up the [UxrGrabPointShapeAxisAngle](/api/T_UltimateXR_Manipulation_UxrGrabPointShapeAxisAngle#uxrgrabpointshapeaxisangle-class), add the component onto the same object as your [UxrGrabbableObject](/api/T_UltimateXR_Manipulation_UxrGrabbableObject#uxrgrabbableobject-class)
- Create an Empty GameObject as a child of your model. Set the name to "Center" for organization purposes and position it in the center of your model. Ensure its Scale is set to (1, 1, 1)
![](/docs/tutorials/media/grabpointshape/03CenterObject.png)
- Select the [UxrGrabPointShapeAxisAngle](/api/T_UltimateXR_Manipulation_UxrGrabPointShapeAxisAngle#uxrgrabpointshapeaxisangle-class) component on your object and drag your new Center object into the Center Transform slot in the Inspector.
{{% callout caution %}}
If you either did not set up the initial grabs on the [UxrGrabbableObject](/api/T_UltimateXR_Manipulation_UxrGrabbableObject#uxrgrabbableobject-class), or the wrong grab point is selected on the [UxrGrabPointShapeAxisAngle](/api/T_UltimateXR_Manipulation_UxrGrabPointShapeAxisAngle#uxrgrabpointshapeaxisangle-class) component, the Axis Lines from the [UxrGrabPointShapeAxisAngle](/api/T_UltimateXR_Manipulation_UxrGrabPointShapeAxisAngle#uxrgrabpointshapeaxisangle-class) component may be visible off-center or even on the floor. This is typically remedied once the grabs are set up correctly.
{{% /callout %}}

# Let's Make a Staff!
![](/docs/tutorials/media/grabpointshape/01StaffSetup.png)
In this section, we'll apply what we've learned so far and make a staff that we can grab from anywhere along its surface, while only using a single [UxrGrabbableObject](/api/T_UltimateXR_Manipulation_UxrGrabbableObject#uxrgrabbableobject-class) component!

