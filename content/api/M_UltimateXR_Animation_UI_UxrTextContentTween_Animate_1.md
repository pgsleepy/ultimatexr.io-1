# UxrTextContentTween.Animate Method (GameObject, UxrInterpolationSettings, Action(UxrTween), String, Object[])
 

Creates and starts a tweening animation for a Unity UI Text component or TMPro text component. See <a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_InterpolateText">UxrInterpolator.InterpolateText</a> for information on how *formatString* and *formatStringArgs* work.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrTextContentTween Animate(
	GameObject gameObject,
	UxrInterpolationSettings settings,
	Action<UxrTween> finishedCallback,
	string formatString,
	Object[] formatStringArgs
)
```


#### Parameters
&nbsp;<dl><dt>gameObject</dt><dd>Type: GameObject<br />Target GameObject with either a Unity UI Text component or Text Mesh Pro text component</dd><dt>settings</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UltimateXR.Animation.Interpolation.UxrInterpolationSettings</a><br />Interpolation settings that control the animation</dd><dt>finishedCallback</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">System.Action</a>(<a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a>)<br />Optional callback when the animation finished. Use null to ignore.</dd><dt>formatString</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Format string. See <a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_InterpolateText">UxrInterpolator.InterpolateText</a></dd><dt>formatStringArgs</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a>[]<br />Format string arguments. See <a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_InterpolateText">UxrInterpolator.InterpolateText</a></dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_UI_UxrTextContentTween">UxrTextContentTween</a><br />Tweening component that will update itself automatically. Can be used to stop the animation prematurely or change parameters on the fly.

## See Also


#### Reference
<a href="T_UltimateXR_Animation_UI_UxrTextContentTween">UxrTextContentTween Class</a><br /><a href="Overload_UltimateXR_Animation_UI_UxrTextContentTween_Animate">Animate Overload</a><br /><a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />