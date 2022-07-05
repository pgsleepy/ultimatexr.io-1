# UxrAvatarController Methods
 

The <a href="T_UltimateXR_Avatar_Controllers_UxrAvatarController">UxrAvatarController</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_CanHandInteractWithUI">CanHandInteractWithUI</a></td><td>
Gets if the hand is available to interact with UI elements, such as pressing buttons. This is used by the UI interaction system to ignore the hand for these events. For example, when the hand is holding an object it could be desirable to not let it interact inadvertently with any user interface.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_UpdateAvatar">UpdateAvatar</a></td><td>
Updates the avatar for the given frame. This is normally in charge of updating input devices, tracking devices and locomotion. Animation is left for a later stage (<a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_UpdateAvatarAnimation">UpdateAvatarAnimation()</a>), to make sure it is performed in the right order right after Unity has updated the built-in animation components such as Animator.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_UpdateAvatarAnimation">UpdateAvatarAnimation</a></td><td>
Updates the animation and rig transforms for the given frame. It is performed in a later stage than <a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_UpdateAvatar">UpdateAvatar()</a> to make sure the transforms override the transforms that Unity may have updated using built-in components such as Animator.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_UpdateAvatarManipulation">UpdateAvatarManipulation</a></td><td>
Executes the avatar manipulation actions based on user input.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_UpdateAvatarPostProcess">UpdateAvatarPostProcess</a></td><td>
Updates the avatar for a given frame, at the end of all stages and UltimateXR manager updates such as the <a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager</a>. It can be used to perform operations that require to be executed at the end of all stages, such as Inverse Kinematics.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_UpdateAvatarUsingTrackingDevices">UpdateAvatarUsingTrackingDevices</a></td><td>
Updates the avatar using the current tracking data.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_UpdateInputDevice">UpdateInputDevice</a></td><td>
Updates the currently enabled input devices.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_UpdateLocomotion">UpdateLocomotion</a></td><td>
Updates the enabled locomotion components in the avatar.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController_UpdateTrackingDevices">UpdateTrackingDevices</a></td><td>
Updates the tracking devices.</td></tr></table>&nbsp;
<a href="#uxravatarcontroller-methods">Back to Top</a>

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
<a href="#uxravatarcontroller-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Controllers_UxrAvatarController">UxrAvatarController Class</a><br /><a href="N_UltimateXR_Avatar_Controllers">UltimateXR.Avatar.Controllers Namespace</a><br />