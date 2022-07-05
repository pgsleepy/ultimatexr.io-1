# UxrManipulationEventArgs Properties
 

The <a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableAnchor">GrabbableAnchor</a></td><td>
Gets the grabbable object anchor related to the event. Can be null if the event doesn't use this property. Check the event documentation for use of this property.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabbableObject">GrabbableObject</a></td><td>
Gets the grabbable object related to the event. Can be null if the event doesn't use this property. Check the event documentation for use of this property.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_Grabber">Grabber</a></td><td>
Gets the grabber related to the event. Can be null if the event doesn't use this property. Check the event documentation for use of this property.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_GrabPointIndex">GrabPointIndex</a></td><td>
Gets the grabbable object's grab point index related to the event. Can be meaningless if the event doesn't use this property. Check the event documentation for use of this property.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a></td><td>
Gets whether the manipulation used more than one hand. Can be meaningless if the event doesn't use this property. Check the event documentation for use of this property.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsOwnershipChanged">IsOwnershipChanged</a></td><td>
Gets whether the manipulation changed an object's ownership. This is if <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a> and <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a> are both false. This is useful to filter events that should be processed only if an object switched from belonging to an avatar to not belonging anymore or vice-versa, ignoring events where the object was already in the hands of an avatar and is just switching hands or being grabbed with more than one hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a></td><td>
Gets whether the event was the result of passing the object from one hand to the other. Can be meaningless if the event doesn't use this property. Check the event documentation for use of this property.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_PlacementType">PlacementType</a></td><td>
Gets the placement type in place events.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_ReleaseAngularVelocity">ReleaseAngularVelocity</a></td><td>
Gets the release angular velocity for release events.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_ReleaseVelocity">ReleaseVelocity</a></td><td>
Gets the release velocity for release events.</td></tr></table>&nbsp;
<a href="#uxrmanipulationeventargs-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />