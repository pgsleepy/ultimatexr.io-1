# UxrMathUtils.IsBoxInsideBox Method (Vector3, Quaternion, Vector3, Vector3, Vector3, Vector3, Quaternion, Vector3, Vector3, Vector3, Vector3)
 

Checks if box1 is completely (all corners) inside box2

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool IsBoxInsideBox(
	Vector3 box1Position,
	Quaternion box1Rotation,
	Vector3 box1Scale,
	Vector3 box1Center,
	Vector3 box1Size,
	Vector3 box2Position,
	Quaternion box2Rotation,
	Vector3 box2Scale,
	Vector3 box2Center,
	Vector3 box2Size,
	Vector3 margin = default
)
```


#### Parameters
&nbsp;<dl><dt>box1Position</dt><dd>Type: Vector3<br />Position of box1</dd><dt>box1Rotation</dt><dd>Type: Quaternion<br />Rotation of box1</dd><dt>box1Scale</dt><dd>Type: Vector3<br />Scale of box1</dd><dt>box1Center</dt><dd>Type: Vector3<br />Center of box1 in its own local coordinates</dd><dt>box1Size</dt><dd>Type: Vector3<br />Size of box1 in its own local coordinates</dd><dt>box2Position</dt><dd>Type: Vector3<br />Position of box2</dd><dt>box2Rotation</dt><dd>Type: Quaternion<br />Rotation of box2</dd><dt>box2Scale</dt><dd>Type: Vector3<br />Scale of box2</dd><dt>box2Center</dt><dd>Type: Vector3<br />Center of box2 in its own local coordinates</dd><dt>box2Size</dt><dd>Type: Vector3<br />Size of box2 in its own local coordinates</dd><dt>margin (Optional)</dt><dd>Type: Vector3<br />Allowed margin for each x, y, z component</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />True if all corners of box1 are inside box2 plus margin

## See Also


#### Reference
<a href="T_UltimateXR_Core_Math_UxrMathUtils">UxrMathUtils Class</a><br /><a href="Overload_UltimateXR_Core_Math_UxrMathUtils_IsBoxInsideBox">IsBoxInsideBox Overload</a><br /><a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />