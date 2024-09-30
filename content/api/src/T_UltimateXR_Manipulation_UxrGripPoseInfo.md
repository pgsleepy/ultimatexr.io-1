# UxrGripPoseInfo Class
 

Describes how an object is grabbed. It tells the pose that will be used and how it will be snapped to the hand. The key is stored in the object, ideally we would have Dictionary(key, GripPoseInfo) but since Unity does not serialize Dictionaries we use a List(GripPoseInfo) containing the key (<a href="P_UltimateXR_Manipulation_UxrGripPoseInfo_AvatarPrefabGuid">AvatarPrefabGuid</a>) as well.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Manipulation.UxrGripPoseInfo<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrGripPoseInfo
```

<a href="UltimateXR/Scripts/Manipulation/UxrGripPoseInfo.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrGripPoseInfo type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGripPoseInfo__ctor">UxrGripPoseInfo</a></td><td>
Constructor.</td></tr></table>&nbsp;
<a href="#uxrgripposeinfo-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGripPoseInfo_AvatarPrefabGuid">AvatarPrefabGuid</a></td><td>
Gets the GUID of the avatar prefab the grip pose info belongs to.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGripPoseInfo_GrabPoseMeshLeft">GrabPoseMeshLeft</a></td><td>
Gets or sets the left grab pose preview mesh.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGripPoseInfo_GrabPoseMeshRight">GrabPoseMeshRight</a></td><td>
Gets or sets the right grab pose preview mesh.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGripPoseInfo_GripAlignTransformHandLeft">GripAlignTransformHandLeft</a></td><td>
Gets or sets the Transform that will be used to align the object grab point to the left <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> that grabbed it.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGripPoseInfo_GripAlignTransformHandRight">GripAlignTransformHandRight</a></td><td>
Gets or sets the Transform that will be used to align the object grab point to the right <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> that grabbed it.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGripPoseInfo_HandPose">HandPose</a></td><td>
Gets or sets the pose that will be used when grabbing.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGripPoseInfo_PoseBlendValue">PoseBlendValue</a></td><td>
Gets or sets the pose blend value if the pose has the possibility of blending. Blending is used to blend between open/closed grips or other animations.</td></tr></table>&nbsp;
<a href="#uxrgripposeinfo-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrgripposeinfo-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />