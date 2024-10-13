# UxrInterpolator.Interpolate Method (Quaternion, Quaternion, Single, UxrInterpolationSettings)
 

Interpolates between two Quaternion values. The interpolation uses SLERP.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Quaternion Interpolate(
	Quaternion startValue,
	Quaternion endValue,
	float time,
	UxrInterpolationSettings settings
)
```


#### Parameters
&nbsp;<dl><dt>startValue</dt><dd>Type: Quaternion<br />The start value</dd><dt>endValue</dt><dd>Type: Quaternion<br />The end value</dd><dt>time</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The time value</dd><dt>settings</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UltimateXR.Animation.Interpolation.UxrInterpolationSettings</a><br />Interpolation settings to use</dd></dl>

#### Return Value
Type: Quaternion<br />Interpolated Quaternion value

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td><td>When *settings* is null.</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolator">UxrInterpolator Class</a><br /><a href="Overload_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate">Interpolate Overload</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />