# UxrAvatarRig.UpdateHandUsingDescriptor Method (UxrAvatar, UxrHandSide, UxrHandDescriptor, UxrHandDescriptor, Single)
 

Updates an avatar's hand transforms using two hand descriptors and a blend value.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void UpdateHandUsingDescriptor(
	UxrAvatar avatar,
	UxrHandSide handSide,
	UxrHandDescriptor handDescriptorA,
	UxrHandDescriptor handDescriptorB,
	float blend
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />The avatar to update</dd><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which hand to update</dd><dt>handDescriptorA</dt><dd>Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor">UltimateXR.Manipulation.HandPoses.UxrHandDescriptor</a><br />The descriptor for the hand pose to blend from</dd><dt>handDescriptorB</dt><dd>Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor">UltimateXR.Manipulation.HandPoses.UxrHandDescriptor</a><br />The descriptor for the hand pose to blend to</dd><dt>blend</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The interpolation value [0.0, 1.0]</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig Class</a><br /><a href="Overload_UltimateXR_Avatar_Rig_UxrAvatarRig_UpdateHandUsingDescriptor">UpdateHandUsingDescriptor Overload</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />