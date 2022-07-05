# UxrSteamVRControllerInput Methods
 

The <a href="T_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput">UxrSteamVRControllerInput</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_Awake">Awake</a></td><td>
Takes care of registering the component in the global list of SteamVR input components. Builds the action list to access input and starts listening for device connections.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_Awake">UxrControllerInput.Awake()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_GetInput1D">GetInput1D</a></td><td>
Gets the state of an analog controller input element.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_GetInput1D">UxrControllerInput.GetInput1D(UxrHandSide, UxrInput1D, Boolean)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_GetInput2D">GetInput2D</a></td><td>
Gets the state of a 2D input element (joystick, touchpad...).
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_GetInput2D">UxrControllerInput.GetInput2D(UxrHandSide, UxrInput2D, Boolean)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_IsControllerEnabled">IsControllerEnabled</a></td><td>
Checks whether the given controller is enabled.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_IsControllerEnabled">UxrControllerInput.IsControllerEnabled(UxrHandSide)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_OnDisable">OnDisable</a></td><td>
Called when the component is disabled. In the case the component was using skeletal input, the hand will be driven by the Avatar Animator back again.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_OnDisable">UxrComponent(T).OnDisable()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_SendHapticFeedback_1">SendHapticFeedback(UxrHandSide, UxrHapticClip)</a></td><td>
Sends haptic feedback to a controller if the controller supports it.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_SendHapticFeedback_1">UxrControllerInput.SendHapticFeedback(UxrHandSide, UxrHapticClip)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_SendHapticFeedback">SendHapticFeedback(UxrHandSide, Single, Single, Single, UxrHapticMode)</a></td><td>
Sends haptic feedback to a controller if the controller supports it.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_SendHapticFeedback">UxrControllerInput.SendHapticFeedback(UxrHandSide, Single, Single, Single, UxrHapticMode)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_Start">Start</a></td><td>
Initializes SteamVR if necessary and activates the UltimateXR action set. Will initialize skeleton functionality if necessary.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_Start">UxrControllerInput.Start()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_StopHapticFeedback">StopHapticFeedback</a></td><td>
Stops all current haptics in a given controller.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_StopHapticFeedback">UxrControllerInput.StopHapticFeedback(UxrHandSide)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_UpdateInput">UpdateInput</a></td><td>
Updates the complete input state using our common SteamVR actions. This allows to use the same interface for all controllers and enables the implementation of new devices with minimal effort.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_UpdateInput">UxrControllerInput.UpdateInput()</a>.)</td></tr></table>&nbsp;
<a href="#uxrsteamvrcontrollerinput-methods">Back to Top</a>

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
<a href="#uxrsteamvrcontrollerinput-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput">UxrSteamVRControllerInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations_SteamVR">UltimateXR.Devices.Integrations.SteamVR Namespace</a><br />