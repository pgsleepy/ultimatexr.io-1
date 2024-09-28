# UxrCameraFade.StartFadeCoroutine Method 
 

Coroutine that fades the screen over time. It can be used to be yielded externally from another coroutine. <a href="M_UltimateXR_CameraUtils_UxrCameraFade_FadeAsync">FadeAsync(CancellationToken, Single, Color, Color)</a> is provided as the async alternative.

**Namespace:**&nbsp;<a href="N_UltimateXR_CameraUtils">UltimateXR.CameraUtils</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public IEnumerator StartFadeCoroutine(
	float fadeSeconds,
	Color startColor,
	Color endColor
)
```

<a href="UltimateXR/Scripts/CameraUtils/UxrCameraFade.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>fadeSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Seconds it will take to execute the fade</dd><dt>startColor</dt><dd>Type: Color<br />Start color value</dd><dt>endColor</dt><dd>Type: Color<br />End color value</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.ienumerator" target="_blank" rel="noopener noreferrer">IEnumerator</a><br />Coroutine IEnumerator

## See Also


#### Reference
<a href="T_UltimateXR_CameraUtils_UxrCameraFade">UxrCameraFade Class</a><br /><a href="N_UltimateXR_CameraUtils">UltimateXR.CameraUtils Namespace</a><br />