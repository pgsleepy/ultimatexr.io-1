# UxrUnityXRControllerInput.GetInputDevice Method 
 

Gets the input device interface in Unity's input system for a given hand. Usually if it is a left+right setup it will give a list with a single entry but the system is very generic so it is prepared to handle different setups. Normally we get the list and just use the first entry if available.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected InputDevice GetInputDevice(
	UxrHandSide handSide
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Hand to get the input devices for</dd></dl>

#### Return Value
Type: InputDevice<br />InputDevice representing the input device

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput">UxrUnityXRControllerInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations Namespace</a><br />