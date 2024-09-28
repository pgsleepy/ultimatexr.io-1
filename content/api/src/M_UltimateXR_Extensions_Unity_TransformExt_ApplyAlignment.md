# TransformExt.ApplyAlignment Method (Transform, Quaternion, Quaternion, Single)
 

Applies the transformation to make a rotation defined by *sourceRotation* rotate towards *targetRotation*.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void ApplyAlignment(
	this Transform self,
	Quaternion sourceRotation,
	Quaternion targetRotation,
	float t = 1f
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Transform<br />Transform to apply the alignment to</dd><dt>sourceRotation</dt><dd>Type: Quaternion<br />Source rotation that will try to match *targetRotation*</dd><dt>targetRotation</dt><dd>Type: Quaternion<br />Target rotation to match</dd><dt>t (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Optional interpolation value [0.0, 1.0]</dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Transform. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_TransformExt_ApplyAlignment">ApplyAlignment Overload</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />