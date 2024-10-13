# UxrUnityXRControllerInput.SendHapticFeedback Method (UxrHandSide, UxrHapticClip)
 

Sends haptic feedback to a controller if the controller supports it.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public override void SendHapticFeedback(
	UxrHandSide handSide,
	UxrHapticClip hapticClip
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to send the haptic feedback to. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>hapticClip</dt><dd>Type: <a href="T_UltimateXR_Haptics_UxrHapticClip">UltimateXR.Haptics.UxrHapticClip</a><br />Clip to send</dd></dl>

#### Implements
<a href="M_UltimateXR_Devices_IUxrControllerInput_SendHapticFeedback_1">IUxrControllerInput.SendHapticFeedback(UxrHandSide, UxrHapticClip)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput">UxrUnityXRControllerInput Class</a><br /><a href="Overload_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput_SendHapticFeedback">SendHapticFeedback Overload</a><br /><a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations Namespace</a><br />