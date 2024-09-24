---
title: "Creating a Staff"
---

/media/docs/tutorials/manipulation/creating-a-staff/staff_twirl.mp4

# Creating a Staff


Grab Point Shapes make it simpler and faster to extend your grabs along a shape. If you wanted to extend your grabs to anywhere along a straight line for example, a [UxrGrabPointShape](/api/T_UltimateXR_Manipulation_UxrGrabPointShape#uxrgrabpointshape-class) is a fantastic component to do just that!

#### UxrGrabPointShapeAxisAngle - The Straight Line
In this section, we'll take a look at the Axis Angle. This Grab Point Shape extends grabs in a straight line along a single axis. Once added, a white line will appear on your object. Note that, depending on your models initial orientiation, the line may be set correctly and be visible inside your model or perpendicular. Ensure your *Gizmos* are turned in the Scene view to see it.

![](/media/docs/tutorials/manipulation/creating-a-staff/02AxisAngleComponent.png)

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

For a practical exercise to use this component, let's set up and make a staff.

#### Let's Make a Staff!
In this section, we'll apply what we've learned so far and make a staff that we can grab from anywhere along its surface, while only using a single [UxrGrabbableObject](/api/T_UltimateXR_Manipulation_UxrGrabbableObject#uxrgrabbableobject-class) component!

#### Model Setup
First, we'll set up our staff with an Empty Object as our base. Then as a child object, create a second empty object and we'll call this Staff Model. Finally, as a child object of the Staff Model object, create a Cylinder. 

![](/media/docs/tutorials/manipulation/creating-a-staff/01StaffSetup.png)

- **Why don't I just use the cylinder instead of all these empty objects?** 

You can. However, the base cylinder is usually too big and not long enough for a staff so you would need to change the scale. Changing the scale on the parent object means that any child objects, such as the grabs would also be scaled. If you follow this pattern, you can now change the scale of the cylinder to any scale you need without affecting any other component. We'll add all of our logic onto the Staff parent object and if we want to swap out our cylinder for a better model down the road, we dont have to change any of our logic or components. It is optional but will make things easier for you later on!

#### Component Setup

- Next, set up your "Base" grabs on the main parent object, in our example that would is the *Staff* Game Object. If you need assistance, check out [Create a Grabbable Ball](/docs/tutorials/manipulation/creating-a-grabbable-ball) for details on setting up the [UxrGrabbableObject](/api/T_UltimateXR_Manipulation_UxrGrabbableObject#uxrgrabbableobject-class). The settings can be different to fit your needs, but the *Grip Pose*, *Grip Snap Left Hand* and *Grip Snap Right Hand* values need to be set up.
![](/media/docs/tutorials/manipulation/creating-a-staff/04GrabbableComponent.png)
-  To set up the [UxrGrabPointShapeAxisAngle](/api/T_UltimateXR_Manipulation_UxrGrabPointShapeAxisAngle#uxrgrabpointshapeaxisangle-class), add the component onto the same object as your [UxrGrabbableObject](/api/T_UltimateXR_Manipulation_UxrGrabbableObject#uxrgrabbableobject-class)

![](/media/docs/tutorials/manipulation/creating-a-staff/02AxisAngleComponent.png)

- Create an Empty GameObject as a child of your parent Game Object. Set the name to "Center" for organization purposes and position it in the center of your model.
![](/media/docs/tutorials/manipulation/creating-a-staff/03CenterObject.png)
- Select the [UxrGrabPointShapeAxisAngle](/api/T_UltimateXR_Manipulation_UxrGrabPointShapeAxisAngle#uxrgrabpointshapeaxisangle-class) component on your object and drag your new Center object into the Center Transform slot in the Inspector.
![](/media/docs/tutorials/manipulation/creating-a-staff/05CenterTransformInComponent.png)

If everything was done correctly, we should now see a small line appear near the Center of the staff. This line represents the path along which grabs will be available. Obviously we dont want the player to be able to grab the air around the side of the staff so lets tweak the settings in the [UxrGrabPointShapeAxisAngle](/api/T_UltimateXR_Manipulation_UxrGrabPointShapeAxisAngle#uxrgrabpointshapeaxisangle-class) to get it to fit our needs.

First, we'll set the Axis Angle so that it runs along the path we want. In this case, we'll set it to the Y axis.
![](/media/docs/tutorials/manipulation/creating-a-staff/07LineAxisChanged.png)

Next, if we look close, the line is still relatively close to the center of our staff. If we try to grab it now, it will work! but only near the middle where that line is. In order to extend it, we'll adjust the *Offset Min* and *Offset Max* values to fit the length of our staff.
![](/media/docs/tutorials/manipulation/creating-a-staff/08OffsetMinMax.png)

Notice how we left just a little bit of room between the end of the line and the model. This is because, if we extend the line to the very edge of the model, if the player grabs at that end, you could have situations where the grab appears to be halfway off the model. So, by leaving just a little bit of space, you can make sure you have really good visuals and the player gets a "full" grab. This is completely optional though and depends on your specific use case. Tweak the values and test them to find your perfect balance!

Lastly, since its a staff that can be grabbed from any direction, set the *Bidirectional* checkbox to true and that will complete the set up!

#### Recap & Test
Let's recap everything we've done so far:
1) We created a staff model using a parent and child game object structure.
2) We added a [UxrGrabbableObject](/api/T_UltimateXR_Manipulation_UxrGrabbableObject#uxrgrabbableobject-class) with a single grab point in the middle of our staff.
3) We added a [UxrGrabPointShapeAxisAngle](/api/T_UltimateXR_Manipulation_UxrGrabPointShapeAxisAngle#uxrgrabpointshapeaxisangle-class) and adjusted the settings to fit our needs
4) We created an empty child Game Object, called it Center and added it to the [UxrGrabPointShapeAxisAngle](/api/T_UltimateXR_Manipulation_UxrGrabPointShapeAxisAngle#uxrgrabpointshapeaxisangle-class)

***All that's left to do now is to test it!***


/media/docs/tutorials/manipulation/creating-a-staff/staff.mp4

