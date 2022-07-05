# UxrInterpolator.Interpolate Method (Quaternion, Quaternion, Single, UxrEasing)
 

Spherically interpolates (SLERP) between two quaternions using a t between range [0.0, 1.0] and a given easing.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Quaternion Interpolate(
	Quaternion a,
	Quaternion b,
	float t,
	UxrEasing easing
)
```


#### Parameters
&nbsp;<dl><dt>a</dt><dd>Type: Quaternion<br />Start value</dd><dt>b</dt><dd>Type: Quaternion<br />End value</dd><dt>t</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Interpolation factor</dd><dt>easing</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrEasing">UltimateXR.Animation.Interpolation.UxrEasing</a><br />Easing</dd></dl>

#### Return Value
Type: Quaternion<br />Interpolated value

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolator">UxrInterpolator Class</a><br /><a href="Overload_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate">Interpolate Overload</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />