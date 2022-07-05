# UxrCanvasAlphaTween.FadeOutAsync Method 
 

Same as <a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_FadeOut">FadeOut(CanvasGroup, Single, Single, Action(UxrTween))</a> but for use with async/await.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task FadeOutAsync(
	CancellationToken ct,
	CanvasGroup canvasGroup,
	float durationSeconds,
	float delaySeconds = 0f
)
```


#### Parameters
&nbsp;<dl><dt>ct</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Cancellation token to cancel the asynchronous animation. <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken.none#system-threading-cancellationtoken-none" target="_blank" rel="noopener noreferrer">None</a> to ignore.</dd><dt>canvasGroup</dt><dd>Type: CanvasGroup<br />Target CanvasGroup</dd><dt>durationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Duration in seconds of the fade-in animation</dd><dt>delaySeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Seconds to wait until the animation starts</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />Task representing the asynchronous process.

## See Also


#### Reference
<a href="T_UltimateXR_Animation_UI_UxrCanvasAlphaTween">UxrCanvasAlphaTween Class</a><br /><a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />