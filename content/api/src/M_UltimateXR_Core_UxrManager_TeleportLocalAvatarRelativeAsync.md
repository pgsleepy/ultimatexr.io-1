# UxrManager.TeleportLocalAvatarRelativeAsync Method 
 


Asynchronous version of <a href="M_UltimateXR_Core_UxrManager_TeleportLocalAvatarRelative">TeleportLocalAvatar</a>.
 Teleports the local <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a>. The local avatar is the avatar controlled by the user using the headset and input controllers. Non-local avatars are other avatars instantiated in the scene but not controlled by the user, either other users through the network or other scenarios such as automated replays.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core">UltimateXR.Core</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public Task TeleportLocalAvatarRelativeAsync(
	Transform referenceTransform,
	bool parentToReference,
	Vector3 newFloorPosition,
	Quaternion newRotation,
	UxrTranslationType translationType = UxrTranslationType.Immediate,
	float transitionSeconds = 0.2f,
	Action teleportedCallback = null,
	CancellationToken ct = default,
	bool propagateEvents = true
)
```

<a href="UltimateXR/Scripts/Core/UxrManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>referenceTransform</dt><dd>Type: Transform<br />The object the avatar should keep relative position/orientation to. This should be the moving object the avatar has teleported on top of</dd><dt>parentToReference</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to parent the avatar to *referenceTransform*. The avatar should be parented if it's being teleported to a moving hierarchy it is not part of</dd><dt>newFloorPosition</dt><dd>Type: Vector3<br />World-space floor-level position the avatar will be teleported over. The camera position will be on top of the floor position, keeping the original eye-level.</dd><dt>newRotation</dt><dd>Type: Quaternion<br />World-space rotation the avatar will be teleported to. The camera will point in the rotation's forward direction.</dd><dt>translationType (Optional)</dt><dd>Type: <a href="T_UltimateXR_Locomotion_UxrTranslationType">UltimateXR.Locomotion.UxrTranslationType</a><br />The type of translation to use. By default it will teleport immediately</dd><dt>transitionSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />If *translationType* has a duration, it will specify how long the teleport transition will take in seconds. By default it is <a href="F_UltimateXR_Core_UxrConstants_TeleportTranslationSeconds">TeleportTranslationSeconds</a></dd><dt>teleportedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback executed depending on the teleportation mode:
&nbsp;<ul><li><a href="T_UltimateXR_Locomotion_UxrTranslationType">Immediate</a>: Right after finishing the teleportation.</li><li><a href="T_UltimateXR_Locomotion_UxrTranslationType">Fade</a>: When the screen is completely faded out and the avatar has been moved, before fading back in. This can be used to enable/disable/change GameObjects in the scene since the screen at this point is fully rendered using the fade color.</li><li><a href="T_UltimateXR_Locomotion_UxrTranslationType">Smooth</a>: Right after finishing the teleportation.</li></ul></dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token that can be used to cancel the task</dd><dt>propagateEvents (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to propagate <a href="E_UltimateXR_Core_UxrManager_AvatarMoving">AvatarMoving</a>/<a href="E_UltimateXR_Core_UxrManager_AvatarMoved">AvatarMoved</a> events</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />Awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> that will finish after the avatar was teleported or if it was cancelled

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.taskcanceledexception" target="_blank" rel="noopener noreferrer">TaskCanceledException</a></td><td>Task was canceled using *ct*</td></tr></table>

## Remarks
If <a href="T_UltimateXR_Locomotion_UxrTranslationType">Fade</a> translation mode was specified, the default black fade color can be changed using <a href="P_UltimateXR_Core_UxrManager_TeleportFadeColor">TeleportFadeColor</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Core_UxrManager">UxrManager Class</a><br /><a href="N_UltimateXR_Core">UltimateXR.Core Namespace</a><br />