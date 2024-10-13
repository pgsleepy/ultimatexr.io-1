# UxrValveIndexInput.HasControllerElements Method 
 

Checks if the given controller has specific elements.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Integrations_Valve">UltimateXR.Devices.Integrations.Valve</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public override bool HasControllerElements(
	UxrHandSide handSide,
	UxrControllerElements controllerElements
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to check. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>controllerElements</dt><dd>Type: <a href="T_UltimateXR_Devices_UxrControllerElements">UltimateXR.Devices.UxrControllerElements</a><br />Flags indicating the element(s) to look for</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />True if the controller has all the elements specified. If one is missing, it will return false

#### Implements
<a href="M_UltimateXR_Devices_IUxrControllerInput_HasControllerElements">IUxrControllerInput.HasControllerElements(UxrHandSide, UxrControllerElements)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_Valve_UxrValveIndexInput">UxrValveIndexInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations_Valve">UltimateXR.Devices.Integrations.Valve Namespace</a><br />