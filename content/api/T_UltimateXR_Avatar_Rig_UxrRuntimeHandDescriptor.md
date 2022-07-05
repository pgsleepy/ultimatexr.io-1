# UxrRuntimeHandDescriptor Class
 

Runtime, lightweight version of <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandDescriptor">UxrHandDescriptor</a>. It is used to describe the local orientations of finger bones of a <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UxrHandPoseAsset</a> for a given <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a>. <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UxrHandPoseAsset</a> objects contain orientations in a well-known space. They are used to adapt hand poses independently of the coordinate system used by each avatar. This means an additional transformation needs to be performed to get to each avatar's coordinate system. UxrRuntimeHandDescriptor is used to have a high performant version that already contains the bone orientations in each avatar's coordinate system so that hand pose blending can be computed using much less processing power.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Avatar.Rig.UxrRuntimeHandDescriptor<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrRuntimeHandDescriptor
```

<a href="UltimateXR/Scripts/Avatar/Rig/UxrRuntimeHandDescriptor.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrRuntimeHandDescriptor type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor__ctor">UxrRuntimeHandDescriptor()</a></td><td>
Default constructor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor__ctor_1">UxrRuntimeHandDescriptor(UxrAvatar, UxrHandSide, UxrHandPoseAsset, UxrHandPoseType, UxrBlendPoseType)</a></td><td>
Constructor.</td></tr></table>&nbsp;
<a href="#uxrruntimehanddescriptor-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor_Index">Index</a></td><td /></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor_Little">Little</a></td><td /></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor_Middle">Middle</a></td><td /></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor_Ring">Ring</a></td><td /></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor_Thumb">Thumb</a></td><td /></tr></table>&nbsp;
<a href="#uxrruntimehanddescriptor-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor_CopyFrom">CopyFrom</a></td><td>
Copies the data from another descriptor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrRuntimeHandDescriptor_InterpolateTo">InterpolateTo</a></td><td>
Interpolates towards another runtime hand descriptor.</td></tr></table>&nbsp;
<a href="#uxrruntimehanddescriptor-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrruntimehanddescriptor-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />