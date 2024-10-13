# TransformExt.GetScaledVector Method (Transform, Vector3)
 

Gets a vector result of adding a Transform's right, up and forward vectors scaled by the x, y and z values of a vector.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Vector3 GetScaledVector(
	this Transform self,
	Vector3 v
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Transform<br />Transform whose axes will be used</dd><dt>v</dt><dd>Type: Vector3<br />Vector with the x, y and z scale factors</dd></dl>

#### Return Value
Type: Vector3<br />Vector result of applying the scale factors on the Transform axes and adding them together

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Transform. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_TransformExt_GetScaledVector">GetScaledVector Overload</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />