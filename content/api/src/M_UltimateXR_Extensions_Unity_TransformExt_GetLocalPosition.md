# TransformExt.GetLocalPosition Method 
 

Gets the given position in *transform* local coordinates. If *transform* is null, *position* will be returned.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Vector3 GetLocalPosition(
	Transform transform,
	Vector3 position
)
```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform to get the local coordinates in</dd><dt>position</dt><dd>Type: Vector3<br />Position</dd></dl>

#### Return Value
Type: Vector3<br />Coordinates in local space or *position* if *transform* is null

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />