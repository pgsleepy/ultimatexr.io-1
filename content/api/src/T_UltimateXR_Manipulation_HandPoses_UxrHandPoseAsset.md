# UxrHandPoseAsset Class
 

ScriptableObject that stores custom hand poses. Data is stored in a well-known axes system so that poses can be exchanged between different avatars.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;ScriptableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Manipulation.HandPoses.UxrHandPoseAsset<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrHandPoseAsset : ScriptableObject
```

<a href="UltimateXR/Scripts/Manipulation/HandPoses/UxrHandPoseAsset.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrHandPoseAsset type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset__ctor">UxrHandPoseAsset</a></td><td /></tr></table>&nbsp;
<a href="#uxrhandposeasset-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_HandDescriptorClosedLeft">HandDescriptorClosedLeft</a></td><td>
Gets the left blend pose hand descriptor for the closed state.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_HandDescriptorClosedRight">HandDescriptorClosedRight</a></td><td>
Gets the right blend pose hand descriptor for the closed state.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_HandDescriptorLeft">HandDescriptorLeft</a></td><td>
Gets the left fixed pose hand descriptor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_HandDescriptorOpenLeft">HandDescriptorOpenLeft</a></td><td>
Gets the left blend pose hand descriptor for the open state.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_HandDescriptorOpenRight">HandDescriptorOpenRight</a></td><td>
Gets the right blend pose hand descriptor for the open state.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_HandDescriptorRight">HandDescriptorRight</a></td><td>
Gets the right fixed pose hand descriptor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_PoseType">PoseType</a></td><td>
Gets the pose type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_Version">Version</a></td><td>
Gets the version the pose was stored in.</td></tr></table>&nbsp;
<a href="#uxrhandposeasset-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_DrawEditorDebugLabels">DrawEditorDebugLabels</a></td><td>
Outputs transform debug data to the editor window.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_GetHandDescriptor">GetHandDescriptor(UxrHandSide, UxrBlendPoseType)</a></td><td>
Gets the hand descriptor for the given hand, based on the <a href="P_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_PoseType">PoseType</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_GetHandDescriptor_1">GetHandDescriptor(UxrHandSide, UxrHandPoseType, UxrBlendPoseType)</a></td><td>
Gets the hand descriptor for the given hand, based on an external <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">UxrHandPoseType</a> parameter.</td></tr></table>&nbsp;
<a href="#uxrhandposeasset-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset_CurrentVersion">CurrentVersion</a></td><td>
Current data version.</td></tr></table>&nbsp;
<a href="#uxrhandposeasset-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ObjectExt_ShowInInspector">ShowInInspector(Boolean)</a></td><td>Overloaded.  
Controls whether to show the current object in the inspector.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ObjectExt">ObjectExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ObjectExt_ShowInInspector_1">ShowInInspector(Boolean, Boolean)</a></td><td>Overloaded.  
Controls whether to show the current object in the inspector and whether it is editable.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ObjectExt">ObjectExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrhandposeasset-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses Namespace</a><br />