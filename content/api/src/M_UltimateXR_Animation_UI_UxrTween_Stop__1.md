# UxrTween.Stop(*T*) Method (Behaviour, Boolean)
 

Stops the tweening animation on an object if it has a *T* component currently added.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void Stop<T>(
	Behaviour behaviour,
	bool restoreOriginal = true
)
where T : UxrTween

```


#### Parameters
&nbsp;<dl><dt>behaviour</dt><dd>Type: Behaviour<br />UI Component whose GameObject has the tween added</dd><dt>restoreOriginal (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to reset the animated component to the state before the animation started</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Type of <a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a> to stop</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween Class</a><br /><a href="Overload_UltimateXR_Animation_UI_UxrTween_Stop">Stop Overload</a><br /><a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />