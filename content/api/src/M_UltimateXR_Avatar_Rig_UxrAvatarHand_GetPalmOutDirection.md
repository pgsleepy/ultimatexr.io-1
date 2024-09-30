# UxrAvatarHand.GetPalmOutDirection Method 
 

Tries to compute the direction that goes out of the palm in world coordinates.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool GetPalmOutDirection(
	UxrHandSide handSide,
	out Vector3 direction
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which hand it is</dd><dt>direction</dt><dd>Type: Vector3<br />Returns the palm vector in world coordinates</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the vector could be computed. False if some required bone references are missing

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarHand">UxrAvatarHand Class</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />