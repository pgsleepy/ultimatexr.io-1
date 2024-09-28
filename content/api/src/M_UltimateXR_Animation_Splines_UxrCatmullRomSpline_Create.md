# UxrCatmullRomSpline.Create Method 
 

Creates a spline. If UsePrecomputedSampleCount > 0 it will also precompute samples in order to evaluate the spline using arc-length parameter.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool Create(
	float inOutMultiplier = 1f,
	params Vector3[] points
)
```


#### Parameters
&nbsp;<dl><dt>inOutMultiplier (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Magnitude of spline start and end dummy tangent vectors compared to their respective control points. A value of 1 (default) will create dummies mirroring p1 and p(n-1) vectors. A different value will multiply these vectors by it. It can be used to change the spline start/end curvature.</dd><dt>points</dt><dd>Type: Vector3[]<br />Set of points defining the curve</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Success or failure

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Splines_UxrCatmullRomSpline">UxrCatmullRomSpline Class</a><br /><a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines Namespace</a><br />