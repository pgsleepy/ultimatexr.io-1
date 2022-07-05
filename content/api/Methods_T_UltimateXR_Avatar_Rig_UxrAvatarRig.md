# UxrAvatarRig Methods
 

The <a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_ClearRigElements">ClearRigElements</a></td><td>
Sets all the rig element references to null.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_CurlFinger">CurlFinger</a></td><td>
Curls an avatar finger.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_GetHandSide">GetHandSide</a></td><td>
Checks which side a transform is part of, based on which wrist it hangs from or if it hangs from an <a href="T_UltimateXR_Avatar_UxrHandIntegration">UxrHandIntegration</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_HasAnyUpperBodyIKReference">HasAnyUpperBodyIKReference</a></td><td>
Gets whether the given rig has any of the references used in upper body IK (head, neck, upper chest, chest or spine).</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_HasArmData">HasArmData</a></td><td>
Gets whether the given rig has all arm references (upper arm, forearm and hand).</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_HasFingerData">HasFingerData()</a></td><td>
Gets whether the given rig has all finger data.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_HasFingerData_1">HasFingerData(UxrHandSide)</a></td><td>
Gets whether the given rig has all finger data.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_HasFullHandData">HasFullHandData</a></td><td>
Gets whether the given rig has all hand and finger bone references.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_PopHandTransforms">PopHandTransforms</a></td><td>
Restores all the transform information of the bones of a hand saved using <a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_PushHandTransforms">PushHandTransforms(UxrAvatarHand)</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_PushHandTransforms">PushHandTransforms</a></td><td>
Saves all the transform information of the bones of a hand so that it can later be restored using <a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_PopHandTransforms">PopHandTransforms(UxrAvatarHand, Dictionary(Transform, UxrTransform))</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_SetupRigElementsFromAnimator">SetupRigElementsFromAnimator</a></td><td>
Tries to sets up all rig elements from the Animator of a humanoid model.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_TryToGetHandRenderer">TryToGetHandRenderer</a></td><td>
Tries to get the SkinnedMeshRenderer that represents the given hand.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_TryToInferMissingRigElements">TryToInferMissingRigElements</a></td><td>
Tries to infer rig elements by doing some checks on names and bone hierarchy. This is useful when we have a rig that has no full humanoid avatar set up on its animator .</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_TryToResolveArm">TryToResolveArm</a></td><td>
Tries to solve which bones from a SkinnedMeshRenderer are remaining parts of the arm that still have no references.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_TryToResolveHand">TryToResolveHand</a></td><td>
Tries to solve missing bone elements of a hand using a SkinnedMeshRenderer as source.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_UpdateHandUsingDescriptor_2">UpdateHandUsingDescriptor(UxrAvatar, UxrHandSide, UxrHandDescriptor)</a></td><td>
Updates an avatar's hand transforms using a fixed hand descriptor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_UpdateHandUsingDescriptor">UpdateHandUsingDescriptor(UxrAvatarHand, UxrHandDescriptor, UxrUniversalLocalAxes, UxrUniversalLocalAxes)</a></td><td>
Updates the hand transforms using a hand descriptor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_UpdateHandUsingDescriptor_3">UpdateHandUsingDescriptor(UxrAvatar, UxrHandSide, UxrHandDescriptor, UxrHandDescriptor, Single)</a></td><td>
Updates an avatar's hand transforms using two hand descriptors and a blend value.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_UpdateHandUsingDescriptor_1">UpdateHandUsingDescriptor(UxrAvatarHand, UxrHandDescriptor, UxrHandDescriptor, Single, UxrUniversalLocalAxes, UxrUniversalLocalAxes)</a></td><td>
Updates the hand transforms using two hand descriptors and an interpolation value.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_UpdateHandUsingRuntimeDescriptor">UpdateHandUsingRuntimeDescriptor(UxrAvatar, UxrHandSide, UxrRuntimeHandDescriptor)</a></td><td>
Updates the hand transforms using a runtime hand descriptor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRig_UpdateHandUsingRuntimeDescriptor_1">UpdateHandUsingRuntimeDescriptor(UxrAvatar, UxrHandSide, UxrRuntimeHandDescriptor, UxrRuntimeHandDescriptor, Single)</a></td><td>
Updates the hand transforms blending between two runtime hand descriptors.</td></tr></table>&nbsp;
<a href="#uxravatarrig-methods">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxravatarrig-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Rig_UxrAvatarRig">UxrAvatarRig Class</a><br /><a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />