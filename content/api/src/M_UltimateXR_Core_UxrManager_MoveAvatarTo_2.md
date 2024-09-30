# UxrManager.MoveAvatarTo Method (UxrAvatar, Vector3, Boolean)
 

Moves an avatar to a new position on the floor, keeping the same viewing direction. The eye level is maintained.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core">UltimateXR.Core</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void MoveAvatarTo(
	UxrAvatar avatar,
	Vector3 newFloorPosition,
	bool propagateEvents = true
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />The avatar to move</dd><dt>newFloorPosition</dt><dd>Type: Vector3<br />The position on the floor above which the avatar's camera will be positioned. Coordinates need to be specified at ground level since the eye camera level over the floor will be maintained.</dd><dt>propagateEvents (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to propagate <a href="E_UltimateXR_Core_UxrManager_AvatarMoving">AvatarMoving</a>/<a href="E_UltimateXR_Core_UxrManager_AvatarMoved">AvatarMoved</a> events</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Core_UxrManager">UxrManager Class</a><br /><a href="Overload_UltimateXR_Core_UxrManager_MoveAvatarTo">MoveAvatarTo Overload</a><br /><a href="N_UltimateXR_Core">UltimateXR.Core Namespace</a><br />