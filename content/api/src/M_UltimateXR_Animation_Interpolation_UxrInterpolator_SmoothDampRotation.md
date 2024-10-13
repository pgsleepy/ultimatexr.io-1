# UxrInterpolator.SmoothDampRotation Method 
 

Smooths a rotation value using the last rotation, new rotation and a smooth value between [0.0, 1.0]. This tries to do something similar to SmoothDamp(Vector3, Vector3, Vector3, Single, Single) but for rotations.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Quaternion SmoothDampRotation(
	Quaternion oldRot,
	Quaternion newRot,
	float smooth
)
```


#### Parameters
&nbsp;<dl><dt>oldRot</dt><dd>Type: Quaternion<br />Old rotation</dd><dt>newRot</dt><dd>Type: Quaternion<br />New rotation</dd><dt>smooth</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Smooth value [0.0, 1.0] where 0.0 is no smoothing and 1.0 is maximum smoothing</dd></dl>

#### Return Value
Type: Quaternion<br />Smoothed rotation value

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolator">UxrInterpolator Class</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />