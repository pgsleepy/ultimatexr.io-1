# TransformExt.GetWorldPosition Method 
 

Transforms a position to world space coordinates. If *transform* is null, *localPosition* will be returned.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Vector3 GetWorldPosition(
	Transform transform,
	Vector3 localPosition
)
```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform with the space of the local coordinates</dd><dt>localPosition</dt><dd>Type: Vector3<br />Position in local coordinates</dd></dl>

#### Return Value
Type: Vector3<br />Coordinates in world space or *localPosition* if *transform* is null

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />