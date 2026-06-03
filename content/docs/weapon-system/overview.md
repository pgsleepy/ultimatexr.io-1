---
title: "Overview"
---

# Overview

{{< video src="/media/docs/weapon-system/WeaponSystem.mp4" >}}

The weapon system in UltimateXR provides a framework for firearms, grenades, projectiles, and damage handling in VR. It builds directly on top of the manipulation system, so weapons are grabbable objects that can be picked up, aimed, and fired with natural hand interactions.

The system can be fully customized through code, but it works out of the box without requiring any extra scripting. By default, it reads the controller input and takes care of updating the weapon state, firing logic, projectiles, and damage events.

The core components are:

- **UxrActor**: Marks a GameObject as a damage-receiving entity with life, death handling, and optional animations.
- **UxrFirearmWeapon**: A grabbable weapon that fires projectiles. Supports semi-automatic, fully automatic, and manual-reload firing cycles, recoil animation, and detachable magazines.
- **UxrGrenadeWeapon**: A grabbable thrown weapon that detonates by timer, pin removal, or impact, inflicting radius damage.
- **UxrProjectileSource**: Defines the projectile types a weapon can fire. Required on any `UxrFirearmWeapon`.
- **UxrFirearmMag**: A detachable magazine that carries rounds. Attaches to the weapon using a `UxrGrabbableObjectAnchor`.
- **UxrWeaponManager**: Singleton that updates all projectiles in flight and inflicts damage on actors.

Helper components extend the system with specific functionality:

- **UxrShotgunPump**: Adds physical pump-action reloading to a firearm.
- **UxrMuzzleFlash**: Instantiates and randomizes a muzzle flash effect.
- **UxrProjectileDeflect**: Allows a held object, such as a shield, to deflect projectiles.
- **UxrFirearmAmmoLabel**: Drives a UI text element with the current ammo count.
- **UxrExplodeHierarchy**: Physically separates the rigidbody children of a GameObject, used for destructible props.

## Prerequisites

The weapon system requires a scene with:

- An avatar prefab with `UxrGrabber` components on both hands.
- One or more weapons to use.

The `UxrWeaponManager` is not required in the scene. It is a singleton created automatically when any `UxrActor` is present, but you can also add it manually to a persistent GameObject.