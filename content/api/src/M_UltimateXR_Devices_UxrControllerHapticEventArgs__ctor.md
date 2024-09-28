# UxrControllerHapticEventArgs Constructor (UxrHandSide, Single, Single, Single, UxrHapticMode)
 

Constructor that registers a <a href="T_UltimateXR_Haptics_UxrHapticEventType">Raw</a> event.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrControllerHapticEventArgs(
	UxrHandSide handSide,
	float frequency,
	float amplitude,
	float durationSeconds,
	UxrHapticMode hapticMode
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Haptic feedback target hand</dd><dt>frequency</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Vibration frequency</dd><dt>amplitude</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Vibration amplitude</dd><dt>durationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Feedback duration in seconds</dd><dt>hapticMode</dt><dd>Type: <a href="T_UltimateXR_Haptics_UxrHapticMode">UltimateXR.Haptics.UxrHapticMode</a><br />Haptic mode: mix or replace</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerHapticEventArgs">UxrControllerHapticEventArgs Class</a><br /><a href="Overload_UltimateXR_Devices_UxrControllerHapticEventArgs__ctor">UxrControllerHapticEventArgs Overload</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />