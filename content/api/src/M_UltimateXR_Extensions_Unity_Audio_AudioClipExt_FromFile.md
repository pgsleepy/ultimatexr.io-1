# AudioClipExt.FromFile Method 
 

Asynchronously reads and loads an AudioClip into memory from a given *uri*

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<AudioClip> FromFile(
	string uri,
	CancellationToken ct = default
)
```


#### Parameters
&nbsp;<dl><dt>uri</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Full path for AudioClip file</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />The optional cancellation token, to cancel the task</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(AudioClip)<br />Loaded AudioClip

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="T_UltimateXR_Exceptions_HttpUwrException">HttpUwrException</a></td><td>HttpError flag is on</td></tr><tr><td><a href="T_UltimateXR_Exceptions_NetUwrException">NetUwrException</a></td><td>NetworkError flag is on</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.operationcanceledexception" target="_blank" rel="noopener noreferrer">OperationCanceledException</a></td><td>The task was canceled using *ct*</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Audio_AudioClipExt">AudioClipExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio Namespace</a><br />