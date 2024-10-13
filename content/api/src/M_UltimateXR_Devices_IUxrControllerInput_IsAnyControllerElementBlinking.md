# IUxrControllerInput.IsAnyControllerElementBlinking Method 
 

Checks if any specific controller element is currently blinking

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
bool IsAnyControllerElementBlinking(
	UxrHandSide handSide,
	UxrControllerElements controllerElements
)
```

<a href="UltimateXR/Scripts/Devices/IUxrControllerInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>controllerElements</dt><dd>Type: <a href="T_UltimateXR_Devices_UxrControllerElements">UltimateXR.Devices.UxrControllerElements</a><br />Element (or elements using flags) that should be checked</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />True if any of the given elements is blinking

## See Also


#### Reference
<a href="T_UltimateXR_Devices_IUxrControllerInput">IUxrControllerInput Interface</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_GetControllerElementsGameObjects">IUxrControllerInput.GetControllerElementsGameObjects(UxrHandSide, UxrControllerElements)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_StartControllerElementsBlinking">IUxrControllerInput.StartControllerElementsBlinking(UxrHandSide, UxrControllerElements, Color, Single, Single)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_StopControllerElementsBlinking">IUxrControllerInput.StopControllerElementsBlinking(UxrHandSide, UxrControllerElements)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_StopAllBlinking">IUxrControllerInput.StopAllBlinking(UxrHandSide)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_AreAllControllerElementsBlinking">IUxrControllerInput.AreAllControllerElementsBlinking(UxrHandSide, UxrControllerElements)</a><br />