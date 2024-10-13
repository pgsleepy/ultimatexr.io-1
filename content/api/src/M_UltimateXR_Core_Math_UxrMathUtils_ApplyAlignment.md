# UxrMathUtils.ApplyAlignment Method 
 

Applies to *position* and *rotation* the transformation to make a transform defined by *sourcePosition* and *sourceRotation* move and rotate to *targetPosition* and *targetRotation*.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void ApplyAlignment(
	ref Vector3 position,
	ref Quaternion rotation,
	Vector3 sourcePosition,
	Quaternion sourceRotation,
	Vector3 targetPosition,
	Quaternion targetRotation,
	bool rotate,
	bool translate,
	float t = 1f
)
```


#### Parameters
&nbsp;<dl><dt>position</dt><dd>Type: Vector3<br />Position to apply the transformation to</dd><dt>rotation</dt><dd>Type: Quaternion<br />Rotation to apply the transformation to</dd><dt>sourcePosition</dt><dd>Type: Vector3<br />Source position that will try to match *targetPosition*</dd><dt>sourceRotation</dt><dd>Type: Quaternion<br />Source rotation that will try to match *targetRotation*</dd><dt>targetPosition</dt><dd>Type: Vector3<br />Target position</dd><dt>targetRotation</dt><dd>Type: Quaternion<br />Target rotation</dd><dt>rotate</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Allows to control whether to rotate or not</dd><dt>translate</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Allows to control whether to translate or not</dd><dt>t (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Optional interpolation value [0.0, 1.0]</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Math_UxrMathUtils">UxrMathUtils Class</a><br /><a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />