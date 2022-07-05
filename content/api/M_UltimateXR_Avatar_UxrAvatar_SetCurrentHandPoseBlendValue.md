# UxrAvatar.SetCurrentHandPoseBlendValue Method 
 

Sets the currently active pose blend value, if the current pose is <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">Blend</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void SetCurrentHandPoseBlendValue(
	UxrHandSide handSide,
	float blendValue,
	bool propagateEvents = true
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which hand the new pose will be applied to</dd><dt>blendValue</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The blend value if the pose is a blend pose</dd><dt>propagateEvents (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether the change should generate events (<a href="E_UltimateXR_Avatar_UxrAvatar_HandPoseChanging">HandPoseChanging</a>, <a href="E_UltimateXR_Avatar_UxrAvatar_HandPoseChanged">HandPoseChanged</a>, [!:GlobalHandPoseChanging], [!:GlobalHandPoseChanged]).</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />