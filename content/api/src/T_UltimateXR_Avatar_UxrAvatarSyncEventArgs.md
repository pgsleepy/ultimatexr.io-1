# UxrAvatarSyncEventArgs Class
 

Describes an event raised by an <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> that can also be played back. This facilitates the manipulation synchronization through network.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;<a href="https://docs.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">System.EventArgs</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_StateSync_UxrStateSyncEventArgs">UltimateXR.Core.StateSync.UxrStateSyncEventArgs</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Avatar.UxrAvatarSyncEventArgs<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrAvatarSyncEventArgs : UxrStateSyncEventArgs
```

<a href="UltimateXR/Scripts/Avatar/UxrAvatarSyncEventArgs.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAvatarSyncEventArgs type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatarSyncEventArgs__ctor">UxrAvatarSyncEventArgs(UxrAvatarHandPoseChangeEventArgs)</a></td><td>
Constructor for an <a href="T_UltimateXR_Avatar_UxrAvatarSyncEventType">HandPose</a> event.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatarSyncEventArgs__ctor_1">UxrAvatarSyncEventArgs(UxrAvatarMoveEventArgs)</a></td><td>
Constructor for an <a href="T_UltimateXR_Avatar_UxrAvatarSyncEventType">AvatarMove</a> event.</td></tr></table>&nbsp;
<a href="#uxravatarsynceventargs-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarSyncEventArgs_AvatarMoveEventArgs">AvatarMoveEventArgs</a></td><td>
Gets the event parameters for an <a href="T_UltimateXR_Avatar_UxrAvatarSyncEventType">AvatarMove</a> event.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarSyncEventArgs_EventType">EventType</a></td><td>
Gets the event type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarSyncEventArgs_HandPoseChangeEventArgs">HandPoseChangeEventArgs</a></td><td>
Gets the event parameters for an <a href="T_UltimateXR_Avatar_UxrAvatarSyncEventType">HandPose</a> event.</td></tr></table>&nbsp;
<a href="#uxravatarsynceventargs-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxravatarsynceventargs-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />