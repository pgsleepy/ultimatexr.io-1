# AudioClipExt.PlayAsync Method 
 

Asynchronous and ubiquitously plays the AudioClip.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task PlayAsync(
	this AudioClip self,
	float volume = 1f,
	float delay = 0f,
	float pitch = 1f,
	CancellationToken ct = default
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: AudioClip<br />Reference to the sound clip file that will be played.</dd><dt>volume (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />How loud the sound is at a distance of one world unit (one meter) [0.0, 1.0].</dd><dt>delay (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Delay time specified in seconds.</dd><dt>pitch (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Amount of change in pitch due to slowdown/speed up of the Audio Clip. Value 1 is normal playback speed.</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br /><a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a> to stop playing.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />An awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type AudioClip. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Remarks
This function creates an AudioSource but automatically disposes of it once the clip has finished playing.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Audio_AudioClipExt">AudioClipExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio Namespace</a><br /><a href="M_UltimateXR_Extensions_Unity_Audio_AudioSourceExt_PlayClipAsync">AudioSourceExt.PlayClipAsync(AudioClip, Single, Single, Single, CancellationToken)</a><br />