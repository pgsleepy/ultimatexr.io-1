# UxrSteamVRControllerInput.StopHapticFeedback Method 
 

Stops all current haptics in a given controller.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Integrations_SteamVR">UltimateXR.Devices.Integrations.SteamVR</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public override void StopHapticFeedback(
	UxrHandSide handSide
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to stop sending haptic feedback to. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd></dl>

#### Implements
<a href="M_UltimateXR_Devices_IUxrControllerInput_StopHapticFeedback">IUxrControllerInput.StopHapticFeedback(UxrHandSide)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_SteamVR_UxrSteamVRControllerInput">UxrSteamVRControllerInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations_SteamVR">UltimateXR.Devices.Integrations.SteamVR Namespace</a><br />