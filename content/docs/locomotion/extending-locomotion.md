---
title: "Extending Locomotion"
---

# Extending Locomotion

To create your own locomotion components using scripting follow these steps:

1. Create a new class derived from `UxrLocomotion`
2. Override the IsSmoothLocomotion boolean property to indicate whether the component updates the avatar position every frame or at discrete times.
3. Override the `UpdateLocomotion` method that will be called every frame.
4. Use methods in `UxrManager` such as `MoveAvatarTo`, `TranslateAvatar`, `RotateAvatar`, `TeleportLocalAvatar` so that the locomotion integrates correctly with the event system. This is important for other components in the framework such as LOD switching or in networking environments.
5. Disable the other locomotion components in the avatar if required and add the new component anywhere in the hierarchy.

A good start can be checking out the `UxrSmoothLocomotion` component to see how it works.
