# UxrControllerInput.GetButtonTouchFlags Method 
 

Gets an uint value representing touch states for each the controller <a href="T_UltimateXR_Devices_UxrInputButtons">UxrInputButtons</a> flags in the current frame.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public uint GetButtonTouchFlags(
	UxrHandSide handSide,
	bool getIgnoredInput = false
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to get input from. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>getIgnoredInput (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to return ignored input by [!:SetIgnoreControllerInput]</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a><br />Button flags representing touch states for each controller button in the current frame

#### Implements
<a href="M_UltimateXR_Devices_IUxrControllerInput_GetButtonTouchFlags">IUxrControllerInput.GetButtonTouchFlags(UxrHandSide, Boolean)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br /><a href="T_UltimateXR_Devices_UxrInputButtons">UltimateXR.Devices.UxrInputButtons</a><br />