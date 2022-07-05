# UxrAvatarRig.TryToResolveHand Method 
 

Tries to solve missing bone elements of a hand using a SkinnedMeshRenderer as source.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool TryToResolveHand(
	UxrAvatarHand hand,
	Transform root,
	Transform current,
	SkinnedMeshRenderer skin
)
```


#### Parameters
&nbsp;<dl><dt>hand</dt><dd>Type: <a href="T_UltimateXR_Avatar_Rig_UxrAvatarHand">UltimateXR.Avatar.Rig.UxrAvatarHand</a><br />Hand to resolve</dd><dt>root</dt><dd>Type: Transform<br />The wrist, root of the hand</dd><dt>current</dt><dd>Type: Transform<br />The current transform being processed. The original call is using the same as *root*.</dd><dt>skin</dt><dd>Type: SkinnedMeshRenderer<br />Source skin to navigate the bones looking for missing elements that are not in the hand</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the hand was correctly solved

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig Class</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />