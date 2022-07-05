# UxrInterpolator.Interpolate Method (Quaternion, Quaternion, Single, Single, Single, UxrEasing, UxrLoopMode, Single, Boolean)
 

Interpolates between two Quaternion values. The interpolation uses SLERP.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Quaternion Interpolate(
	Quaternion startValue,
	Quaternion endValue,
	float duration,
	float delay,
	float time,
	UxrEasing easing,
	UxrLoopMode loopMode = UxrLoopMode.None,
	float loopedDuration = -1f,
	bool delayUsingEndValue = false
)
```


#### Parameters
&nbsp;<dl><dt>startValue</dt><dd>Type: Quaternion<br />The start value</dd><dt>endValue</dt><dd>Type: Quaternion<br />The end value</dd><dt>duration</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The duration of the interpolation. If there is looping (loopMode != LoopMode.None) then it will specify the duration of a single loop</dd><dt>delay</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The delay duration before the interpolation starts</dd><dt>time</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The time value. This value will be clamped between [delay, delay + duration] or if there is looping (loopMode != LoopMode.None) then it will be clamped between [delay, delay + loopedDuration]. In this case duration will specify the duration of the loop</dd><dt>easing</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrEasing">UltimateXR.Animation.Interpolation.UxrEasing</a><br />The interpolation method to use. See @Easing</dd><dt>loopMode (Optional)</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrLoopMode">UltimateXR.Animation.Interpolation.UxrLoopMode</a><br />Which looping mode to use. See @LoopMode</dd><dt>loopedDuration (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />If loopMode is not LoopMode.None then loopedDuration will specify the duration of the interpolation including all the loops. A negative value will make it loop forever.</dd><dt>delayUsingEndValue (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Tells whether to use the interpolation end value during the delay, if there is a *delay* specified. By default it's false, which means the interpolation start value is used during the delay.</dd></dl>

#### Return Value
Type: Quaternion<br />Interpolated Quaternion value

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolator">UxrInterpolator Class</a><br /><a href="Overload_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate">Interpolate Overload</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />