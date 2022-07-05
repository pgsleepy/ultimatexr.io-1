# UxrTeleportLocomotionBase.NotifyDestinationRaycast Method 
 

Notifies a raycast was selected to be a potential destination. Computes whether the destination is valid. If it is, sets the appropriate internal state that can later be executed using <a href="M_UltimateXR_Locomotion_UxrTeleportLocomotionBase_TryTeleportUsingCurrentTarget">TryTeleportUsingCurrentTarget()</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected bool NotifyDestinationRaycast(
	RaycastHit hit
)
```


#### Parameters
&nbsp;<dl><dt>hit</dt><dd>Type: RaycastHit<br />Raycast that will be processed as a potential teleport destination</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the destination is a valid teleport location

## See Also


#### Reference
<a href="T_UltimateXR_Locomotion_UxrTeleportLocomotionBase">UxrTeleportLocomotionBase Class</a><br /><a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion Namespace</a><br />