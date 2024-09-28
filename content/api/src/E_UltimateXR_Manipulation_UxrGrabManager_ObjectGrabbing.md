# UxrGrabManager.ObjectGrabbing Event
 

Event called whenever a <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> component is about to grab a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a>. The following properties from <a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a> will contain meaningful data:
&nbsp;<ul><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a>: Object that is about to be grabbed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a>: Anchor where the object is currently placed. Null if it isn't placed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a>: Grabber that is about to grab the object.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabPointIndex">GrabPointIndex</a>: Grab point index of the object that is about to be grabbed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a>: true if it is already being grabbed with one hand and it will be grabbed with both hands after. False if no hand is currently grabbing it.</li></ul>&nbsp;
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public event EventHandler<UxrManipulationEventArgs> ObjectGrabbing
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a>)

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />