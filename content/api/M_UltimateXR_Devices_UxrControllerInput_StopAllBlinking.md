# UxrControllerInput.StopAllBlinking Method 
 

Stops all controller elements to blink

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void StopAllBlinking(
	UxrHandSide handSide
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd></dl>

#### Implements
<a href="M_UltimateXR_Devices_IUxrControllerInput_StopAllBlinking">IUxrControllerInput.StopAllBlinking(UxrHandSide)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_GetControllerElementsGameObjects">IUxrControllerInput.GetControllerElementsGameObjects(UxrHandSide, UxrControllerElements)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_StartControllerElementsBlinking">IUxrControllerInput.StartControllerElementsBlinking(UxrHandSide, UxrControllerElements, Color, Single, Single)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_StopControllerElementsBlinking">IUxrControllerInput.StopControllerElementsBlinking(UxrHandSide, UxrControllerElements)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_IsAnyControllerElementBlinking">IUxrControllerInput.IsAnyControllerElementBlinking(UxrHandSide, UxrControllerElements)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_AreAllControllerElementsBlinking">IUxrControllerInput.AreAllControllerElementsBlinking(UxrHandSide, UxrControllerElements)</a><br />