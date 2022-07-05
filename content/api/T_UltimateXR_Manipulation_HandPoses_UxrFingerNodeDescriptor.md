# UxrFingerNodeDescriptor Structure
 

Stores a bone's right, up and forward vectors in local coordinates of its parent. Right, up and forward vectors will always point to this directions independently of how the transforms have been set up in order to guarantee poses can be reused by other hands that use a different coordinate system.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public struct UxrFingerNodeDescriptor
```

<a href="UltimateXR/Scripts/Manipulation/HandPoses/UxrFingerNodeDescriptor.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrFingerNodeDescriptor type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor__ctor">UxrFingerNodeDescriptor</a></td><td>
Creates a well-known axes system for a node, to handle transforms independently of the coordinate system being used by a hand rig.</td></tr></table>&nbsp;
<a href="#uxrfingernodedescriptor-structure">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor_Forward">Forward</a></td><td>
Gets the universal forward vector. The vector that points in our well-known forward direction, in the coordinate system of the finger.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor_Right">Right</a></td><td>
Gets the universal right vector. The vector that points in our well-known right direction, in the coordinate system of the finger.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor_TransformRelativeToHand">TransformRelativeToHand</a></td><td>
Gets the original relative transform to the hand bone. We use it mainly to compute <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> preview meshes more conveniently.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor_Up">Up</a></td><td>
Gets the universal up vector. The vector that points in our well-known up direction, in the coordinate system of the finger.</td></tr></table>&nbsp;
<a href="#uxrfingernodedescriptor-structure">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor_Compute">Compute</a></td><td>
Creates a well-known axes system for a node, to handle transforms independently of the coordinate system being used by a hand rig.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor_Equals">Equals</a></td><td>
Checks if the content of two FingerNodeDescriptors is equal (they describe the same axes).</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor_InterpolateTo">InterpolateTo</a></td><td>
Interpolates the axes data towards another descriptor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor_Mirror">Mirror</a></td><td>
Mirrors the descriptor. Useful to switch between left and right hand data.</td></tr></table>&nbsp;
<a href="#uxrfingernodedescriptor-structure">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrfingernodedescriptor-structure">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses Namespace</a><br />