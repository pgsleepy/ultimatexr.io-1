---
title: "Smooth Locomotion"
---

# Smooth Locomotion

Smooth Locomotion is an alternative movement system to Teleport Locomotion that uses continuous movement to travel across the virtual world. It can provide better immersion but is more prone to induce motion sickness. It is very popular among advanced videogames users.
The controls are similar to FPS (First Person Shooter) games, where the left joystick is used to move and the right is used to turn. 

## The UxrSmoothLocomotion component

The `UxrSmoothLocomotion` component in UltimateXR provides smooth locomotion capabilities to an avatar. It also serves as a demonstration of a possible subclass implementation of the `UxrLocomotion` component.

*Note*: The current smooth locomotion provided by `UxrSmoothLocomotion` is very basic. A more robust implementation will be released very soon.

Setting up `UxrSmoothLocomotion` on an avatar:

1. Have an avatar instantiated in the scene. You can use any of the UltimateXR avatar prefabs located in /UltimateXR/Prefabs/Avatars
2. Make sure that any `UxrTeleportLocomotion` components on your Avatar are inactive
3. Add the `UxrSmoothLocomotion` component anywhere in your Avatar's hierarchy

That's it! With the default settings, you can now smoothly move with the left controller joystick, and smoothly rotate with the right controller joystick.

What's Next? Tweak the following parameters to dial in the precise movement you desire.

![](/docs/guides/media/locomotion/smooth-locomotion/SmoothLocomotion.jpg)
 
### General parameters
- *Parent To Destination*: Whether to parent the avatar to the destination object after teleport. Use it when building applications with moving vehicles or platforms the avatar can move on, so that the avatar keeps the relative position/orientation after teleporting.
- *Meters Per Second Normal*: Speed of normal joystick movement.
- *Meters Per Second Print*: Speed of movement while pressing the sprint button.
- *Walk Direction: Options for what the Up/Forward on the Joystick is based on*:
  - Controller Forward - Forward direction of your left controller.
  - Avatar Forward - Forward direction your Avatar.
  - Look Direction - Forward direction of your Camera.
- *Rotation Degrees Per Second Normal*: Speed of normal smooth rotation.
- *Rotation Degrees Per Second Sprint*: Speed of smooth rotation while sprinting.
- *Gravity*: Gravity Acceleration to apply in the Y direction. -9.81 approximates Earth gravity.

### Input parameters
Sprint Button Hand: Which Hand can enable sprint.
Sprint Button: Button to press to enable sprint.

### Constraints
- *Trigger Colliders Interaction*: Whether colliders with the trigger property set will interact with the teleport raycasts.
- *Collision Layer Mask*: Layers of colliders that will block your movement.
- *Capsule Radius*: In Meters, size of your body collider.
- *Max Step Height*: In Meters, you will climb geometry if it is within this height of your current ground.
- *Max Slope Degrees*: You will climb geometry if the slope is less than this amount.
- *Step Distance Check*: How far forwards to check for Max Steps & Max Slopes.
