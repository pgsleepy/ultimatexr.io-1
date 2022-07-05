# UxrControllerInput.RaiseConnectOnStart Property 
 

Used by child classes to notify that the Connect event should be forcefully raised during Start(). This is required to propagate Connect events properly when a new scene is loaded and the devices are already connected and thus not sending any events. We still need to get Connect notifications, so child classes need to detect during Awake() if the device(s) are already connected and if so, notify that the Connect event needs to be raised.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected bool RaiseConnectOnStart { get; set; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />