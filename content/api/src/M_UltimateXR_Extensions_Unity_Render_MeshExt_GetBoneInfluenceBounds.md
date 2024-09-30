# MeshExt.GetBoneInfluenceBounds Method 
 

Computes the bounding box that contains all the vertices that a bone has influence on in a skinned mesh. The bounding box is computed in local bone space.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Bounds GetBoneInfluenceBounds(
	SkinnedMeshRenderer skin,
	Transform bone,
	float weightThreshold = 0.5f
)
```


#### Parameters
&nbsp;<dl><dt>skin</dt><dd>Type: SkinnedMeshRenderer<br />Skinned mesh</dd><dt>bone</dt><dd>Type: Transform<br />Bone to check</dd><dt>weightThreshold (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Weight above which to consider significant influence</dd></dl>

#### Return Value
Type: Bounds<br />Bounding box in local *bone* coordinates.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Render_MeshExt">MeshExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render Namespace</a><br />