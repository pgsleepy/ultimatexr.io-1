# UxrGrabManager.GetGrabbedPoint Method 
 

Gets the grab point that the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> is currently grabbing on a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> .

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public int GetGrabbedPoint(
	UxrGrabber grabber
)
```


#### Parameters
&nbsp;<dl><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber to get the grabbed point from</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a><br />Grab point index that is being grabbed or -1 if there is no object currently being grabbed

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />