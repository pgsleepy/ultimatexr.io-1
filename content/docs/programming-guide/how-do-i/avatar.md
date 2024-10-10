---
title: "Avatar"
---

# Avatar

How do I access my avatar at any point in the application?

```c#
UxrAvatar myAvatar = UxrAvatar.LocalAvatar;
```

How do I teleport my avatar?

Method 1: Instant teleport:

```c#
UxrManager.Instance.MoveAvatarTo(UxrAvatar.LocalAvatar, Vector3.zero);
```

Method 2: Teleporting with a fadeout and fadein.

```c#

// Quick way

UxrManager.Instance.TeleportLocalAvatar(Vector3.zero, Quaternion.identity, UxrTranslationType.Fade);

// Taking into account re-parenting to destination and/or moving platforms

Transform destination         = ...
bool      parentToDestination = true;
UxrManager.Instance.TeleportLocalAvatarRelative(destination, parentToDestination, destination.position, Quaternion.identity, UxrTranslationType.Fade);
```

Method 3: Teleporting with a fadeout and fadein using async/await

```c#

// Quick way

Debug.Log("Teleport start");
await UxrManager.Instance.TeleportLocalAvatarAsync(Vector3.zero, Quaternion.identity, UxrTranslationType.Fade);
Debug.Log("Teleport finished");

// Taking into account re-parenting to destination and/or moving platforms

Transform destination         = ...
bool      parentToDestination = true;

Debug.Log("Teleport start");
await UxrManager.Instance.TeleportLocalAvatarRelativeAsync(destination, parentToDestination, destination.position, Quaternion.identity, UxrTranslationType.Fade);
Debug.Log("Teleport finished");
```

Method 4: Teleporting with a fadeout and fadein using callbacks:

```c#
void SwitchScenario()
{
    // Enable/Disable objects here, because the screen is completely faded out.
}

void PlaySound()
{
    // Play sound after the screen has faded back in.
}

float teleportDurationSeconds = 0.3f;
UxrManager.Instance.TeleportLocalAvatar(Vector3.zero, Quaternion.identity, UxrTranslationType.Fade, teleportDurationSeconds, SwitchScenario, PlaySound);
```

How can I get notified when the avatar moved or teleported?

```c#
private void OnEnable()
{
    UxrManager.AvatarMoved += UxrManager_AvatarMoved;
}

private void OnDisable()
{
    UxrManager.AvatarMoved -= UxrManager_AvatarMoved;
}

private void UxrManager_AvatarMoved(object sender, UxrAvatarMoveEventArgs e)
{
    Debug.Log($"Avatar moved from {e.OldPosition} to {e.NewPosition}");
}
```

How can I do something with the avatar each frame after UltimateXR finished updating it?

```c#
private void OnEnable()
{
    UxrManager.AvatarsUpdated += UxrManager_AvatarsUpdated;
}

private void OnDisable()
{
    UxrManager.AvatarsUpdated -= UxrManager_AvatarsUpdated;
}

private void UxrManager_AvatarsUpdated()
{
    Debug.Log("Avatars finished updating this frame");
}
```

How do I access bones in my avatar rig?

Example 1: Hand bone

```c#
UxrAvatarHand leftHand = UxrAvatar.LocalAvatar.GetHand(UxrHandSide.Left);
Vector3 thumbTip = leftHand.Thumb.Distal.position;
```

Example 2: Head

```c#
Vector3 headPos = UxrAvatar.LocalAvatar. AvatarRig.Head.Head.position;
```

Example 3: All bones in left hand

```c#
foreach (Transform boneTransform in UxrAvatar.LocalAvatar.GetHand(UxrHandSide.Right))
{
    Debug.Log(boneTransform.name);
}
```

Example 4: All bones in rig

```c#
foreach (Transform boneTransform in UxrAvatar.LocalAvatar.AvatarRig.Transforms)
{
    Debug.Log(boneTransform.name);
}
```

How do I know where the current camera position is?

```c#
Vector3 cameraPos = UxrAvatar.LocalAvatar.CameraPosition;
```

How do I know where the avatar is currently looking?

```c#
Vector3 viewDirection = UxrAvatar.LocalAvatar.CameraForward;
```

How can I prevent other avatars in the scene from updating using code? I want to control them manually because I’m developing a multi-player game.

```c#
avatar.AvatarMode = UxrAvatarMode.UpdateExternally;
```

How do I check if an avatar is peeking through a wall?

```c#
// This requires an UxrCameraWallFade on the avatar’s camera to work, although if it is not present it will just return false
bool isPeeking = UxrCameraWallFade.IsAvatarPeekingThroughGeometry(UxrAvatar.LocalAvatar);
```

How do I fade the view? I want to fade the screen out

```c#
// Enable fade with total black opacity
UxrAvatar.LocalAvatar.CameraFade.EnableFadeColor(Color.black, 1.0f);

// Disable fade
UxrAvatar.LocalAvatar.CameraFade.DisableFadeColor();
```

How can I between showing the avatar and showing a virtual representation of the controllers that I’m currently holding?
*Note*: This feature is currently supported but we are finalizing the legal terms to include the graphics for the controllers.

```c#
// Hide the avatar and show the controllers
UxrAvatar.LocalAvatar.RenderMode = UxrAvatarRenderModes.AllControllers;

// Show hands grabbing the controllers using inverse kinematics and mimicking user input
UxrAvatar.LocalAvatar.ShowControllerHands = true;

// Hide hands and show only the controllers
UxrAvatar.LocalAvatar.ShowControllerHands = false;

// Switch back to showing the avatar
UxrAvatar.LocalAvatar.RenderMode = UxrAvatarRenderModes.Avatar;
```

How can I list the hand pose names in the avatar?

```c#
foreach (UxrHandPoseAsset handPose in UxrAvatar.LocalAvatar.GetAllHandPoses)
{
    Debug.Log(HandPose.name);
}
```

How can I override/restore the current default pose that the avatar has while idling:

```c#
UxrStandardAvatarController avatarController = UxrAvatar.LocalAvatar.AvatarController as UxrStandardAvatarController;

avatarController.LeftHandDefaultPoseNameOverride = "newPoseName";
avatarController.RightHandDefaultPoseNameOverride = "newPoseName";

// Restore
avatarController.LeftHandDefaultPoseNameOverride = null;
avatarController.RightHandDefaultPoseNameOverride = null;
```

How can I change the blend value for a grab hand pose while an object is being grabbed? I want to see how the avatar presses the trigger while holding a gun, and the grab is a pose that blends to the 
trigger being pressed.

```c#
if (UxrGrabManager.Instance.GetGrabbingHand(grabbableGun, 0, out UxrGrabber grabber))
{
    float triggerPressAmount = UxrAvatar.LocalAvatarInput.GetInput1D(grabber.Side, UxrInput1D.Trigger);
    grabbableGun.GetGrabPoint(0).GetGripPoseInfo(grabber.Avatar).PoseBlendValue = triggerPressAmount;
}
```