# MeshExt.ExtractSubMesh Method 
 

Creates a new mesh from a skinned mesh renderer based on a reference bone and an extract operation.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Mesh ExtractSubMesh(
	SkinnedMeshRenderer skin,
	Transform bone,
	MeshExt.ExtractSubMeshOperation extractOperation,
	float weightThreshold = 0.5f
)
```


#### Parameters
&nbsp;<dl><dt>skin</dt><dd>Type: SkinnedMeshRenderer<br />Skin to process</dd><dt>bone</dt><dd>Type: Transform<br />Reference bone</dd><dt>extractOperation</dt><dd>Type: <a href="T_UltimateXR_Extensions_Unity_Render_MeshExt_ExtractSubMeshOperation">UltimateXR.Extensions.Unity.Render.MeshExt.ExtractSubMeshOperation</a><br />Which part of the skinned mesh to extract</dd><dt>weightThreshold (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Bone weight threshold above which the vertices will be extracted</dd></dl>

#### Return Value
Type: Mesh<br />New mesh

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Render_MeshExt">MeshExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render Namespace</a><br />