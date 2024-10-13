# UxrManipulationEventArgs Class
 


Event parameters for most manipulation events:
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager</a>:
&nbsp;<ul><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_GrabTrying">GrabTrying</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_ObjectGrabbing">ObjectGrabbing</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_ObjectGrabbed">ObjectGrabbed</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_ObjectReleasing">ObjectReleasing</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_ObjectReleased">ObjectReleased</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_ObjectPlacing">ObjectPlacing</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_ObjectPlaced">ObjectPlaced</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_ObjectRemoving">ObjectRemoving</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_ObjectRemoved">ObjectRemoved</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_AnchorRangeEntered">AnchorRangeEntered</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_AnchorRangeLeft">AnchorRangeLeft</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_PlacedObjectRangeEntered">PlacedObjectRangeEntered</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabManager_PlacedObjectRangeLeft">PlacedObjectRangeLeft</a></li></ul>&nbsp;
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a>:
&nbsp;<ul><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Grabbing">Grabbing</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Grabbed">Grabbed</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Releasing">Releasing</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Released">Released</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Placing">Placing</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Placed">Placed</a></li></ul>&nbsp;
<a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a>:
&nbsp;<ul><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Placing">Placing</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Placed">Placed</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Removing">Removing</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Removed">Removed</a></li><li><a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_SmoothPlaceTransitionEnded">SmoothPlaceTransitionEnded</a></li></ul>

## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;<a href="https://docs.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">System.EventArgs</a><br />&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Manipulation.UxrManipulationEventArgs<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrManipulationEventArgs : EventArgs
```

<a href="UltimateXR/Scripts/Manipulation/UxrManipulationEventArgs.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrManipulationEventArgs type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrManipulationEventArgs__ctor">UxrManipulationEventArgs</a></td><td>
Constructor.</td></tr></table>&nbsp;
<a href="#uxrmanipulationeventargs-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a></td><td>
Gets the grabbable object anchor related to the event. Can be null if the event doesn't use this property. Check the event documentation to see how the property is used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a></td><td>
Gets the grabbable object related to the event. Can be null if the event doesn't use this property. Check the event documentation to see how the property is used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a></td><td>
Gets the grabber related to the event. Can be null if the event doesn't use this property. Check the event documentation to see how the property is used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabPointIndex">GrabPointIndex</a></td><td>
Gets the grabbable object's grab point index related to the event. Can be meaningless if the event doesn't use this property. Check the event documentation to see how the property is used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a></td><td>
Gets whether the manipulation used more than one hand. Can be meaningless if the event doesn't use this property. Check the event documentation to see how the property is used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsOwnershipChanged">IsOwnershipChanged</a></td><td>
Gets whether the manipulation changed an object's ownership. This is if <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a> and <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a> are both false. This is useful to filter events that should be processed only if an object switched from belonging to an avatar to not belonging anymore or vice-versa, ignoring events where the object was already in the hands of an avatar and is just switching hands or being grabbed with more than one hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a></td><td>
Gets whether the event was the result of passing the object from one hand to the other. Can be meaningless if the event doesn't use this property. Check the event documentation to see how the property is used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_PlacementType">PlacementType</a></td><td>
Gets the placement type in place events.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_ReleaseAngularVelocity">ReleaseAngularVelocity</a></td><td>
Gets the release angular velocity for release events.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_ReleaseVelocity">ReleaseVelocity</a></td><td>
Gets the release velocity for release events.</td></tr></table>&nbsp;
<a href="#uxrmanipulationeventargs-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrmanipulationeventargs-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />