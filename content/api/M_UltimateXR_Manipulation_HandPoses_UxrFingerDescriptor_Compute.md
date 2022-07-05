# UxrFingerDescriptor.Compute Method 
 

Computes well-known axes systems for all finger bones, to handle transforms independently of the coordinate system being used by a hand rig.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void Compute(
	Transform wrist,
	UxrAvatarFinger finger,
	UxrUniversalLocalAxes handLocalAxes,
	UxrUniversalLocalAxes fingerLocalAxes,
	bool computeRelativeMatrixOnly
)
```


#### Parameters
&nbsp;<dl><dt>wrist</dt><dd>Type: Transform<br />Wrist transform</dd><dt>finger</dt><dd>Type: <a href="T_UltimateXR_Avatar_Rig_UxrAvatarFinger">UltimateXR.Avatar.Rig.UxrAvatarFinger</a><br />Finger rig information</dd><dt>handLocalAxes</dt><dd>Type: <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UltimateXR.Core.Math.UxrUniversalLocalAxes</a><br />Well-known axes system for the hand</dd><dt>fingerLocalAxes</dt><dd>Type: <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UltimateXR.Core.Math.UxrUniversalLocalAxes</a><br />Well-known axes system for the finger elements</dd><dt>computeRelativeMatrixOnly</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to compute only the relative transform to the hand</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor">UxrFingerDescriptor Structure</a><br /><a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses Namespace</a><br />