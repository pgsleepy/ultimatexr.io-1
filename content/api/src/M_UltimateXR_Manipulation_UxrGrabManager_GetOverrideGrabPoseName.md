# UxrGrabManager.GetOverrideGrabPoseName Method 
 

Gets the grab pose name required when grabbing the given <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> using the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public string GetOverrideGrabPoseName(
	UxrGrabber grabber,
	UxrGrabbableObject grabbableObject
)
```


#### Parameters
&nbsp;<dl><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber</dd><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />Grabbable object</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a><br />Grab pose name or null to use the default grab pose specified in the avatar belonging to the grabber

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />