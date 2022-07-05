# UxrAvatar.GetInitialBoneLocalPosition Method 
 

Gets the initial local position of the given avatar bone.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool GetInitialBoneLocalPosition(
	Transform bone,
	out Vector3 position
)
```


#### Parameters
&nbsp;<dl><dt>bone</dt><dd>Type: Transform<br />Bone to get the initial local position of.</dd><dt>position</dt><dd>Type: Vector3<br />Gets the initial local position.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Boolean telling whether the position was successfully retrieved or if the given bone was not found in the avatar.

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />