# UxrRuntimeHandPose.GetHandDescriptor Method 
 

Gets the given hand descriptor, based on the <a href="P_UltimateXR_Avatar_Rig_UxrRuntimeHandPose_PoseType">PoseType</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrRuntimeHandDescriptor GetHandDescriptor(
	UxrHandSide handSide,
	UxrBlendPoseType blendPoseType = UxrBlendPoseType.None
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Hand to get the descriptor for</dd><dt>blendPoseType (Optional)</dt><dd>Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrBlendPoseType">UltimateXR.Manipulation.HandPoses.UxrBlendPoseType</a><br />If <a href="P_UltimateXR_Avatar_Rig_UxrRuntimeHandPose_PoseType">PoseType</a> is <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">Blend</a>, whether to get the open or closed pose descriptor.</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor">UxrRuntimeHandDescriptor</a><br />Hand descriptor

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrRuntimeHandPose">UxrRuntimeHandPose Class</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />