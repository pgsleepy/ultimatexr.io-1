# UxrLaserPointer Class
 

Component that, added to an object in an <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> , allows it to interact with user interfaces using a laser pointer. It is normally added to the hand, so that it points in a forward direction from the hand, but can also be added to inanimate objects.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrLaserPointer)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1">UltimateXR.Core.Components.Composite.UxrAvatarComponent</a>(UxrLaserPointer)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.UI.UxrLaserPointer<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_UI_UxrCameraPointer">UltimateXR.UI.UxrCameraPointer</a><br />
**Namespace:**&nbsp;<a href="N_UltimateXR_UI">UltimateXR.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrLaserPointer : UxrAvatarComponent<UxrLaserPointer>
```

<a href="UltimateXR/Scripts/UI/UxrLaserPointer.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrLaserPointer type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UxrLaserPointer__ctor">UxrLaserPointer</a></td><td /></tr></table>&nbsp;
<a href="#uxrlaserpointer-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_BlockingMask">BlockingMask</a></td><td>
Gets or sets the which layers will block the laser for 3D objects.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_ClickInput">ClickInput</a></td><td>
Gets or sets the input button(s) required for a click.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_CurrentRayLength">CurrentRayLength</a></td><td>
Gets the current laser ray length.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_ForceLaserEnabled">ForceLaserEnabled</a></td><td>
Gets or sets whether the laser should be forcefully enabled. This is useful when <a href="P_UltimateXR_UI_UnityInputModule_UxrCanvas_AutoEnableLaserPointer">AutoEnableLaserPointer</a> is used or a controller input is required to enable the laser pointer.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_HandSide">HandSide</a></td><td>
Gets the hand the laser pointer belongs to.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_IgnoreAutoEnable">IgnoreAutoEnable</a></td><td>
Gets or sets whether the laser should ignore the <a href="P_UltimateXR_UI_UnityInputModule_UxrCanvas_AutoEnableLaserPointer">AutoEnableLaserPointer</a> property in canvases.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_IsInvisible">IsInvisible</a></td><td>
Gets or sets whether to use an invisible laser ray.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_IsLaserEnabled">IsLaserEnabled</a></td><td>
Gets whether the laser is currently enabled.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_LaserDir">LaserDir</a></td><td>
Gets the laser direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_LaserPos">LaserPos</a></td><td>
Gets the laser origin position.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_LaserTransform">LaserTransform</a></td><td>
Gets the Transform that is used to compute the direction in which the laser points. The laser will point in the forward direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_MaxRayLength">MaxRayLength</a></td><td>
Gets or sets the maximum laser length. This is the distance that the ray will travel if not occluded.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_OptionalEnableWhenLaserOn">OptionalEnableWhenLaserOn</a></td><td>
Gets or sets an optional GameObject that will be enabled or disabled along with the laser.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_RayColorInteractive">RayColorInteractive</a></td><td>
Gets or sets the ray color when it's pointing to an interactive element.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_RayColorNonInteractive">RayColorNonInteractive</a></td><td>
Gets or sets the ray color when it's not pointing to an interactive element.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_RayHitSize">RayHitSize</a></td><td>
Gets or sets the size of the ray hit quad..</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_RayWidth">RayWidth</a></td><td>
Gets or sets the laser ray width.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_ShowLaserButtonEvent">ShowLaserButtonEvent</a></td><td>
Gets or sets the button event type required for <a href="P_UltimateXR_UI_UxrLaserPointer_ShowLaserInput">ShowLaserInput</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_ShowLaserInput">ShowLaserInput</a></td><td>
Gets or sets the input button(s) required to show the laser. Use <a href="T_UltimateXR_Devices_UxrInputButtons">None</a> to have the laser always enabled or <a href="T_UltimateXR_Devices_UxrInputButtons">Everything</a> to have it always disabled and let <a href="P_UltimateXR_UI_UnityInputModule_UxrCanvas_AutoEnableLaserPointer">AutoEnableLaserPointer</a> handle the enabling/disabling.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_TargetTypes">TargetTypes</a></td><td>
Gets or sets the elements the laser can interact with.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_TriggerCollidersInteraction">TriggerCollidersInteraction</a></td><td>
Gets or sets how to treat collisions against trigger volumes. By default the laser doesn't collide against trigger volumes.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrLaserPointer_UseControllerForward">UseControllerForward</a></td><td>
Gets or sets whether to use the real controller forward instead of the component's forward.</td></tr></table>&nbsp;
<a href="#uxrlaserpointer-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UxrLaserPointer_Awake">Awake</a></td><td>
Initializes the component.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1_Awake">UxrAvatarComponent(T).Awake()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UxrLaserPointer_IsClickedThisFrame">IsClickedThisFrame</a></td><td>
Checks whether the user performed a click this frame (released the input button after pressing).</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UxrLaserPointer_IsReleasedThisFrame">IsReleasedThisFrame</a></td><td>
Checks whether the user performed a press this frame (pressed the input button).</td></tr></table>&nbsp;
<a href="#uxrlaserpointer-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__clickInput">_clickInput</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__handSide">_handSide</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__invisible">_invisible</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__optionalEnableWhenLaserOn">_optionalEnableWhenLaserOn</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__rayColorInteractive">_rayColorInteractive</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__rayColorNonInteractive">_rayColorNonInteractive</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__rayHitMaterial">_rayHitMaterial</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__rayHitSize">_rayHitSize</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__rayLength">_rayLength</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__rayWidth">_rayWidth</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__showLaserButtonEvent">_showLaserButtonEvent</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__showLaserInput">_showLaserInput</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__targetTypes">_targetTypes</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UxrLaserPointer__useControllerForward">_useControllerForward</a></td><td /></tr></table>&nbsp;
<a href="#uxrlaserpointer-class">Back to Top</a>

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
<a href="#uxrlaserpointer-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_UI">UltimateXR.UI Namespace</a><br />