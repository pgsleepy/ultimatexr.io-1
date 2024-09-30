# UxrControllerInput.Primary Property 
 


Gets which hand is holding the controller in <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> setups where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is available. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Dual</a> setups it identifies the dominant hand. In both cases, <a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">Handedness</a> determines which hand it is.
 In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where handedness is not applicable ( <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false) it is good practice to use <a href="P_UltimateXR_Devices_IUxrControllerInput_Primary">Primary</a> to address the device, even if both left and right can too.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrHandSide Primary { get; }
```


#### Property Value
Type: <a href="T_UltimateXR_Core_UxrHandSide">UxrHandSide</a>

#### Implements
<a href="P_UltimateXR_Devices_IUxrControllerInput_Primary">IUxrControllerInput.Primary</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br /><a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">IUxrControllerInput.Handedness</a><br />