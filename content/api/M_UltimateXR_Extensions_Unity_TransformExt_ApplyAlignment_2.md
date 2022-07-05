# TransformExt.ApplyAlignment Method (Transform, Vector3, Quaternion, Vector3, Quaternion, Boolean, Boolean, Single)
 

Applies the transformation to make a transform defined by *sourcePosition* and *sourceRotation* move and rotate to *targetPosition* and *targetRotation*.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void ApplyAlignment(
	this Transform transform,
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
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform to apply the alignment to</dd><dt>sourcePosition</dt><dd>Type: Vector3<br />Source position that will try to match *targetPosition*</dd><dt>sourceRotation</dt><dd>Type: Quaternion<br />Source rotation that will try to match *targetRotation*</dd><dt>targetPosition</dt><dd>Type: Vector3<br />Target position</dd><dt>targetRotation</dt><dd>Type: Quaternion<br />Target rotation</dd><dt>rotate</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Allows to control whether to rotate or not</dd><dt>translate</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Allows to control whether to translate or not</dd><dt>t (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Optional interpolation value [0.0, 1.0]</dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Transform. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_TransformExt_ApplyAlignment">ApplyAlignment Overload</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />