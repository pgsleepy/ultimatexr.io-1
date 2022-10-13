# UxrPointerInputModule Methods
 

The <a href="T_UltimateXR_UI_UnityInputModule_UxrPointerInputModule">UxrPointerInputModule</a> type exposes the following members.


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
Processes the pointer press and release events.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerInputModule_Start">Start</a></td><td>
Sets the drag threshold.
 (Overrides UIBehaviour.Start().)</td></tr></table>&nbsp;
<a href="#uxrpointerinputmodule-methods">Back to Top</a>

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
<a href="#uxrpointerinputmodule-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_UI_UnityInputModule_UxrPointerInputModule">UxrPointerInputModule Class</a><br /><a href="N_UltimateXR_UI_UnityInputModule">UltimateXR.UI.UnityInputModule Namespace</a><br />