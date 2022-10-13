# MeshExt.HasBoneInfluence Method (BoneWeight, Int32, Single)
 

Checks whether a given bone index has influence on a skinned mesh vertex.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool HasBoneInfluence(
	 in BoneWeight boneWeight,
	int boneIndex,
	float weightThreshold = 0.5f
)
```


#### Parameters
&nbsp;<dl><dt>boneWeight</dt><dd>Type: BoneWeight<br />Vertex's bone weight information</dd><dt>boneIndex</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Bone index</dd><dt>weightThreshold (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Weight above which will be considered significant influence</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the bone influences the vertex in a significant amount

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Render_MeshExt">MeshExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_Render_MeshExt_HasBoneInfluence">HasBoneInfluence Overload</a><br /><a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render Namespace</a><br />