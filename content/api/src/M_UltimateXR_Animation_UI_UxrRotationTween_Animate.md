# UxrRotationTween.Animate Method 
 

Creates and starts a rotation tweening animation for the [!:RectTransform.localEulerAngles] of a Unity UI Graphic component.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrRotationTween Animate(
	Graphic graphic,
	Vector3 startAngles,
	Vector3 endAngles,
	UxrInterpolationSettings settings,
	Action<UxrTween> finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>graphic</dt><dd>Type: Graphic<br />Target graphic</dd><dt>startAngles</dt><dd>Type: Vector3<br />Start local angles</dd><dt>endAngles</dt><dd>Type: Vector3<br />End local angles</dd><dt>settings</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UltimateXR.Animation.Interpolation.UxrInterpolationSettings</a><br />Interpolation settings that control the animation</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">System.Action</a>(<a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a>)<br />Optional callback when the animation finished</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_UI_UxrRotationTween">UxrRotationTween</a><br />Tweening component that will update itself automatically. Can be used to stop the animation prematurely or change parameters on the fly.

## See Also


#### Reference
<a href="T_UltimateXR_Animation_UI_UxrRotationTween">UxrRotationTween Class</a><br /><a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />