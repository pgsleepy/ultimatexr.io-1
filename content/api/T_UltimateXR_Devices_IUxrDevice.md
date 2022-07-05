# IUxrDevice Interface
 

Interface for VR devices, mainly designed to abstract tracking/input devices.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public interface IUxrDevice
```

<a href="UltimateXR/Scripts/Devices/IUxrDevice.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The IUxrDevice type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_IUxrDevice_SDKDependency">SDKDependency</a></td><td>
Gets the SDK the implemented device needs in order to be available. It should be null or empty if there is no SDK dependency. Otherwise is should use any of the SDK names in <a href="T_UltimateXR_Core_UxrManager">UxrManager</a>. For example if requires the Oculus SDK, it should return <a href="F_UltimateXR_Core_UxrManager_SdkOculus">SdkOculus</a>.</td></tr></table>&nbsp;
<a href="#iuxrdevice-interface">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Devices_IUxrDevice_DeviceConnected">DeviceConnected</a></td><td>
Event called whenever the device is connected or disconnected</td></tr></table>&nbsp;
<a href="#iuxrdevice-interface">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />