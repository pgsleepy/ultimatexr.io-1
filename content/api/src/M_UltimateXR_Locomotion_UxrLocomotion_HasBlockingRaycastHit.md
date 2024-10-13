# UxrLocomotion.HasBlockingRaycastHit Method 
 

Checks whether a raycast has anything that is blocking. It filters out invalid raycasts such as against anything part of the avatar or a grabbed object.

**Namespace:**&nbsp;<a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected bool HasBlockingRaycastHit(
	UxrAvatar avatar,
	Vector3 origin,
	Vector3 direction,
	float maxDistance,
	int layerMaskRaycast,
	QueryTriggerInteraction queryTriggerInteraction,
	out RaycastHit outputHit
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />The avatar to compute the raycast for</dd><dt>origin</dt><dd>Type: Vector3<br />Ray origin</dd><dt>direction</dt><dd>Type: Vector3<br />Ray direction</dd><dt>maxDistance</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Raycast maximum distance</dd><dt>layerMaskRaycast</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Raycast layer mask</dd><dt>queryTriggerInteraction</dt><dd>Type: QueryTriggerInteraction<br />Behaviour against trigger colliders</dd><dt>outputHit</dt><dd>Type: RaycastHit<br />Result blocking raycast</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether there is a blocking raycast returned in *outputHit*

## See Also


#### Reference
<a href="T_UltimateXR_Locomotion_UxrLocomotion">UxrLocomotion Class</a><br /><a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion Namespace</a><br />