# UxrController3DModel Class
 

Represents the 3D model of a VR controller. It allows to graphically render the current position/orientation and input state of the device.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Devices.Visualization.UxrController3DModel<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrController3DModel : UxrComponent
```

<a href="UltimateXR/Scripts/Devices/Visualization/UxrController3DModel.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrController3DModel type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Visualization_UxrController3DModel__ctor">UxrController3DModel</a></td><td /></tr></table>&nbsp;
<a href="#uxrcontroller3dmodel-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ControllerHand">ControllerHand</a></td><td>
Gets or sets the hand that is interacting with the controller, when the controller is used with only one hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ControllerHandLeft">ControllerHandLeft</a></td><td>
Gets or sets the left hand that is interacting with the controller, when the controller can be held using both hands.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ControllerHandRight">ControllerHandRight</a></td><td>
Gets or sets the right hand that is interacting with the controller, when the controller can be held using both hands.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_Forward">Forward</a></td><td>
Gets the forward transform as it is currently in the scene. It can be different than the actual forward tracking when we use grab mechanics because the hand transform can be modified by the grab manager and the controller usually hangs from the hand hierarchy. If you need to know the forward controller transform using the information of tracking sensors without any intervention by external elements like the grabbing mechanics use <a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ForwardTrackingRotation">ForwardTrackingRotation</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ForwardTrackingRotation">ForwardTrackingRotation</a></td><td>
Gets the rotation that represents the controller's forward orientation. We use this mainly to be able to align certain mechanics no matter the controller that is currently active. A gun in a game needs to be aligned to the controller, teleport mechanics, etc.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_HandSide">HandSide</a></td><td>
Gets the hand required to hold the controller, if <a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_NeedsBothHands">NeedsBothHands</a> is false.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_IsControllerVisible">IsControllerVisible</a></td><td>
Gets or sets whether the controller is visible.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_IsHandVisible">IsHandVisible</a></td><td>
Gets or sets whether the hand, if present, is visible. In setups where both hands are used, it targets visibility of both hands.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_NeedsBothHands">NeedsBothHands</a></td><td>
Gets whether the controller requires two hands to hold it.</td></tr></table>&nbsp;
<a href="#uxrcontroller3dmodel-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_Visualization_UxrController3DModel_Awake">Awake</a></td><td>
Initializes the component.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_Awake">UxrComponent.Awake()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Visualization_UxrController3DModel_GetElements">GetElements</a></td><td>
Gets the list of GameObjects that represent the given different controller input elements.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Visualization_UxrController3DModel_GetElementsMaterials">GetElementsMaterials</a></td><td>
Gets the list of materials of all objects that represent the given different controller input elements.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Visualization_UxrController3DModel_GetElementsOriginalMaterials">GetElementsOriginalMaterials</a></td><td>
Gets the list of original shared materials of all objects that represent the given different controller input elements. The original materials are the shared materials that the input elements had at the beginning, before any modifications.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Visualization_UxrController3DModel_RestoreElementsMaterials">RestoreElementsMaterials</a></td><td>
Restores the materials of the objects that represent the given different controller input elements.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Visualization_UxrController3DModel_SetElementsMaterial">SetElementsMaterial</a></td><td>
Changes the material of the objects that represent the given different controller input elements.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Visualization_UxrController3DModel_SwitchHandedness">SwitchHandedness</a></td><td>
Changes the current hand to use the controller to the opposite side.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Visualization_UxrController3DModel_UpdateFromInput">UpdateFromInput</a></td><td>
Updates the current visual state using the given input.</td></tr></table>&nbsp;
<a href="#uxrcontroller3dmodel-class">Back to Top</a>

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
<a href="#uxrcontroller3dmodel-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization Namespace</a><br />