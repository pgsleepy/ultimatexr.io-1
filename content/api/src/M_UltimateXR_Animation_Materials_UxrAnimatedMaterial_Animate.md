# UxrAnimatedMaterial.Animate Method 
 

Starts an animation at a constant speed

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrAnimatedMaterial Animate(
	GameObject gameObject,
	int materialSlot,
	UxrMaterialMode materialMode,
	UxrMaterialParameterType parameterType,
	string parameterName,
	Vector4 speed,
	float durationSeconds = -1f,
	bool useUnscaledTime = false,
	Action finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>gameObject</dt><dd>Type: GameObject<br />The GameObject with the material to apply the animation to</dd><dt>materialSlot</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />The renderer material slot where the material is</dd><dt>materialMode</dt><dd>Type: <a href="T_UltimateXR_Animation_Materials_UxrMaterialMode">UltimateXR.Animation.Materials.UxrMaterialMode</a><br />The material mode. Use instance to animate the material of a single object, use shared to also affect all other objects that share the same material</dd><dt>parameterType</dt><dd>Type: <a href="T_UltimateXR_Animation_Materials_UxrMaterialParameterType">UltimateXR.Animation.Materials.UxrMaterialParameterType</a><br />Selects the type of the parameter to animate</dd><dt>parameterName</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Selects the name of the parameter to animate. This name is the name in the shader, not in the inspector!</dd><dt>speed</dt><dd>Type: Vector4<br />The animation speed. For int/float values use .x, for Vector2 use x and y. For Vector3 use x, y, z. etc.</dd><dt>durationSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Duration in seconds of the animation. Use a negative value to keep updating until stopped manually.</dd><dt>useUnscaledTime (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />If it is true then Time.unscaledTime will be used to count seconds. By default it is false meaning Time.time will be used instead. Time.time is affected by Time.timeScale which in many cases is used for application pauses or bullet-time effects, while Time.unscaledTime is not.</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback when the animation finished</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_Materials_UxrAnimatedMaterial">UxrAnimatedMaterial</a><br />The animation component

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Materials_UxrAnimatedMaterial">UxrAnimatedMaterial Class</a><br /><a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials Namespace</a><br />