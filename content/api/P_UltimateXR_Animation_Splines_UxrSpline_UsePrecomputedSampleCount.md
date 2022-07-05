# UxrSpline.UsePrecomputedSampleCount Property 
 

Number of curve samples that are going to be pre-computed in order to enable arc length parametrization. This method must be called before creating the spline and will enable EvaluateUsingArcLength() calls. For short splines the default value is enough. For very long splines it may be required to increase the sample count.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public int UsePrecomputedSampleCount { get; set; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Splines_UxrSpline">UxrSpline Class</a><br /><a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines Namespace</a><br />