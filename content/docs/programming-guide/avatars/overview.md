---
title: "Overview"
---

# Overview

An avatar is the digital representation of a user within the virtual environment. This can range from a simple floating head and hands to a fully detailed 3D character model that mirrors the user's movements.

In UltimateXR, avatars are managed through two primary components:
- `UxrAvatar`: This component defines the avatar's appearance and stores its hand poses. It also determines whether the avatar is controlled locally by the user (via a VR headset and controllers) or updated externally for multiuser or replay scenarios.
- `UxrAvatarController`: This component is responsible for updating the avatar's movements and behaviors. The built-in controller, `UxrStandardAvatarController`, offers features like inverse kinematics, hand tracking, and action binding.

The following guides will explain the features these two components offer and how to use them in programming.

<div style="display: flex; justify-content: space-between; align-items: center;">
  <img src="/assets/media/docs/_common/UxrAvatar.png" style="width: 45%;margin-right: 5%;"/>
  <img src="/assets/media/docs/_common/UxrStandardAvatarController.png" style="width: 45%;"/>
</div>
