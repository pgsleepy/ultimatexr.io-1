# Matrix4x4Ext.GetObliqueMatrix Method 
 

Computes a projection matrix so that it has an oblique near clip plane.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Matrix4x4 GetObliqueMatrix(
	this Matrix4x4 projection,
	Vector4 clipPlane
)
```


#### Parameters
&nbsp;<dl><dt>projection</dt><dd>Type: Matrix4x4<br />Projection matrix</dd><dt>clipPlane</dt><dd>Type: Vector4<br />Clipping plane in camera space</dd></dl>

#### Return Value
Type: Matrix4x4<br />Projection matrix with oblique clip plane

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Matrix4x4. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Math_Matrix4x4Ext">Matrix4x4Ext Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math Namespace</a><br />