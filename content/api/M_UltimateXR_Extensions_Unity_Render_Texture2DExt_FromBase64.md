# Texture2DExt.FromBase64 Method 
 

Loads asynchronously a texture from a file encoded in a base64 .

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<Texture2D> FromBase64(
	string base64,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/Unity/Render/Texture2DExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>base64</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />The base 64 image string</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the operation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(Texture2D)<br />An awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> that returns the loaded texture, or null if it could not be loaded

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td><td>*base64* is null or empty</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.operationcanceledexception" target="_blank" rel="noopener noreferrer">OperationCanceledException</a></td><td>Task canceled using *ct*</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.formatexception" target="_blank" rel="noopener noreferrer">FormatException</a></td><td>The length of *base64*, ignoring white-space characters, is not zero or a multiple of 4.</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Render_Texture2DExt">Texture2DExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render Namespace</a><br /><a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />