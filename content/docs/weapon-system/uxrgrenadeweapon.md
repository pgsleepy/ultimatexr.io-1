---
title: "UxrGrenadeWeapon"
---

## UxrGrenadeWeapon

![](/media/docs/weapon-system/Grenade.png)

`UxrGrenadeWeapon` is a thrown explosive weapon. It detonates after a configurable timer and applies radius damage to all `UxrActor` components within range.

![](/media/docs/weapon-system/UxrGrenadeWeapon.png)

### Setting Up a Grenade

1. Create the grenade model as a `UxrGrabbableObject` with a `Rigidbody` set to **Rigidbody Dynamic On Release** so it can be thrown.
2. Add `UxrGrenadeWeapon` to the same GameObject.
3. Set **Activation Trigger** to the desired activation mode.
4. If the mode is **Trigger Pin**, add a separate child `UxrGrabbableObject` for the pin. Assign it to **Pin**.
5. Add one or more explosion effect prefabs to **Explosion Prefab Pool**.
6. Configure **Damage Radius**, **Damage Near**, and **Damage Far**.

### Activation Modes

- **No Activation**: The grenade never detonates. The timer can be started manually from script.
- **Trigger Pin**: The detonation timer starts when the pin `UxrGrabbableObject` is grabbed and pulled out.
- **On Hand Launch**: The detonation timer starts the moment the grenade is released from the hand.

**Explode On Collision** can be combined with any activation mode to also trigger detonation on a physics impact with matching layers.

### Effects and Damage

When detonated, the grenade randomly picks one prefab from **Explosion Prefab Pool**, instantiates it facing away from the avatar camera, then calls `UxrWeaponManager.ApplyRadiusDamage`. All `UxrActor` components within **Damage Radius** receive damage that falls off linearly from **Damage Near** at the explosion center to **Damage Far** at the edge of the radius.

If **Create Physics Explosion** is enabled, a physics explosion force is also applied to all rigidbodies within range.

### Parameter Reference

- *Activation Trigger*: When the detonation timer starts. Options: No Activation, Trigger Pin, On Hand Launch.
- *Explode On Collision*: When enabled, the grenade also detonates on physics impact with layers matching **Impact Explosion Collision Mask**.
- *Timer Seconds*: Time in seconds from activation to detonation.
- *Pin*: The `UxrGrabbableObject` representing the safety pin, used with the Trigger Pin activation mode.
- *Audio Remove Pin*: Audio sample played when the pin is pulled.
- *Haptic Remove Pin*: Haptic feedback sent to the hand that pulls the pin.
- *Impact Explosion Collision Mask*: Layer mask for surfaces that trigger an on-collision detonation.
- *Explosion Prefab Pool*: Array of explosion effect prefabs. One is chosen at random and instantiated at detonation.
- *Explosion Prefab Life*: Lifetime in seconds before the explosion prefab is destroyed.
- *Damage Radius*: Distance in metres from the explosion center within which damage is applied.
- *Damage Near*: Maximum damage applied at the explosion center.
- *Damage Far*: Minimum damage applied at the edge of **Damage Radius**.
- *Create Physics Explosion*: When enabled, a physics explosion force is applied to rigidbodies in range.
- *Physics Explosion Force*: Magnitude of the physics explosion force.
