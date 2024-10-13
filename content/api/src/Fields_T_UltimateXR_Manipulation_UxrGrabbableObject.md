# UxrGrabbableObject Fields
 

The <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> type exposes the following members.


## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Manipulation_UxrGrabbableObject_ConstrainSeconds">ConstrainSeconds</a></td><td>
Seconds it takes to smoothly transition an object to or from its space constraints.</td></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Manipulation_UxrGrabbableObject_DefaultAvatarName">DefaultAvatarName</a></td><td>
Used by the editor to identify the default avatar when no avatars have been registered for grips.</td></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Manipulation_UxrGrabbableObject_DistanceOffsetByAngle">DistanceOffsetByAngle</a></td><td>
How much a difference in angle will offset the distance at which we compute a grabbable object from a grabber. Objects that are not so well aligned with the grabber will be considered slightly farther away by(angle* DistanceOffsetByAngle) units, this means in the [0, 0.05] range. This will favor grabbing objects that are better aligned when there are two or more at similar distances.</td></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Manipulation_UxrGrabbableObject_HandLockSeconds">HandLockSeconds</a></td><td>
Seconds it takes to smoothly transition a hand to or from a locked grab (a grab that forces to move the hand bone out of its natural position because the object is constrained in space).</td></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Manipulation_UxrGrabbableObject_LeftGrabPoseMeshSuffix">LeftGrabPoseMeshSuffix</a></td><td>
Used by the editor to prefix the left grab pose mesh.</td></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Manipulation_UxrGrabbableObject_ObjectAlignmentSeconds">ObjectAlignmentSeconds</a></td><td>
Seconds it takes to smoothly transition an object from/to the hand.</td></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Manipulation_UxrGrabbableObject_RightGrabPoseMeshSuffix">RightGrabPoseMeshSuffix</a></td><td>
Used by the editor to prefix the right grab pose mesh.</td></tr></table>&nbsp;
<a href="#uxrgrabbableobject-fields">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />