# UxrGrabManager.GetGrabbingHands Method 
 

Gets the grabbers that are grabbing the object using a specific grab point.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool GetGrabbingHands(
	UxrGrabbableObject grabbableObject,
	int point,
	out List<UxrGrabber> grabbers
)
```


#### Parameters
&nbsp;<dl><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />The grabbable object</dd><dt>point</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />The grab point</dd><dt>grabbers</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.list-1" target="_blank" rel="noopener noreferrer">System.Collections.Generic.List</a>(<a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>)<br />Returns the list of grabbers. If the list is null a new list is created, otherwise the grabbers are added to the list</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether one or more grabbers were found

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />