---
title: "UxrActor"
---

# UxrActor

`UxrActor` marks a GameObject as a participant in the weapon system's damage and death simulation. Any entity that can receive damage from projectiles or explosions needs this component. Add it to enemies, destructible props, the player avatar, or any object that should react to weapon fire.

An actor has a life value. When a projectile or explosion inflicts enough damage to reduce life to zero or below, the actor dies. By default the component handles damage subtraction and destruction automatically. Both behaviours can be disabled independently to allow custom logic via events.

![](/media/docs/weapon-system/UxrActorInspector.png)

## Setting Up an Actor

1. Add `UxrActor` to the root GameObject of the entity that should take damage (an enemy character, a barrel, a vehicle).
2. Set **Life** to the starting health value.
3. Assign an **Animator** if the character has hit-reaction and death animations. Set the corresponding trigger parameter names in **Take Damage Animation Trigger** and **Die Animation Trigger**.
4. Assign optional **Take Damage Audio Clip** and **Die Audio Clip** for sound effects.
5. Set **Destroy After Dead Seconds** to control how long the GameObject lives after death before being destroyed. Use a negative value to destroy immediately.

If you want to manage damage subtraction or destruction yourself (to play custom effects or run a custom death sequence), disable **Automatic Damage Handling** or **Automatic Dead Handling** and subscribe to the `DamageReceived` event.

{{% callout tip %}}
To keep automatic damage handling while still randomizing animations and audio clips, use the DamageReceiving event to assign random properties at runtime, right before the damage effects are applied.
{{% /callout %}}

## Automatic Handling

When **Automatic Damage Handling** is enabled, the actor subtracts the incoming damage from its life value automatically. When **Automatic Dead Handling** is additionally enabled, reaching zero life immediately destroys the GameObject after the delay configured in **Destroy After Dead Seconds**.

Disabling **Automatic Dead Handling** leaves the actor alive in the scene after life reaches zero, sets `IsDead` to true, and raises the `DamageReceived` event with `e.Dies` set to true. Your script can then run a custom death sequence and destroy or disable the object when ready.

## Events

`DamageReceiving` fires just before damage is applied. Setting `e.Cancel = true` in the handler prevents the damage from being taken at all. This is useful for damage immunity, blocking mechanics, or a shield effect.

`DamageReceived` fires after damage has been applied (and cannot be cancelled). The event arguments contain the amount of damage, the source actor, and whether the hit was lethal.

## Parameter Reference

- *Life*: Starting life value. Damage is subtracted from this value.
- *Animator*: Optional `Animator` that receives trigger signals on damage and death.
- *Take Damage Animation Trigger Var Name*: Animator trigger parameter name that fires on non-lethal damage.
- *Die Animation Trigger Var Name*: Animator trigger parameter name that fires on lethal damage.
- *Take Damage Audio Clip*: Audio clip played at the actor's position on non-lethal damage.
- *Die Audio Clip*: Audio clip played at the actor's position on death.
- *Destroy After Dead Seconds*: Seconds after death before the GameObject is destroyed. Use a negative value to destroy immediately at the moment of death.
- *Automatic Damage Handling*: When enabled, life is automatically reduced by incoming damage amounts. Disable to manage life manually via the `DamageReceived` event.
- *Automatic Dead Handling*: When enabled, the GameObject is destroyed automatically when life reaches zero. Disable to run a custom death sequence.
