# UxrControllerInput.GetControllerCapabilities Method 
 

Gets the capabilities of the XR controller.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract UxrControllerInputCapabilities GetControllerCapabilities(
	UxrHandSide handSide
)
```

<a href="UltimateXR/Scripts/Devices/UxrControllerInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to check. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Devices_UxrControllerInputCapabilities">UxrControllerInputCapabilities</a><br />Device capabilities flags

#### Implements
<a href="M_UltimateXR_Devices_IUxrControllerInput_GetControllerCapabilities">IUxrControllerInput.GetControllerCapabilities(UxrHandSide)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />