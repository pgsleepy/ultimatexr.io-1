---
title: "UxrStandardAvatarController"
---

# UxrStandardAvatarController

`UxrStandardAvatarController` is the default avatar controller provided by UltimateXR. Add it to the same root GameObject as your `UxrAvatar` component and it will automatically update the avatar every frame, processing input, updating tracking, solving IK, and triggering hand poses.

The default view is very simple, but will change once the avatar has hand poses and enough rig information to enable IK.

![](/media/docs/avatars/uxrstandardavatarcontroller/01Component.png)

## Controller Events

The **Controller Events** list is where you define how button presses on the VR controllers map to hand poses. Each entry links a controller input to a hand pose and an optional animation type that gives it special meaning if necessary.

![](/media/docs/avatars/uxrstandardavatarcontroller/ControllerEvents.png)

Each event has the following fields:

- **Hand**: Whether the event applies to the left hand, the right hand, or both.
- **Buttons**: The button or combination of buttons that trigger the pose. You can select any combination of controller buttons. Setting this to **Everything** makes the pose active regardless of input, useful for always-on poses like *Pointing* that can also be triggered by proximity.
- **Animation Type**: Assigns a semantic meaning to the event. Available types are:
  - **None**: A general-purpose pose with no special framework behavior.
  - **Grab**: Triggers the grabbing system in addition to the hand pose. Assign this to the grip button. When pressed, the hand will not only adopt the grab pose but will also attempt to interact with any `UxrGrabbableObject` within reach.
  - **Pointing**: Triggers the pointing pose. When the hand enters a volume defined by a `UxrFingerPointingVolume` component, typically placed in front of UI panels, the pointing pose activates automatically even without a button press.
- **Pose**: The hand pose asset to use when the event fires.
- **Pose Blend Value**: For blend poses, this controls where between the open and closed grip the hand rests. Range is 0.0 (fully open) to 1.0 (fully closed). For grab events this value is often driven by the grabbed object.

The order of entries matters. When multiple events are active at the same time, the one listed first wins. Arrange your events from highest to lowest priority.

## Setting Up Hand Gestures

Here is a typical gesture configuration for a standard avatar:

1. **Grab**: Add an entry, set the Animation Type to *Grab*, assign the grip button (e.g., **Grip**), and select a blend pose such as `grabBlend`.

2. **Pointing**: Add an entry, set the Animation Type to *Pointing*, set Buttons to **Everything**, and assign your `pointing` fixed pose. Using *Everything* allows the pointing volume proximity to trigger it even without a specific button.

3. **Custom gesture**: Add an entry, set the Animation Type to *None*, assign the button you want (e.g., **Thumbstick Press**), and select your custom fixed pose.

## Arm IK

When **Use Arm IK** is enabled, the controller uses inverse kinematics to position the avatar's upper arms based on the tracked hand positions.

![](/media/docs/avatars/uxrstandardavatarcontroller/ArmIK.png)

- **Arm IK Elbow Aperture**: Controls how much the elbow flares outward when the arm is in a relaxed position. Range: 0.0 to 1.0. A value around 0.5 is a good starting point for most avatars.
- **Arm IK Over Extend Mode**: Defines what happens when the user reaches further than the arm length allows.

Arm IK has the most visible effect on *Half or Full Body* avatars. For *Hands Only* avatars the arms are not present in the rig so this setting has no effect.

## Body IK

When **Use Body IK** is enabled, the controller solves full-body inverse kinematics based on the headset and controller positions. Even though only the head and hands are tracked, the result creates a believable body posture that follows the user's real motion.

![](/media/docs/avatars/uxrstandardavatarcontroller/BodyIK.png)

The **Body IK Settings** control how the spine and head respond to head movement:

- **Lock Body Pivot**: Keeps the avatar root in place, allowing only rotation around the vertical axis. This prevents the avatar from sliding when the user physically walks within the play area.
- **Body Pivot Rotation Speed**: How quickly the body rotates to face the same direction as the head.
- **Head Free Range Bend / Torsion**: How many degrees the head can move before the spine begins to follow. A larger value gives the head more freedom to look around independently.
- **Neck / Head Balance**: Distributes rotation between the neck bone and the head bone. 0.0 is all neck, 1.0 is all head. Values in between distribute rotation across both.
- **Spine / Chest / Upper Chest Bend and Torsion**: How much each spinal segment participates when the head bends or turns. Distributing rotation across multiple segments produces a more organic posture.
- **Neck Base Height / Forward Offset**: The position of the base of the neck relative to the avatar root. Used to create a virtual neck when the avatar rig has no dedicated neck bone.
- **Eyes Base Height / Forward Offset**: The position of the eyes relative to the avatar root. This tells the IK solver where the head should be placed so the camera ends up exactly at eye level.

Body IK only applies to *Half or Full Body* avatars. If your avatar uses the *Hands Only* rig type, these settings have no effect.

## Leg IK

The **Use Leg IK** toggle enables inverse kinematics for the legs. This feature is currently in development.

Where to go from here:

- Open the **Hand Pose Editor** from the UxrAvatar component to create the poses referenced in your controller events.
- Explore the **UxrGrabbableObject** component to set up objects the avatar can pick up, and assign specific grab poses to match different object shapes.
- Add a **UxrStandardSmoothLocomotion** component to the root GameObject if you prefer smooth locomotion over the default teleportation.
