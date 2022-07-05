# AudioSourceExt.PlayClipAsync Method 
 

Asynchronous and ubiquitously plays an AudioClip.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task PlayClipAsync(
	AudioClip clip,
	float volume = 1f,
	float delay = 0f,
	float pitch = 1f,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/Unity/Audio/AudioSourceExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>clip</dt><dd>Type: AudioClip<br />Reference to the sound clip file that will be played.</dd><dt>volume (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />How loud the sound is at a distance of one world unit (one meter) [0.0, 1.0].</dd><dt>delay (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Delay time specified in seconds.</dd><dt>pitch (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Amount of change in pitch due to slowdown/speed up of the Audio Clip. Value 1 is normal playback speed.</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br /><a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a> to stop playing.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />An awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>.

## Remarks
This function creates an AudioSource but automatically disposes of it once the clip has finished playing.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Audio_AudioSourceExt">AudioSourceExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio Namespace</a><br />