# UxrManager Methods
 

The <a href="T_UltimateXR_Core_UxrManager">UxrManager</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_UxrManager_LogMissingAvatarInHierarchyError">LogMissingAvatarInHierarchyError</a></td><td>
Given a component that requires an <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> component in the hierarchy in order to work, logs an error indicating that it's missing.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_UxrManager_LogMissingAvatarInScene">LogMissingAvatarInScene</a></td><td>
Given a component that requires an <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> component in the scene in order to work, logs an error indicating that it's missing.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_MoveAvatarTo">MoveAvatarTo(UxrAvatar, Single, Boolean)</a></td><td>
Moves the avatar to a new floor level.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_MoveAvatarTo_1">MoveAvatarTo(UxrAvatar, Transform, Boolean)</a></td><td>
See MoveAvatarTo.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_MoveAvatarTo_2">MoveAvatarTo(UxrAvatar, Vector3, Boolean)</a></td><td>
Moves an avatar to a new position on the floor, keeping the same viewing direction. The eye level is maintained.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_MoveAvatarTo_3">MoveAvatarTo(UxrAvatar, Vector3, Vector3, Boolean)</a></td><td>
Moves an avatar to a new position on the floor and a viewing direction. The eye level is maintained.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_RotateAvatar">RotateAvatar</a></td><td>
Rotates the avatar around its vertical axis, where a positive angle turns it to the right and a negative angle to the left.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_RotateLocalAvatar">RotateLocalAvatar</a></td><td>
Rotates the local avatar around its vertical axis, where a positive angle turns it to the right and a negative angle to the left. The rotation can be performed in different ways using *rotationType*.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_RotateLocalAvatarAsync">RotateLocalAvatarAsync</a></td><td>

Asynchronous version of <a href="M_UltimateXR_Core_UxrManager_RotateLocalAvatar">RotateLocalAvatar(Single, UxrRotationType, Single, Action, Action(Boolean), Boolean)</a>.

Rotates the local avatar around its vertical axis, where a positive angle turns it to the right and a negative angle to the left. The rotation can be performed in different ways using *rotationType*.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_RotateLocalAvatarCoroutine">RotateLocalAvatarCoroutine</a></td><td>
Public avatar rotation coroutine that can be yielded from an external coroutine. Rotates the avatar around its vertical axis, where a positive angle turns it to the right and a negative angle to the left.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_TeleportLocalAvatar">TeleportLocalAvatar</a></td><td>
Teleports the local <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a>. The local avatar is the avatar controlled by the user using the headset and input controllers. Non-local avatars are other avatars instantiated in the scene but not controlled by the user, either other users through the network or other scenarios such as automated replays.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_TeleportLocalAvatarAsync">TeleportLocalAvatarAsync</a></td><td>

Asynchronous version of <a href="M_UltimateXR_Core_UxrManager_TeleportLocalAvatar">TeleportLocalAvatar</a>.
 Teleports the local <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a>. The local avatar is the avatar controlled by the user using the headset and input controllers. Non-local avatars are other avatars instantiated in the scene but not controlled by the user, either other users through the network or other scenarios such as automated replays.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_TeleportLocalAvatarCoroutine">TeleportLocalAvatarCoroutine</a></td><td>
Public teleporting coroutine that can be yielded from an external coroutine. Teleports the local <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a>. The local avatar is the avatar controlled by the user using the headset and input controllers. Non-local avatars are other avatars instantiated in the scene but not controlled by the user, either other users through the network or other scenarios such as automated replays.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_TeleportLocalAvatarRelative">TeleportLocalAvatarRelative</a></td><td>
Teleports the local <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> while making sure to keep relative position/orientation on moving objects. Some *translationType* values have a transition before the teleport to avoid motion sickness. On worlds with moving platforms it is important to specify the destination transform so that:
&nbsp;<ul><li>Relative position/orientation to the destination is preserved.</li><li>Optionally the local avatar can be parented to the new destination.</li></ul>&nbsp;
The local avatar is the avatar controlled by the user using the headset and input controllers. Non-local avatars are other avatars instantiated in the scene but not controlled by the user, either other users through the network or other scenarios such as automated replays.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_TeleportLocalAvatarRelativeAsync">TeleportLocalAvatarRelativeAsync</a></td><td>

Asynchronous version of <a href="M_UltimateXR_Core_UxrManager_TeleportLocalAvatarRelative">TeleportLocalAvatar</a>.
 Teleports the local <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a>. The local avatar is the avatar controlled by the user using the headset and input controllers. Non-local avatars are other avatars instantiated in the scene but not controlled by the user, either other users through the network or other scenarios such as automated replays.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_TeleportLocalAvatarRelativeCoroutine">TeleportLocalAvatarRelativeCoroutine</a></td><td>
Public teleporting coroutine that can be yielded from an external coroutine. Teleports the local <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> while making sure to keep relative position/orientation on moving objects. Some *translationType* values have a transition before the teleport to avoid motion sickness. On worlds with moving platforms it is important to specify the destination transform so that:
&nbsp;<ul><li>Relative position/orientation to the destination is preserved.</li><li>Optionally the local avatar can be parented to the new destination.</li></ul>&nbsp;
The local avatar is the avatar controlled by the user using the headset and input controllers. Non-local avatars are other avatars instantiated in the scene but not controlled by the user, either other users through the network or other scenarios such as automated replays.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_UxrManager_TranslateAvatar">TranslateAvatar</a></td><td>
Translates an avatar.</td></tr></table>&nbsp;
<a href="#uxrmanager-methods">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_MonoBehaviourExt_CheckSetEnabled">CheckSetEnabled</a></td><td>
Enables/disabled the component if it isn't enabled already.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_MonoBehaviourExt">MonoBehaviourExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetOrAddComponent__1">GetOrAddComponent(T)</a></td><td>
Gets the Component of a given type. If it doesn't exist, it is added to the GameObject.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetPathUnderScene">GetPathUnderScene</a></td><td>
Gets the full path under current scene, including all parents, but scene name, for the given component.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetSceneUid">GetSceneUid</a></td><td>
Gets an unique identifier string for the given component.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetUniqueScenePath">GetUniqueScenePath</a></td><td>
Gets an unique path in the scene for the given component. It will include scene name, sibling and component indices to make it unique.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_MonoBehaviourExt_LoopCoroutine">LoopCoroutine</a></td><td>
Creates a coroutine that simplifies executing a loop during a certain amount of time.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_MonoBehaviourExt">MonoBehaviourExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_SafeGetComponentInParent__1">SafeGetComponentInParent(T)</a></td><td>
Gets the Component of a given type in the GameObject or any of its parents. It also works on prefabs, where regular GetComponentInParent(Type, Boolean) will not work: https://issuetracker.unity3d.com/issues/getcomponentinparent-is-returning-null-when-the-gameobject-is-a-prefab
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ObjectExt_ShowInInspector">ShowInInspector(Boolean)</a></td><td>Overloaded.  
Controls whether to show the current object in the inspector.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ObjectExt">ObjectExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ObjectExt_ShowInInspector_1">ShowInInspector(Boolean, Boolean)</a></td><td>Overloaded.  
Controls whether to show the current object in the inspector and whether it is editable.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ObjectExt">ObjectExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrmanager-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Core_UxrManager">UxrManager Class</a><br /><a href="N_UltimateXR_Core">UltimateXR.Core Namespace</a><br />