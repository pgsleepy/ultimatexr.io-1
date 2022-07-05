# UxrAvatarController Class
 

Base class for <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> controllers. UxrAvatarController components are responsible for updating the avatar. UltimateXR provides the <a href="T_UltimateXR_Avatar_Controllers_UxrStandardAvatarController">UxrStandardAvatarController</a> which has great functionality. For flexibility and scalability, different avatar controllers can be created if required.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrAvatarController)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1">UltimateXR.Core.Components.Composite.UxrAvatarComponent</a>(UxrAvatarController)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Avatar.Controllers.UxrAvatarController<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Avatar_Controllers_UxrStandardAvatarController">UltimateXR.Avatar.Controllers.UxrStandardAvatarController</a><br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Controllers">UltimateXR.Avatar.Controllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[DisallowMultipleComponent]
[RequireComponent(typeof(UxrAvatar))]
public abstract class UxrAvatarController : UxrAvatarComponent<UxrAvatarController>
```

<a href="UltimateXR/Scripts/Avatar/Controllers/UxrAvatarController.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAvatarController type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_Controllers_UxrAvatarController__ctor">UxrAvatarController</a></td><td /></tr></table>&nbsp;
<a href="#uxravatarcontroller-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Controllers_UxrAvatarController_AllowHandTracking">AllowHandTracking</a></td><td>
Gets or sets whether hand tracking is used when available.</td></tr></table>&nbsp;
<a href="#uxravatarcontroller-class">Back to Top</a>

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
<a href="#uxravatarcontroller-class">Back to Top</a>

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
<a href="#uxravatarcontroller-class">Back to Top</a>

## Remarks
UxrAvatarController components require the <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> component in the same GameObject or any of its parents. Only one UxrAvatarController component type can be active at the same time.

## See Also


#### Reference
<a href="N_UltimateXR_Avatar_Controllers">UltimateXR.Avatar.Controllers Namespace</a><br />