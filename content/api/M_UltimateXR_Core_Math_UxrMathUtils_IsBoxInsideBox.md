# UxrMathUtils.IsBoxInsideBox Method (Vector3, Quaternion, Vector3, Vector3, Vector3, BoxCollider, Vector3)
 

Checks if a box is completely (all corners) inside a BoxCollider

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool IsBoxInsideBox(
	Vector3 boxPosition,
	Quaternion boxRotation,
	Vector3 boxScale,
	Vector3 boxCenter,
	Vector3 boxSize,
	BoxCollider boxVolume,
	Vector3 margin = default
)
```


#### Parameters
&nbsp;<dl><dt>boxPosition</dt><dd>Type: Vector3<br />Position of the box to test if it is inside the BoxCollider</dd><dt>boxRotation</dt><dd>Type: Quaternion<br />Rotation of the box to test if it is inside the BoxCollider</dd><dt>boxScale</dt><dd>Type: Vector3<br />Scale of the box to test if it is inside the BoxCollider</dd><dt>boxCenter</dt><dd>Type: Vector3<br />Center of the box (in local coordinates) to test if it is inside the BoxCollider</dd><dt>boxSize</dt><dd>Type: Vector3<br />Size of the box (in local coordinates) to test if it is inside the BoxCollider</dd><dt>boxVolume</dt><dd>Type: BoxCollider<br />BoxCollider to test against</dd><dt>margin (Optional)</dt><dd>Type: Vector3<br />Allowed margin for each x, y, z component</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />True if all corners are inside the BoxCollider plus margin

## See Also


#### Reference
<a href="T_UltimateXR_Core_Math_UxrMathUtils">UxrMathUtils Class</a><br /><a href="Overload_UltimateXR_Core_Math_UxrMathUtils_IsBoxInsideBox">IsBoxInsideBox Overload</a><br /><a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />