# UxrAnimatedTransform.PositionInterpolation Method 
 

Starts a translation using an interpolation curve

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Transforms">UltimateXR.Animation.Transforms</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrAnimatedTransform PositionInterpolation(
	GameObject gameObject,
	UxrTransformTranslationSpace space,
	Vector3 startPos,
	Vector3 endPos,
	UxrInterpolationSettings settings,
	Action finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>gameObject</dt><dd>Type: GameObject<br />The GameObject to apply the translation to</dd><dt>space</dt><dd>Type: <a href="T_UltimateXR_Animation_Transforms_UxrTransformTranslationSpace">UltimateXR.Animation.Transforms.UxrTransformTranslationSpace</a><br />The space where the translation takes place</dd><dt>startPos</dt><dd>Type: Vector3<br />The start position</dd><dt>endPos</dt><dd>Type: Vector3<br />The end position</dd><dt>settings</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UltimateXR.Animation.Interpolation.UxrInterpolationSettings</a><br />The interpolation settings with the curve parameters</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback called when the animation finished. Only applies to non-looping animations.</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_Transforms_UxrAnimatedTransform">UxrAnimatedTransform</a><br />The animation component

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Transforms_UxrAnimatedTransform">UxrAnimatedTransform Class</a><br /><a href="N_UltimateXR_Animation_Transforms">UltimateXR.Animation.Transforms Namespace</a><br />