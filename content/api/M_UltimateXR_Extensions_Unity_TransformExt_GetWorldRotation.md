# TransformExt.GetWorldRotation Method 
 

Transforms a rotation to world space. If *transform* is null, *localRotation* will be returned.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Quaternion GetWorldRotation(
	Transform transform,
	Quaternion localRotation
)
```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform with the space of the local rotation</dd><dt>localRotation</dt><dd>Type: Quaternion<br />Local rotation</dd></dl>

#### Return Value
Type: Quaternion<br />Rotation in world space or *localRotation* if *transform* is null

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />