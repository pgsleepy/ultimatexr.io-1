# UxrGrabber.GetProximityTransform Method 
 

Gets the given proximity transform, used to compute distances to<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> entities

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public Transform GetProximityTransform(
	int proximityIndex = -1
)
```


#### Parameters
&nbsp;<dl><dt>proximityIndex (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Proximity transform index. -1 for the default (the grabber's transform) and 0 to n for any optional proximity transform.</dd></dl>

#### Return Value
Type: Transform<br />Proximity transform. If the index is out of range it will return the default transform

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />