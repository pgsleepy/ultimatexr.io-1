# UxrAvatar.SetCurrentHandPoseImmediately Method 
 

Adopts a given hand pose by changing the transforms immediately. The bones may be overriden at any other point or the next frame if there is a hand pose currently enabled using <a href="M_UltimateXR_Avatar_UxrAvatar_SetCurrentHandPose">SetCurrentHandPose(UxrHandSide, String, Single, Boolean)</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void SetCurrentHandPoseImmediately(
	UxrHandSide handSide,
	UxrHandPoseAsset handPoseAsset,
	UxrBlendPoseType blendPoseType = UxrBlendPoseType.None
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which hand to apply the pose to</dd><dt>handPoseAsset</dt><dd>Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UltimateXR.Manipulation.HandPoses.UxrHandPoseAsset</a><br />Hand pose</dd><dt>blendPoseType (Optional)</dt><dd>Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrBlendPoseType">UltimateXR.Manipulation.HandPoses.UxrBlendPoseType</a><br />Blend pose to use if the hand pose is <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">Blend</a></dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />