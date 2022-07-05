# UxrGrabManager.ObjectReleasing Event
 

Event called whenever a <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> component is about to release the <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> that it is holding and there is no <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> nearby to place it on. The following properties from <a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a> will contain meaningful data:
&nbsp;<ul><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a>: Object that is about to be released.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a>: Anchor where the object was originally grabbed from. Null if it wasn't grabbed from an anchor.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a>: Grabber that is about to release the object.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabPointIndex">GrabPointIndex</a>: Grab point index of the object that is being grabbed by the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a>: true if it is already being grabbed with another hand that will keep it holding. False if no other hand is currently grabbing it.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a>: True if it was released because another <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> grabbed it, false otherwise. if <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a> is true then <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a> will tell if it was released by both hands (false) or if it was just released by one hand and the other one still keeps it grabbed (true).</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_ReleaseVelocity">ReleaseVelocity</a>: Velocity the object is being released with.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_ReleaseAngularVelocity">ReleaseAngularVelocity</a>: Angular velocity the object is being released with.</li></ul>&nbsp;
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public event EventHandler<UxrManipulationEventArgs> ObjectReleasing
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a>)

## Remarks
If the object is being released on a <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> that can hold it, it will generate a <a href="E_UltimateXR_Manipulation_UxrGrabManager_ObjectPlacing">ObjectPlacing</a> event instead. Whenever an object is released it will either generate either a Place or Release event, but not both.

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />