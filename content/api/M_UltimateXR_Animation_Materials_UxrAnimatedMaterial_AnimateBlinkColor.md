# UxrAnimatedMaterial.AnimateBlinkColor Method 
 

Starts animating a GameObject's material making one if its color parameters blink.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrAnimatedMaterial AnimateBlinkColor(
	GameObject gameObject,
	string varNameColor,
	Color colorOff,
	Color colorOn,
	float blinkFrequency = 3f,
	float durationSeconds = -1f,
	UxrMaterialMode materialMode = UxrMaterialMode.InstanceOnly,
	Action finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>gameObject</dt><dd>Type: GameObject<br />GameObject whose material to animate</dd><dt>varNameColor</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />The float var name</dd><dt>colorOff</dt><dd>Type: Color<br />The minimum color value in the blink</dd><dt>colorOn</dt><dd>Type: Color<br />The maximum color value in the blink</dd><dt>blinkFrequency (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The blinking frequency</dd><dt>durationSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The duration in seconds. Use a negative value to keep keep blinking until stopping manually.</dd><dt>materialMode (Optional)</dt><dd>Type: <a href="T_UltimateXR_Animation_Materials_UxrMaterialMode">UltimateXR.Animation.Materials.UxrMaterialMode</a><br />The material mode</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback when the animation finished</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_Materials_UxrAnimatedMaterial">UxrAnimatedMaterial</a><br />Material animation component

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Materials_UxrAnimatedMaterial">UxrAnimatedMaterial Class</a><br /><a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials Namespace</a><br />