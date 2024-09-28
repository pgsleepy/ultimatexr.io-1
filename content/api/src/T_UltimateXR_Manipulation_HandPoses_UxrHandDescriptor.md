# UxrHandDescriptor Class
 

Stores base-independent node orientations for all fingers of a hand.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Manipulation.HandPoses.UxrHandDescriptor<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrHandDescriptor
```

<a href="UltimateXR/Scripts/Manipulation/HandPoses/UxrHandDescriptor.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrHandDescriptor type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor__ctor">UxrHandDescriptor()</a></td><td>
Default constructor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor__ctor_2">UxrHandDescriptor(UxrAvatar, UxrHandSide)</a></td><td>
Constructor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor__ctor_1">UxrHandDescriptor(UxrAvatarArm, UxrUniversalLocalAxes, UxrUniversalLocalAxes)</a></td><td>
Constructor.</td></tr></table>&nbsp;
<a href="#uxrhanddescriptor-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_Index">Index</a></td><td>
Gets the index finger information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_Little">Little</a></td><td>
Gets the little finger information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_Middle">Middle</a></td><td>
Gets the middle finger information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_Ring">Ring</a></td><td>
Gets the ring finger information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_Thumb">Thumb</a></td><td>
Gets the thumb finger information.</td></tr></table>&nbsp;
<a href="#uxrhanddescriptor-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_Compute_1">Compute(UxrAvatar, UxrHandSide, Boolean)</a></td><td>
Computes the hand data.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_Compute">Compute(UxrAvatarArm, UxrUniversalLocalAxes, UxrUniversalLocalAxes, Boolean)</a></td><td>
Computes the hand data.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_CopyFrom">CopyFrom</a></td><td>
Copies the data from another descriptor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_DrawEditorDebugLabels">DrawEditorDebugLabels</a></td><td>
Outputs transform data in the editor window.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_Equals">Equals</a></td><td>
Checks whether a hand descriptor contains the same transform data.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_GetFinger">GetFinger</a></td><td>
Gets the given finger.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_InterpolateTo">InterpolateTo</a></td><td>
Interpolates the data towards another descriptor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor_Mirrored">Mirrored</a></td><td>
Returns a hand descriptor with mirrored transforms, so that the data can be used for the opposite hand.</td></tr></table>&nbsp;
<a href="#uxrhanddescriptor-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrhanddescriptor-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses Namespace</a><br />