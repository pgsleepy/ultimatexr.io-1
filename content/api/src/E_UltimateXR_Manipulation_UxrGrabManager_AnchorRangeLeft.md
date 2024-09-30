# UxrGrabManager.AnchorRangeLeft Event
 

Same as <a href="E_UltimateXR_Manipulation_UxrGrabManager_AnchorRangeEntered">AnchorRangeEntered</a> but when leaving the valid range.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public event EventHandler<UxrManipulationEventArgs> AnchorRangeLeft
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a>)

## Remarks
Only enter/leave events will be generated. To check if an object can be placed on an anchor use <a href="M_UltimateXR_Manipulation_UxrGrabbableObject_CanBePlacedOnAnchor">CanBePlacedOnAnchor(UxrGrabbableObjectAnchor)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br /><a href="E_UltimateXR_Manipulation_UxrGrabManager_AnchorRangeEntered">UxrGrabManager.AnchorRangeEntered</a><br />