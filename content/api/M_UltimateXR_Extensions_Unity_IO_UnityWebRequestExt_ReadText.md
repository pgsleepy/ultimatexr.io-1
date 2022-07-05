# UnityWebRequestExt.ReadText Method 
 

Reads a string asynchronously from an URI.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_IO">UltimateXR.Extensions.Unity.IO</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<string> ReadText(
	string uri,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/Unity/IO/UnityWebRequestExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>uri</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Text location</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation, to cancel the operation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)<br />Awaitable task that returns the string read

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.operationcanceledexception" target="_blank" rel="noopener noreferrer">OperationCanceledException</a></td><td>The task was canceled using *ct*</td></tr><tr><td><a href="T_UltimateXR_Exceptions_HttpUwrException">HttpUwrException</a></td><td>HttpError flag is on</td></tr><tr><td><a href="T_UltimateXR_Exceptions_NetUwrException">NetUwrException</a></td><td>NetworkError flag is on</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_IO_UnityWebRequestExt">UnityWebRequestExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_IO">UltimateXR.Extensions.Unity.IO Namespace</a><br />