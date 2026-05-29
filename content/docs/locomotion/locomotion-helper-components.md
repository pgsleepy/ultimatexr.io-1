---
title: "Locomotion Helper Components"
---

# Locomotion Helper Components

UltimateXR provides a set of small helper components that extend the behavior of the built-in locomotion systems.

## UxrTeleportSpawnCollider

`UxrTeleportSpawnCollider` lets you define a fixed teleport destination using a trigger volume. When the teleport arc hits a collider that has this component, if the user teleports, the avatar is sent to a specific spawn point instead of landing exactly where the arc hits. This is useful for things like platforms with a designated standing spot, the tops of ladders, or any area where you want to control exactly where the user ends up.

Add the component to a GameObject that has a `Collider` on it or below its hierarchy. The component requires at least one spawn transform.

![](/media/docs/locomotion/locomotion-helper-components/UxrTeleportSpawnCollider.png)

- *Spawn Pos One Side*: The primary spawn point. The avatar will be placed here when it teleports into this volume.
- *Spawn Pos Optional Other Side*: An optional second spawn point. When both spawn positions are set, the framework picks the one that is farther away from the avatar's current position. This is useful for two-sided entry points such as the top and bottom of a ladder.
- *Alt Target Pos One Side*: An optional override for where the visual teleport target is displayed for the primary side. Use this when you want the visual indicator to appear at a different location than the actual spawn point.
- *Alt Target Pos Other Side*: Same as above, for the second side.
- *Height Distance Factor*: A weight factor applied when choosing between the two spawn positions based on height difference. Increase this to make the component prefer the spawn point that is closer in height to the avatar's current position.
- *Enable When Selected*: A GameObject that will be enabled while the user is pointing at this component. Use this to show a visual hint or indicator when the destination is targeted.

The component also exposes a **Teleported** event that fires each time the avatar teleports using this spawn collider.

## UxrParentAvatarDestination

`UxrParentAvatarDestination` marks an object as a moving platform or vehicle that the avatar should become a child of after landing on it. Without this component, an avatar teleported onto a moving platform will stay at the world-space position it landed on and will not follow the platform as it moves.

Add the component to the moving platform or vehicle GameObject, or to any of its parents.

- *Parent Avatar*: When enabled, the avatar is re-parented to this object after locomotion places the avatar there. Disable this to temporarily suspend the re-parenting behavior.

![](/media/docs/locomotion/locomotion-helper-components/UxrParentAvatarDestination.png)

## UxrProhibitLocomotionDestination

`UxrProhibitLocomotionDestination` marks an object as an invalid locomotion destination. When the teleport arc hits an object with this component, the destination will be shown as invalid and teleportation will be blocked.

Add the component to any object that should be off-limits, such as tables, machinery, or elevated surfaces that the user should not be able to stand on.

![](/media/docs/locomotion/locomotion-helper-components/UxrProhibitLocomotionDestination.png)

Note that this component blocks teleportation destinations on the marked object, but it does not block the avatar from being physically pushed into it during smooth locomotion.

## UxrTeleportTarget

`UxrTeleportTarget` is the visual indicator that appears on the floor while the user is aiming a teleport arc. The built-in avatar prefabs already include a default target, but you can create your own and assign it to the `UxrTeleportLocomotion` component's **Target** field.

A teleport target typically consists of a floor decal or marker mesh. `UxrTeleportTarget` can optionally handle changing its color to signal whether the current destination is valid or invalid, and can also show a directional arrow that previews which way the avatar will face after teleporting.

![](/media/docs/locomotion/locomotion-helper-components/UxrTeleportTarget.png)

- *Reorient Arrow Root*: A separate GameObject inside the target that shows a directional arrow. When the user rotates the joystick before confirming a teleport, this arrow rotates to preview the new facing direction. Leave this empty if your target design does not include a directional indicator.
- *Valid Color State Ignore List*: A list of Objects whose renderers will not change color according to the validity.

The color of the target materials can be updated automatically by the teleport component to reflect validity. You configure the valid and invalid colors directly on the `UxrTeleportLocomotion` component using the **Target Color When Valid** and **Target Color When Invalid** fields.

