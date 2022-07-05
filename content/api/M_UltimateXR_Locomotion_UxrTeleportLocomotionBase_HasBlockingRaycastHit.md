# UxrTeleportLocomotionBase.HasBlockingRaycastHit Method 
 

Checks whether the given raycast hits have any that are blocking. A blocking raycast can either be a valid or invalid teleport destination depending on many factors. Use IsValidDestination(Vector3, Vector3, Boolean) to check whether the given position is valid.

**Namespace:**&nbsp;<a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected bool HasBlockingRaycastHit(
	RaycastHit[] inputHits,
	out RaycastHit outputHit
)
```


#### Parameters
&nbsp;<dl><dt>inputHits</dt><dd>Type: RaycastHit[]<br />Set of raycast hits to check</dd><dt>outputHit</dt><dd>Type: RaycastHit<br />Result blocking raycast</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether there is a blocking raycast returned in *outputHit*

## See Also


#### Reference
<a href="T_UltimateXR_Locomotion_UxrTeleportLocomotionBase">UxrTeleportLocomotionBase Class</a><br /><a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion Namespace</a><br />