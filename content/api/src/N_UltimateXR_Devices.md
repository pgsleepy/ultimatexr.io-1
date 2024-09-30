# UltimateXR.Devices Namespace

## Classes
&nbsp;<table><tr><th></th><th>Class</th><th>Description</th></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Devices_UxrControllerHapticEventArgs">UxrControllerHapticEventArgs</a></td><td>
Wraps information about a haptic request event.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput</a></td><td>
Controller base class for all VR input devices, supporting single controllers and dual controller setups.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Devices_UxrControllerTracking">UxrControllerTracking</a></td><td>
Base class for standard tracking of left+right VR controllers.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Devices_UxrDeviceConnectEventArgs">UxrDeviceConnectEventArgs</a></td><td>
Device connection/disconnection event arguments.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Devices_UxrHandTracking">UxrHandTracking</a></td><td>
Base class for hand tracking. Includes base functionality to update the avatar and calibrate the skeleton based on a well-known pose.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Devices_UxrInput1DEventArgs">UxrInput1DEventArgs</a></td><td>
Stores information of a <a href="T_UltimateXR_Devices_UxrInput1D">UxrInput1D</a> input event.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Devices_UxrInput2DEventArgs">UxrInput2DEventArgs</a></td><td>
Stores information of a <a href="T_UltimateXR_Devices_UxrInput2D">UxrInput2D</a> input event.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Devices_UxrInputButtonEventArgs">UxrInputButtonEventArgs</a></td><td>
Stores information of a <a href="T_UltimateXR_Devices_UxrInputButtons">UxrInputButtons</a> input event.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Devices_UxrTrackingDevice">UxrTrackingDevice</a></td><td>
Base class for tracking devices.</td></tr></table>

## Interfaces
&nbsp;<table><tr><th></th><th>Interface</th><th>Description</th></tr><tr><td>![Public interface](media/pubinterface.gif "Public interface")</td><td><a href="T_UltimateXR_Devices_IUxrControllerInput">IUxrControllerInput</a></td><td>
Controller interface for all XR input devices, supporting single controller and dual controller setups.</td></tr><tr><td>![Public interface](media/pubinterface.gif "Public interface")</td><td><a href="T_UltimateXR_Devices_IUxrControllerTracking">IUxrControllerTracking</a></td><td>
Controller tracking interface for all VR input devices, supporting single controllers and dual controller setups.</td></tr><tr><td>![Public interface](media/pubinterface.gif "Public interface")</td><td><a href="T_UltimateXR_Devices_IUxrDevice">IUxrDevice</a></td><td>
Interface for VR devices, mainly designed to abstract tracking/input devices.</td></tr><tr><td>![Public interface](media/pubinterface.gif "Public interface")</td><td><a href="T_UltimateXR_Devices_IUxrTrackingDevice">IUxrTrackingDevice</a></td><td>
Interface for tracking devices.</td></tr></table>

## Enumerations
&nbsp;<table><tr><th></th><th>Enumeration</th><th>Description</th></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Devices_UxrButtonEventType">UxrButtonEventType</a></td><td>
Enumerates the event types supported by a controller button action</td></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Devices_UxrControllerElements">UxrControllerElements</a></td><td>
Enumerates all possible elements that can be interacted with in a VR controller. Each controller can describe which elements are supported through <a href="M_UltimateXR_Devices_UxrControllerInput_HasControllerElements">HasControllerElements(UxrHandSide, UxrControllerElements)</a>.</td></tr><tr><td>![Protected enumeration](media/protenumeration.gif "Protected enumeration")</td><td><a href="T_UltimateXR_Devices_UxrControllerInput_ButtonFlags">UxrControllerInput.ButtonFlags</a></td><td>
Enumerates the different button flags representing button states. Flags are described by <a href="T_UltimateXR_Devices_UxrInputButtons">UxrInputButtons</a>.</td></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Devices_UxrControllerInputCapabilities">UxrControllerInputCapabilities</a></td><td>
Enumerates the possible capabilities of a VR controller.</td></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Devices_UxrControllerSetupType">UxrControllerSetupType</a></td><td>
Enumerates the different controller setups supported by an <a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput</a> component.</td></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Devices_UxrInput1D">UxrInput1D</a></td><td>
Enumerates the possible elements in a VR controller that have a single axis input.</td></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Devices_UxrInput2D">UxrInput2D</a></td><td>
Enumerates the possible elements in a VR controller that have a 2-axis input.</td></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Devices_UxrInputButtons">UxrInputButtons</a></td><td>
Enumerates all buttons in a VR controller. They are flags so that they can be combined when calling different methods.</td></tr></table>&nbsp;
