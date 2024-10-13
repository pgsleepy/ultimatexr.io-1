# UxrAnimatedMaterial.AnimateInterpolation Method 
 

Starts a material parameter animation using an interpolation curve

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrAnimatedMaterial AnimateInterpolation(
	GameObject gameObject,
	int materialSlot,
	UxrMaterialMode materialMode,
	UxrMaterialParameterType parameterType,
	string parameterName,
	Vector4 startValue,
	Vector4 endValue,
	UxrInterpolationSettings settings,
	Action finishedCallback = null
)
```


#### Parameters
&nbsp;<dl><dt>gameObject</dt><dd>Type: GameObject<br />The GameObject with the material to apply the animation to</dd><dt>materialSlot</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />The renderer material slot where the material is</dd><dt>materialMode</dt><dd>Type: <a href="T_UltimateXR_Animation_Materials_UxrMaterialMode">UltimateXR.Animation.Materials.UxrMaterialMode</a><br />The material mode. Use instance to animate the material of a single object, use shared to also affect all other objects that share the same material</dd><dt>parameterType</dt><dd>Type: <a href="T_UltimateXR_Animation_Materials_UxrMaterialParameterType">UltimateXR.Animation.Materials.UxrMaterialParameterType</a><br />Selects the type of the parameter to animate</dd><dt>parameterName</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Selects the name of the parameter to animate. This name is the name in the shader, not in the inspector!</dd><dt>startValue</dt><dd>Type: Vector4<br />The start value. For int/float values use .x, for Vector2 use x and y. For Vector3 use x, y, z. etc.</dd><dt>endValue</dt><dd>Type: Vector4<br />The end value. For int/float values use .x, for Vector2 use x and y. For Vector3 use x, y, z. etc.</dd><dt>settings</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UltimateXR.Animation.Interpolation.UxrInterpolationSettings</a><br />The interpolation settings with the curve parameters</dd><dt>finishedCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback when the animation finished</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_Materials_UxrAnimatedMaterial">UxrAnimatedMaterial</a><br />The animation component

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Materials_UxrAnimatedMaterial">UxrAnimatedMaterial Class</a><br /><a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials Namespace</a><br />