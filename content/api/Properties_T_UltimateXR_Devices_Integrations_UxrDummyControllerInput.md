# UxrDummyControllerInput Properties
 

The <a href="T_UltimateXR_Devices_Integrations_UxrDummyControllerInput">UxrDummyControllerInput</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_UxrDummyControllerInput_IsHandednessSupported">IsHandednessSupported</a></td><td>

Gets whether <a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">Handedness</a> can be used. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices, it may be used to control which hand is holding the controller. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Dual</a> devices it is used to determine which hands have the <a href="P_UltimateXR_Devices_IUxrControllerInput_Primary">Primary</a> (dominant) and <a href="P_UltimateXR_Devices_IUxrControllerInput_Secondary">Secondary</a> (non-dominant) roles.
 Devices such as gamepads don't support handedness and will target the single device no matter which <a href="T_UltimateXR_Core_UxrHandSide">UxrHandSide</a> is used. In this case it is good practice to use <a href="P_UltimateXR_Devices_IUxrControllerInput_Primary">Primary</a> to target the device in order to make the code cleaner.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_IsHandednessSupported">UxrControllerInput.IsHandednessSupported</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_UxrDummyControllerInput_LeftControllerName">LeftControllerName</a></td><td>
Gets the left controller name, or empty if not connected / doesn't exist. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> configurations where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is not available, both sides will return the same name.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_LeftControllerName">UxrControllerInput.LeftControllerName</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_UxrDummyControllerInput_RightControllerName">RightControllerName</a></td><td>
Gets the right controller name, or empty if not connected / doesn't exist. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> configurations where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is not available, both sides will return the same name.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_RightControllerName">UxrControllerInput.RightControllerName</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_UxrDummyControllerInput_SetupType">SetupType</a></td><td>
Gets the setup type. See <a href="T_UltimateXR_Devices_UxrControllerSetupType">UxrControllerSetupType</a>.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_SetupType">UxrControllerInput.SetupType</a>.)</td></tr></table>&nbsp;
<a href="#uxrdummycontrollerinput-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_UxrDummyControllerInput">UxrDummyControllerInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations Namespace</a><br />