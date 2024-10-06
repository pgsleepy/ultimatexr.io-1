---
title: "UxrAvatar"
---

# UxrAvatar

The `UxrAvatar` component provides properties, methods, and events to control avatars at runtime. The full API can be explored on the [UxrAvatar API Reference](/api/T_UltimateXR_Avatar_UxrAvatar#uxravatar-class).

Below is a list of the most relevant elements you might use frequently.

## `AvatarMode`

Avatars can either be local or external. Typically, there is one avatar in the scene, the local avatar, which has its `AvatarMode` property set to `Local`. This avatar is controlled directly by the user with the connected VR device.

In multiplayer sessions, however, additional avatars may be spawned in the scene. These external avatars are not controlled by any connected devices; instead, they are updated using networking data. These avatars have their `AvatarMode` set to `UpdateExternally`.

Avatars with their `AvatarMode` set to `UpdateExternally` are limited to features like inverse kinematics and other cosmetic functionalities. These external avatars can be seen as puppets, as they are controlled by external processes instead of their avatar controller. Common scenarios where avatars are updated externally include multiplayer remote clients and replay sessions.

## The Local Avatar

`LocalAvatar`: is a static property that allows you to access the `UxrAvatar` component controlled by the user. It returns the first avatar in the scene with the `AvatarMode` property set to `Local`.

Example:
```c#
Debug.Log($"The user avatar is at {UxrAvatar.LocalAvatar.transform.position}.");
```

Similar to the static `LocalAvatar` property, there are other static shortcuts to frequently used local avatar properties.

- `LocalAvatarInput`: Gets the local avatar's input component that can be used to query for controller input data.
- `LocalAvatarCamera`: Gets the local avatar's `Camera` component for the local avatar
- `LocalOrFirstEnabledCamera`: This property get the local avatar's camera. If there is no local avatar, it returns the first camera found in the enabled `UpdateExternally` avatars. If no enabled avatars are present, it will return `Camera.main`. This can be useful for observing during multiplayer sessions or replays, where there are no avatars controlled by XR devices.
- `LocalStandardAvatarController`: This property attempts to retrieve the local avatar's controller, provided it uses the built-in `UxrStandardAvatarController` type. While UltimateXR allows developers to create their own `UxrAvatarController` for added flexibility, most users will use the built-in controller, which provides access to important features like inverse kinematics (IK), grabbing, UI interaction, and more.

Example that uses `LocalAvatarInput` to check whether the right trigger button is being pressed:
```c#
bool isRightTriggerPressed = UxrAvatar.LocalAvatarInput.GetButtonsPressDown(UxrHandSide.Right, UxrInputButtons.Trigger);
```

## Main Properties

Here is a list of frequently used `UxrAvatar` properties:

### Avatar Mode

- `AvatarMode`: .

### Avatar Controller

- `AvatarController`: .

### Avatar Rendering

- `RenderMode`: .
- `ShowControllerHands`: .
- `AvatarRenderers`: .

### Avatar Rig

Features, Rig.

- `AvatarRigType`: .
- `AvatarRig`: .
- `AvatarRigInfo`: .
- `LeftHand`: .
- `RightHand`: .
- `LeftHandBone`: .
- `RightHandBone`: .

### Avatar Camera

- `CameraComponent`: .
- `CameraTransform`: .
- `CameraPosition`: .
- `CameraFloorPosition`: .
- `CameraForward`: .
- `ProjectedCameraForward`: .
- `CameraController`: .
- `CameraFade`: .

### Input/Tracking

- `EnabledControllerInputs`: .
- `TrackingDevices`: .
- `FirstControllerTracking`: .
- `CameraTrackingEnabled`: .

### UI

- `FingerTips`: .
- `LaserPointers`: .

### Prefab Info

- `PrefabGuid`: .
- `ParentPrefab`: .
- `ParentAvatarPrefab`: .
- `IsPrefabVariant`: .

### Manipulation

- `LeftGrabber`: .
- `RightGrabber`: .

### Hand Poses

- `DefaultHandPoseName`: .

## Main Methods

## Avatar Events
