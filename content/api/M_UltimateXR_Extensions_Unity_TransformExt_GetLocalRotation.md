# TransformExt.GetLocalRotation Method 
 

Gets the given rotation in *transform* local coordinates. If *transform* is null, *rotation* will be returned.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Quaternion GetLocalRotation(
	Transform transform,
	Quaternion rotation
)
```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform to get the local coordinates in</dd><dt>rotation</dt><dd>Type: Quaternion<br />Rotation</dd></dl>

#### Return Value
Type: Quaternion<br />Rotation in local space or *rotation* if *transform* is null

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />