---
title: "UxrAvatar"
---

# UxrAvatar

The `UxrAvatar` component is the central piece of any avatar setup in UltimateXR. Add it to the root GameObject of your avatar and it becomes the main component that defines the avatar rig and connects rendering, hand poses, and the rest of the avatar components in the framework.

At its most basic, an avatar only needs a camera so the user can look around. From there you can layer on tracked hands, a full body, interaction, and locomotion.

![](/media/docs/avatars/uxravatar/UxrAvatarInspector.png)

## Avatar Mode

The **Avatar Mode** property determines who or what is driving the avatar.

- **Local**: The avatar is controlled in real time by the user's headset and input controllers. This is the standard mode for the player avatar in your scene.
- **Update Externally**: The avatar is driven by an external source and the framework will not move it automatically. Use this mode for remote players in a networked session or for avatars playing back a recorded session.

## Render Mode

The **Render Mode** property controls what visual elements are displayed.

![](/media/docs/avatars/uxravatar/RenderMode.png)

- **Avatar**: Only the avatar geometry is rendered. No controller models are shown. This is the default.
- **Controllers**: Only the input controller models are rendered. If you also want hands to appear mimicking the user's grip on the controllers, enable the **Show Controller Hands** toggle.
- **Controllers and Avatar**: Both the controller models and the full avatar are rendered at the same time. Use this when the avatar geometry does not overlap visually with the controllers.
- **Controllers and Partial Avatar**: Both the controller models and the avatar are rendered, but a subset of the avatar renderers is hidden to avoid the two meshes intersecting visually. The renderers to hide are configured in the **Partial Avatar Hidden Renderers** list.
- **None**: Nothing is rendered, but all avatar systems remain fully active. Collision, grabbing, and locomotion all keep working. Useful in mixed reality scenarios where real-world hands replace the virtual ones.

**Controllers and Partial Avatar** render mode, using the generic OpenXR controller. Notice the avatar hands are hidden so that they don't overlap with the controller hands:

![](/media/docs/avatars/uxravatar/ControllerAndPartialAvatar.png)

## Rig Type

Set the **Rig Type** to match the complexity of your avatar's skeleton.

- **Hands Only**: A minimal setup with just a camera and two hands.

![](/media/docs/avatars/uxravatar/HandsOnly.png)

- **Half or Full Body**: A complete rig that includes the full upper body. Legs will be supported in upcoming versions.

![](/media/docs/avatars/uxravatar/HalfBody.png)

The rig type controls which bone slots appear in the **Rig** section of the inspector. For a Hands Only avatar only the head and hand transform fields are shown. Selecting Half or Full Body reveals the full skeleton hierarchy for assignment.

## Avatar Renderers

The **Avatar Renderers** list contains all the `Renderer` components that make up your avatar's visible geometry. The framework uses this list to control visibility in different render modes and to hide parts of the avatar that should not be visible from a first-person camera.

![](/media/docs/avatars/uxravatar/AvatarRenderers.png)

A quick way to populate the list is to click the lock icon on the inspector, multi-select all renderer objects in the hierarchy, and drag them into the Avatar Renderers field.

You can additionally configure:

- **Partial Avatar Hidden Renderers**: Renderers that will be hidden when the Render Mode is set to *Controllers and Partial Avatar*. Typically these are the hand and arm meshes that would visually overlap with the controller models.
- **First Person Hidden Renderers**: Renderers that are hidden whenever a first-person camera (`UxrFirstPersonCamera`) is rendering. Usually the head and neck mesh, to prevent the user from seeing the inside of the avatar's skull.

## HandsIntegration

Inside the avatar hierarchy you will find a HandsIntegration object, either `BigHandsIntegration` or `SmallHandsIntegration` depending on which was chosen during setup.

Consider HandsIntegration like gloves for functionality, fitted onto the avatar's hands to provide automatic input/tracking support for all devices and features such as grabbing, UI interaction, and locomotion. More specifically, it provides:

- Support for all available VR input controllers, regardless of manufacturer.
- Graphics for rendering controller models with optional hand overlays that mimic user input.
- Components for grabbing, teleportation, laser pointers, and UI interaction. All ready to use out of the box.

The `LeftHand` and `RightHand` objects inside HandsIntegration show a green overlay hand in the scene window when selected. These virtual hands must remain perfectly aligned with your avatar's actual hand geometry. If you ever need to reposition an avatar hand, make sure to move the matching object inside HandsIntegration as well to keep everything in sync.

![](/media/docs/avatars/uxravatar/HandsIntegration.png)

Because HandsIntegration ships as a prefab, any new controller support, graphics, or interaction features added in future UltimateXR updates will be automatically inherited by your avatar the next time you update the package.

## Hand Poses

The **Hand Poses** section at the bottom of the UxrAvatar inspector lets you manage the set of hand poses available to this avatar. Hand poses are stored as `.asset` files in your project and are used by the hands at runtime to perform gestures and to grip objects.

![](/media/docs/avatars/uxravatar/HandPoses.png)

From this section you can:

- Click **Open Hand Pose Editor** to launch the editor and create or adjust poses.
- View poses inherited from parent prefabs. If the avatar is a prefab variant, parent prefab poses appear as read-only entries. You can create a pose with the same name as an inherited one to override it for this variant without affecting the parent.
- Select each prefab variant, pose asset or open it in the hand pose editor.

For a complete guide on creating and editing hand poses, see [Using the Hand Pose Editor](the-hand-pose-editor).

## Inspector Assistant

When you first add a UxrAvatar component, or when required fields are missing, an assistant panel appears at the top of the inspector. It scans the avatar for common issues and offers one-click fixes, automatically assigning bones from the Animator, setting the rig type, and guiding you through the HandsIntegration setup step by step.

![](/media/docs/avatars/uxravatar/Assistant.png)

For a full walkthrough of setting up a custom avatar with the assistant, see [Creating a Custom Avatar](creating-a-custom-avatar).

Where to go from here:

- Open the **Hand Pose Editor** from the Hand Poses section to start creating gestures for your avatar.
- Set up the **UxrStandardAvatarController** component on the same root GameObject to map controller button presses to hand poses.
- Inside the HandsIntegration GameObject, configure teleportation hanging from the ForwardLeft/ForwardRight objects.
- Inside the HandsIntegration GameObject, enable laser pointers on the ForwardLeft/ForwardRight objects to allow interaction with Unity UIs. This will require creating an EventSystem in the scene (menu GameObject -> UI -> EventSystem) and adding a UxrPointerInputModule component to the EventSystem GameObject.
- Add a `UxrCameraWallFade` component to the avatar's Camera to fade the view when the user clips through colliders.
