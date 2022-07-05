# UxrGrabManager.AnchorRangeEntered Event
 

Event called whenever an <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> being grabbed by a <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> entered the valid placement range (distance) of a compatible <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a>. The following properties from <a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a> will contain meaningful data:
&nbsp;<ul><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a>: Object that entered the valid placement range.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a>: Anchor where the object can potentially be placed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a>: Grabber that is holding the object. If more than one grabber is holding it, it will indicate the first one to grab it.</li></ul>&nbsp;
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public event EventHandler<UxrManipulationEventArgs> AnchorRangeEntered
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a>)

## Remarks
Only enter/leave events will be generated. To check if an object can be placed on an anchor use <a href="M_UltimateXR_Manipulation_UxrGrabbableObject_CanBePlacedOnAnchor">CanBePlacedOnAnchor(UxrGrabbableObjectAnchor)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br /><a href="E_UltimateXR_Manipulation_UxrGrabManager_AnchorRangeLeft">UxrGrabManager.AnchorRangeLeft</a><br />