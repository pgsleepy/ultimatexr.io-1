# IUxrControllerInput.GetButtonsPress Method 
 

Checks if the given button or buttons are being pressed in the current frame.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
bool GetButtonsPress(
	UxrHandSide handSide,
	UxrInputButtons buttons,
	bool getIgnoredInput = false
)
```

<a href="UltimateXR/Scripts/Devices/IUxrControllerInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to get input from. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>buttons</dt><dd>Type: <a href="T_UltimateXR_Devices_UxrInputButtons">UltimateXR.Devices.UxrInputButtons</a><br />Button (or buttons by flag composition) to check</dd><dt>getIgnoredInput (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to return ignored input by <a href="M_UltimateXR_Devices_IUxrControllerInput_SetIgnoreControllerInput">SetIgnoreControllerInput(UxrHandSide, Boolean)</a></dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />True if the given button is being pressed in the current frame. If more than one button was specified by using flags it will return true only if all are being pressed.

## See Also


#### Reference
<a href="T_UltimateXR_Devices_IUxrControllerInput">IUxrControllerInput Interface</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />