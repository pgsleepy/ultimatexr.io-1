# UxrAnimatedLightIntensity.Animate Method 
 

Starts an animation at a constant speed

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Lights">UltimateXR.Animation.Lights</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrAnimatedLightIntensity Animate(
	Light light,
	float speed,
	bool useUnscaledTime = false
)
```


#### Parameters
&nbsp;<dl><dt>light</dt><dd>Type: Light<br />The light component to apply the animation to</dd><dt>speed</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The animation speed. For int/float values use .x, for Vector2 use x and y. For Vector3 use x, y, z. etc.</dd><dt>useUnscaledTime (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />If it is true then Time.unscaledTime will be used to count seconds. By default it is false meaning Time.time will be used instead. Time.time is affected by Time.timeScale which in many cases is used for application pauses or bullet-time effects, while Time.unscaledTime is not.</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity">UxrAnimatedLightIntensity</a><br />Animation component

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity">UxrAnimatedLightIntensity Class</a><br /><a href="N_UltimateXR_Animation_Lights">UltimateXR.Animation.Lights Namespace</a><br />