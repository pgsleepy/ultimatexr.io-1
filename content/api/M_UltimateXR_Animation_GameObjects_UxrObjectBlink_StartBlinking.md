# UxrObjectBlink.StartBlinking Method 
 

Starts a blinking animation using the emission material of an object.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_GameObjects">UltimateXR.Animation.GameObjects</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrObjectBlink StartBlinking(
	GameObject gameObject,
	Color emissionColor,
	float blinksPerSec,
	float durationSeconds,
	bool useUnscaledTime = false
)
```


#### Parameters
&nbsp;<dl><dt>gameObject</dt><dd>Type: GameObject<br />The GameObject to blink</dd><dt>emissionColor</dt><dd>Type: Color<br />The emission color</dd><dt>blinksPerSec</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The blink frequency</dd><dt>durationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Total duration of the blinking animation</dd><dt>useUnscaledTime (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to use unscaled time (unscaledTime) or not ( time)</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_GameObjects_UxrObjectBlink">UxrObjectBlink</a><br />Animation component

## See Also


#### Reference
<a href="T_UltimateXR_Animation_GameObjects_UxrObjectBlink">UxrObjectBlink Class</a><br /><a href="N_UltimateXR_Animation_GameObjects">UltimateXR.Animation.GameObjects Namespace</a><br />