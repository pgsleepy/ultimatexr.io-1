# IUxrGrabbable Interface
 

Interface for all objects that can be grabbed/manipulated using the <a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public interface IUxrGrabbable
```

<a href="UltimateXR/Scripts/Manipulation/IUxrGrabbable.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The IUxrGrabbable type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_IUxrGrabbable_gameObject">gameObject</a></td><td>
Gets the associated GameObject. Since all components that implement the interface will be assigned to GameObjects, this allows to access them using the interface. It doesn't follow the property PascalCase naming to make it compatible with Unity.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_IUxrGrabbable_IsBeingGrabbed">IsBeingGrabbed</a></td><td>
Gets whether the object is being grabbed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_IUxrGrabbable_IsGrabbable">IsGrabbable</a></td><td>
Gets or sets whether the object can be grabbed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_IUxrGrabbable_IsKinematic">IsKinematic</a></td><td>
Gets or sets whether the rigidbody that drives the object (if any) is kinematic.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_IUxrGrabbable_transform">transform</a></td><td>
Gets the associated Transform component. Since all components that implement the interface will be assigned to GameObjects, this allows to access their transform using the interface. It doesn't follow the property PascalCase naming to make it compatible with Unity.</td></tr></table>&nbsp;
<a href="#iuxrgrabbable-interface">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_IUxrGrabbable_ReleaseGrabs">ReleaseGrabs</a></td><td>
Releases the object from all its grabs if there are any.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_IUxrGrabbable_ResetPositionAndState">ResetPositionAndState</a></td><td>
Resets the object to its initial position/rotation and state. If the object is currently being grabbed, it will be released.</td></tr></table>&nbsp;
<a href="#iuxrgrabbable-interface">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_IUxrGrabbable_Grabbed">Grabbed</a></td><td>
Event called right after the object was grabbed. The grab event parameters use the same values as <a href="E_UltimateXR_Manipulation_IUxrGrabbable_Grabbing">Grabbing</a>.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_IUxrGrabbable_Grabbing">Grabbing</a></td><td>
Event called when the object is about to be grabbed. The following properties from <a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a> will contain meaningful data:
&nbsp;<ul><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a>: Object that is about to be grabbed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a>: Target where the object is currently placed. Null if it isn't on an anchor.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a>: Grabber that is about to grab the object.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabPointIndex">GrabPointIndex</a>: Grab point index of the object that is about to be grabbed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a>: true if it is already being grabbed with one hand and it will be grabbed with both hands after. False if no hand is currently grabbing it.</li></ul></td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_IUxrGrabbable_Placed">Placed</a></td><td>
Event called right after the object was placed. An object is placed when the last grip is released and there is a compatible <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> near enough to place it on. The grab event parameters use the same values as <a href="E_UltimateXR_Manipulation_IUxrGrabbable_Placed">Placed</a>.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_IUxrGrabbable_Placing">Placing</a></td><td>
Event called when the object is about to be placed. An object is placed when the last grip is released and there is a compatible <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> near enough to place it on. The following properties from <a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a> will contain meaningful data:
&nbsp;<ul><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a>: Object that is about to be removed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a>: Anchor where the object is currently placed.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a>: Grabber that is about to remove the object by grabbing it. This can be null if the object is removed through code using <a href="M_UltimateXR_Manipulation_UxrGrabManager_RemoveObjectFromAnchor">RemoveObjectFromAnchor(UxrGrabbableObject, Boolean)</a>, <a href="M_UltimateXR_Manipulation_UxrGrabbableObject_RemoveFromAnchor">RemoveFromAnchor(Boolean)</a> or <a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_RemoveObject">RemoveObject(Boolean)</a>></li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabPointIndex">GrabPointIndex</a>: Only if the object is being removed by grabbing it: Grab point index of the object that is about to be grabbed by the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>.</li></ul></td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_IUxrGrabbable_Released">Released</a></td><td>
Event called right after the object was released. An object is released when the last grip is released and there is no compatible <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> near enough to place it on. The grab event parameters use the same values as <a href="E_UltimateXR_Manipulation_IUxrGrabbable_Releasing">Releasing</a>.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_IUxrGrabbable_Releasing">Releasing</a></td><td>
Event called when the object is about to be released. An object is released when the last grip is released and there is no compatible <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> near enough to place it on. The following properties from <a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a> will contain meaningful data:
&nbsp;<ul><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a>: Object that is about to be released.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a>: Anchor where the object was originally grabbed from. Null if it wasn't on a target.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a>: Grabber that is about to release the object.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabPointIndex">GrabPointIndex</a>: Grab point index of the object that is being grabbed by the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a>: true if it is already being grabbed with another hand that will keep it holding. False if no other hand is currently grabbing it.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a>: True if it was released because another <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> grabbed it, false otherwise. if <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a> is true then <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a> will tell if it was released by both hands (false) or if it was just released by one hand and the other one still keeps it grabbed (true).</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_ReleaseVelocity">ReleaseVelocity</a>: Velocity the object is being released with.</li><li><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_ReleaseAngularVelocity">ReleaseAngularVelocity</a>: Angular velocity the object is being released with.</li></ul></td></tr></table>&nbsp;
<a href="#iuxrgrabbable-interface">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />