# UxrAvatarRig.PushHandTransforms Method 
 

Saves all the transform information of the bones of a hand so that it can later be restored using <a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_PopHandTransforms">PopHandTransforms(UxrAvatarHand, Dictionary(Transform, UxrTransform))</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Dictionary<Transform, UxrTransform> PushHandTransforms(
	UxrAvatarHand hand
)
```


#### Parameters
&nbsp;<dl><dt>hand</dt><dd>Type: <a href="T_UltimateXR_Avatar_Rig_UxrAvatarHand">UltimateXR.Avatar.Rig.UxrAvatarHand</a><br />Hand to store all the transforms information of</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.dictionary-2" target="_blank" rel="noopener noreferrer">Dictionary</a>(Transform, <a href="T_UltimateXR_Core_UxrTransform">UxrTransform</a>)<br />Transform information

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig Class</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />