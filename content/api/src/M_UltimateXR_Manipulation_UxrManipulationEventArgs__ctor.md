# UxrManipulationEventArgs Constructor 
 

Constructor.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrManipulationEventArgs(
	UxrGrabbableObject grabbableObject,
	UxrGrabbableObjectAnchor grabbableAnchor,
	UxrGrabber grabber,
	int grabPointIndex = 0,
	bool isMultiHands = false,
	bool isSwitchHands = false
)
```


#### Parameters
&nbsp;<dl><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />Grabbable object</dd><dt>grabbableAnchor</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UltimateXR.Manipulation.UxrGrabbableObjectAnchor</a><br />Grabbable object anchor</dd><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber</dd><dt>grabPointIndex (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Grab point index</dd><dt>isMultiHands (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether the event was a result of a manipulation with more than one hand</dd><dt>isSwitchHands (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether the event was a result of passing the grabbable object from one hand to the other</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />