# UxrInterpolationSettings Constructor (Single, Single, UxrEasing, UxrLoopMode, Single, Boolean, Boolean)
 

UxrInterpolationSettings constructor.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrInterpolationSettings(
	float durationSeconds,
	float delaySeconds = 0f,
	UxrEasing easing = UxrEasing.Linear,
	UxrLoopMode loopMode = UxrLoopMode.None,
	float loopedDurationSeconds = -1f,
	bool useUnscaledTime = false,
	bool delayUsingEndValue = false
)
```


#### Parameters
&nbsp;<dl><dt>durationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The duration in seconds the interpolation will be applied. If a loopMode was specified, it tells the duration of a single loop.</dd><dt>delaySeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The delay in seconds before the interpolation</dd><dt>easing (Optional)</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrEasing">UltimateXR.Animation.Interpolation.UxrEasing</a><br />The type of interpolation used.</dd><dt>loopMode (Optional)</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrLoopMode">UltimateXR.Animation.Interpolation.UxrLoopMode</a><br />The type of looping used.</dd><dt>loopedDurationSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />If loopMode is not LoopMode.None this parameter will tell how many seconds the total duration of the interpolation will last and durationSeconds will tell the duration of each loop. A negative value means it will loop forever.</dd><dt>useUnscaledTime (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Tells whether to use the real timer value unscaledTime (true) or the scaled time value (false) which is affected by timeScale.</dd><dt>delayUsingEndValue (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Tells whether to use the interpolation end value during the delay, if there is a *delaySeconds* specified. By default it's false, which means the interpolation start value is used during the delay.</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UxrInterpolationSettings Class</a><br /><a href="Overload_UltimateXR_Animation_Interpolation_UxrInterpolationSettings__ctor">UxrInterpolationSettings Overload</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />