# UxrHandTracking Properties
 

The <a href="T_UltimateXR_Devices_UxrHandTracking">UxrHandTracking</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrHandTracking_HasCalibrationData">HasCalibrationData</a></td><td>
Gets whether the component contains calibration data collected by using the inspector.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrHandTracking_IsAvailable">IsAvailable</a></td><td>
Gets whether tracking data is currently available for any hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrHandTracking_IsLeftHandAvailable">IsLeftHandAvailable</a></td><td>
Gets whether there is tracking data currently available for the left hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrHandTracking_IsRightHandAvailable">IsRightHandAvailable</a></td><td>
Gets whether there is tracking data currently available for the right hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrHandTracking_TrackingUpdateOrder">TrackingUpdateOrder</a></td><td>
There are cases where more than one tracking device might be active. We use TrackingUpdateOrder for cases where there is one that should be applied after the other(s). For example an Oculus Rift together with a Leap Motion setup has one tracking component for each. But Leap Motion should override the tracking values of the rift controllers if the Leap Motion component is active. In this case Oculus, like most tracking devices, has a value of <a href="F_UltimateXR_Devices_UxrTrackingDevice_OrderStandard">OrderStandard</a> while Leap Motion has a value of <a href="F_UltimateXR_Devices_UxrTrackingDevice_OrderPostprocess">OrderPostprocess</a> so that the tracking devices update the avatar in the correct order.
 (Overrides <a href="P_UltimateXR_Devices_UxrTrackingDevice_TrackingUpdateOrder">UxrTrackingDevice.TrackingUpdateOrder</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrHandTracking_UseCalibration">UseCalibration</a></td><td>
Gets or sets whether to use calibration data to minimize the mismatches between the particular hand rig used and the tracking values.</td></tr></table>&nbsp;
<a href="#uxrhandtracking-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrHandTracking">UxrHandTracking Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />