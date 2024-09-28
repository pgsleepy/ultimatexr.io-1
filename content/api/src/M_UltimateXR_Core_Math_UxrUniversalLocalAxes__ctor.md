# UxrUniversalLocalAxes Constructor 
 

Constructor. Uses universalReference to check which axes of a transform are actually the ones that are right, up and forward. For example, universalReference may be the avatar root where we know that right, up and forward point to these actual directions and we want to know which axes of an upper body part point to these directions too. These may be completely different depending on the modelling package or artist. Using this class we can easily check which one points upwards and create a small chest torsion by rotating around this axis.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrUniversalLocalAxes(
	Transform transform,
	Transform universalReference
)
```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform to create the universal axes for</dd><dt>universalReference</dt><dd>Type: Transform<br />The transform to use as a reference for the universal right, up and forward directions.</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UxrUniversalLocalAxes Class</a><br /><a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />