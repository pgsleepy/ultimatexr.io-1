# UxrGrabManager.PlaceObject Method 
 

Places a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> on an <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a>. 
It can be placed either instantly or smoothly depending on *placementType*. If the object is currently being grabbed, all grips will be released. There is one exception to this: when the object is constrained to the world (<a href="P_UltimateXR_Manipulation_UxrGrabbableObject_IsConstrained">IsConstrained</a>) because in this case the constraints may prevent the grip from removing the object from the anchor again.


**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool PlaceObject(
	UxrGrabbableObject grabbableObject,
	UxrGrabbableObjectAnchor anchor,
	UxrPlacementType placementType,
	bool propagateEvents
)
```


#### Parameters
&nbsp;<dl><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />The object to place</dd><dt>anchor</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UltimateXR.Manipulation.UxrGrabbableObjectAnchor</a><br />The anchor to place it on</dd><dt>placementType</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrPlacementType">UltimateXR.Manipulation.UxrPlacementType</a><br />The interpolation to use</dd><dt>propagateEvents</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to propagate potential Removing/Removed/Placing/Placed events.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the object was placed or not. The placement can fail if there was a null argument or if the anchor has already an object on it.

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />