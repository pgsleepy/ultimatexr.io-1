# UxrGrabbableObject.GetDistanceFromGrabber Method 
 

Computes the distance from the object to a <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>, which is the component found in <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> hands that are able to grab objects.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void GetDistanceFromGrabber(
	UxrGrabber grabber,
	int grabPoint,
	out float distance,
	out float distanceWithoutRotation
)
```


#### Parameters
&nbsp;<dl><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber component</dd><dt>grabPoint</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Grab point index to compute the distance to</dd><dt>distance</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Returns the distance, which is not be actual euclidean distance but a value that also takes into account the relative rotation between the grabber and the grab point. This helps favoring grabs that have a more convenient orientation to the grabber and are just a little farther away</dd><dt>distanceWithoutRotation</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Returns the euclidean distance, without factoring in any relative rotation</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />