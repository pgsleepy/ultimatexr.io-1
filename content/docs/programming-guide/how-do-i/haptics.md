---
title: "Haptics"
---

# Haptics

How can I send a haptic impulse to a specific controller?

```c#
UxrAvatar.LocalAvatar.ControllerInput.SendHapticFeedback(UxrHandSide.Left, UxrHapticClipType.Click, 1.0f);
```

How can I send a haptic impulse only to the hands that are currently grabbing an object?

```c#
UxrAvatar.LocalAvatar.ControllerInput.SendGrabbableHapticFeedback (grabbableObject, UxrHapticClipType.RumbleFreqNormal);
```

How can I send a haptic clip based on an audio file but if the device does not support to play audio files as haptics, play a fallback impulse instead?

```c#
AudioClip audioClip = ...

UxrAvatar.LocalAvatar.ControllerInput.SendHapticFeedback(UxrHandSide.Left, new UxrHapticClip(audioClip, UxrHapticClickType.Click));
```
