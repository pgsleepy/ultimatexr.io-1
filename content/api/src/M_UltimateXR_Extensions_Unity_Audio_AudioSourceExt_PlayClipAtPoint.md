# AudioSourceExt.PlayClipAtPoint Method 
 

Plays an AudioClip at a given position in world space.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static AudioSource PlayClipAtPoint(
	AudioClip clip,
	Vector3 point,
	float volume = 1f,
	float delay = 0f,
	float pitch = 1f,
	float spatialBlend = 0.9f
)
```


#### Parameters
&nbsp;<dl><dt>clip</dt><dd>Type: AudioClip<br />Reference to the sound clip file that will be played.</dd><dt>point</dt><dd>Type: Vector3<br />Position in world space from which sound originates.</dd><dt>volume (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />How loud the sound is at a distance of one world unit (one meter) [0.0, 1.0].</dd><dt>delay (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Delay time specified in seconds.</dd><dt>pitch (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Amount of change in pitch due to slowdown/speed up of the Audio Clip. Value 1 is normal playback speed.</dd><dt>spatialBlend (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Sets how much the 3D engine has an effect on the audio source [0.0, 1.0].</dd></dl>

#### Return Value
Type: AudioSource<br />The just created temporal AudioSource.

## Remarks
This function creates an AudioSource but automatically disposes of it once the clip has finished playing.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Audio_AudioSourceExt">AudioSourceExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio Namespace</a><br />AudioSource.PlayClipAtPoint(AudioClip, Vector3, Single)<br />