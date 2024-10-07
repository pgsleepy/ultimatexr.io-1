---
title: "UxrAvatar"
---

# UxrAvatar

The `UxrAvatar` component provides properties, methods, and events to control avatars at runtime. The full API can be explored on the [UxrAvatar API Reference](/api/T_UltimateXR_Avatar_UxrAvatar#uxravatar-class).

The static `UxrAvatar.LocalAvatar` property allows you to access the `UxrAvatar` component representing the user, from anywhere in the code. It returns the first avatar in the scene with the `AvatarMode` property set to `Local`.

There are other static properties that provide shortcuts to frequently used elements from the local avatar, such as `UxrAvatar.LocalAvatarInput` and `UxrAvatar.LocalAvatarCamera`. They will all be described in the following sections.

Below is a list of the most relevant UxrAvatar elements that are commonly used, by category.

## Avatar Mode

Avatars can either be local or external. Typically, there is one avatar in the scene, the local avatar, which has its `AvatarMode` property set to `Local`. This avatar is controlled directly by the user with the connected VR device.

In multiplayer sessions, however, additional avatars are spawned in the scene. These external avatars are not controlled by any connected devices; instead, they are updated using networking data. These avatars have their `AvatarMode` set to `UpdateExternally`.

Avatars with their `AvatarMode` set to `UpdateExternally` are limited to features like inverse kinematics and other cosmetic functionalities. These external avatars can be seen as puppets, as they are controlled by external processes instead of their avatar controller. Common scenarios where avatars are updated externally include multiplayer remote clients and replay sessions.

### Static Properties

- `LocalAvatar`: Gets the avatar that represents the user, controlled using the connected VR device.

### Properties

- `AvatarMode`: Gets the mode of a given avatar, either `Local` or `UpdateExternally`.

### Examples

Example that uses `LocalAvatar` to get the avatar position from anywhere in the code:
```c#
Debug.Log($"The user avatar is at {UxrAvatar.LocalAvatar.transform.position}.");
```

## Avatar Controller

### Static Properties

- `LocalStandardAvatarController`: This property attempts to retrieve the local avatar's controller, provided it uses the built-in `UxrStandardAvatarController` type. While UltimateXR allows developers to create their own `UxrAvatarController` for added flexibility, most users will use the built-in controller, which provides access to important features like inverse kinematics (IK), grabbing, UI interaction, and more.

### Properties

- `AvatarController`: Gets the avatar's controller, which is responsible for updating the avatar.

## Avatar Rendering

Although the appearance of avatars is determined by the user, UltimateXR has a cool feature that allows to display hands and controllers to visualize the current state of user input, as shown in the video below:

To toggle between showing the avatar and the controllers, you can combine the `UxrAvatarRenderModes` flags: `LeftController`, `RightController`, and `Avatar`. There are also pre-defined combinations such as `AllControllers` and `AllControllersAndAvatar` for convenience.

When displaying controllers, you can also decide whether to show a virtual hand that mirrors the user’s real-time hand movements, using Inverse Kinematics, by setting the `ShowControllerHands` property.

### Properties

- `RenderMode`: This property controls whether to render the avatar or the controllers, by combining different `UxrAvatarRenderModes` flags.
- `ShowControllerHands`: When displaying controllers, it decides whether to also show a virtual hand that mirrors the user’s real-time hand movements.
- `AvatarRenderers`: This property accesses the list of avatar renderers.

### Methods

- `GetAllAvatarRendererComponents()`: This method retrieves all Renderer components in the avatar except those hanging from a `UxrHandIntegration` object, which represent the controllers and the controller hands.

## Avatar Rig

The following properties and methods give access to information about the avatar rig.

### Properties

- `AvatarRigType`: Determines if the avatar consists of just two hands or a half/full body.
- `AvatarRig`: Accesses the `UxrAvatarRig` object, which holds all bone references and includes features like resolving missing bones and animating the hands.
- `AvatarRigInfo`: Provides detailed information about the avatar's rig, including distances, axes, and points of interest.
- `LeftHand`: A shortcut to `AvatarRig.LeftArm.Hand`, containing references to all the `Transform` objects in the left hand and fingers.
- `RightHand`: A shortcut to `AvatarRig.RightArm.Hand`, containing references to all the `Transform` objects in the right hand and fingers.
- `LeftHandBone`: A shortcut to the `Transform` of the left hand's wrist (`AvatarRig.LeftArm.Hand.Wrist`).
- `RightHandBone`: A shortcut to the `Transform` of the right hand's wrist (`AvatarRig.LeftArm.Hand.Wrist`).

### Methods

- `GetInitialBoneLocalPosition()`: Retrieves the initial local position of a bone in the avatar rig.
- `GetInitialBoneLocalRotation()`: Retrieves the initial local rotation of a bone in the avatar rig.
- `GetArm()`: Provides access to the arm structure of the avatar, including the shoulder, elbow, and hand.
- `GetHand()`: Returns the hand object for either the left or right hand, depending on the input parameter.
- `GetHandBone()`: Returns the wrist bone for either the left or right hand, based on the input.
- `SetupRigElementsFromAnimator()`: Sets up the rig elements by reading humanoid data from the `Animator` component.
- `ClearRigElements()`: Clears the current rig elements, effectively removing references to bones and transforms.
- `TryToInferMissingRigElements()`: Attempts to automatically infer any missing rig elements by analyzing the avatar's structure.

## Avatar Camera

### Static Properties

- `LocalAvatarCamera`: Gets the local avatar's `Camera` component.
- `LocalOrFirstEnabledCamera`: This property get the local avatar's camera. If there is no local avatar, it returns the first camera found in the enabled `UpdateExternally` avatars. If no enabled avatars are present, it will return `Camera.main`. This can be useful for observing during multiplayer sessions or replays, where there are no avatars controlled by XR devices.

### Properties

- `CameraComponent`: Accesses the `Camera` component from the avatar.
- `CameraTransform`: Retrieves the transform of the avatar’s camera.
- `CameraPosition`: Returns the world position of the avatar’s camera.
- `CameraFloorPosition`: Returns the position of the avatar’s camera, projected on the floor.
- `CameraForward`: Returns the forward direction of the avatar’s camera.
- `ProjectedCameraForward`: Returns the avatar’s forward camera direction projected onto the horizontal plane.
- `CameraController`: Accesses the camera's parent.
- `CameraFade`: Gets the component that manages color fade effects for the avatar.

### Methods

- `IsLookingAt()`: Determines if the avatar’s camera is looking at a specific point or object.

## Input/Tracking

### Static Properties

- `LocalAvatarInput`: Gets the local avatar's input component that can be used to query for controller input data.

### Properties

- `EnabledControllerInputs`: Provides a list of enabled controller input devices associated with the avatar.
- `TrackingDevices`: Returns the list of tracking devices for the avatar.
- `FirstControllerTracking`: Gets the first tracking device associated to controllers for the avatar.
- `CameraTrackingEnabled`: Controls whether the avatar’s camera tracking is currently enabled.

### Methods

- `GetControllerInputForward()`: Returns the forward vector of a controller input, useful for determining direction in VR.

### Examples

Example that uses `LocalAvatarInput` to check, from anywhere in the code, whether the right trigger button is being pressed:
```c#
bool isRightTriggerPressed = UxrAvatar.LocalAvatarInput.GetButtonsPressDown(UxrHandSide.Right, UxrInputButtons.Trigger);
```

## Locomotion

### Methods

- `EnableLocomotion()`: Enables or disables locomotion for the avatar, allowing or preventing movement.

## Hand Poses

### Properties

- `DefaultHandPoseName`: Gets the default hand pose used by the avatar when no specific pose is assigned.

### Methods

- `GetAllHandPoses()`: Retrieves all defined hand poses available for the avatar, including those inherited from parent prefabs.
- `GetHandPoses()`: Retrieves all defined hand poses available for the avatar, excluding those inherited from parent prefabs.
- `GetHandPose()`: Returns a specific hand pose based on the input parameters.
- `IsHandPoseOverriden()`: Checks whether a specific hand pose has been overridden for the avatar.
- `GetRuntimeHandPose()`: Retrieves the runtime hand pose currently being used by the avatar.
- `GetCurrentRuntimeHandPose()`: Returns the current runtime hand pose for either the left or right hand.
- `GetCurrentHandPoseBlendValue()`: Gets the current blend value between two hand poses.
- `SetCurrentHandPose()`: Assigns a new hand pose to the avatar for either the left or right hand.
- `SetCurrentHandPoseBlendValue()`: Sets the blend value between two hand poses.
- `SetCurrentHandPoseImmediately()`: Sets the avatar’s hand pose immediately without blending.

## Manipulation

- `LeftGrabber`: Accesses the grabber component for the avatar's left hand, responsible for handling interactions like picking up objects.
- `RightGrabber`: Accesses the grabber component for the avatar's right hand, responsible for handling interactions like picking up objects.

- `GetGrabber()`: Accesses the grabber component for any of the avatar's hands.

## UI

### Properties

- `FingerTips`: Gets all the enabled `UxrFingerTip` components in the avatar.
- `LaserPointers`: Gets all the enabled `UxrLaserPointer` components in the avatar.

### Methods

- `EnableFingerTips()`: Enables or disables the user of `UxrFingerTip` components in the avatar.
- `EnableLaserPointers()`: Enables or disables the user of `UxrLaserPointer` components in the avatar.

## Prefab Info

### Properties

- `PrefabGuid`: Gets the avatar prefab Guid.
- `ParentPrefab`: Gets the parent prefab `GameObject`, if it exists.
- `ParentAvatarPrefab`: Gets the `UxrAvatar` component in `ParentPrefab`, if it exists.
- `IsPrefabVariant`: Gets whether the avatar's prefab has a parent avatar prefab.

### Methods

- `GetAvatarChain()`: Gets the chain of `UxrAvatar` components upwards in the prefab hierarchy.
- `GetPrefabGuidChain()`: Gets the Guids of all prefabs upwards in the prefab hierarchy.
- `GetParentPrefabChain()`: Gets the chain of `UxrAvatar` components upwards in the prefab hierarchy, starting from the parent.
- `GetParentPrefab()`: Gets the parent prefab that stores a given hand pose.
- `IsPrefabCompatibleWith()`: Checks whether the avatar shares the same prefab or is a prefab variant of another avatar.

## Avatar Events

### Static Events

- `LocalAvatarStarted`: Raised right after the local avatar called its `Start()`.
- `LocalAvatarChanged`: Raised right after the local avatar changed. This is useful when the avatar is instantiated in a deferred way, such as a networking environment, and the avatar isn't ready during `Awake()`/`OnEnable()`/`Start()`.
- `GlobalAvatarMoving`: Raised right before an avatar is about to be moved.
- `GlobalAvatarMoved`: Raised right after an avatar moved.

### Non-Static Events

- `HandPoseChanging`: Raised right before the avatar is about to change a hand's pose.
- `HandPoseChanged`: Raised right after the avatar changed a hand's pose.
- `AvatarUpdating`: Raised right before the avatar goes through an `UxrUpdateStage` of the updating process.
- `AvatarUpdated`: Raised right after the avatar goes through an `UxrUpdateStage` of the updating process.