# UxrGrabManager.PlacedObjectRangeLeft Event
 

Same as <a href="E_UltimateXR_Manipulation_UxrGrabManager_PlacedObjectRangeEntered">PlacedObjectRangeEntered</a> but when leaving the valid range.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public event EventHandler<UxrManipulationEventArgs> PlacedObjectRangeLeft
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a>)

## Remarks
Only enter/leave events will be generated. To check if an object can be grabbed use <a href="M_UltimateXR_Manipulation_UxrGrabbableObject_CanBeGrabbedByGrabber">CanBeGrabbedByGrabber(UxrGrabber, Int32)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br /><a href="E_UltimateXR_Manipulation_UxrGrabManager_PlacedObjectRangeEntered">UxrGrabManager.PlacedObjectRangeEntered</a><br />