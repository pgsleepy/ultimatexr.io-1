# UxrGrabber Properties
 

The <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_AngularVelocity">AngularVelocity</a></td><td>
Gets <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>'s current frame angular velocity.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_FingerDirection">FingerDirection</a></td><td>
Gets from all the positive and negative axes in the grabber's transform, the axis in world-space that is pointing to the fingers.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_GrabbedObject">GrabbedObject</a></td><td>
Gets the currently grabbed object if there is one. null if no object is being grabbed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_HandBone">HandBone</a></td><td>
Gets the avatar hand bone that corresponds to the grabber.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_HandBoneRelativePos">HandBoneRelativePos</a></td><td>
Gets the relative position of the hand bone to the grabber.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_HandBoneRelativeRot">HandBoneRelativeRot</a></td><td>
Gets the relative rotation of the hand bone to the grabber.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_HandRenderer">HandRenderer</a></td><td>
Gets or sets the hand renderer.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_LocalFingerDirection">LocalFingerDirection</a></td><td>
Gets from all the positive and negative axes in the grabber's transform, the axis in local-space that is pointing to the fingers.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_LocalPalmOutDirection">LocalPalmOutDirection</a></td><td>
Gets from all the positive and negative axes in the grabber's transform, the axis in local-space that is pointing outwards from the palm.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_OppositeHandGrabber">OppositeHandGrabber</a></td><td>
Gets the opposite hand grabber in the same avatar.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_OppositeSide">OppositeSide</a></td><td>
Gets whether the grabber component is on the left or right hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_PalmOutDirection">PalmOutDirection</a></td><td>
Gets from all the positive and negative axes in the grabber's transform, the axis in world-space that is pointing outwards from the palm..</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_RequiredMirrorType">RequiredMirrorType</a></td><td>

Gets, based on <a href="P_UltimateXR_Manipulation_UxrGrabber_FingerDirection">FingerDirection</a> and <a href="P_UltimateXR_Manipulation_UxrGrabber_PalmOutDirection">PalmOutDirection</a>, which mirroring snap transforms should use with the grabber if they want to be mirrored.
 Snap transforms are GameObjects in <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> that determine where the hand should be placed during grabs by making the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>'s transform align with the snap Transform. Mirroring snap transforms is used to quickly create/modify grab positions/orientations.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_Side">Side</a></td><td>
Gets whether the grabber component is on the left or right hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_SmoothAngularVelocity">SmoothAngularVelocity</a></td><td>
Gets <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>'s angular velocity smoothed using averaged previous frame data.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_SmoothVelocity">SmoothVelocity</a></td><td>
Gets <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>'s velocity smoothed using averaged previous frame data.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_UnprocessedGrabberPosition">UnprocessedGrabberPosition</a></td><td>
The unprocessed grabber position. This is the position the grabber has taking only the hand controller tracking sensor into account. The hand position is updated by the <a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager</a> and may be forced into a certain position if the object being grabbed has constraints, altering also the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> position. Sometimes it is preferred to use the unprocessed grabber position.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_UnprocessedGrabberRotation">UnprocessedGrabberRotation</a></td><td>
Gets the unprocessed grabber rotation. See <a href="P_UltimateXR_Manipulation_UxrGrabber_UnprocessedGrabberPosition">UnprocessedGrabberPosition</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_Velocity">Velocity</a></td><td>
Gets <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>'s current frame velocity.</td></tr></table>&nbsp;
<a href="#uxrgrabber-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />