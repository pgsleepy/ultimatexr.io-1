# UxrTeleportLocomotionBase.IsValidTeleport Method 
 

Checks if the teleport position is valid.

**Namespace:**&nbsp;<a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected bool IsValidTeleport(
	bool checkBlockingInBetween,
	ref Vector3 newPosition,
	Vector3 hitNormal,
	out bool isValidSlope
)
```


#### Parameters
&nbsp;<dl><dt>checkBlockingInBetween</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Should it check for blocking elements in a straight line from the current position to the new position?</dd><dt>newPosition</dt><dd>Type: Vector3<br />Teleport position. If should passed as reference because it may have slight corrections</dd><dt>hitNormal</dt><dd>Type: Vector3<br />The hit normal that generated the teleport position candidate</dd><dt>isValidSlope</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Returns a boolean telling if the slope at the destination is valid or not</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Boolean telling whether the new position is a valid teleport destination or not

## See Also


#### Reference
<a href="T_UltimateXR_Locomotion_UxrTeleportLocomotionBase">UxrTeleportLocomotionBase Class</a><br /><a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion Namespace</a><br />