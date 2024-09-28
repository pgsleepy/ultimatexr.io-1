# UxrGrabManager.ShouldHideHandRenderer Method 
 

Gets whether grabbing a given <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> using a certain <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> will make the grabber's renderer show up as hidden due to the parameters set in the inspector.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool ShouldHideHandRenderer(
	UxrGrabber grabber,
	UxrGrabbableObject grabbableObject
)
```


#### Parameters
&nbsp;<dl><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber to check</dd><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />Grabbable object to check</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the renderer would be hidden when grabbed

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />