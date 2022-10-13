# UxrAvatar.SetCurrentHandPose Method 
 

Sets the currently active pose for a given hand in the avatar at runtime. Blending is used to transition between poses smoothly, which means the pose is not immediately adopted. To adopt a pose immediately at a given instant use <a href="M_UltimateXR_Avatar_UxrAvatar_SetCurrentHandPoseImmediately">SetCurrentHandPoseImmediately(UxrHandSide, String, UxrBlendPoseType)</a> instead.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool SetCurrentHandPose(
	UxrHandSide handSide,
	string poseName,
	float blendValue = 0f,
	bool propagateEvents = true
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which hand the new pose will be applied to</dd><dt>poseName</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />The new pose name</dd><dt>blendValue (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The blend value if the pose is a blend pose</dd><dt>propagateEvents (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether the change should generate events (<a href="E_UltimateXR_Avatar_UxrAvatar_HandPoseChanging">HandPoseChanging</a>, <a href="E_UltimateXR_Avatar_UxrAvatar_HandPoseChanged">HandPoseChanged</a>, [!:GlobalHandPoseChanging], [!:GlobalHandPoseChanged]).</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the pose was found

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />