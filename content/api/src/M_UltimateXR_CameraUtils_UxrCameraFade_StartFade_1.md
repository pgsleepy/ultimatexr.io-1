# UxrCameraFade.StartFade Method (Camera, Single, Single, Color, Action, Action)
 

Starts a fade over time on the given camera. The camera will fade out to a given color and then fade in from that color again. This is the static helper method that can be used to perform everything in just a single static call.

**Namespace:**&nbsp;<a href="N_UltimateXR_CameraUtils">UltimateXR.CameraUtils</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void StartFade(
	Camera camera,
	float fadeOutDurationSeconds,
	float fadeInDurationSeconds,
	Color fadeColor,
	Action fadeOutFinishedCallback = null,
	Action fadeInFinishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>camera</dt><dd>Type: Camera<br />The camera to perform the fade on</dd><dt>fadeOutDurationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Number of seconds of the initial fade-out</dd><dt>fadeInDurationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Number of seconds of the fade-in</dd><dt>fadeColor</dt><dd>Type: Color<br />The color the component fades out to and fades in from</dd><dt>fadeOutFinishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback executed right after the fade out finished</dd><dt>fadeInFinishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback executed right after the fade in finished</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_CameraUtils_UxrCameraFade">UxrCameraFade Class</a><br /><a href="Overload_UltimateXR_CameraUtils_UxrCameraFade_StartFade">StartFade Overload</a><br /><a href="N_UltimateXR_CameraUtils">UltimateXR.CameraUtils Namespace</a><br />