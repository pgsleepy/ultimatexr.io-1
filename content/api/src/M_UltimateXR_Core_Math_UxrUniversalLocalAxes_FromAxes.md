# UxrUniversalLocalAxes.FromAxes Method 
 

Creates a UniversalLocalAxes object describing the universal local axes for the given transform.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrUniversalLocalAxes FromAxes(
	Transform transform,
	Vector3 universalLocalRight,
	Vector3 universalLocalUp,
	Vector3 universalLocalForward
)
```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />The transform the UniversalLocalAxes object is for</dd><dt>universalLocalRight</dt><dd>Type: Vector3<br />Which vector in the transform local coordinates points to the 'right' direction in the universal convention</dd><dt>universalLocalUp</dt><dd>Type: Vector3<br />Which vector in the transform local coordinates points to the 'up' direction in the universal convention</dd><dt>universalLocalForward</dt><dd>Type: Vector3<br />Which vector in the transform local coordinates points to the 'forward' direction in the universal convention</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UxrUniversalLocalAxes</a><br />UniversalLocalAxes object that allows us to compute object rotations in a universal space and then apply it to a transform that can have any kind of axis convention (x may point up, z down...)

## See Also


#### Reference
<a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UxrUniversalLocalAxes Class</a><br /><a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />