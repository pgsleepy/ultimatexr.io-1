# UxrPointerInputModule Class
 

Input module for Unity that enables interaction in virtual reality using either touch gestures (via <a href="T_UltimateXR_UI_UxrFingerTip">UxrFingerTip</a>) or laser pointers (via <a href="T_UltimateXR_UI_UxrLaserPointer">UxrLaserPointer</a>). Using <a href="P_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_AutoEnableOnWorldCanvases">AutoEnableOnWorldCanvases</a> it is possible to automatically set up existing Unity canvases ( Canvas components), otherwise it is required to add a <a href="T_UltimateXR_UI_UnityInputModule_UxrCanvas">UxrCanvas</a> component on each GameObject having a Canvas to enable interaction.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UIBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BaseInputModule<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PointerInputModule<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.UI.UnityInputModule.UxrPointerInputModule<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_UI_UnityInputModule">UltimateXR.UI.UnityInputModule</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrPointerInputModule : PointerInputModule
```

<a href="UltimateXR/Scripts/UI/UnityInputModule/UxrPointerInputModule.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrPointerInputModule type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule__ctor">UxrPointerInputModule</a></td><td /></tr></table>&nbsp;
<a href="#uxrpointerinputmodule-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_AutoAssignEventCamera">AutoAssignEventCamera</a></td><td>
Gets whether to assign the event camera to the Canvas components to that they use the local <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_AutoEnableOnWorldCanvases">AutoEnableOnWorldCanvases</a></td><td>
Gets whether the input module will try to find all Canvas components after loading a scene, in order to add a <a href="T_UltimateXR_UI_UnityInputModule_UxrCanvas">UxrCanvas</a> component to those that have not been set up.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_FingerTipMinHoverDistance">FingerTipMinHoverDistance</a></td><td>
Gets the minimum distance from a finger tip to a canvas in order to generate hovering events, when <a href="P_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_InteractionTypeOnAutoEnable">InteractionTypeOnAutoEnable</a> is <a href="T_UltimateXR_UI_UnityInputModule_UxrInteractionType">FingerTips</a>,</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_Instance">Instance</a></td><td>
Gets the singleton instance.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_InteractionTypeOnAutoEnable">InteractionTypeOnAutoEnable</a></td><td>
Gets, for those canvases that have been set up automatically using <a href="P_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_AutoEnableOnWorldCanvases">AutoEnableOnWorldCanvases</a>, the type of interaction that will be used.</td></tr></table>&nbsp;
<a href="#uxrpointerinputmodule-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_Awake">Awake</a></td><td>
Initializes the component.
 (Overrides UIBehaviour.Awake().)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_CheckRaycastAutoEnable">CheckRaycastAutoEnable</a></td><td>
Checks whether to enable the laser renderer for a given laser pointer, because it is currently pointing to a UI element.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_FindFirstRaycast">FindFirstRaycast</a></td><td>
Finds the raycast that will be used to find out which UI element the user interacted with.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_GetPointerEventData">GetPointerEventData(UxrFingerTip)</a></td><td>
Gets the pointer event data of a given <a href="T_UltimateXR_UI_UxrFingerTip">UxrFingerTip</a> if it exists.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_GetPointerEventData_1">GetPointerEventData(UxrLaserPointer)</a></td><td>
Gets the pointer event data of a given <a href="T_UltimateXR_UI_UxrLaserPointer">UxrLaserPointer</a> if it exists.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_IsInteractive">IsInteractive</a></td><td>
Checks if the given GameObject is interactive. An object is considered interactive when it is able to handle either pointer down or pointer drag events. Since other non-interactive objects may be in front of interactive objects, the whole hierarchy is checked up to the first <a href="T_UltimateXR_UI_UnityInputModule_UxrCanvas">UxrCanvas</a> found.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_IsModuleSupported">IsModuleSupported</a></td><td> (Overrides BaseInputModule.IsModuleSupported().)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_OnDisable">OnDisable</a></td><td>
Unsubscribes from events and stops the haptics coroutine.
 (Overrides BaseInputModule.OnDisable().)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_OnEnable">OnEnable</a></td><td>
Subscribes to events and sets up the haptics coroutine.
 (Overrides BaseInputModule.OnEnable().)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_Process">Process</a></td><td> (Overrides BaseInputModule.Process().)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_ProcessPointerEvents">ProcessPointerEvents</a></td><td>
Processes the pointer events.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_ProcessPointerPressRelease">ProcessPointerPressRelease</a></td><td>
Processes the pointer press and release events.</td></tr></table>&nbsp;
<a href="#uxrpointerinputmodule-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UnityInputModule_UxrPointerInputModule__autoAssignEventCamera">_autoAssignEventCamera</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UnityInputModule_UxrPointerInputModule__autoEnableOnWorldCanvases">_autoEnableOnWorldCanvases</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UnityInputModule_UxrPointerInputModule__disableOtherInputModules">_disableOtherInputModules</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UnityInputModule_UxrPointerInputModule__fingerTipMinHoverDistance">_fingerTipMinHoverDistance</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="F_UltimateXR_UI_UnityInputModule_UxrPointerInputModule__interactionTypeOnAutoEnable">_interactionTypeOnAutoEnable</a></td><td /></tr></table>&nbsp;
<a href="#uxrpointerinputmodule-class">Back to Top</a>

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
<a href="#uxrpointerinputmodule-class">Back to Top</a>

## Remarks
Canvas components instantiated at runtime should have a <a href="T_UltimateXR_UI_UnityInputModule_UxrCanvas">UxrCanvas</a> already present in order for VR interaction to work, since <a href="P_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_AutoEnableOnWorldCanvases">AutoEnableOnWorldCanvases</a> only works for objects present in the scene after loading.

## See Also


#### Reference
<a href="N_UltimateXR_UI_UnityInputModule">UltimateXR.UI.UnityInputModule Namespace</a><br />