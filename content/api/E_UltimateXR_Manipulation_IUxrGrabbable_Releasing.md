# IUxrGrabbable.Releasing Event
 

Event called when the object is about to be released. An object is released when the last grip is released and there is no compatible <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> near enough to place it on. The following properties from <a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a> will contain meaningful data:
&nbsp;<ul><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a>: Object that is about to be released.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a>: Anchor where the object was originally grabbed from. Null if it wasn't on a target.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a>: Grabber that is about to release the object.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabPointIndex">GrabPointIndex</a>: Grab point index of the object that is being grabbed by the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a>: true if it is already being grabbed with another hand that will keep it holding. False if no other hand is currently grabbing it.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a>: True if it was released because another <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> grabbed it, false otherwise. if <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a> is true then <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a> will tell if it was released by both hands (false) or if it was just released by one hand and the other one still keeps it grabbed (true).</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_ReleaseVelocity">ReleaseVelocity</a>: Velocity the object is being released with.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_ReleaseAngularVelocity">ReleaseAngularVelocity</a>: Angular velocity the object is being released with.</li></ul>&nbsp;
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
event EventHandler<UxrManipulationEventArgs> Releasing
```

<a href="UltimateXR/Scripts/Manipulation/IUxrGrabbable.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a>)

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_IUxrGrabbable">IUxrGrabbable Interface</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />