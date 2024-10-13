# UxrInterpolator.SmoothDamp Method 
 

Smooths a float value using the previous value, new value and a smooth value between [0.0, 1.0].

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static float SmoothDamp(
	float oldValue,
	float newValue,
	float smooth
)
```


#### Parameters
&nbsp;<dl><dt>oldValue</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Old value</dd><dt>newValue</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />New value</dd><dt>smooth</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Smooth value [0.0, 1.0] where 0.0 is no smoothing and 1.0 is maximum smoothing</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a><br />Smoothed value

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolator">UxrInterpolator Class</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />