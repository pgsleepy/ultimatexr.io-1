# Matrix4x4Ext.Interpolate Method 
 

Interpolates two matrices by decomposing the position, rotation and scale values and interpolating them separately.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Matrix4x4 Interpolate(
	Matrix4x4 matrixA,
	Matrix4x4 matrixB,
	float blendValue
)
```


#### Parameters
&nbsp;<dl><dt>matrixA</dt><dd>Type: Matrix4x4<br />Source matrix</dd><dt>matrixB</dt><dd>Type: Matrix4x4<br />Destination matrix</dd><dt>blendValue</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Interpolation value [0.0, 1.0]</dd></dl>

#### Return Value
Type: Matrix4x4<br />Interpolated matrix

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Math_Matrix4x4Ext">Matrix4x4Ext Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math Namespace</a><br />