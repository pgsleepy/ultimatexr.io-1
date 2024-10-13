# UxrAnimatedLightIntensity.AnimateInterpolation Method 
 

Starts an animation using an interpolation curve

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Lights">UltimateXR.Animation.Lights</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrAnimatedLightIntensity AnimateInterpolation(
	Light light,
	float startValue,
	float endValue,
	UxrInterpolationSettings settings,
	Action finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>light</dt><dd>Type: Light<br />The light component to apply the animation to</dd><dt>startValue</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The start intensity value</dd><dt>endValue</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The end intensity value</dd><dt>settings</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UltimateXR.Animation.Interpolation.UxrInterpolationSettings</a><br />The interpolation settings with the curve parameters</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback when the animation finished</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity">UxrAnimatedLightIntensity</a><br />Animation component

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity">UxrAnimatedLightIntensity Class</a><br /><a href="N_UltimateXR_Animation_Lights">UltimateXR.Animation.Lights Namespace</a><br />