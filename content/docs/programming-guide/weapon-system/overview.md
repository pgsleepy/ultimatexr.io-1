---
title: "Weapon System Programming Guide"
---
# Overview
The **weapon system** in UltimateXR provides a framework for firearms, grenades, projectiles, and damage handling in VR. It integrates tightly with the [manipulation system](/docs/programming-guide/manipulation/overview), allowing weapons to be grabbed, aimed, and fired using natural hand interactions.
This guide offers a programmatic perspective. For detailed instructions on setting up components in Unity, please refer to the [Weapon System User Guide](/docs/weapon-system/overview). You can also check the [Weapon System API Reference](/api/N_UltimateXR_Mechanics_Weapons).
## Key Components
### UxrWeaponManager
The `UxrWeaponManager` is a singleton manager responsible for updating projectiles in flight, computing hits against entities, and calculating damage dealt to `UxrActor` components. It acts as the central hub that ties together all weapon-related functionality.
### UxrActor
An `UxrActor` represents any entity that can inflict and/or receive damage. Actors are the targets of the weapon system — when a projectile hits a collider belonging to an actor, the `UxrWeaponManager` computes the resulting damage and notifies the actor.
### UxrWeapon
The `UxrWeapon` class is the base class for all weapons. Weapons are used by `UxrActor` components to inflict damage on other actors.
### UxrFirearmWeapon
`UxrFirearmWeapon` is a type of weapon that shoots projectiles. A firearm has one or more `UxrFirearmTrigger` entries, each allowing a different type of projectile to be fired. Each trigger determines properties such as the shot cycle, shot frequency, ammunition, recoil, and grabbing behavior.
A `UxrFirearmWeapon` requires a `UxrProjectileSource` component that defines the projectiles being shot. If a firearm has more than one trigger (for instance, a rifle that shoots bullets and has a grenade launcher), the `UxrProjectileSource` will need the same number of entries in its `ShotTypes` list.
### UxrGrenadeWeapon
`UxrGrenadeWeapon` represents a grenade that inflicts explosive damage to `UxrActor` components. Grenades support different activation modes through `UxrGrenadeActivationMode`:
- **NoActivation**: The grenade has no activation mechanism.
- **TriggerPin**: Requires removing a pin to start a detonation timer.
- **OnHandLaunch**: The detonation timer starts after the grenade is thrown.
## Projectiles
### UxrProjectileSource
The `UxrProjectileSource` component gives a GameObject the ability to fire shots. It contains one or more `UxrShotDescriptor` entries, each describing a type of projectile that can be fired.
While `UxrProjectileSource` is typically used together with a `UxrFirearmWeapon`, it can also be used independently for any object that needs to fire projectiles.
### UxrShotDescriptor
`UxrShotDescriptor` describes all the information for a type of projectile: speed, damage, range, visual effects, and impact behavior. For example, a rifle with a grenade launcher attachment would have two shot descriptors — one for bullets and one for explosive grenades.
### UxrShotCycle
The `UxrShotCycle` enum defines the supported firearm shot cycles:
- **ManualReload**: Requires a manual reload action to fire the next round.
- **SemiAutomatic**: Fires a single round per trigger press.
- **Automatic**: Keeps firing while the trigger is held down.
## Firearm Components
### UxrFirearmTrigger
`UxrFirearmTrigger` stores all the information related to a trigger in a `UxrFirearmWeapon`, including the shot cycle, fire rate, recoil, and which `UxrShotDescriptor` in the `UxrProjectileSource` to use.
### UxrFirearmMag
`UxrFirearmMag` represents a magazine containing ammo for a `UxrFirearmWeapon`. Magazines can be attached to and detached from firearms using `UxrGrabbableObject` functionality..
### UxrShotgunPump
The `UxrShotgunPump` component enables pump-action reload mechanics on a `UxrFirearmWeapon`. It uses a `UxrGrabbableObject` to detect the pump action. The firearm's shot cycle should be set to `UxrShotCycle.ManualReload` when using this component.
### UxrFirearmAmmoLabel
`UxrFirearmAmmoLabel` draws the remaining ammo count in a firearm magazine. It supports both Unity UI `Text` and TextMeshProUGUI targets.
## Visual Effects
### UxrMuzzleFlash
`UxrMuzzleFlash` provides the muzzle flash visual effect when a weapon fires.
### UxrImpactDecal
`UxrImpactDecal` defines a decal generated as a result of a projectile impact. The `UxrOverrideImpactDecal` component can be used to override the default impact decal on specific surfaces.
## Damage
### UxrDamageType
The `UxrDamageType` enum categorizes the different types of damage:
- **ProjectileHit**: Damage from a projectile impact.
- **Explosive**: Damage from an explosion.
- **Other**: Other types of damage such as falls or environmental hazards.
### UxrDamageEventArgs
`UxrDamageEventArgs` contains the event parameters when damage is dealt, including the actor, damage amount, damage type, and the ray that caused the damage.
## Additional Components
### UxrProjectileDeflect
`UxrProjectileDeflect`, when added to a GameObject with a collider, allows it to deflect shots coming from `UxrProjectileSource` components. This can be used for shields or other deflecting surfaces.
### UxrExplodeHierarchy
`UxrExplodeHierarchy` allows a GameObject and all its rigidbody children to explode. When attached to a GameObject that also has a `UxrActor` component, the explosion is triggered automatically when the actor dies. It can also be triggered explicitly using `Explode()` or `ExplodeNow()`.
