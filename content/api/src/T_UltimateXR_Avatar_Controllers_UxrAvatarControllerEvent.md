# UxrAvatarControllerEvent Class
 

Describes an event that maps an XR controller input to a hand pose. This allows to show different poses when certain buttons are pressed. It also allows to describe which poses need to be used when grabbing or pointing with the finger.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Avatar.Controllers.UxrAvatarControllerEvent<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Controllers">UltimateXR.Avatar.Controllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrAvatarControllerEvent
```

<a href="UltimateXR/Scripts/Avatar/Controllers/UxrAvatarControllerEvent.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAvatarControllerEvent type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarControllerEvent__ctor">UxrAvatarControllerEvent</a></td><td /></tr></table>&nbsp;
<a href="#uxravatarcontrollerevent-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Controllers_UxrAvatarControllerEvent_Buttons">Buttons</a></td><td>
Gets or sets the button(s) that trigger the animation event.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Controllers_UxrAvatarControllerEvent_PoseBlendValue">PoseBlendValue</a></td><td>
Gets or sets the pose blend value if the pose is <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">Blend</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Controllers_UxrAvatarControllerEvent_PoseName">PoseName</a></td><td>
Gets the hand pose name that should be used on the event.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Controllers_UxrAvatarControllerEvent_PoseNameOverride">PoseNameOverride</a></td><td>
Gets or sets the pose name that will be used instead of the pose stored. If null, the pose will be used instead.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Controllers_UxrAvatarControllerEvent_TypeOfAnimation">TypeOfAnimation</a></td><td>
Gets the type of animation the event represents. This allows to keep track of certain key animations such as grabbing or pointing with the finger, that are used in the framework.</td></tr></table>&nbsp;
<a href="#uxravatarcontrollerevent-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarControllerEvent_ToString">ToString</a></td><td>
Returns a string that represents the current object.
 (Overrides <a href="https://docs.microsoft.com/dotnet/api/system.object.tostring#System_Object_ToString" target="_blank" rel="noopener noreferrer">Object.ToString()</a>.)</td></tr></table>&nbsp;
<a href="#uxravatarcontrollerevent-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxravatarcontrollerevent-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar_Controllers">UltimateXR.Avatar.Controllers Namespace</a><br />