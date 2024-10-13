# UxrGrabPointInfo Class
 

Defines a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> grab point. A grab point describes a point of an object which can be grabbed. Objects can have multiple grab points to allow it to be grabbed from different angles. Grab points can be further expanded by using a <a href="T_UltimateXR_Manipulation_UxrGrabPointShape">UxrGrabPointShape</a>, which gives flexibility by allowing it to be grabbed around or along an axis passing through that point, for example.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Manipulation.UxrGrabPointInfo<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrGrabPointInfo
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabPointInfo.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrGrabPointInfo type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabPointInfo__ctor">UxrGrabPointInfo</a></td><td /></tr></table>&nbsp;
<a href="#uxrgrabpointinfo-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_AlignToController">AlignToController</a></td><td>
Gets or sets whether to align the grab to the controller axes, useful when grabbing objects that require aiming, such as weapons.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_AlignToControllerAxes">AlignToControllerAxes</a></td><td>
Gets or sets the transform in the grabbable object to use that will align to the controller axes (x = right, y = up, z = forward).</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_AvatarGripPoseEntries">AvatarGripPoseEntries</a></td><td>
Gets the registered avatars for specific grip poses and properties.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_BothHandsCompatible">BothHandsCompatible</a></td><td>
Gets or sets whether both hands are compatible with the grab point.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_DefaultGripPoseInfo">DefaultGripPoseInfo</a></td><td>
Gets or sets the default grip pose info, which is the grip pose info used when an avatar interacts with an object and is not registered to have specific properties.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_EditorName">EditorName</a></td><td>
Gets or sets the grab point display name in the inspector.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_EnableOnHandNear">EnableOnHandNear</a></td><td>
Gets or sets the GameObject to enable or disable when the object is grabbed or not using the grab point.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabberProximityIndex">GrabberProximityIndex</a></td><td>
Gets or sets which additional proximity transform from <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> to use when <a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabberProximityUseDefault">GrabberProximityUseDefault</a> is false.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabberProximityTransformIndex">GrabberProximityTransformIndex</a></td><td>
Gets the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> proximity index used to compute the distance to the object. -1 for default (the grabber itself) or any other value for additional transforms in the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> component.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabberProximityUseDefault">GrabberProximityUseDefault</a></td><td>
Gets or sets whether to use the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> transform when computing the distance to the grab point. Otherwise it can specify additional proximity transforms using <a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabberProximityIndex">GrabberProximityIndex</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabMode">GrabMode</a></td><td>
Gets or sets the grab mode.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabProximityBox">GrabProximityBox</a></td><td>
Gets or sets the box collider used when <a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabProximityMode">GrabProximityMode</a> is <a href="T_UltimateXR_Manipulation_UxrGrabProximityMode">BoxConstrained</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabProximityMode">GrabProximityMode</a></td><td>
Gets or sets the proximity mode to use.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabProximityTransform">GrabProximityTransform</a></td><td>
Gets or sets the Transform that will be used to compute the distance to <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> components when <a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabberProximityUseDefault">GrabberProximityUseDefault</a> is false.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GrabProximityTransformUseSelf">GrabProximityTransformUseSelf</a></td><td>
Gets or sets whether to use the own <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> transform when computing the distance to <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> components.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_GripPoseInfoCount">GripPoseInfoCount</a></td><td>
Gets how many grip pose entries there are. 1 (the default grip pose info) plus all the registered avatar ones.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_HandSide">HandSide</a></td><td>
If <a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_BothHandsCompatible">BothHandsCompatible</a> is false, tells which hand is used to grab the object using the grab point.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_HideHandGrabberRenderer">HideHandGrabberRenderer</a></td><td>
Gets or sets whether to hide the hand while it is grabbing the object using the grab point.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_InputButtons">InputButtons</a></td><td>
If <a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_UseDefaultGrabButtons">UseDefaultGrabButtons</a> is false, tells which buttons are used to grab the object using the grab point.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_IsEditorFoldedOut">IsEditorFoldedOut</a></td><td>
Gets or sets whether foldout control for a given grab point is folded out or not. We use this in the editor to check if we need to render the preview grab pose meshes for a given grab point. Grab points that are not folded out are not rendered.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_MaxDistanceGrab">MaxDistanceGrab</a></td><td>
Gets or sets the maximum distance the object can be grabbed using this the grab point.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_SnapDirection">SnapDirection</a></td><td>
Gets or sets whether the object will snap to the hand or the hand will snap to the object when it is grabbed using the grab point. Only used when any kind of snapping is enabled.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_SnapMode">SnapMode</a></td><td>
Gets or sets how the object will snap to the hand when it is grabbed using the grab point.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_SnapReference">SnapReference</a></td><td>
Gets or sets which reference to use for snapping when the object is grabbed using the grab point.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_UseDefaultGrabButtons">UseDefaultGrabButtons</a></td><td>
Gets or sets whether to use the default grab buttons to grab the object using the grab point.</td></tr></table>&nbsp;
<a href="#uxrgrabpointinfo-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabPointInfo_CheckAddGripPoseInfo">CheckAddGripPoseInfo</a></td><td>
Checks whether to create a grip pose entry for the given avatar prefab.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabPointInfo_GetCompatibleGripPoseInfos">GetCompatibleGripPoseInfos</a></td><td>
Gets all the grip pose infos that can be used with the given avatar.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabPointInfo_GetGripPoseInfo">GetGripPoseInfo(Int32)</a></td><td>
Gets a given grip pose info entry.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabPointInfo_GetGripPoseInfo_1">GetGripPoseInfo(String)</a></td><td>
Gets a given grip pose info entry.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabPointInfo_GetGripPoseInfo_2">GetGripPoseInfo(UxrAvatar, Boolean)</a></td><td>
Gets the grip pose info for the given avatar instance or prefab.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabPointInfo_RemoveGripPoseInfo">RemoveGripPoseInfo</a></td><td>
Removes the grip pose entry of a given avatar prefab.</td></tr></table>&nbsp;
<a href="#uxrgrabpointinfo-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrgrabpointinfo-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />