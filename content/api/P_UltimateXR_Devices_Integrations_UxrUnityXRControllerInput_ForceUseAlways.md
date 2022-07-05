# UxrUnityXRControllerInput.ForceUseAlways Property 
 

We use this when we are implementing new controllers that we don't know the name of, in order to show the controller names in the UxrDebugControllerPanel. Returning true will register the controllers in InputDevices_DeviceConnected(InputDevice) no matter which input device gets connected. Then using the UxrDebugControllerPanel we can see which devices got connected. This is mostly useful for untethered devices that cannot be tested directly in Unity.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public virtual bool ForceUseAlways { get; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput">UxrUnityXRControllerInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations Namespace</a><br />