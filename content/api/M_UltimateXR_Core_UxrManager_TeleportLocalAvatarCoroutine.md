# UxrManager.TeleportLocalAvatarCoroutine Method 
 

Public teleporting coroutine that can be yielded from an external coroutine. Teleports the local <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a>. The local avatar is the avatar controlled by the user using the headset and input controllers. Non-local avatars are other avatars instantiated in the scene but not controlled by the user, either other users through the network or other scenarios such as automated replays.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core">UltimateXR.Core</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public IEnumerator TeleportLocalAvatarCoroutine(
	Vector3 newFloorPosition,
	Quaternion newRotation,
	UxrTranslationType translationType = UxrTranslationType.Immediate,
	float transitionSeconds = 0.2f,
	Action teleportedCallback = null,
	Action finishedCallback = null,
	bool propagateEvents = true
)
```

<a href="UltimateXR/Scripts/Core/UxrManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>newFloorPosition</dt><dd>Type: Vector3<br />Floor-level position the avatar will be teleported over. The camera position will be on top of the floor position, keeping the original eye-level.</dd><dt>newRotation</dt><dd>Type: Quaternion<br />Rotation the avatar will be teleported to. The camera will point in the rotation's forward direction</dd><dt>translationType (Optional)</dt><dd>Type: <a href="T_UltimateXR_Locomotion_UxrTranslationType">UltimateXR.Locomotion.UxrTranslationType</a><br />The type of translation to use. By default it will teleport immediately</dd><dt>transitionSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />If *translationType* has a duration, it will specify how long the teleport transition will take in seconds. By default it is <a href="F_UltimateXR_Core_UxrConstants_TeleportTranslationSeconds">TeleportTranslationSeconds</a></dd><dt>teleportedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback executed depending on the teleportation mode:
&nbsp;<ul><li><a href="T_UltimateXR_Locomotion_UxrTranslationType">Immediate</a>: Right after finishing the teleportation.</li><li><a href="T_UltimateXR_Locomotion_UxrTranslationType">Fade</a>: When the screen is completely faded out and the avatar has been moved, before fading back in. This can be used to enable/disable/change GameObjects in the scene since the screen at this point is fully rendered using the fade color.</li><li><a href="T_UltimateXR_Locomotion_UxrTranslationType">Smooth</a>: Right after finishing the teleportation.</li></ul></dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback executed right after the teleportation finished. If a fade effect has been requested, the callback is executed right after the screen has faded back in.</dd><dt>propagateEvents (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to propagate <a href="E_UltimateXR_Core_UxrManager_AvatarMoving">AvatarMoving</a>/<a href="E_UltimateXR_Core_UxrManager_AvatarMoved">AvatarMoved</a> events</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.ienumerator" target="_blank" rel="noopener noreferrer">IEnumerator</a><br />Coroutine enumerator

## Remarks
If <a href="T_UltimateXR_Locomotion_UxrTranslationType">Fade</a> translation mode was specified, the default black fade color can be changed using <a href="P_UltimateXR_Core_UxrManager_TeleportFadeColor">TeleportFadeColor</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Core_UxrManager">UxrManager Class</a><br /><a href="N_UltimateXR_Core">UltimateXR.Core Namespace</a><br />