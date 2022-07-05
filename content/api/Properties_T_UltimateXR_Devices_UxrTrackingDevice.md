# UxrTrackingDevice Properties
 

The <a href="T_UltimateXR_Devices_UxrTrackingDevice">UxrTrackingDevice</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_Devices_UxrTrackingDevice_HeadsetDeviceName">HeadsetDeviceName</a></td><td>
Gets the headset device name.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrTrackingDevice_SDKDependency">SDKDependency</a></td><td>
Gets the SDK the implemented device needs in order to be available. It should be null or empty if there is no SDK dependency. Otherwise is should use any of the SDK names in <a href="T_UltimateXR_Core_UxrManager">UxrManager</a>. For example if requires the Oculus SDK, it should return <a href="F_UltimateXR_Core_UxrManager_SdkOculus">SdkOculus</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrTrackingDevice_TrackingUpdateOrder">TrackingUpdateOrder</a></td><td>
There are cases where more than one tracking device might be active. We use TrackingUpdateOrder for cases where there is one that should be applied after the other(s). For example an Oculus Rift together with a Leap Motion setup has one tracking component for each. But Leap Motion should override the tracking values of the rift controllers if the Leap Motion component is active. In this case Oculus, like most tracking devices, has a value of <a href="F_UltimateXR_Devices_UxrTrackingDevice_OrderStandard">OrderStandard</a> while Leap Motion has a value of <a href="F_UltimateXR_Devices_UxrTrackingDevice_OrderPostprocess">OrderPostprocess</a> so that the tracking devices update the avatar in the correct order.</td></tr></table>&nbsp;
<a href="#uxrtrackingdevice-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrTrackingDevice">UxrTrackingDevice Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />