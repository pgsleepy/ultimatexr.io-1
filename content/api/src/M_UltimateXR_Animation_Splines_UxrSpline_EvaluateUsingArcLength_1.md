# UxrSpline.EvaluateUsingArcLength Method (Single, Vector3, Vector3)
 

Evaluates the curve using arc-length parametrization

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool EvaluateUsingArcLength(
	float distance,
	out Vector3 position,
	out Vector3 direction
)
```


#### Parameters
&nbsp;<dl><dt>distance</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Distance parameter [0.0f, ArcLength]</dd><dt>position</dt><dd>Type: Vector3<br />Interpolated point</dd><dt>direction</dt><dd>Type: Vector3<br />Interpolated point direction vector</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Success or failure

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Splines_UxrSpline">UxrSpline Class</a><br /><a href="Overload_UltimateXR_Animation_Splines_UxrSpline_EvaluateUsingArcLength">EvaluateUsingArcLength Overload</a><br /><a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines Namespace</a><br />