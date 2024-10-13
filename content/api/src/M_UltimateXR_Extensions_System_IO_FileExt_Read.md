# FileExt.Read Method 
 

Reads bytes from a file asynchronously. Multiple file locations are supported:
&nbsp;<ul><li>Files in streamingAssetsPath</li><li>Files in an http:// location</li><li>Files in a file:// location</li></ul>&nbsp;
All other Uris will be considered file paths and the file:// location will be added.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_IO">UltimateXR.Extensions.System.IO</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<byte[]> Read(
	string uri,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/System/IO/FileExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>uri</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />File full path to be opened for reading</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to be able to cancel the asynchronous operation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://docs.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a>[])<br />Bytes read

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.operationcanceledexception" target="_blank" rel="noopener noreferrer">OperationCanceledException</a></td><td>Task canceled using *ct*</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.io.filenotfoundexception" target="_blank" rel="noopener noreferrer">FileNotFoundException</a></td><td>The file specified in *uri* was not found.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td><td>*uri* is in an invalid format.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.io.ioexception" target="_blank" rel="noopener noreferrer">IOException</a></td><td>An I/O error occurred while opening the file.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td><td>The stream is currently in use by a previous read operation.</td></tr></table>

## Remarks
UnityWebRequest.Get() is used internally to perform the actual reading

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_IO_FileExt">FileExt Class</a><br /><a href="N_UltimateXR_Extensions_System_IO">UltimateXR.Extensions.System.IO Namespace</a><br />