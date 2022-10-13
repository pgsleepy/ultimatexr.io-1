# TransformExt.GetWorldDirection Method 
 

Transforms a direction to world space. If *transform* is null, *localDirection* will be returned.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Vector3 GetWorldDirection(
	Transform transform,
	Vector3 localDirection
)
```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform with the space of the local direction</dd><dt>localDirection</dt><dd>Type: Vector3<br />Direction</dd></dl>

#### Return Value
Type: Vector3<br />Rotation in world space or *localDirection* if *transform* is null

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />