# UxrAvatarRig.PopHandTransforms Method 
 

Restores all the transform information of the bones of a hand saved using <a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_PushHandTransforms">PushHandTransforms(UxrAvatarHand)</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void PopHandTransforms(
	UxrAvatarHand hand,
	Dictionary<Transform, UxrTransform> transforms
)
```


#### Parameters
&nbsp;<dl><dt>hand</dt><dd>Type: <a href="T_UltimateXR_Avatar_Rig_UxrAvatarHand">UltimateXR.Avatar.Rig.UxrAvatarHand</a><br />Hand to restore</dd><dt>transforms</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.dictionary-2" target="_blank" rel="noopener noreferrer">System.Collections.Generic.Dictionary</a>(Transform, <a href="T_UltimateXR_Core_UxrTransform">UxrTransform</a>)<br />Transform information</dd></dl>

## Remarks
The transform information is restored using local position/rotation/scale values

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig Class</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />