# UxrGrabbableObject.Editor_RegisterAvatarForGrips Method 
 

Registers a new avatar to have grips on this object. If the avatar is an instance it will register its source prefab, otherwise it will register the avatar prefab itself. The reason to register the prefab is so that child prefabs/instances will be able to use the same poses.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void Editor_RegisterAvatarForGrips(
	UxrAvatar avatar
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />Avatar to register</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />