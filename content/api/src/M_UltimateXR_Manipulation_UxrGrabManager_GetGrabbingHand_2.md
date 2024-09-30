# UxrGrabManager.GetGrabbingHand Method (UxrGrabbableObject, Int32, UxrGrabber)
 

Gets the grabber that is grabbing an object using a specific grab point.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool GetGrabbingHand(
	UxrGrabbableObject grabbableObject,
	int point,
	out UxrGrabber grabber
)
```


#### Parameters
&nbsp;<dl><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />The grabbable object</dd><dt>point</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Grab point to check</dd><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber to check</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether it is being grabbed with the specified conditions

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="Overload_UltimateXR_Manipulation_UxrGrabManager_GetGrabbingHand">GetGrabbingHand Overload</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />