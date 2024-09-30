# UxrColorTween.AnimateAlpha Method 
 

Creates and starts an alpha tweening animation for the color of a Unity UI component.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrColorTween AnimateAlpha(
	Graphic graphic,
	float startAlpha,
	float endAlpha,
	UxrInterpolationSettings settings,
	Action<UxrTween> finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>graphic</dt><dd>Type: Graphic<br />Target graphic</dd><dt>startAlpha</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Start alpha</dd><dt>endAlpha</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />End alpha</dd><dt>settings</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UltimateXR.Animation.Interpolation.UxrInterpolationSettings</a><br />Interpolation settings that control the animation</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">System.Action</a>(<a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a>)<br />Optional callback when the animation finished</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_UI_UxrColorTween">UxrColorTween</a><br />Tweening component that will update itself automatically. Can be used to stop the animation prematurely or change parameters on the fly.

## See Also


#### Reference
<a href="T_UltimateXR_Animation_UI_UxrColorTween">UxrColorTween Class</a><br /><a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />