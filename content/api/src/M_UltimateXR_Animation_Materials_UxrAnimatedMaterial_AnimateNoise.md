# UxrAnimatedMaterial.AnimateNoise Method 
 

Starts a material parameter animation using noise

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void AnimateNoise(
	GameObject gameObject,
	int materialSlot,
	UxrMaterialMode materialMode,
	UxrMaterialParameterType parameterType,
	string parameterName,
	float noiseTimeStart,
	float noiseTimeDuration,
	Vector4 noiseValueStart,
	Vector4 noiseValueEnd,
	Vector4 noiseValueMin,
	Vector4 noiseValueMax,
	Vector4 noiseValueFrequency,
	bool useUnscaledTime = false,
	Action finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>gameObject</dt><dd>Type: GameObject<br />The GameObject with the material to apply the animation to</dd><dt>materialSlot</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />The renderer material slot where the material is</dd><dt>materialMode</dt><dd>Type: <a href="T_UltimateXR_Animation_Materials_UxrMaterialMode">UltimateXR.Animation.Materials.UxrMaterialMode</a><br />The material mode. Use instance to animate the material of a single object, use shared to also affect all other objects that share the same material</dd><dt>parameterType</dt><dd>Type: <a href="T_UltimateXR_Animation_Materials_UxrMaterialParameterType">UltimateXR.Animation.Materials.UxrMaterialParameterType</a><br />Selects the type of the parameter to animate</dd><dt>parameterName</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Selects the name of the parameter to animate. This name is the name in the shader, not in the inspector!</dd><dt>noiseTimeStart</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The time in seconds the noise will start (Time.time or Time.unscaledTime value)</dd><dt>noiseTimeDuration</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The duration in seconds of the noise animation</dd><dt>noiseValueStart</dt><dd>Type: Vector4<br />The start value. For int/float values use .x, for Vector2 use x and y. For Vector3 use x, y, z. etc.</dd><dt>noiseValueEnd</dt><dd>Type: Vector4<br />The end value. For int/float values use .x, for Vector2 use x and y. For Vector3 use x, y, z. etc.</dd><dt>noiseValueMin</dt><dd>Type: Vector4<br />The minimum intensity value for the noise. For int/float values use .x, for Vector2 use x and y. For Vector3 use x, y, z. etc.</dd><dt>noiseValueMax</dt><dd>Type: Vector4<br />The maximum intensity value for the noise. For int/float values use .x, for Vector2 use x and y. For Vector3 use x, y, z. etc.</dd><dt>noiseValueFrequency</dt><dd>Type: Vector4<br />The noise frequency. For int/float values use .x, for Vector2 use x and y. For Vector3 use x, y, z. etc.</dd><dt>useUnscaledTime (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />If true it will use Time.unscaledTime, if false it will use Time.time</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback when the animation finished</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Materials_UxrAnimatedMaterial">UxrAnimatedMaterial Class</a><br /><a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials Namespace</a><br />