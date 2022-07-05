# UxrHandDescriptor.Compute Method (UxrAvatarArm, UxrUniversalLocalAxes, UxrUniversalLocalAxes, Boolean)
 

Computes the hand data.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void Compute(
	UxrAvatarArm arm,
	UxrUniversalLocalAxes handLocalAxes,
	UxrUniversalLocalAxes fingerLocalAxes,
	bool computeRelativeMatrixOnly = false
)
```


#### Parameters
&nbsp;<dl><dt>arm</dt><dd>Type: <a href="T_UltimateXR_Avatar_Rig_UxrAvatarArm">UltimateXR.Avatar.Rig.UxrAvatarArm</a><br />Arm where the hand is</dd><dt>handLocalAxes</dt><dd>Type: <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UltimateXR.Core.Math.UxrUniversalLocalAxes</a><br />Hand axes system</dd><dt>fingerLocalAxes</dt><dd>Type: <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UltimateXR.Core.Math.UxrUniversalLocalAxes</a><br />Finger axes system</dd><dt>computeRelativeMatrixOnly (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to compute the relative transform to the hand only</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor">UxrHandDescriptor Class</a><br /><a href="Overload_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_Compute">Compute Overload</a><br /><a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses Namespace</a><br />