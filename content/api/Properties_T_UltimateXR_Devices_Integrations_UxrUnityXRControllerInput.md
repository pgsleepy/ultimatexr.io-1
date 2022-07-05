# UxrUnityXRControllerInput Properties
 

The <a href="T_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput">UxrUnityXRControllerInput</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_ControllerNames">ControllerNames</a></td><td>
Gets list of controller names that the component can handle</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_ForceUseAlways">ForceUseAlways</a></td><td>
We use this when we are implementing new controllers that we don't know the name of, in order to show the controller names in the UxrDebugControllerPanel. Returning true will register the controllers in InputDevices_DeviceConnected(InputDevice) no matter which input device gets connected. Then using the UxrDebugControllerPanel we can see which devices got connected. This is mostly useful for untethered devices that cannot be tested directly in Unity.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_LeftControllerName">LeftControllerName</a></td><td>
Gets the left controller name, or empty if not connected / doesn't exist. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> configurations where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is not available, both sides will return the same name.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_LeftControllerName">UxrControllerInput.LeftControllerName</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_RightControllerName">RightControllerName</a></td><td>
Gets the right controller name, or empty if not connected / doesn't exist. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> configurations where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is not available, both sides will return the same name.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_RightControllerName">UxrControllerInput.RightControllerName</a>.)</td></tr></table>&nbsp;
<a href="#uxrunityxrcontrollerinput-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput">UxrUnityXRControllerInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations Namespace</a><br />