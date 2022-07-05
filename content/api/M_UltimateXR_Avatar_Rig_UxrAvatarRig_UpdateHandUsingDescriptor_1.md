# UxrAvatarRig.UpdateHandUsingDescriptor Method (UxrAvatarHand, UxrHandDescriptor, UxrHandDescriptor, Single, UxrUniversalLocalAxes, UxrUniversalLocalAxes)
 

Updates the hand transforms using two hand descriptors and an interpolation value.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void UpdateHandUsingDescriptor(
	UxrAvatarHand hand,
	UxrHandDescriptor handDescriptorA,
	UxrHandDescriptor handDescriptorB,
	float blend,
	UxrUniversalLocalAxes handLocalAxes,
	UxrUniversalLocalAxes fingerLocalAxes
)
```


#### Parameters
&nbsp;<dl><dt>hand</dt><dd>Type: <a href="T_UltimateXR_Avatar_Rig_UxrAvatarHand">UltimateXR.Avatar.Rig.UxrAvatarHand</a><br />The hand to update</dd><dt>handDescriptorA</dt><dd>Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor">UltimateXR.Manipulation.HandPoses.UxrHandDescriptor</a><br />The descriptor of the hand pose to blend from</dd><dt>handDescriptorB</dt><dd>Type: <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor">UltimateXR.Manipulation.HandPoses.UxrHandDescriptor</a><br />The descriptor of the hand pose to blend to</dd><dt>blend</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The interpolation value [0.0, 1.0]</dd><dt>handLocalAxes</dt><dd>Type: <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UltimateXR.Core.Math.UxrUniversalLocalAxes</a><br />The universal coordinate system of the hand transform</dd><dt>fingerLocalAxes</dt><dd>Type: <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UltimateXR.Core.Math.UxrUniversalLocalAxes</a><br />The universal coordinate system of the finger transforms</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig Class</a><br /><a href="Overload_UltimateXR_Avatar_Rig_UxrAvatarRig_UpdateHandUsingDescriptor">UpdateHandUsingDescriptor Overload</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />