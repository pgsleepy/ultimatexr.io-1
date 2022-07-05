# UxrCameraFade.FadeAsync Method 
 

Starts a fade over time using an async operation.

**Namespace:**&nbsp;<a href="N_UltimateXR_CameraUtils">UltimateXR.CameraUtils</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public Task FadeAsync(
	CancellationToken ct,
	float fadeSeconds,
	Color startColor,
	Color endColor
)
```

<a href="UltimateXR/Scripts/CameraUtils/UxrCameraFade.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>ct</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />The cancellation token to cancel the async operation</dd><dt>fadeSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The fade duration in seconds</dd><dt>startColor</dt><dd>Type: Color<br />The fade start color</dd><dt>endColor</dt><dd>Type: Color<br />The fade end color</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />\[Missing <returns> documentation for "M:UltimateXR.CameraUtils.UxrCameraFade.FadeAsync(System.Threading.CancellationToken,System.Single,UnityEngine.Color,UnityEngine.Color)"\]

## See Also


#### Reference
<a href="T_UltimateXR_CameraUtils_UxrCameraFade">UxrCameraFade Class</a><br /><a href="N_UltimateXR_CameraUtils">UltimateXR.CameraUtils Namespace</a><br />