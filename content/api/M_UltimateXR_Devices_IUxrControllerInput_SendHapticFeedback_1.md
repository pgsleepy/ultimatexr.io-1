# IUxrControllerInput.SendHapticFeedback Method (UxrHandSide, UxrHapticClip)
 

Sends haptic feedback to a controller if the controller supports it.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
void SendHapticFeedback(
	UxrHandSide handSide,
	UxrHapticClip hapticClip
)
```

<a href="UltimateXR/Scripts/Devices/IUxrControllerInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to send the haptic feedback to. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>hapticClip</dt><dd>Type: <a href="T_UltimateXR_Haptics_UxrHapticClip">UltimateXR.Haptics.UxrHapticClip</a><br />Clip to send</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_IUxrControllerInput">IUxrControllerInput Interface</a><br /><a href="Overload_UltimateXR_Devices_IUxrControllerInput_SendHapticFeedback">SendHapticFeedback Overload</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />