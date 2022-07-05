# UxrDummyControllerInput.GetInput1D Method 
 

Gets the state of an analog controller input element.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public override float GetInput1D(
	UxrHandSide handSide,
	UxrInput1D input1D,
	bool getIgnoredInput = false
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to get input from. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>input1D</dt><dd>Type: <a href="T_UltimateXR_Devices_UxrInput1D">UltimateXR.Devices.UxrInput1D</a><br />Element to get the input from</dd><dt>getIgnoredInput (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to return ignored input by <a href="M_UltimateXR_Devices_IUxrControllerInput_SetIgnoreControllerInput">SetIgnoreControllerInput(UxrHandSide, Boolean)</a></dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a><br />Input value [0.0, 1.0]

#### Implements
<a href="M_UltimateXR_Devices_IUxrControllerInput_GetInput1D">IUxrControllerInput.GetInput1D(UxrHandSide, UxrInput1D, Boolean)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_UxrDummyControllerInput">UxrDummyControllerInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations Namespace</a><br />