# UxrUnityXRControllerInput.CreateHapticBufferFromAudioClip Method 
 

Using an audio file, creates a haptic samples buffer that can be sent for feedback. This code is based on the Oculus SDK (OVRHaptics.cs).

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected byte[] CreateHapticBufferFromAudioClip(
	InputDevice inputDevice,
	AudioClip audioClip
)
```


#### Parameters
&nbsp;<dl><dt>inputDevice</dt><dd>Type: InputDevice<br />Unity input device that will be the feedback target</dd><dt>audioClip</dt><dd>Type: AudioClip<br />Audio clip whose audio sample will be used to create haptics</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a>[]<br />Buffer that can be sent to the device as haptic feedback

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Integrations_UxrUnityXRControllerInput">UxrUnityXRControllerInput Class</a><br /><a href="N_UltimateXR_Devices_Integrations">UltimateXR.Devices.Integrations Namespace</a><br />