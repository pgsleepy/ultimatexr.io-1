# UxrControllerSetupType Enumeration
 

Enumerates the different controller setups supported by an <a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput</a> component.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public enum UxrControllerSetupType
```

<a href="UltimateXR/Scripts/Devices/UxrControllerSetupType.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Devices.UxrControllerSetupType.Single">**Single**</td><td>0</td><td>
Single controller setup, such as a gamepad, remote or a gun. If <a href="P_UltimateXR_Devices_IUxrControllerInput_IsHandednessSupported">IsHandednessSupported</a> is available, <a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">Handedness</a> allows to determine which hand is being used. In some devices, such as a gamepad, <a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">Handedness</a> is not applicable and thus not supported.
 Some other devices, such as a remote, may use <a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">Handedness</a> to help with tracking and also display the correct hand if the virtual hands are rendered on the controller.</td></tr><tr><td /><td target="F:UltimateXR.Devices.UxrControllerSetupType.Dual">**Dual**</td><td>1</td><td>Dual controller setup (left+right controllers). <a href="P_UltimateXR_Devices_IUxrControllerInput_Handedness">Handedness</a> can be used to assign a primary device and a secondary device and get input from the dominant and non-dominant hands respectively.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />