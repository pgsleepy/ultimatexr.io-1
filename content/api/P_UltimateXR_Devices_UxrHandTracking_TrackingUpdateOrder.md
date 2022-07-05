# UxrHandTracking.TrackingUpdateOrder Property 
 

There are cases where more than one tracking device might be active. We use TrackingUpdateOrder for cases where there is one that should be applied after the other(s). For example an Oculus Rift together with a Leap Motion setup has one tracking component for each. But Leap Motion should override the tracking values of the rift controllers if the Leap Motion component is active. In this case Oculus, like most tracking devices, has a value of <a href="F_UltimateXR_Devices_UxrTrackingDevice_OrderStandard">OrderStandard</a> while Leap Motion has a value of <a href="F_UltimateXR_Devices_UxrTrackingDevice_OrderPostprocess">OrderPostprocess</a> so that the tracking devices update the avatar in the correct order.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public override int TrackingUpdateOrder { get; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrHandTracking">UxrHandTracking Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />