# UxrLocomotion.HasBlockingCapsuleCastHit Method 
 

Checks whether a capsule cast has anything that is blocking. It filters out invalid positives such as against anything part of the avatar or a grabbed object.

**Namespace:**&nbsp;<a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected bool HasBlockingCapsuleCastHit(
	UxrAvatar avatar,
	Vector3 point1,
	Vector3 point2,
	float radius,
	Vector3 direction,
	float maxDistance,
	int layerMask,
	QueryTriggerInteraction queryTriggerInteraction,
	out RaycastHit outputHit
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />The avatar to compute the capsule cast for</dd><dt>point1</dt><dd>Type: Vector3<br />The center of the sphere at the start of the capsule</dd><dt>point2</dt><dd>Type: Vector3<br />The center of the sphere at the end of the capsule</dd><dt>radius</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The radius of the capsule</dd><dt>direction</dt><dd>Type: Vector3<br />The direction into which to sweep the capsule</dd><dt>maxDistance</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The max length of the sweep</dd><dt>layerMask</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />A that is used to selectively ignore colliders when casting a capsule</dd><dt>queryTriggerInteraction</dt><dd>Type: QueryTriggerInteraction<br />Specifies whether this query should hit Triggers</dd><dt>outputHit</dt><dd>Type: RaycastHit<br />Result blocking raycast</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether there is a blocking raycast returned in *outputHit*

## See Also


#### Reference
<a href="T_UltimateXR_Locomotion_UxrLocomotion">UxrLocomotion Class</a><br /><a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion Namespace</a><br />