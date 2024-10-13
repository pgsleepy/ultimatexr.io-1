# UxrUnityXRControllerInput Methods
 

The <a href="T_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput">UxrUnityXRControllerInput</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_Awake">Awake</a></td><td>
Initializes variables and subscribes to events. If the controllers were already initialized, enables the component. Otherwise it begins disabled until devices are connected.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_Awake">UxrControllerInput.Awake()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_CreateHapticBufferFromAudioClip">CreateHapticBufferFromAudioClip</a></td><td>
Using an audio file, creates a haptic samples buffer that can be sent for feedback. This code is based on the Oculus SDK (OVRHaptics.cs).</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_GetControllerCapabilities">GetControllerCapabilities</a></td><td>
Gets the capabilities of the XR controller.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_GetControllerCapabilities">UxrControllerInput.GetControllerCapabilities(UxrHandSide)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_GetInput1D">GetInput1D</a></td><td>
Gets the state of an analog controller input element.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_GetInput1D">UxrControllerInput.GetInput1D(UxrHandSide, UxrInput1D, Boolean)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_GetInput2D">GetInput2D</a></td><td>
Gets the state of a 2D input element (joystick, touchpad...).
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_GetInput2D">UxrControllerInput.GetInput2D(UxrHandSide, UxrInput2D, Boolean)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_GetInputDevice">GetInputDevice</a></td><td>
Gets the input device interface in Unity's input system for a given hand. Usually if it is a left+right setup it will give a list with a single entry but the system is very generic so it is prepared to handle different setups. Normally we get the list and just use the first entry if available.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_IsControllerEnabled">IsControllerEnabled</a></td><td>
Checks whether the given controller is enabled.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_IsControllerEnabled">UxrControllerInput.IsControllerEnabled(UxrHandSide)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_OnDestroy">OnDestroy</a></td><td>
Unsubscribes from device events.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_OnDestroy">UxrControllerInput.OnDestroy()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_SendHapticFeedback_1">SendHapticFeedback(UxrHandSide, UxrHapticClip)</a></td><td>
Sends haptic feedback to a controller if the controller supports it.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_SendHapticFeedback_1">UxrControllerInput.SendHapticFeedback(UxrHandSide, UxrHapticClip)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_SendHapticFeedback">SendHapticFeedback(UxrHandSide, Single, Single, Single, UxrHapticMode)</a></td><td>
Sends haptic feedback to a controller if the controller supports it.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_SendHapticFeedback">UxrControllerInput.SendHapticFeedback(UxrHandSide, Single, Single, Single, UxrHapticMode)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_StopHapticFeedback">StopHapticFeedback</a></td><td>
Stops all current haptics in a given controller.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_StopHapticFeedback">UxrControllerInput.StopHapticFeedback(UxrHandSide)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_UpdateInput">UpdateInput</a></td><td>
Updates the input state. This should not be called by the user since it is called by the framework already.
 (Overrides <a href="M_UltimateXR_Devices_UxrControllerInput_UpdateInput">UxrControllerInput.UpdateInput()</a>.)</td></tr></table>&nbsp;
<a href="#uxrunityxrcontrollerinput-methods">Back to Top</a>

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
<a href="#uxrunityxrcontrollerinput-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput">UxrUnityXRControllerInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations Namespace</a><br />