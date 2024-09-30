# UxrAvatar.GetRuntimeHandPose Method 
 

Gets a given hand pose. This method is intended for use at runtime to animate the avatars. While <a href="M_UltimateXR_Avatar_UxrAvatar_GetHandPose">GetHandPose(String, Boolean)</a> uses <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UxrHandPoseAsset</a>, GetRuntimeHandPose(String) uses <a href="T_UltimateXR_Avatar_Rig_UxrRuntimeHandPose">UxrRuntimeHandPose</a>. The main differences are:
&nbsp;<ul><li><a href="T_UltimateXR_Avatar_Rig_UxrRuntimeHandPose">UxrRuntimeHandPose</a> objects contain transforms that require less operations and are valid only for this avatar. They are high-performant and cached at the beginning, making them only available at runtime. They are used to animate the avatar hands at runtime.</li><li><a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UxrHandPoseAsset</a> objects contain transforms that are independent of the coordinate system used. They require more operations but can be applied to any avatar. They are mainly used in editor mode.</li></ul>&nbsp;
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrRuntimeHandPose GetRuntimeHandPose(
	string poseName
)
```


#### Parameters
&nbsp;<dl><dt>poseName</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br /></dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Avatar_Rig_UxrRuntimeHandPose">UxrRuntimeHandPose</a><br />Hand pose

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />