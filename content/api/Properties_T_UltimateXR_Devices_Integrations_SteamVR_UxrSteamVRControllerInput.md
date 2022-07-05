# UxrSteamVRControllerInput Properties
 

The <a href="T_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput">UxrSteamVRControllerInput</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_ControllerNames">ControllerNames</a></td><td>
Gets list of controller names that the component can handle.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_IsHandednessSupported">IsHandednessSupported</a></td><td>

Gets whether <a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">Handedness</a> can be used. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices, it may be used to control which hand is holding the controller. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Dual</a> devices it is used to determine which hands have the <a href="P_UltimateXR_Devices_IUxrControllerInput_Primary">Primary</a> (dominant) and <a href="P_UltimateXR_Devices_IUxrControllerInput_Secondary">Secondary</a> (non-dominant) roles.
 Devices such as gamepads don't support handedness and will target the single device no matter which <a href="T_UltimateXR_Core_UxrHandSide">UxrHandSide</a> is used. In this case it is good practice to use <a href="P_UltimateXR_Devices_IUxrControllerInput_Primary">Primary</a> to target the device in order to make the code cleaner.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_IsHandednessSupported">UxrControllerInput.IsHandednessSupported</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_SDKDependency">SDKDependency</a></td><td>
SteamVR child classes will require SteamVR SDK to access functionality.
 (Overrides <a href="P_UltimateXR_Devices_UxrControllerInput_SDKDependency">UxrControllerInput.SDKDependency</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput_UsesHandSkeletons">UsesHandSkeletons</a></td><td>
Gets if the class will use hand skeletons.</td></tr></table>&nbsp;
<a href="#uxrsteamvrcontrollerinput-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput">UxrSteamVRControllerInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations_SteamVR">UltimateXR.Devices.Integrations.SteamVR Namespace</a><br />