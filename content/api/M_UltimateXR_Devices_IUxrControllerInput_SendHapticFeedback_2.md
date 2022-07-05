# IUxrControllerInput.SendHapticFeedback Method (UxrHandSide, UxrHapticClipType, Single, Single, UxrHapticMode)
 

Sends a predefined haptic clip to a controller.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
void SendHapticFeedback(
	UxrHandSide handSide,
	UxrHapticClipType clipType,
	float amplitude,
	float durationSeconds = -1f,
	UxrHapticMode hapticMode = UxrHapticMode.Mix
)
```

<a href="UltimateXR/Scripts/Devices/IUxrControllerInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to send the haptic feedback to. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>clipType</dt><dd>Type: <a href="T_UltimateXR_Haptics_UxrHapticClipType">UltimateXR.Haptics.UxrHapticClipType</a><br />The clip type from a set of predefined clips</dd><dt>amplitude</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The intensity of the haptic feedback</dd><dt>durationSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The duration in seconds. A zero/negative value will use a default duration.</dd><dt>hapticMode (Optional)</dt><dd>Type: <a href="T_UltimateXR_Haptics_UxrHapticMode">UltimateXR.Haptics.UxrHapticMode</a><br />Whether the clip will stop all currently playing haptics or mix with them</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_IUxrControllerInput">IUxrControllerInput Interface</a><br /><a href="Overload_UltimateXR_Devices_IUxrControllerInput_SendHapticFeedback">SendHapticFeedback Overload</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />