# UltimateXR.Manipulation.HandPoses Namespace

## Classes
&nbsp;<table><tr><th></th><th>Class</th><th>Description</th></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor">UxrHandDescriptor</a></td><td>
Stores base-independent node orientations for all fingers of a hand.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UxrHandPoseAsset</a></td><td>
ScriptableObject that stores custom hand poses. Data is stored in a well-known axes system so that poses can be exchanged between different avatars.</td></tr></table>

## Structures
&nbsp;<table><tr><th></th><th>Structure</th><th>Description</th></tr><tr><td>![Public structure](media/pubstructure.gif "Public structure")</td><td><a href="T_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor">UxrFingerDescriptor</a></td><td>
Stores base-independent node orientations for a finger.</td></tr><tr><td>![Public structure](media/pubstructure.gif "Public structure")</td><td><a href="T_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor">UxrFingerNodeDescriptor</a></td><td>
Stores a bone's right, up and forward vectors in local coordinates of its parent. Right, up and forward vectors will always point to this directions independently of how the transforms have been set up in order to guarantee poses can be reused by other hands that use a different coordinate system.</td></tr></table>

## Enumerations
&nbsp;<table><tr><th></th><th>Enumeration</th><th>Description</th></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Manipulation_HandPoses_UxrBlendPoseType">UxrBlendPoseType</a></td><td>
Enumerates the different poses in a blend pose.</td></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">UxrHandPoseType</a></td><td>
Enumerates the different pose types.</td></tr></table>&nbsp;
