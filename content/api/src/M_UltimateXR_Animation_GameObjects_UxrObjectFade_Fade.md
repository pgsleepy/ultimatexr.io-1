# UxrObjectFade.Fade Method 
 

Starts a fade animation.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_GameObjects">UltimateXR.Animation.GameObjects</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrObjectFade Fade(
	GameObject gameObject,
	float startAlphaQuantity,
	float endFadeQuantity,
	float delaySeconds,
	float durationSeconds,
	bool recursively = true,
	bool useUnscaledTime = false,
	Action finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>gameObject</dt><dd>Type: GameObject<br />GameObject whose material transparency will be enabled and animated.</dd><dt>startAlphaQuantity</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Start alpha</dd><dt>endFadeQuantity</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />End alpha</dd><dt>delaySeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Seconds to wait before the animation starts</dd><dt>durationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Fade duration in seconds</dd><dt>recursively (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to also process all other child objects in the hierarchy</dd><dt>useUnscaledTime (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to use unscaled time (unscaledTime) or not ( time)</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback executed when the animation finished</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_GameObjects_UxrObjectFade">UxrObjectFade</a><br />Animation component

## See Also


#### Reference
<a href="T_UltimateXR_Animation_GameObjects_UxrObjectFade">UxrObjectFade Class</a><br /><a href="N_UltimateXR_Animation_GameObjects">UltimateXR.Animation.GameObjects Namespace</a><br />