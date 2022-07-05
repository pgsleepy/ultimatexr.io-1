# UxrFingerDescriptor Structure
 

Stores base-independent node orientations for a finger.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public struct UxrFingerDescriptor
```

<a href="UltimateXR/Scripts/Manipulation/HandPoses/UxrFingerDescriptor.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrFingerDescriptor type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_Distal">Distal</a></td><td>
Gets the distal bone transform information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_HasMetacarpalInfo">HasMetacarpalInfo</a></td><td>
Gets whether metacarpal bone information is present. Metacarpal information is optional.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_Intermediate">Intermediate</a></td><td>
Gets the intermediate bone transform information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_Metacarpal">Metacarpal</a></td><td>
Gets the metacarpal bone transform information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_Proximal">Proximal</a></td><td>
Gets the proximal bone transform information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_ProximalNoMetacarpal">ProximalNoMetacarpal</a></td><td>
Gets the proximal bone transform information with respect to the wrist even if there is metacarpal information. It is used in case a pose including metacarpal information wants to be mapped to a hand that has no metacarpal bones.</td></tr></table>&nbsp;
<a href="#uxrfingerdescriptor-structure">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_Compute">Compute</a></td><td>
Computes well-known axes systems for all finger bones, to handle transforms independently of the coordinate system being used by a hand rig.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_DrawEditorDebugLabels">DrawEditorDebugLabels</a></td><td>
Outputs transform information to the editor window.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_Equals">Equals</a></td><td>
Compares the transform information with another finger.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_InterpolateTo">InterpolateTo</a></td><td>
Interpolates the data towards another descriptor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrFingerDescriptor_Mirror">Mirror</a></td><td>
Mirrors the bone information, so that it can be used for the opposite hand.</td></tr></table>&nbsp;
<a href="#uxrfingerdescriptor-structure">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrfingerdescriptor-structure">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses Namespace</a><br />