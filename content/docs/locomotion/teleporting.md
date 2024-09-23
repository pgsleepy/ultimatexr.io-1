---
title: "Teleporting"
---

# Teleporting

Teleporting is one of the most common ways to move around in Virtual Reality. It solves a wide range of limitations, such as being able to move up or down different levels and move quickly around vast fields with minimal motion sickness.

The avatar prefabs in UltimateXR come with teleporting components by default, which can be found hanging from the HandsIntegration object.

![](/docs/guides/media/locomotion/01Hierarchy.png)
 
Teleporting uses one component for each hand. These default components can be disabled and changed by any other locomotion component(s). They can also be left enabled and complemented with new locomotion component(s) in the case they add more features.

At runtime, teleporting looks like this:

![](/docs/guides/media/locomotion/02Teleporting.jpg)

## The `UxrTeleportLocomotion` component

![](/docs/guides/media/locomotion/03TeleportComponent.jpg)

### General parameters
- *Controller Hand*: Which hand controls the input.
- *Use Controller Forward*: Will the teleport use the controller's forward vector instead of its own transform forward?
- *Parent To Destination*: Whether to parent the avatar to the destination object after teleport. Use it when building applications with moving vehicles or platforms the avatar can move on, so that the avatar keeps the relative position/orientation after teleporting.
- *Shake Filter*: The amount of filtering to apply to the hand movement to smooth it out.

### Translation
- *Translation Type*: Which translation method to use.
- *Translation Fade Color*: The fade color when Fade translation type is used.
- *Translation Fade Seconds*: The fade transition in seconds when Fade translation type is used.
- *Smooth Translation Seconds*: The translation duration in seconds when Smooth translation type is used.
- *Allow Joystick Back Step*: Whether to allow back steps by pressing the joystick down.
- *Back Step Distance*: The distance of each back step.

### Rotation
- *Rotation Type*: Which rotation method to use.
- *Rotation Step Degrees*: The amount of degrees of each turn for Immediate and Fade rotations.
- *Rotation Fade Color*: The fade color when Fade rotation is used.
- *Rotation Fade Seconds*: The fade transition in seconds when Fade rotation is used.
- *Smooth Rotation Seconds*: The rotation duration in seconds when Smooth rotation is used.
- *Reorient After Teleport*: How to orient the view right after teleporting.

### Target
- *Target*: Which teleport target to use. Can be either a prefab or an already instantiated object.
- *Target Placement Above Floor*: Offset applied to the teleport target to help placing it a little above the floor.
- *Show Target Also When Invalid*: Whether to show the target object also when the destination is not valid.
- *Target Color When Valid*: Target color to use when the destination is valid.
- *Target Color When Invalid*: Target color to use when the destination is not valid.

### Constraints
- *Trigger Colliders Interaction*: Whether colliders with the trigger property set will interact with the teleport raycasts.
- *Max Allowed Distance Travel*: Maximum allowed distance that can be travelled using each teleport.
- *Max Allowed Height Difference*: Maximum allowed height difference to be able to teleport.
- *Max Allowed Slope Degrees*: Maximum allowed slope degrees at destination.
- *Destination Validation Radius*: Radius of a cylinder that will be used to validate the destination surroundings to allow teleporting.
- *Valid Target Layers*: Valid layers for teleporting destination objects.
- *Blocking Target Layers*: Objects that will block teleporting raycasts.

### Arc
- *Arc Segments*: The number of subdivisions to use to render the arc.
- *Arc Width*: The width of the arc.
- *Arc Scroll Speed (Valid Target)*: The arc material scroll speed when the destination is valid.
- *Arc Scroll Speed (Invalid Target)*: The arc material scroll speed when the destination is invalid.
- *Arc Material (Valid Target)*: The arc material used when the destination is valid.
- *Arc Material (Invalid Target)*: The arc material used when the destination is invalid.
- *Arc Fade Length*: The fade length used when the arc exits the hand or collides with a target to hide intersections.
- *Blocking Raycast Steps Quality*: How many subdivisions along the arc to perform to raycasts against the scenario.