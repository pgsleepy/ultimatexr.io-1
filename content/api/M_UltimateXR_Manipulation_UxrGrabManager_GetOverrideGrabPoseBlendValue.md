# UxrGrabManager.GetOverrideGrabPoseBlendValue Method 
 

Gets the blend value for the <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">Blend</a> pose used when grabbing the given <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> using the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>. Blending is used to transition between different states such as open/closed or similar.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public float GetOverrideGrabPoseBlendValue(
	UxrGrabber grabber,
	UxrGrabbableObject grabbableObject
)
```


#### Parameters
&nbsp;<dl><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber</dd><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />Grabbable object</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a><br />Blending value [0.0, 1.0]

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />