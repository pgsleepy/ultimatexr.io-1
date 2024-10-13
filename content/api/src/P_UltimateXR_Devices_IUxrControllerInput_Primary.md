# IUxrControllerInput.Primary Property 
 


Gets which hand is holding the controller in <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> setups where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is available. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Dual</a> setups it identifies the dominant hand. In both cases, <a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">Handedness</a> determines which hand it is.
 In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where handedness is not applicable ( <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false) it is good practice to use Primary to address the device, even if both left and right can too.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
UxrHandSide Primary { get; }
```

<a href="UltimateXR/Scripts/Devices/IUxrControllerInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Property Value
Type: <a href="T_UltimateXR_Core_UxrHandSide">UxrHandSide</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_IUxrControllerInput">IUxrControllerInput Interface</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br /><a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">IUxrControllerInput.Handedness</a><br />