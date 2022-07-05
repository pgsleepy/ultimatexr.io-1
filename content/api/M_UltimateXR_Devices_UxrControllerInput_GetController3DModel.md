# UxrControllerInput.GetController3DModel Method 
 

Gets the instanced controller 3D model for a given hand.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrController3DModel GetController3DModel(
	UxrHandSide handSide
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller to get the 3D model of. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Devices_Visualization_UxrController3DModel">UxrController3DModel</a><br />\[Missing <returns> documentation for "M:UltimateXR.Devices.UxrControllerInput.GetController3DModel(UltimateXR.Core.UxrHandSide)"\]

#### Implements
<a href="M_UltimateXR_Devices_IUxrControllerInput_GetController3DModel">IUxrControllerInput.GetController3DModel(UxrHandSide)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />