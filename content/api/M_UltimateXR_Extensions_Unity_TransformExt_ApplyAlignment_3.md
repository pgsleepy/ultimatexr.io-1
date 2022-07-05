# TransformExt.ApplyAlignment Method (Vector3, Quaternion, Vector3, Quaternion, Vector3, Quaternion, Boolean, Boolean, Single)
 

Moves *rootPosition* and rotates *rootRotation* so that a child defined by *childPosition* and *childRotation* gets aligned to *targetPosition* and *targetRotation*.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void ApplyAlignment(
	ref Vector3 rootPosition,
	ref Quaternion rootRotation,
	Vector3 childPosition,
	Quaternion childRotation,
	Vector3 targetPosition,
	Quaternion targetRotation,
	bool rotate,
	bool translate,
	float t = 1f
)
```


#### Parameters
&nbsp;<dl><dt>rootPosition</dt><dd>Type: Vector3<br />Position of the root object</dd><dt>rootRotation</dt><dd>Type: Quaternion<br />Rotation of the root object</dd><dt>childPosition</dt><dd>Type: Vector3<br />Position of the child object that will try to align to *targetPosition*</dd><dt>childRotation</dt><dd>Type: Quaternion<br />Rotation of the child object that will try to align to *targetRotation*</dd><dt>targetPosition</dt><dd>Type: Vector3<br />Target position</dd><dt>targetRotation</dt><dd>Type: Quaternion<br />Target rotation</dd><dt>rotate</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Allows to control whether to rotate or not</dd><dt>translate</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Allows to control whether to translate or not</dd><dt>t (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Optional interpolation value [0.0, 1.0]</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_TransformExt_ApplyAlignment">ApplyAlignment Overload</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />