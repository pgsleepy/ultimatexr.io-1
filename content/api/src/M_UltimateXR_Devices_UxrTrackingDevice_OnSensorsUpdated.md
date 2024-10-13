# UxrTrackingDevice.OnSensorsUpdated Method 
 

Event trigger for the <a href="E_UltimateXR_Devices_UxrTrackingDevice_SensorsUpdated">SensorsUpdated</a> event. Can be used to override in child classes in order to use the event without subscribing to the parent.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected virtual void OnSensorsUpdated()
```


## Remarks
Calling the base implementation is required in child classes in order for the event to propagate correctly.

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrTrackingDevice">UxrTrackingDevice Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />