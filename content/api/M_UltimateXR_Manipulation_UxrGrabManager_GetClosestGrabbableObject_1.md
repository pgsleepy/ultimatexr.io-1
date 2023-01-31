# UxrGrabManager.GetClosestGrabbableObject Method (UxrGrabber, UxrGrabbableObject, Int32, IEnumerable(UxrGrabbableObject))
 

Gets the closest grabbable object that can be grabbed by a <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool GetClosestGrabbableObject(
	UxrGrabber grabber,
	out UxrGrabbableObject grabbableObject,
	out int grabPoint,
	IEnumerable<UxrGrabbableObject> candidates = null
)
```


#### Parameters
&nbsp;<dl><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber to check</dd><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />Returns the closest grabbable object or null if none was found</dd><dt>grabPoint</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Returns the grab point that can be grabbed</dd><dt>candidates (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">System.Collections.Generic.IEnumerable</a>(<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a>)<br />List of grabbable objects to process or null to process all current enabled grabbable objects</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether a grabbable object was found

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="Overload_UltimateXR_Manipulation_UxrGrabManager_GetClosestGrabbableObject">GetClosestGrabbableObject Overload</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />