# UxrGrabManager.ObjectPlacing Event
 

Event called whenever a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> is about to be placed on an <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a>. The following properties from <a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a> will contain meaningful data:
&nbsp;<ul><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a>: Object that is about to be placed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a>: Anchor where the object is about to be placed on.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a>: Grabber that is placing the object.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabPointIndex">GrabPointIndex</a>: Grab point index of the object that is being grabbed by the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>.</li></ul>&nbsp;
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public event EventHandler<UxrManipulationEventArgs> ObjectPlacing
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a>)

## Remarks
If the object is being placed it will not generate a <a href="E_UltimateXR_Manipulation_UxrGrabManager_ObjectReleasing">ObjectReleasing</a> event. Whenever an object is released it will either generate either a Place or Release event, but not both.

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />