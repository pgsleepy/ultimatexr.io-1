# AudioClipExt.FromPcmBytesAsync Method 
 

Creates an AudioClip from a PCM byte array asynchronously.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<AudioClip> FromPcmBytesAsync(
	byte[] bytes,
	string clipName = "pcm",
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/Unity/Audio/AudioClipExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>bytes</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">System.Byte</a>[]<br />The source data</dd><dt>clipName (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />The name assigned to the clip</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />The optional cancellation token, to cancel the task</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(AudioClip)<br />An awaitable task that returns the AudioClip object

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Audio_AudioClipExt">AudioClipExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio Namespace</a><br />