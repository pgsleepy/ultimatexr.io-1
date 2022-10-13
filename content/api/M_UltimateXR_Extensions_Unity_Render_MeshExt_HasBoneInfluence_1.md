# MeshExt.HasBoneInfluence Method (SkinnedMeshRenderer, Transform, Single)
 

Computes the number of vertices that a bone influences in a skinned mesh.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool HasBoneInfluence(
	SkinnedMeshRenderer skin,
	Transform bone,
	float weightThreshold = 0.5f
)
```


#### Parameters
&nbsp;<dl><dt>skin</dt><dd>Type: SkinnedMeshRenderer<br />Skinned mesh</dd><dt>bone</dt><dd>Type: Transform<br />Bone to check</dd><dt>weightThreshold (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Weight above which to consider significant influence</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Number of vertices influenced by *bone* with a weight above *weightThreshold*

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Render_MeshExt">MeshExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_Render_MeshExt_HasBoneInfluence">HasBoneInfluence Overload</a><br /><a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render Namespace</a><br />