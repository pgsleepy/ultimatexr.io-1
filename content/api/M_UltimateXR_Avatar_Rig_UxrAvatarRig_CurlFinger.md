# UxrAvatarRig.CurlFinger Method 
 

Curls an avatar finger.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void CurlFinger(
	UxrAvatar avatar,
	UxrHandSide handSide,
	UxrAvatarFinger finger,
	float proximalCurl,
	float intermediateCurl,
	float distalCurl,
	float spread = 0f
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />Avatar to curl the finger of</dd><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which hand the finger belongs to</dd><dt>finger</dt><dd>Type: <a href="T_UltimateXR_Avatar_Rig_UxrAvatarFinger">UltimateXR.Avatar.Rig.UxrAvatarFinger</a><br />Finger to curl</dd><dt>proximalCurl</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Curl angle in degrees for the proximal bone</dd><dt>intermediateCurl</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Curl angle in degrees for the intermediate bone</dd><dt>distalCurl</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Curl angle in degrees for the distal bone</dd><dt>spread (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Spread angle in degrees for the finger (finger "left" or "right" amount with respect to the wrist)</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig Class</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />