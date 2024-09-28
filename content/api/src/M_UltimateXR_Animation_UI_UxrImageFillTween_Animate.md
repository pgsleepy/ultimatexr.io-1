# UxrImageFillTween.Animate Method 
 

Creates and starts a tweening animation for the fillAmount value in an Image component.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrImageFillTween Animate(
	Image image,
	float startFillAmount,
	float endFillAmount,
	UxrInterpolationSettings settings,
	Action<UxrTween> finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>image</dt><dd>Type: Image<br />Target image</dd><dt>startFillAmount</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Start fill amount</dd><dt>endFillAmount</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />End fill amount</dd><dt>settings</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UltimateXR.Animation.Interpolation.UxrInterpolationSettings</a><br />Interpolation settings that control the animation</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">System.Action</a>(<a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a>)<br />Optional callback when the animation finished</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_UI_UxrImageFillTween">UxrImageFillTween</a><br />Tweening component that will update itself automatically. Can be used to stop the animation prematurely or change parameters on the fly.

## See Also


#### Reference
<a href="T_UltimateXR_Animation_UI_UxrImageFillTween">UxrImageFillTween Class</a><br /><a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />