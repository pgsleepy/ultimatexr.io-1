---
title: "UxrShotgunPump"
---

# UxrShotgunPump

`UxrShotgunPump` adds physical pump-action reloading to a firearm. When the player grabs the pump and slides it back and forward past a configurable threshold, the component calls `Reload` on the `UxrFirearmWeapon`. This is used together with a **Manual Reload** shot cycle so the weapon requires a physical pump before each shot.

The component requires a `UxrFirearmWeapon` on the same GameObject and must reference a `UxrGrabbableObject` that represents the pump handle.

![](/media/docs/weapon-system/helper-components/UxrShotgunPumpInspector.png)

## Setting up a pump action

1. Create the pump handle as a child `UxrGrabbableObject` with a translation constraint along the pump axis (typically local Z). Set the limits to the full pump travel distance.
2. Set the `UxrFirearmWeapon` trigger **Cycle Type** to **Manual Reload**.
3. Add `UxrShotgunPump` to the same GameObject as the firearm.
4. Assign the pump handle to **Pump**.
5. Set **Local Pump Direction** to the local axis the pump slides along, and **Local Pump Offset** to the full displacement vector at maximum slide.
6. Configure the audio clips for the slide-forward and slide-back motions.

The component plays different audio and haptic feedback when the pump is cycled on an already-loaded weapon versus a spent one.

## How it detects a pump cycle

On each frame the component measures how far the pump has moved along the pump direction relative to its starting position, normalized against the full offset length. When this normalized value exceeds **Slide Threshold** on the way out, the component marks the first half of the stroke complete. When the value drops back below 90% of the threshold on the return stroke, `Reload` is called and the cycle completes.

## Parameter reference

- *Trigger Index*: Index of the trigger in `UxrFirearmWeapon` that this pump action reloads.
- *Pump*: The `UxrGrabbableObject` that represents the pump handle.
- *Local Pump Direction*: Local-space normalized direction along which the pump slides. Typically `(0, 0, 1)` for a forward-facing pump.
- *Local Pump Offset*: The full displacement vector in local space at maximum pump extension.
- *Slide Threshold*: Normalized slide amount (0 to 1) the pump must exceed to count as a complete forward stroke. Default is 0.7.
- *Audio Slide*: Audio clip played when the pump is pushed out on an unloaded weapon.
- *Audio Slide Back*: Audio clip played when the pump is returned on an unloaded weapon.
- *Audio Slide Already Loaded*: Audio clip played when the pump is pushed out on an already-loaded weapon.
- *Audio Slide Back Already Loaded*: Audio clip played when the pump is returned on an already-loaded weapon.
- *Haptic Clip Slide*: Haptic feedback for the forward stroke on an unloaded weapon.
- *Haptic Clip Slide Back*: Haptic feedback for the return stroke on an unloaded weapon.
- *Haptic Clip Slide Already Loaded*: Haptic feedback for the forward stroke on an already-loaded weapon.
- *Haptic Clip Slide Back Already Loaded*: Haptic feedback for the return stroke on an already-loaded weapon.