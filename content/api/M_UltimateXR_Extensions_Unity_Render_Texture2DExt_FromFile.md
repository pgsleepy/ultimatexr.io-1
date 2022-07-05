# Texture2DExt.FromFile Method 
 

Loads asynchronously a texture from a given file *uri*. See <a href="M_UltimateXR_Extensions_System_IO_FileExt_Read">Read(String, CancellationToken)</a> for information on the file location.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<Texture2D> FromFile(
	string uri,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/Unity/Render/Texture2DExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>uri</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Location of the texture file. See <a href="M_UltimateXR_Extensions_System_IO_FileExt_Read">Read(String, CancellationToken)</a></dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the operation.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(Texture2D)<br />An awaitable  that returns the loaded texture

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td><td>*uri* is null or empty</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.operationcanceledexception" target="_blank" rel="noopener noreferrer">OperationCanceledException</a></td><td>Task canceled using *ct*</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.io.filenotfoundexception" target="_blank" rel="noopener noreferrer">FileNotFoundException</a></td><td>The file specified in *uri* was not found.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td><td>*uri* is in an invalid format.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.io.ioexception" target="_blank" rel="noopener noreferrer">IOException</a></td><td>An I/O error occurred while opening the file.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td><td>The stream is currently in use by a previous read operation.</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Render_Texture2DExt">Texture2DExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render Namespace</a><br /><a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">System.Threading.Tasks.Task</a><br />