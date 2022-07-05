# UxrController3DModel Properties
 

The <a href="T_UltimateXR_Devices_Visualization_UxrController3DModel">UxrController3DModel</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ControllerHand">ControllerHand</a></td><td>
Gets or sets the hand that is interacting with the controller, when the controller is used with only one hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ControllerHandLeft">ControllerHandLeft</a></td><td>
Gets or sets the left hand that is interacting with the controller, when the controller can be held using both hands.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ControllerHandRight">ControllerHandRight</a></td><td>
Gets or sets the right hand that is interacting with the controller, when the controller can be held using both hands.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_Forward">Forward</a></td><td>
Gets the forward transform as it is currently in the scene. It can be different than the actual forward tracking when we use grab mechanics because the hand transform can be modified by the grab manager and the controller usually hangs from the hand hierarchy. If you need to know the forward controller transform using the information of tracking sensors without any intervention by external elements like the grabbing mechanics use <a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ForwardTrackingRotation">ForwardTrackingRotation</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ForwardTrackingRotation">ForwardTrackingRotation</a></td><td>
Gets the rotation that represents the controller's forward orientation. We use this mainly to be able to align certain mechanics no matter the controller that is currently active. A gun in a game needs to be aligned to the controller, teleport mechanics, etc.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_HandSide">HandSide</a></td><td>
Gets the hand required to hold the controller, if <a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_NeedsBothHands">NeedsBothHands</a> is false.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_IsControllerVisible">IsControllerVisible</a></td><td>
Gets or sets whether the controller is visible.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_IsHandVisible">IsHandVisible</a></td><td>
Gets or sets whether the hand, if present, is visible. In setups where both hands are used, it targets visibility of both hands.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_NeedsBothHands">NeedsBothHands</a></td><td>
Gets whether the controller requires two hands to hold it.</td></tr></table>&nbsp;
<a href="#uxrcontroller3dmodel-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Visualization_UxrController3DModel">UxrController3DModel Class</a><br /><a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization Namespace</a><br />