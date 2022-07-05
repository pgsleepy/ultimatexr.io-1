# UxrUniversalLocalAxes.UniversalToActualAxesRotation Property 
 

Gets the rotation that transforms from the universal axes to the convention that the transform follows. 

## Examples

```
// universalRotation may be a rotation around the y axis, where we know
// exactly that y points upwards in that space.
// This rotation will rotate an object around the "universal" y axis no
// matter where his actual axes point to.
transform.rotation = universalRotation * UniversalToActualAxesRotation;
```


**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public Quaternion UniversalToActualAxesRotation { get; }
```


#### Property Value
Type: Quaternion

## See Also


#### Reference
<a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UxrUniversalLocalAxes Class</a><br /><a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />