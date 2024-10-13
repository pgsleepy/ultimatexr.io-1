# UxrTrackingDevice.SDKDependency Property 
 

Gets the SDK the implemented device needs in order to be available. It should be null or empty if there is no SDK dependency. Otherwise is should use any of the SDK names in <a href="T_UltimateXR_Core_UxrManager">UxrManager</a>. For example if requires the Oculus SDK, it should return <a href="F_UltimateXR_Core_UxrManager_SdkOculus">SdkOculus</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract string SDKDependency { get; }
```

<a href="UltimateXR/Scripts/Devices/UxrTrackingDevice.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>

#### Implements
<a href="P_UltimateXR_Devices_IUxrDevice_SDKDependency">IUxrDevice.SDKDependency</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrTrackingDevice">UxrTrackingDevice Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />