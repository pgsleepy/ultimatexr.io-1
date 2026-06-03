---
title: "UxrProjectileDeflect"
---

# UxrProjectileDeflect

`UxrProjectileDeflect` allows a collider to reflect incoming projectiles rather than absorbing them. When a projectile from a `UxrProjectileSource` hits an object that has this component in the same GameObject or any parent, the projectile bounces off the surface according to the standard reflection vector and continues traveling in the new direction. A deflected projectile can then hit other objects and deal damage normally.

{{< video src="/media/docs/weapon-system/helper-components/ProjectileDeflect.mp4" >}}

A typical use case is a shield or sword that can be held in the hand to block and redirect incoming fire.

The object doesn't require to be grabbable, but the component inherits from `UxrGrabbableObjectComponent`, so it also supports tracking the owner `UxrActor` automatically if it is grabbable. A deflected projectile is attributed to the deflector's owner actor rather than to the original source.

![](/media/docs/weapon-system/helper-components/UxrProjectileDeflectInspector.png)

## Setup

1. Add a `Collider` to the blocking surface (the face of a shield, the blade of a sword, etc.).
2. Add `UxrProjectileDeflect` to the same GameObject.
3. Optionally assign an audio sample to **Audio Deflect** for the impact sound.
4. To place a decal on the deflecting surface at the impact point, assign **Decal On Reflect**. Enable **Two Sided Decal** if the surface is thin and you want a matching decal on the back face.
5. If the deflector is grabbable, add `UxrGrabbableObject` to the same GameObject. When grabbed, the component automatically assigns the grabbing avatar's `UxrActor` as the owner so deflected kills are attributed correctly.

## Parameter reference

- *Audio Deflect*: Audio sample played at the deflection point when a projectile bounces off.
- *Decal On Reflect*: Decal prefab placed on the surface at the deflection impact point.
- *Decal Life*: Lifetime in seconds before the deflection decal fades and is destroyed.
- *Decal Fadeout Duration*: Duration in seconds of the decal fade-out.
- *Two Sided Decal*: When enabled, a second decal is placed on the opposite face of the surface at the deflection point.
- *Two Sided Decal Thickness*: Distance in metres to the back face, used to position the second decal when **Two Sided Decal** is enabled.
- *Collide Layers Add On Reflect*: Optional layer mask added to the projectile's collision mask after it has been deflected. Use this to allow deflected shots to hit layers the original shot could not.
