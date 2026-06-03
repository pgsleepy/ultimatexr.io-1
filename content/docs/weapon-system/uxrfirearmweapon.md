---
title: "UxrFirearmWeapon"
---

## UxrFirearmWeapon

![](/media/docs/weapon-system/weapons/Shotgun.png)

`UxrFirearmWeapon` is the component for any weapon that fires projectiles. Add it to the root of a weapon hierarchy alongside a `UxrProjectileSource`. It requires at least one trigger entry, which defines the shooting behaviour for a projectile type.

The component automatically reads controller trigger input, animates the trigger geometry, blends the grip hand pose, and fires rounds. No input code is required.

![](/media/docs/weapon-system/weapons/UxrFirearmWeaponShotgunInspector.png)

## Setting Up a Firearm

1. Create the weapon model hierarchy. At minimum you need a root GameObject for the grip and a child for the trigger geometry.
2. Add `UxrGrabbableObject` to the root GameObject (the grip). Configure the grab points and snap transforms for each registered avatar as you would for any grabbable.
3. Add `UxrFirearmWeapon` and `UxrProjectileSource` to the same root GameObject.
4. In the `UxrProjectileSource` inspector, add a **Shot Type** entry. Assign a **Shot Source** transform (the muzzle point), and configure the projectile settings.
5. In the `UxrFirearmWeapon` inspector, add a **Trigger** entry. Set **Trigger Grabbable** to the trigger's `UxrGrabbableObject`, set **Cycle Type**, and assign the **Shot Audio** clip.

For weapons with detachable magazines, create a `UxrGrabbableObjectAnchor` where the magazine attaches. Assign it to **Ammunition Mag Anchor** in the trigger entry. Create a magazine prefab with `UxrFirearmMag` and a `UxrGrabbableObject`, tagged to match the anchor.

## Firing Cycles

Each trigger has a **Cycle Type** that controls how rounds are fired:

- **Manual Reload**: One round fires per trigger pull, but the weapon must be manually reloaded (e.g. by pump action) before it can fire again. Use this with `UxrShotgunPump`.
- **Semi Automatic**: One round fires each time the trigger is pulled from rest. The trigger must be released before firing again.
- **Fully Automatic**: Rounds fire continuously while the trigger is held down.

## Recoil

Recoil is applied as a procedural offset and rotation animation after each shot. It is applied after the grabbable object's constraints, so it works correctly with any constraint configuration.

Separate recoil values can be set for one-hand and two-hand grips. Using both hands significantly reduces recoil.

Assign a **Recoil Axes** transform to control the direction the recoil offset and rotation are applied in (z forward, y up). If not assigned, the root grabbable's own axes are used.

## UxrProjectileSource

`UxrProjectileSource` is a required companion component that defines what is actually shot. It holds a list of **Shot Types** (of type `UxrShotDescriptor`), each describing one kind of projectile.

![](/media/docs/weapon-system/weapons/UxrFirearmWeaponShotgunProjectileSource.png)

A rifle with a grenade launcher attachment would have two shot types: one for bullets and one for grenades. The trigger index in `UxrFirearmWeapon` maps to the shot type index in `UxrProjectileSource`.

### Shot Descriptor parameters

- *Shot Source*: Transform that defines the muzzle position and direction. The projectile travels forward from this point.
- *Tip*: Optional transform where a muzzle-tip effect prefab is instantiated on each shot.
- *Use Automatic Projectile Trajectory*: When enabled, `UxrWeaponManager` automatically updates the projectile position each frame. Disable for manual trajectory control.
- *Shot Animation Var Name*: Optional Animator trigger parameter name fired on the weapon animator when a round is shot.
- *Prefab Instantiate On Tip When Shot*: Optional effect prefab spawned at the tip on each shot (e.g. a muzzle flash or particle system).
- *Prefab Instantiate On Tip Life*: Lifetime in seconds before the tip prefab is destroyed.
- *Prefab Instantiate On Tip Parent*: When enabled, the tip prefab is parented to the weapon. When disabled it is unparented so it stays in world space.
- *Projectile Prefab*: Optional visible projectile GameObject (a bullet tracer, etc.) spawned per shot.
- *Projectile Speed*: Travel speed in metres per second.
- *Projectile Max Distance*: Maximum travel distance in metres before the projectile is destroyed.
- *Projectile Length*: Physical length of the projectile used in raycast calculations.
- *Projectile Damage Near*: Damage dealt at point-blank range.
- *Projectile Damage Far*: Damage dealt at maximum range. Damage is interpolated linearly between near and far distances.
- *Projectile Impact Force Multiplier*: Multiplier applied to the physics force added to rigidbodies on impact.
- *Collision Layer Mask*: Layers the projectile can collide with.
- *Prefab Instantiate On Impact*: Optional effect prefab spawned at the impact point (blood, sparks, etc.).
- *Prefab Instantiate On Impact Life*: Lifetime in seconds of the impact prefab.
- *Prefab Scenario Impact Decal*: Default impact decal placed on hit surfaces. Can be overridden per surface using `UxrOverrideImpactDecal`.
- *Prefab Scenario Impact Decal Life*: Lifetime in seconds before the decal begins fading.
- *Decal Fadeout Duration*: Duration in seconds of the decal fade-out.
- *Create Decal Layer Mask*: Layers on which impact decals are created.

## UxrFirearmMag

`UxrFirearmMag` is the magazine component. Add it alongside a `UxrGrabbableObject` on the magazine prefab. The magazine snaps into the weapon's `UxrGrabbableObjectAnchor` using standard placement.

![](/media/docs/weapon-system/weapons/UxrFirearmMag.png)

### Parameter Reference

- *Rounds*: Current number of rounds remaining.
- *Capacity*: Maximum number of rounds the magazine can hold.

## Parameter Reference

### Recoil Axes

- *Recoil Axes*: Transform whose local axes define the direction of the recoil offset and rotation. If not assigned, the grabbable object's own transform is used.

### Triggers (Per Trigger Entry)

- *Projectile Shot Index*: Index in the `UxrProjectileSource` Shot Types list that this trigger fires.
- *Cycle Type*: Firing cycle. Options: Manual Reload, Semi Automatic, Fully Automatic.
- *Max Shot Frequency*: Maximum number of rounds per second (fully automatic). Zero means no limit.
- *Shot Audio*: Audio sample played when the trigger fires.
- *Shot Audio No Ammo*: Audio sample played when the trigger is pulled with no ammo.
- *Shot Haptic Clip*: Haptic feedback sent to the grabbing hand on each shot.
- *Trigger Grabbable*: The `UxrGrabbableObject` the player must grip to access the trigger. This is also the object whose grab point blend value drives the trigger press animation.
- *Grabbable Grab Point Index*: Grab point index on **Trigger Grabbable** used for this trigger.
- *Trigger Transform*: Transform that rotates visually as the trigger is pressed.
- *Trigger Rotation Axis*: Local axis around which the trigger rotates.
- *Trigger Rotation Degrees*: Degrees the trigger rotates at full press.
- *Ammunition Mag Anchor*: The `UxrGrabbableObjectAnchor` where detachable magazines for this trigger slot are placed.
- *Recoil Angle One Hand*: Rotation in degrees applied as recoil when one hand is gripping.
- *Recoil Angle Two Hands*: Rotation in degrees applied as recoil when two hands are gripping.
- *Recoil Offset One Hand*: World-space position offset applied as recoil with one hand.
- *Recoil Offset Two Hands*: World-space position offset applied as recoil with two hands.
- *Recoil Duration Seconds*: Duration in seconds of the recoil animation after each shot.