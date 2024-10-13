# UxrPicoNeo3Input Properties
 

The <a href="T_UltimateXR_Devices_Integrations_Pico_UxrPicoNeo3Input">UxrPicoNeo3Input</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_Pico_UxrPicoNeo3Input_ControllerNames">ControllerNames</a></td><td>
Gets list of controller names that the component can handle
 (Overrides <a href="P_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_ControllerNames">UxrUnityXRControllerInput.ControllerNames</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_Pico_UxrPicoNeo3Input_IsHandednessSupported">IsHandednessSupported</a></td><td>

Gets whether <a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">Handedness</a> can be used. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices, it may be used to control which hand is holding the controller. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Dual</a> devices it is used to determine which hands have the <a href="P_UltimateXR_Devices_IUxrControllerInput_Primary">Primary</a> (dominant) and <a href="P_UltimateXR_Devices_IUxrControllerInput_Secondary">Secondary</a> (non-dominant) roles.
 Devices such as gamepads don't support handedness and will target the single device no matter which <a href="T_UltimateXR_Core_UxrHandSide">UxrHandSide</a> is used. In this case it is good practice to use <a href="P_UltimateXR_Devices_IUxrControllerInput_Primary">Primary</a> to target the device in order to make the code cleaner.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_IsHandednessSupported">UxrControllerInput.IsHandednessSupported</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_Pico_UxrPicoNeo3Input_MainJoystickIsTouchpad">MainJoystickIsTouchpad</a></td><td>
Gets a value indicating whether the main two-axis input element is a touchpad. If false, it usually means the main joystick is a thumbstick.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_MainJoystickIsTouchpad">UxrControllerInput.MainJoystickIsTouchpad</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_Pico_UxrPicoNeo3Input_SDKDependency">SDKDependency</a></td><td>
Gets the SDK dependency: PicoXR.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_SDKDependency">UxrControllerInput.SDKDependency</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_Pico_UxrPicoNeo3Input_SetupType">SetupType</a></td><td>
Gets the setup type. See <a href="T_UltimateXR_Devices_UxrControllerSetupType">UxrControllerSetupType</a>.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_SetupType">UxrControllerInput.SetupType</a>.)</td></tr></table>&nbsp;
<a href="#uxrpiconeo3input-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_Pico_UxrPicoNeo3Input">UxrPicoNeo3Input Class</a><br /><a href="N_UltimateXR_Devices_Integrations_Pico">UltimateXR.Devices.Integrations.Pico Namespace</a><br />