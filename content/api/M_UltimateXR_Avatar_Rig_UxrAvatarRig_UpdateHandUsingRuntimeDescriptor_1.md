# UxrAvatarRig.UpdateHandUsingRuntimeDescriptor Method (UxrAvatar, UxrHandSide, UxrRuntimeHandDescriptor, UxrRuntimeHandDescriptor, Single)
 

Updates the hand transforms blending between two runtime hand descriptors.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void UpdateHandUsingRuntimeDescriptor(
	UxrAvatar avatar,
	UxrHandSide handSide,
	UxrRuntimeHandDescriptor handDescriptorA,
	UxrRuntimeHandDescriptor handDescriptorB,
	float blend
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />Avatar to update</dd><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />The hand to update</dd><dt>handDescriptorA</dt><dd>Type: <a href="T_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor">UltimateXR.Avatar.Rig.UxrRuntimeHandDescriptor</a><br />The runtime descriptor of the hand pose to blend from</dd><dt>handDescriptorB</dt><dd>Type: <a href="T_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor">UltimateXR.Avatar.Rig.UxrRuntimeHandDescriptor</a><br />The runtime descriptor of the hand pose to blend to</dd><dt>blend</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Interpolation value [0.0, 1.0]</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig Class</a><br /><a href="Overload_UltimateXR_Avatar_Rig_UxrAvatarRig_UpdateHandUsingRuntimeDescriptor">UpdateHandUsingRuntimeDescriptor Overload</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />