# UxrAvatarMoveEventArgs Class
 

Contains information about an <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> that has moved/rotated. Avatars are moved/rotated through [!:UxrManager] functionality such as:
&nbsp;<ul><li>UxrManager.Instance.MoveAvatarTo</li><li>UxrManager.Instance.RotateAvatar</li><li>UxrManager.Instance.TeleportLocalAvatar</li></ul>&nbsp;
These methods will move/rotate the root transform of the avatar. If a user moves or rotates in the real-world, the camera transform will be updated but the root avatar transform will remain fixed. Only moving or teleporting the avatar will generate UxrAvatarMoveEventArgs events.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;<a href="https://docs.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">System.EventArgs</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Avatar_UxrAvatarEventArgs">UltimateXR.Avatar.UxrAvatarEventArgs</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Avatar.UxrAvatarMoveEventArgs<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrAvatarMoveEventArgs : UxrAvatarEventArgs
```

<a href="UltimateXR/Scripts/Avatar/UxrAvatarMoveEventArgs.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAvatarMoveEventArgs type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatarMoveEventArgs__ctor">UxrAvatarMoveEventArgs</a></td><td>
Constructor.</td></tr></table>&nbsp;
<a href="#uxravatarmoveeventargs-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarMoveEventArgs_HasRotation">HasRotation</a></td><td>
Gets whether the avatar has changed its rotation.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarMoveEventArgs_HasTranslation">HasTranslation</a></td><td>
Gets whether the avatar has changed its position.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarMoveEventArgs_NewForward">NewForward</a></td><td>
Gets the new <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> forward vector.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarMoveEventArgs_NewPosition">NewPosition</a></td><td>
Gets the new <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> position.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarMoveEventArgs_NewRotation">NewRotation</a></td><td>
Gets the new <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> rotation.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarMoveEventArgs_NewWorldMatrix">NewWorldMatrix</a></td><td>
Gets the new <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> local to world matrix.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarMoveEventArgs_OldForward">OldForward</a></td><td>
Gets the old <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> forward vector.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarMoveEventArgs_OldPosition">OldPosition</a></td><td>
Gets the old <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> position.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarMoveEventArgs_OldRotation">OldRotation</a></td><td>
Gets the old <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> rotation.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatarMoveEventArgs_OldWorldMatrix">OldWorldMatrix</a></td><td>
Gets the old <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> local to world matrix.</td></tr></table>&nbsp;
<a href="#uxravatarmoveeventargs-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatarMoveEventArgs_ReorientRelativeToAvatar">ReorientRelativeToAvatar</a></td><td>
Reorients and repositions a transform so that it keeps the relative position/orientation to the avatar after the position changed event.</td></tr></table>&nbsp;
<a href="#uxravatarmoveeventargs-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxravatarmoveeventargs-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />