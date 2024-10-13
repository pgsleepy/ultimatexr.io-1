# UxrManipulationHapticFeedback Methods
 

The <a href="T_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback">UxrManipulationHapticFeedback</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_OnDisable">OnDisable</a></td><td>
Stops the haptic coroutines.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnDisable">UxrGrabbableObjectComponent(T).OnDisable()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_OnObjectConstraintsFinished">OnObjectConstraintsFinished</a></td><td>
Called after all object manipulation has been processed and potential constraints have been applied. It is used to update the speed information.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectConstraintsFinished">UxrGrabbableObjectComponent(T).OnObjectConstraintsFinished(UxrApplyConstraintsEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_OnObjectGrabbed">OnObjectGrabbed</a></td><td>
Called when the object was grabbed. Sends haptic feedback if it's required.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectGrabbed">UxrGrabbableObjectComponent(T).OnObjectGrabbed(UxrManipulationEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_OnObjectPlaced">OnObjectPlaced</a></td><td>
Called when the object was placed. Sends haptic feedback if it's required.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectPlaced">UxrGrabbableObjectComponent(T).OnObjectPlaced(UxrManipulationEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_OnObjectReleased">OnObjectReleased</a></td><td>
Called when the object was released. Sends haptic feedback if it's required.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectReleased">UxrGrabbableObjectComponent(T).OnObjectReleased(UxrManipulationEventArgs)</a>.)</td></tr></table>&nbsp;
<a href="#uxrmanipulationhapticfeedback-methods">Back to Top</a>

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
<a href="#uxrmanipulationhapticfeedback-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback">UxrManipulationHapticFeedback Class</a><br /><a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers Namespace</a><br />