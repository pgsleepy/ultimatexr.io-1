# UxrAvatar.IsLookingAt Method 
 

Checks if the avatar is looking at a point in space.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool IsLookingAt(
	Vector3 worldPosition,
	float radiusFromViewportCenterAllowed
)
```


#### Parameters
&nbsp;<dl><dt>worldPosition</dt><dd>Type: Vector3<br />World position to check.</dd><dt>radiusFromViewportCenterAllowed</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Radius threshold in viewport coordinates [0.0, 1.0] above which it isn't considered looking at anymore.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the avatar is looking at the specific point in space.

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />