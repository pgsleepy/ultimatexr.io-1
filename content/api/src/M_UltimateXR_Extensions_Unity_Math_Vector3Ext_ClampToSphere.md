# Vector3Ext.ClampToSphere Method 
 

Checks if a point is inside of a SphereCollider. If it is outside, it is clamped to remain inside.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Vector3 ClampToSphere(
	this Vector3 point,
	SphereCollider sphere
)
```


#### Parameters
&nbsp;<dl><dt>point</dt><dd>Type: Vector3<br />Point in world coordinates</dd><dt>sphere</dt><dd>Type: SphereCollider<br />Sphere collider to test against</dd></dl>

#### Return Value
Type: Vector3<br />Point restricted to the given sphere volume

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Vector3. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Math_Vector3Ext">Vector3Ext Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math Namespace</a><br />