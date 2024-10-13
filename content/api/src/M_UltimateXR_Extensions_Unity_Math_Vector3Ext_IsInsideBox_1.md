# Vector3Ext.IsInsideBox Method (Vector3, Vector3, Quaternion, Vector3, Vector3, Vector3, Vector3)
 

Checks if a point is inside of a box.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool IsInsideBox(
	this Vector3 point,
	Vector3 boxPosition,
	Quaternion boxRotation,
	Vector3 boxScale,
	Vector3 boxCenter,
	Vector3 boxSize,
	Vector3 margin = default
)
```


#### Parameters
&nbsp;<dl><dt>point</dt><dd>Type: Vector3<br />Point in world coordinates</dd><dt>boxPosition</dt><dd>Type: Vector3<br />The box position in world space</dd><dt>boxRotation</dt><dd>Type: Quaternion<br />The box rotation in world space</dd><dt>boxScale</dt><dd>Type: Vector3<br />The box scale</dd><dt>boxCenter</dt><dd>Type: Vector3<br />The box center in local box coordinates</dd><dt>boxSize</dt><dd>Type: Vector3<br />The box size in local box coordinates</dd><dt>margin (Optional)</dt><dd>Type: Vector3<br />Optional margin to be added to the each of the box sides</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />True if it is inside, false if not

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Vector3. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Math_Vector3Ext">Vector3Ext Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_Math_Vector3Ext_IsInsideBox">IsInsideBox Overload</a><br /><a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math Namespace</a><br />