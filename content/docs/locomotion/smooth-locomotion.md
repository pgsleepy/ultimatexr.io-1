---
title: "Smooth Locomotion"
---

# Smooth Locomotion

Smooth locomotion is a continuous movement system that lets users travel through the scenario using the joysticks, similar to a first-person shooter. The left joystick moves the avatar and the right joystick turns it. Pressing the left joystick in sprints.

Smooth locomotion gives more direct control than teleportation but can cause motion sickness in some users, particularly when combined with free smooth turning. For users prone to discomfort, consider using snap or fade turning instead.

## `UxrStandardSmoothLocomotion`

`UxrStandardSmoothLocomotion` is the built-in smooth locomotion component provided by UltimateXR. It derives from `UxrSmoothLocomotion`, which handles most of the processing. You can also subclass `UxrSmoothLocomotion` directly if you need a custom implementation.

Smooth locomotion uses Unity's `CharacterController` to drive movement. You will need one on the root of your avatar.

Setting up `UxrStandardSmoothLocomotion` on an avatar:

1. Open your avatar prefab or select the avatar in the scene.
2. Add the `UxrStandardSmoothLocomotion` component to the root GameObject of the avatar.
3. If no `CharacterController` exists on the root yet, click **Add CharacterController** in the component inspector. Then click **Adjust Collider** to size it automatically to the avatar.
4. Disable any `UxrTeleportLocomotion` components if you want smooth locomotion only.

![](/media/docs/locomotion/smooth-locomotion/UxrStandardSmoothLocomotion.png)

That's it! With the default settings you can now move with the left joystick, turn with the right joystick, and sprint by pressing the left joystick in.

## Parameter Reference

### General

- *Character Controller*: A reference to Unity's Character Controller on the avatar. Use the button below to set it up automatically.

### Movement

- *Max Speed*: Maximum horizontal movement speed in units per second.
- *Use Acceleration*: When enabled, speed builds up and winds down gradually rather than changing instantly. This feels more natural but may feel sluggish to some users.
- *Acceleration*: How quickly movement speed increases until it reaches *Max Speed*. Only relevant when *Use Acceleration* is enabled.
- *Deceleration*: How quickly movement speed decreases when the joystick is released or input is reduced. Only relevant when *Use Acceleration* is enabled.
- *Sprint Modifier*: Speed multiplier applied on top of *Max Speed* while the sprint input is held.
- *Deadzone*: Minimum joystick input required before movement begins. Increase this if you notice the avatar drifting from unwanted stick input.
- *Snap Back Distance Threshold*: Minimum distance required to snap the avatar back to its last valid position when the `CharacterController` gets stuck against geometry.

### Rotation

- *Turn Type*: How the avatar turns when the horizontal rotation input is applied. Available modes:
  - *Not Allowed*: Turning is disabled. Useful if you want to restrict avatar rotation entirely.
  - *Snap*: The avatar immediately rotates by *Turn Step Degrees* each time the turn input passes the deadzone. This is the most comfortable option for users prone to motion sickness.
  - *Fade*: Like Snap, but the screen briefly fades out before the turn and fades back in after. The fade color and duration are configurable.
  - *Interpolate*: The avatar rotates to the new angle over a fixed duration instead of snapping.
  - *Smooth*: The avatar rotates continuously at a constant speed while the joystick is held. This feels most like a traditional FPS but is the mode most likely to cause motion sickness.
- *Turn Deadzone*: Minimum horizontal input required before a turn triggers.
- *Turn Cooldown*: Time in seconds to wait before another discrete turn can occur while the joystick is still held. Prevents unintended rapid turning in Snap, Fade, and Interpolate modes.
- *Turn Step Degrees*: Angle of each discrete turn in Snap, Fade, and Interpolate modes.
- *Fade Turn Color*: The screen color used during fade-based turns.
- *Fade Turn Seconds*: Duration of the fade effect when the Turn Type is *Fade*.
- *Interpolate Turn Seconds*: Duration of the rotation transition when the Turn Type is *Interpolate*.
- *Smooth Turn Speed Deg*: Continuous turning speed in degrees per second when the Turn Type is *Smooth*.
- *Smooth Rotation*: How smoothly the avatar and camera rotation track their target orientation. Lower values feel more responsive; higher values add a slight smoothing.

### Gravity

- *Gravity*: Downward acceleration applied to the avatar while it is airborne, in units per second squared. The default value approximates Earth gravity.
- *Grounded Stick Force*: A small constant downward force applied while the avatar is on the ground. This helps keep the `CharacterController` pressed against floors and gentle slopes so it doesn't float.
- *Terminal Velocity*: Maximum speed the avatar can reach while falling.

### Collider

The collider section controls how the `CharacterController` capsule is sized and positioned. These values also affect how the avatar fits through doorways and under low ceilings.

- *Min Height*: Minimum allowed height for the capsule collider. Prevents the collider from becoming too small when the user crouches.
- *Max Height*: Maximum allowed height for the capsule collider. Prevents it from becoming unreasonably tall.
- *Radius*: Radius of the capsule collider in meters. Increase this to make the avatar harder to squeeze through narrow gaps.
- *Eye To Top Distance*: Distance from the user's eye position to the top of the capsule. Used to position the top of the collider at roughly the top of the user's head.
- *Collider Center Y Offset*: A manual vertical offset added to the collider center. Use this to fine-tune how the capsule aligns with the avatar if the automatic placement is slightly off.

### Direction

- *Movement Relative To*: The reference used to determine which way is forward when moving. Options are:
  - *Head*: Moving forward travels in the direction the user is looking. This is the most common choice for VR.
  - *Left Hand*: Moving forward travels in the direction the left controller is pointing.
  - *Right Hand*: Moving forward travels in the direction the right controller is pointing.