# UxrInterpolator.GetInterpolationFactor Method 
 

Gets the T value used for linear interpolations like Vector3.Lerp or Quaternion.Slerp using easing and loop.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static float GetInterpolationFactor(
	float t,
	UxrEasing easing,
	UxrLoopMode loopMode = UxrLoopMode.None,
	float loopedDuration = -1f
)
```


#### Parameters
&nbsp;<dl><dt>t</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Value between range [0.0f, 1.0f]</dd><dt>easing</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrEasing">UltimateXR.Animation.Interpolation.UxrEasing</a><br />The interpolation method to use.</dd><dt>loopMode (Optional)</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrLoopMode">UltimateXR.Animation.Interpolation.UxrLoopMode</a><br />Which looping mode to use.</dd><dt>loopedDuration (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />If loopMode is not LoopMode.None then loopedDuration will specify the duration of the interpolation including all the loops. A negative value will make it loop forever.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a><br />The t value used to linearly interpolate using the specified parameters

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolator">UxrInterpolator Class</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />