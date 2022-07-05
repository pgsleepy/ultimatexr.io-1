# UxrButton3D Class
 

Base class to simplify interacting with 3D button objects by programming 2D UI elements. A 2D Unity UI Canvas is placed on top of the 3D buttons. The Canvas will contain invisible <a href="T_UltimateXR_UI_UnityInputModule_Controls_UxrControlInput">UxrControlInput</a> UI components by using <a href="T_UltimateXR_UI_UnityInputModule_UxrNonDrawingGraphic">UxrNonDrawingGraphic</a> instead of images. The <a href="T_UltimateXR_UI_UnityInputModule_Controls_UxrControlInput">UxrControlInput</a> components will get the user input and through child implementations of UxrButton3D the 3D objects will be "pushed", "rotated" creating 3D behaviour using 2D logic.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrButton3D)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_2">UltimateXR.Core.Components.UxrComponent</a>(Canvas, UxrButton3D)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.UI.UnityInputModule.Utils.UxrButton3D<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_UI_UnityInputModule_Utils_UxrButton3DPress">UltimateXR.UI.UnityInputModule.Utils.UxrButton3DPress</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_UI_UnityInputModule_Utils_UxrButton3DRotate">UltimateXR.UI.UnityInputModule.Utils.UxrButton3DRotate</a><br />
**Namespace:**&nbsp;<a href="N_UltimateXR_UI_UnityInputModule_Utils">UltimateXR.UI.UnityInputModule.Utils</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[RequireComponent(typeof(UxrControlInput))]
public class UxrButton3D : UxrComponent<Canvas, UxrButton3D>
```

<a href="UltimateXR/Scripts/UI/UnityInputModule/Utils/UxrButton3D.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrButton3D type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D__ctor">UxrButton3D</a></td><td /></tr></table>&nbsp;
<a href="#uxrbutton3d-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_ControlInput">ControlInput</a></td><td>
Gets the UI input component.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_InitialTargetLocalPosition">InitialTargetLocalPosition</a></td><td>
Gets <a href="P_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_Target">Target</a>'s local position during Awake().</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_InitialTargetLocalRotation">InitialTargetLocalRotation</a></td><td>
Gets <a href="P_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_Target">Target</a>'s local rotation during Awake().</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_InitialTargetPosition">InitialTargetPosition</a></td><td>
Gets <a href="P_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_Target">Target</a>'s world position during Awake().</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_InitialTargetRotation">InitialTargetRotation</a></td><td>
Gets <a href="P_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_Target">Target</a>'s world rotation during Awake().</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_Target">Target</a></td><td>
Gets the Transform of the 3D object that is going to move, rotate, scale...</td></tr></table>&nbsp;
<a href="#uxrbutton3d-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_Awake">Awake</a></td><td>
Initializes the component.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_2_Awake">UxrComponent(TP, TC).Awake()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_OnDisable">OnDisable</a></td><td>
Unsubscribes from the input control events.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_OnDisable">UxrComponent(T).OnDisable()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_OnEnable">OnEnable</a></td><td>
Subscribes to the input control events.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_OnEnable">UxrComponent(T).OnEnable()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_OnKeyPressed">OnKeyPressed</a></td><td>
Event trigger for the key pressed event. It can be overridden in child classes to handle key presses without subscribing to events.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_Utils_UxrButton3D_OnKeyReleased">OnKeyReleased</a></td><td>
Event trigger for the key released event. It can be overridden in child classes to handle key releases without subscribing to events.</td></tr></table>&nbsp;
<a href="#uxrbutton3d-class">Back to Top</a>

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
<a href="#uxrbutton3d-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_UI_UnityInputModule_Utils">UltimateXR.UI.UnityInputModule.Utils Namespace</a><br />