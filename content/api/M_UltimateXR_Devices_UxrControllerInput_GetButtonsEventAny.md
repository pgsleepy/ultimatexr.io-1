# UxrControllerInput.GetButtonsEventAny Method 
 

Checks if a given input event took place for a button or any button in a set in the current frame.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool GetButtonsEventAny(
	UxrHandSide handSide,
	UxrInputButtons buttons,
	UxrButtonEventType buttonEventType,
	bool getIgnoredInput = false
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to get input from. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>buttons</dt><dd>Type: <a href="T_UltimateXR_Devices_UxrInputButtons">UltimateXR.Devices.UxrInputButtons</a><br />Button (or buttons by flag composition) to check. If it's a combination, any button that meets the event criteria will be enough</dd><dt>buttonEventType</dt><dd>Type: <a href="T_UltimateXR_Devices_UxrButtonEventType">UltimateXR.Devices.UxrButtonEventType</a><br />Input event type to check for</dd><dt>getIgnoredInput (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to return ignored input by [!:SetIgnoreControllerInput]</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />True if the given event happened during the current frame for the specified button. If more than one button was specified by using flags it will return true as long as any button had the event.

#### Implements
<a href="M_UltimateXR_Devices_IUxrControllerInput_GetButtonsEventAny">IUxrControllerInput.GetButtonsEventAny(UxrHandSide, UxrInputButtons, UxrButtonEventType, Boolean)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />