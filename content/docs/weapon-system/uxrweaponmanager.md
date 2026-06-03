---
title: "UxrWeaponManager"
---

# UxrWeaponManager

`UxrWeaponManager` is the singleton that drives the weapon system at runtime. It advances all projectiles in flight, tests for collisions each frame, applies damage to `UxrActor` components, and fires events for any code that needs to react to weapon impacts.

You do not need to add it manually. The manager is created automatically the moment any `UxrActor` in the scene is present.

## Projectile Simulation

When a weapon fires, a new projectile is registered. From that point the manager is responsible for:

1. Advancing the projectile position each frame at the configured speed.
2. Performing a raycast along the projectile's path to detect collisions.
3. Checking whether the hit object or any parent has an `UxrActor`. If it does, damage is calculated based on distance using the near and far damage values and applied to the actor.
4. If no actor is involved, a non-damaging impact event is raised. Some objects, such as impact decals and effect prefabs, are instantiated at the hit point.
5. Destroying the projectile when it reaches maximum distance or after impact.

Projectiles whose `UxrShotDescriptor` has **Use Automatic Projectile Trajectory** disabled are registered but not advanced. They remain in the manager's list until explicitly removed, which allows custom trajectory scripts to control movement.

## Radius Damage

Grenades and explosive weapons apply radius damage. This means finding all registered actors within the explosion radius and applying linearly interpolated damage, from the near value at the explosion center to the far value at the outer edge.

## Events

`UxrWeaponManager` fires three events:

- **DamageReceiving**: Raised on the manager just before an actor takes damage. Setting `e.Cancel = true` prevents the damage. This is the global equivalent of `UxrActor.DamageReceiving` and fires first.
- **DamageReceived**: Raised on the manager after an actor has taken damage. Cannot be cancelled.
- **NonActorImpacted**: Raised when a projectile hits something that has no `UxrActor`. Use this to trigger environment reactions such as breaking glass or spawning sparks.

## Parameter Reference

`UxrWeaponManager` has no configurable inspector parameters. Place it in the scene or let it be created automatically, and the system handles the rest.
