# UxrAvatarRig.GetHandSide Method 
 

Checks which side a transform is part of, based on which wrist it hangs from or if it hangs from an <a href="T_UltimateXR_Avatar_UxrHandIntegration">UxrHandIntegration</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool GetHandSide(
	Transform transform,
	out UxrHandSide side
)
```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform to check which side it is part of</dd><dt>side</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Returns the side, if found</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether a side was found

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig Class</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />