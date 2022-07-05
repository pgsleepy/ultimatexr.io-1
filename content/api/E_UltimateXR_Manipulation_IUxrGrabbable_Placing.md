# IUxrGrabbable.Placing Event
 

Event called when the object is about to be placed. An object is placed when the last grip is released and there is a compatible <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> near enough to place it on. The following properties from <a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a> will contain meaningful data:
&nbsp;<ul><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a>: Object that is about to be removed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a>: Anchor where the object is currently placed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a>: Grabber that is about to remove the object by grabbing it. This can be null if the object is removed through code using <a href="M_UltimateXR_Manipulation_UxrGrabManager_RemoveObjectFromAnchor">RemoveObjectFromAnchor(UxrGrabbableObject, Boolean)</a>, <a href="M_UltimateXR_Manipulation_UxrGrabbableObject_RemoveFromAnchor">RemoveFromAnchor(Boolean)</a> or <a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_RemoveObject">RemoveObject(Boolean)</a>></li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabPointIndex">GrabPointIndex</a>: Only if the object is being removed by grabbing it: Grab point index of the object that is about to be grabbed by the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>.</li></ul>&nbsp;
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
event EventHandler<UxrManipulationEventArgs> Placing
```

<a href="UltimateXR/Scripts/Manipulation/IUxrGrabbable.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a>)

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_IUxrGrabbable">IUxrGrabbable Interface</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />