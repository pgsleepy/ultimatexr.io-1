# MeshExt.GetSkinnedWorldVertex Method 
 

Gets a skinned vertex in world coordinates.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Vector3 GetSkinnedWorldVertex(
	SkinnedMeshRenderer skin,
	BoneWeight boneWeight,
	Vector3 vertex,
	Transform[] bones,
	Matrix4x4[] boneBindPoses
)
```


#### Parameters
&nbsp;<dl><dt>skin</dt><dd>Type: SkinnedMeshRenderer<br />Skin</dd><dt>boneWeight</dt><dd>Type: BoneWeight<br />Vertex bone weights info</dd><dt>vertex</dt><dd>Type: Vector3<br />Vertex in local skin coordinates when the skin is in the bind pose</dd><dt>bones</dt><dd>Type: Transform[]<br />Bone list</dd><dt>boneBindPoses</dt><dd>Type: Matrix4x4[]<br />Bone bind poses</dd></dl>

#### Return Value
Type: Vector3<br />Vertex in world coordinates

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Render_MeshExt">MeshExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render Namespace</a><br />