# UxrAvatarRig.TryToResolveArm Method 
 

Tries to solve which bones from a SkinnedMeshRenderer are remaining parts of the arm that still have no references.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void TryToResolveArm(
	UxrAvatarArm arm,
	SkinnedMeshRenderer skin
)
```


#### Parameters
&nbsp;<dl><dt>arm</dt><dd>Type: <a href="T_UltimateXR_Avatar_Rig_UxrAvatarArm">UltimateXR.Avatar.Rig.UxrAvatarArm</a><br />Arm to solve</dd><dt>skin</dt><dd>Type: SkinnedMeshRenderer<br />Source skin to navigate the bones looking for missing elements that are not in the arm</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig Class</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />