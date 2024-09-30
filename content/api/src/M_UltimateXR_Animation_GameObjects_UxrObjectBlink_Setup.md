# UxrObjectBlink.Setup Method 
 

Sets up the blinking animation parameters.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_GameObjects">UltimateXR.Animation.GameObjects</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void Setup(
	MeshRenderer renderer,
	Color colorNormal,
	Color colorHighlight,
	float blinksPerSec = 4f,
	float durationSeconds = -1f
)
```


#### Parameters
&nbsp;<dl><dt>renderer</dt><dd>Type: MeshRenderer<br />Renderer whose material will be animated</dd><dt>colorNormal</dt><dd>Type: Color<br />The emission color when it is not blinking</dd><dt>colorHighlight</dt><dd>Type: Color<br />The fully blinking color</dd><dt>blinksPerSec (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The blinking frequency</dd><dt>durationSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The total duration of the animation in seconds</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_GameObjects_UxrObjectBlink">UxrObjectBlink Class</a><br /><a href="N_UltimateXR_Animation_GameObjects">UltimateXR.Animation.GameObjects Namespace</a><br />