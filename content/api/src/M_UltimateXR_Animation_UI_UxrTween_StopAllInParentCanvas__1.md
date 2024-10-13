# UxrTween.StopAllInParentCanvas(*T*) Method (Canvas, Boolean)
 

Stops all enabled tweens of a given type that are in a given canvas.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void StopAllInParentCanvas<T>(
	Canvas canvas,
	bool restoreOriginal = true
)
where T : UxrTween

```


#### Parameters
&nbsp;<dl><dt>canvas</dt><dd>Type: Canvas<br />Canvas to disable all enabled tweens from</dd><dt>restoreOriginal (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to reset each animated component to the state before its animation started</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Type of <a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a>s to stop</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween Class</a><br /><a href="Overload_UltimateXR_Animation_UI_UxrTween_StopAllInParentCanvas">StopAllInParentCanvas Overload</a><br /><a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />