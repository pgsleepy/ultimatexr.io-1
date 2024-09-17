---
title: "Creating a Grabbable Ball"
---

# Creating a Grabbable Ball

To start understanding the very basics of how UltimateXR works, we'll first start creating an object that we'll be able to hold and we're also going to adjust the fingers so we hold it properly.

This guide will cover all there is necessary to create your first grabbable object.

## Creating the ball

Let's start with our first grabbable object!

First, create a 3D sphere game object in your scene.
Using the cyborg's hand as a reference, scale down the sphere so that it can be easily grabbed with one hand

![](/docs/tutorials/media/grabbable-ball/01Sphere.png)

## Adding the UxrGrabbableObject component

To make the sphere grabbable, add the [UxrGrabbableObject](/api/T_UltimateXR_Manipulation_UxrGrabbableObject#uxrgrabbableobject-class) component to it. This component enables the object to be grabbed by UxrGrabber components found in the hands of an UxrAvatar.

_Technically_ you have already made a grabbable ball object. However, you will notice that if you press play and try to grab the object, it will grab it through the middle as shown below.

![](/docs/tutorials/media/grabbable-ball/02HandThroughBall.png)

To fix this, we will need to add the appropriate grip pose to the grabbable ball.

## Adding the grip pose

To add the grip pose, we will need select the avatar in the avatar grips menu.

![](/docs/tutorials/media/grabbable-ball/03SelectedAvatar.png)

Having done that, the inspector will now show green fields which shows what is specific to the avatar itself.
In this case, we see that the grip pose, left and right hand grip snap are green, as well as the two snap creation buttons down below.

If we look in the scene view too, we will see that the ball now has both hands around it, this is to preview the grip pose!

![](/docs/tutorials/media/grabbable-ball/04GripPosePreview.png)

Please, select default `GrabBall` grip pose. You will see that a new slider has been added underneath the grip pose selector called `Pose Blend`.
This allows you to blend the pose from one point to another. Changing this value will show the changes directly in the scene view.

![](/docs/tutorials/media/grabbable-ball/05PoseBlendSlider.gif)

Now, please click on both the left and right snap button. This will create two transforms containing the positional and rotational values for the pose.

Select the left one and position the left transform in the right position while adjusting the Pose Blend value in the `UxrGrabbableObjectSnapTransform` component that's inside of these game objects.

![](/docs/tutorials/media/grabbable-ball/06GripPoseBlend.png)

Great. We've now created our first grabbable ball object!

{{% callout tip "Some tips" %}}
To learn more about the `UxrGrabbableObject` component, please check out the following pages.

- [Programming Guide's UxrGrabbableObject page](/docs/programming-guide/manipulation-uxrgrabbableobject/)
- [API's UxrGrabbableObject page](/api/T_UltimateXR_Manipulation_UxrGrabbableObject#uxrgrabbableobject-class).

These pages will allow you to gain a better understanding of the inner workings of the UxrGrabbableObject component and it's properties.
{{% /callout %}}
