# UxrControllerInput.SendHapticFeedback Method (UxrHandSide, Single, Single, Single, UxrHapticMode)
 

Sends haptic feedback to a controller if the controller supports it.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public virtual void SendHapticFeedback(
	UxrHandSide handSide,
	float frequency,
	float amplitude,
	float durationSeconds,
	UxrHapticMode hapticMode = UxrHapticMode.Mix
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to send the haptic feedback to. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>frequency</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Frequency of the feedback in hz</dd><dt>amplitude</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Amplitude of the feedback between range [0.0, 1.0]</dd><dt>durationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Feedback duration in seconds</dd><dt>hapticMode (Optional)</dt><dd>Type: <a href="T_UltimateXR_Haptics_UxrHapticMode">UltimateXR.Haptics.UxrHapticMode</a><br />The mode (stop and override all current haptics or mix it with the current existing haptics)</dd></dl>

#### Implements
<a href="M_UltimateXR_Devices_IUxrControllerInput_SendHapticFeedback">IUxrControllerInput.SendHapticFeedback(UxrHandSide, Single, Single, Single, UxrHapticMode)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="Overload_UltimateXR_Devices_UxrControllerInput_SendHapticFeedback">SendHapticFeedback Overload</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />