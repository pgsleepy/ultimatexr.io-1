# UxrAvatar.GetHandPose Method 
 

Gets a given hand pose. It can happen that the pose name is present in a prefab/instance and at the same time also in any of the parent prefabs upwards in the hierarchy. In this case the hand pose in the child will always have priority so that child prefabs can override poses that they inherit from parent prefabs.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrHandPoseAsset GetHandPose(
	string poseName,
	bool usePrefabInheritance = true
)
```


#### Parameters
&nbsp;<dl><dt>poseName</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Pose to get</dd><dt>usePrefabInheritance (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to look for the pose in any prefab above the first prefab in the hierarchy.</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UxrHandPoseAsset</a><br />Hand pose object

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />