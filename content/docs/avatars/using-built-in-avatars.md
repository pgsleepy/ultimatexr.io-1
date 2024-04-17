---
title: "Using Built-in Avatars"
---

# Using Built-in Avatars

Besides the Cyborg avatar that is used in the example scene, UltimateXR comes with 2 main avatar prefabs:

- BigHandsAvatar
- SmallHandsAvatar

They can be found in the UltimateXR/Prefabs/Avatars folder.

The _URP prefab is meant to be used in Universal Render Pipeline applications, while the _BRP variant is for applications using the Built-in Render Pipeline.

![](/docs/avatars/media/01AvatarPrefabs.png)
 
The first question normally is, but where’s the normal hands avatar? The answer is there is no “normal” hand size, hand sizes can vary but in a very simplified world they can be grouped in small hands and big hands. Inclusion is one of the main goals of our avatars, and we try to support both in all our applications so that everyone feels included.

Let’s create a new scene and drag the BigHandsAvatar to it. Make sure to remove any existing camera.

You will notice this warning sign on the avatar inspector:

![](/docs/avatars/media/02AvatarWarning.png)
 
Click Fix to save your avatar prefab variant to a folder in your project. This is to make sure all changes will be applied to your avatar prefab variant instead of the UltimateXR avatar prefab. Since the UltimateXR prefab may be overwritten with changes during framework updates, you always want to work with a prefab variant that stores your modifications.

This has additional advantages:
- No information is lost on UltimateXR updates.
- If you are working with a version control system, it is better to have changes saved in your own prefab.
- If the UltimateXR prefab is updated with new functionality, your prefab will inherit all improvements automatically.
- Support for new devices will be added when they hit the market. This support will also be inherited by your prefab. 

Now click Play. If your environment has been correctly set up and the device integration is working, you should be able to see your hands and make a fist by pressing the grab button.

![](/docs/avatars/media/03AvatarTesting.png)
 
You can change your appearance using the different combinations provided. You may see that inside the avatar there are glove and hand objects for each side. You can select to activate either the gloves or the hands, and assign any of the following pre-defined materials:

![](/docs/avatars/media/04Gloves.png)
 
For the glove objects:

- BigGlovesLogoMat (URP or BRP)
- BigGlovesTechnicalMat (URP or BRP)

For the hand objects. From lighter skin to darker skin:

- BigHandsSkinType1Mat_PBR
- BigHandsSkinType2Mat_PBR
- BigHandsSkinType3Mat_PBR
- BigHandsSkinType4Mat_PBR
- BigHandsSkinType5Mat_PBR
- BigHandsSkinType6Mat_PBR

You can also create a new custom skin by creating a new material and assigning the UltimateXR/Hands/Hand shader. Make sure to assign the provided surface input textures or duplicate any of the existing hand materials to start using a reference.

If you decide to use the hand objects instead of the gloves, make sure you replace the glove renderers assigned by default in the UxrAvatar component with the hand renders:

![](/docs/avatars/media/05ZRenderers.png)
 
One important thing is making sure you do not move these hands, since there is another set of “virtual” hands that they depend on. If you check in the object tree, you will notice that there is a nested prefab called BigHandsIntegration.

![](/docs/avatars/media/06HandsIntegration.png)
 
The LeftHand and RightHand objects inside BigHandsIntegration will show a green overlay hand in the scene window when selected. These hands need to be perfectly aligned with the avatar hand to work properly. Since they are already aligned, if you move any of the avatar hands they will become misaligned. If you really need to move an avatar hand for whatever reason, make sure you move the hand inside the HandsIntegration prefab to keep the alignment.

The BigHandsIntegration prefab is responsible for a lot of critical tasks:

- Providing support for all available VR controllers.
- Containing all graphics to represent VR controllers with hands that mimic user input (note: Inclusion of all controller graphics is still pending legal terms, but we hope it will be added soon).
- Knowing where to place the hands in space using tracking.
- Provide ready-to-use components for things such as grabbing and teleporting.

The fact that it can easily add all this functionality to any avatar, even to those created by the user, is one of the most important features in UltimateXR. By using a prefab, we make sure that any new controllers, graphics, or components will be available automatically after any update.

A last step is required if you opted for the hand objects instead of the gloves. Go to the grabbers located below the LeftHand and RightHand inside the BigHandsIntegration object.

![](/docs/avatars/media/06Z1GrabberFix.png)
 
Both components currently reference the glove renderers, which you deactivated in favor of the hands. You need to reference the HandLeft and HandRight renderers that you activated instead. What this does is tell the grabbers which objects should be used to preview grab poses.

![](/docs/avatars/media/06Z2GrabberFix.png)
 
Possible next steps setting up your avatar:

- On the root GameObject, setting up the UxrStandardAvatarController component to add hand gestures based on user input.
- On the root GameObject, adding new poses to the UxrAvatar component by going to the bottom of the Hand Poses section and opening the Hand Pose Editor.
- Inside the BigHandsIntegration GameObject, setting up teleportation hanging from the ForwardLeft/ForwardRight objects.
- Inside the BigHandsIntegration GameObject, enabling laser pointers hanging from the ForwardLeft/ForwardRight objects to interact with Unity UIs. This will require creating an EventSystem in the scene (menu GameObject -> UI -> EventSystem) and adding a UxrPointerInputModule component to the EventSystem GameObject.
- Adding a UxrCameraWallFade component to the avatar’s Camera if you want to fade the screen to black whenever the user clips through colliders. “Allow Traverse” will only fade through the geometry while “Strict” will keep the screen black until the user returns to the original position.

