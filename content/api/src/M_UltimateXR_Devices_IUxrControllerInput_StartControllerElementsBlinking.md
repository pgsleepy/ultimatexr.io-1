# IUxrControllerInput.StartControllerElementsBlinking Method 
 

Starts blinking one or more elements in a controller. This can be useful during tutorials to highlight which button(s) to press.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
void StartControllerElementsBlinking(
	UxrHandSide handSide,
	UxrControllerElements controllerElements,
	Color emissionColor,
	float blinksPerSec = 3f,
	float durationSeconds = -1f
)
```

<a href="UltimateXR/Scripts/Devices/IUxrControllerInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which controller. In <a href="T_UltimateXR_Devices_UxrControllerSetupType">Single</a> devices where <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is false, such as in gamepads, both hands will address the single device.</dd><dt>controllerElements</dt><dd>Type: <a href="T_UltimateXR_Devices_UxrControllerElements">UltimateXR.Devices.UxrControllerElements</a><br />Element (or elements using flags) that should blink</dd><dt>emissionColor</dt><dd>Type: Color<br />Emission color use to blink. Usually it can be set to white with a mid alpha value to avoid too much brightness</dd><dt>blinksPerSec (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Blinks per second</dd><dt>durationSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Duration in seconds that it should blink</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_IUxrControllerInput">IUxrControllerInput Interface</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_GetControllerElementsGameObjects">IUxrControllerInput.GetControllerElementsGameObjects(UxrHandSide, UxrControllerElements)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_StopControllerElementsBlinking">IUxrControllerInput.StopControllerElementsBlinking(UxrHandSide, UxrControllerElements)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_StopAllBlinking">IUxrControllerInput.StopAllBlinking(UxrHandSide)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_IsAnyControllerElementBlinking">IUxrControllerInput.IsAnyControllerElementBlinking(UxrHandSide, UxrControllerElements)</a><br /><a href="M_UltimateXR_Devices_IUxrControllerInput_AreAllControllerElementsBlinking">IUxrControllerInput.AreAllControllerElementsBlinking(UxrHandSide, UxrControllerElements)</a><br />