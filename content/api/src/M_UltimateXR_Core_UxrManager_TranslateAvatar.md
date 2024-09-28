# UxrManager.TranslateAvatar Method 
 

Translates an avatar.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core">UltimateXR.Core</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void TranslateAvatar(
	UxrAvatar avatar,
	Vector3 translation,
	bool propagateEvents = true
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />The avatar to translate</dd><dt>translation</dt><dd>Type: Vector3<br />Translation offset</dd><dt>propagateEvents (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to propagate <a href="E_UltimateXR_Core_UxrManager_AvatarMoving">AvatarMoving</a>/<a href="E_UltimateXR_Core_UxrManager_AvatarMoved">AvatarMoved</a> events</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Core_UxrManager">UxrManager Class</a><br /><a href="N_UltimateXR_Core">UltimateXR.Core Namespace</a><br />