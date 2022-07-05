# UxrManager.RotateLocalAvatar Method 
 

Rotates the local avatar around its vertical axis, where a positive angle turns it to the right and a negative angle to the left. The rotation can be performed in different ways using *rotationType*.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core">UltimateXR.Core</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void RotateLocalAvatar(
	float degrees,
	UxrRotationType rotationType = UxrRotationType.Immediate,
	float transitionSeconds = 0.1f,
	Action rotatedCallback = null,
	Action<bool> finishedCallback = null,
	bool propagateEvents = true
)
```


#### Parameters
&nbsp;<dl><dt>degrees</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The degrees to rotate</dd><dt>rotationType (Optional)</dt><dd>Type: <a href="T_UltimateXR_Locomotion_UxrRotationType">UltimateXR.Locomotion.UxrRotationType</a><br />The type of rotation to use. By default it will rotate immediately</dd><dt>transitionSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />If *rotationType* has a duration, it will specify how long the rotation transition will take in seconds. By default it is <a href="F_UltimateXR_Core_UxrConstants_TeleportRotationSeconds">TeleportRotationSeconds</a></dd><dt>rotatedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback executed depending on the rotation mode:
&nbsp;<ul><li><a href="T_UltimateXR_Locomotion_UxrRotationType">Immediate</a>: Right after finishing the rotation.</li><li><a href="T_UltimateXR_Locomotion_UxrRotationType">Fade</a>: When the screen is completely faded out and the avatar has rotated, before fading back in. This can be used to enable/disable/change GameObjects in the scene since the screen at this point is fully rendered using the fade color.</li><li><a href="T_UltimateXR_Locomotion_UxrRotationType">Smooth</a>: Right after finishing the rotation.</li></ul></dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">System.Action</a>(<a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)<br />Optional callback executed right after the teleportation finished. It will receive a boolean parameter telling whether the teleport finished completely (true) or was cancelled (false). If a fade effect has been requested, the callback is executed right after the screen has faded back in.</dd><dt>propagateEvents (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to propagate <a href="E_UltimateXR_Core_UxrManager_AvatarMoving">AvatarMoving</a>/<a href="E_UltimateXR_Core_UxrManager_AvatarMoved">AvatarMoved</a> events</dd></dl>

## Remarks
If <a href="T_UltimateXR_Locomotion_UxrTranslationType">Fade</a> translation mode was specified, the default black fade color can be changed using <a href="P_UltimateXR_Core_UxrManager_TeleportFadeColor">TeleportFadeColor</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Core_UxrManager">UxrManager Class</a><br /><a href="N_UltimateXR_Core">UltimateXR.Core Namespace</a><br />