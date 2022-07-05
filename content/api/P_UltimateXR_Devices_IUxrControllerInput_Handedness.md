# IUxrControllerInput.Handedness Property 
 


Gets or sets the handedness, which is the <a href="P_UltimateXR_Devices_IUxrControllerInput_Primary">Primary</a> -dominant- hand in <a href="T_UltimateXR_Devices_UxrControllerSetupType">Dual</a> controller setups. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> controller setups where the controller is grabbed with one hand, it determines which hand is being used.
 If <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> false, such as in gamepads, the handedness value should be ignored.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
UxrHandSide Handedness { get; set; }
```

<a href="UltimateXR/Scripts/Devices/IUxrControllerInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Property Value
Type: <a href="T_UltimateXR_Core_UxrHandSide">UxrHandSide</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_IUxrControllerInput">IUxrControllerInput Interface</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br /><a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IUxrControllerInput.IsHandednessSupported</a><br /><a href="P_UltimateXR_Devices_IUxrControllerInput_Primary">IUxrControllerInput.Primary</a><br /><a href="P_UltimateXR_Devices_IUxrControllerInput_Secondary">IUxrControllerInput.Secondary</a><br />