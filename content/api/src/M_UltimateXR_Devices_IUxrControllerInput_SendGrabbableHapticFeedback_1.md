# IUxrControllerInput.SendGrabbableHapticFeedback Method (UxrGrabbableObject, UxrHapticClipType, Single, Single, UxrHapticMode)
 

Sends haptic feedback to XR controllers that are being used to manipulate a grabbable object. Each hand associated to an XR controller that is grabbing the object will receive haptic feedback.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
void SendGrabbableHapticFeedback(
	UxrGrabbableObject grabbableObject,
	UxrHapticClipType clipType,
	float amplitude,
	float durationSeconds = -1f,
	UxrHapticMode hapticMode = UxrHapticMode.Mix
)
```

<a href="UltimateXR/Scripts/Devices/IUxrControllerInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />Grabbable object</dd><dt>clipType</dt><dd>Type: <a href="T_UltimateXR_Haptics_UxrHapticClipType">UltimateXR.Haptics.UxrHapticClipType</a><br />Clip type to send</dd><dt>amplitude</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Intensity of the haptic feedback</dd><dt>durationSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Duration in seconds</dd><dt>hapticMode (Optional)</dt><dd>Type: <a href="T_UltimateXR_Haptics_UxrHapticMode">UltimateXR.Haptics.UxrHapticMode</a><br />Override current haptic feedback or mix it?</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_IUxrControllerInput">IUxrControllerInput Interface</a><br /><a href="Overload_UltimateXR_Devices_IUxrControllerInput_SendGrabbableHapticFeedback">SendGrabbableHapticFeedback Overload</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />