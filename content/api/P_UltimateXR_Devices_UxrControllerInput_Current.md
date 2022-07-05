# UxrControllerInput.Current Property 
 

Gets the current input component, which is the enabled input component belonging to the local avatar. If the avatar has no input component enabled, it will return a dummy input so that there is no need to check for nulls. This dummy component doesn't generate input events. The only way to get a null would be if there is no local avatar in the scene.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrControllerInput Current { get; }
```


#### Property Value
Type: <a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />