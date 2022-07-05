# UxrHandPoseAsset.GetHandDescriptor Method (UxrHandSide, UxrHandPoseType, UxrBlendPoseType)
 

Gets the hand descriptor for the given hand, based on an external <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">UxrHandPoseType</a> parameter.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrHandDescriptor GetHandDescriptor(
	UxrHandSide handSide,
	UxrHandPoseType poseType,
	UxrBlendPoseType blendPoseType = UxrBlendPoseType.None
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Hand to get the descriptor for</dd><dt>poseType</dt><dd>Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">UltimateXR.Manipulation.HandPoses.UxrHandPoseType</a><br />The pose type to get the descriptor for</dd><dt>blendPoseType (Optional)</dt><dd>Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrBlendPoseType">UltimateXR.Manipulation.HandPoses.UxrBlendPoseType</a><br />If <a href="P_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_PoseType">PoseType</a> is <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">Blend</a>, whether to get the open or closed pose descriptor.</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor">UxrHandDescriptor</a><br />Hand descriptor

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UxrHandPoseAsset Class</a><br /><a href="Overload_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_GetHandDescriptor">GetHandDescriptor Overload</a><br /><a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses Namespace</a><br />