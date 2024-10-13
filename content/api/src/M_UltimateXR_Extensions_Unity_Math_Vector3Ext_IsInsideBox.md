# Vector3Ext.IsInsideBox Method (Vector3, BoxCollider, Vector3, Boolean)
 

Checks if a point is inside of a BoxCollider.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool IsInsideBox(
	this Vector3 point,
	BoxCollider box,
	Vector3 margin = default,
	bool marginIsWorld = true
)
```


#### Parameters
&nbsp;<dl><dt>point</dt><dd>Type: Vector3<br />Point in world coordinates</dd><dt>box</dt><dd>Type: BoxCollider<br />Box collider to test against</dd><dt>margin (Optional)</dt><dd>Type: Vector3<br />Optional margin to be added to the each of the box sides</dd><dt>marginIsWorld (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether the margin is specified in world coordinates or local</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether point is inside

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Vector3. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Math_Vector3Ext">Vector3Ext Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_Math_Vector3Ext_IsInsideBox">IsInsideBox Overload</a><br /><a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math Namespace</a><br />