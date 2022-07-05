# UxrAnimatedLightIntensity.AnimateNoise Method 
 

Starts an animation using noise.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Lights">UltimateXR.Animation.Lights</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrAnimatedLightIntensity AnimateNoise(
	Light light,
	float noiseTimeStart,
	float noiseTimeDuration,
	float noiseValueStart,
	float noiseValueEnd,
	float noiseValueMin,
	float noiseValueMax,
	float noiseValueFrequency,
	bool useUnscaledTime = false,
	Action finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>light</dt><dd>Type: Light<br />The light component to apply the animation to</dd><dt>noiseTimeStart</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The time in seconds the noise will start (Time.time or Time.unscaledTime value)</dd><dt>noiseTimeDuration</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The duration in seconds of the noise animation</dd><dt>noiseValueStart</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The start intensity value</dd><dt>noiseValueEnd</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The end intensity value</dd><dt>noiseValueMin</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The minimum intensity value for the noise</dd><dt>noiseValueMax</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The maximum intensity value for the noise</dd><dt>noiseValueFrequency</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The noise frequency</dd><dt>useUnscaledTime (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />If true it will use Time.unscaledTime, if false it will use Time.time</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback when the animation finished</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity">UxrAnimatedLightIntensity</a><br />Animation component

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity">UxrAnimatedLightIntensity Class</a><br /><a href="N_UltimateXR_Animation_Lights">UltimateXR.Animation.Lights Namespace</a><br />