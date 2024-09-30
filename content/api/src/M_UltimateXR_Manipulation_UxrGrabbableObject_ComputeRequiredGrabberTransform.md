# UxrGrabbableObject.ComputeRequiredGrabberTransform Method 
 

Computes the position/rotation that a <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> would have to hold the object using the current position/orientation.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool ComputeRequiredGrabberTransform(
	UxrGrabber grabber,
	int grabPoint,
	out Vector3 grabberPosition,
	out Quaternion grabberRotation
)
```


#### Parameters
&nbsp;<dl><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber to check</dd><dt>grabPoint</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Grab point</dd><dt>grabberPosition</dt><dd>Type: Vector3<br />Returns the grabber position</dd><dt>grabberRotation</dt><dd>Type: Quaternion<br />Returns the grabber orientation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the returned data is meaningful

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />