# FileExt.Write Method (String, Stream, CancellationToken)
 

Asynchronously writes the content of an *sourceStream* to a file at *path*.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_IO">UltimateXR.Extensions.System.IO</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task Write(
	string path,
	Stream sourceStream,
	CancellationToken ct = default
)
```


#### Parameters
&nbsp;<dl><dt>path</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />File full path to be opened for writing</dd><dt>sourceStream</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">System.IO.Stream</a><br /><a href="https://docs.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a> to be written into a file.</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the asynchronous operation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />An awaitable writing <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.io.ioexception" target="_blank" rel="noopener noreferrer">IOException</a></td><td>An I/O error occurred while creating the file.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td><td>*path* is a zero-length string, contains only white space, or contains one or more invalid characters. You can query for invalid characters by using the <a href="https://docs.microsoft.com/dotnet/api/system.io.path.getinvalidpathchars#System_IO_Path_GetInvalidPathChars" target="_blank" rel="noopener noreferrer">GetInvalidPathChars()</a> method.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.io.pathtoolongexception" target="_blank" rel="noopener noreferrer">PathTooLongException</a></td><td>The *path* parameter is longer than the system-defined maximum length.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td><td>*sourceStream* does not support reading, or the destination stream does not support writing.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.unauthorizedaccessexception" target="_blank" rel="noopener noreferrer">UnauthorizedAccessException</a></td><td>The caller does not have the required permission.</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.operationcanceledexception" target="_blank" rel="noopener noreferrer">OperationCanceledException</a></td><td>Task canceled using *ct*</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_IO_FileExt">FileExt Class</a><br /><a href="Overload_UltimateXR_Extensions_System_IO_FileExt_Write">Write Overload</a><br /><a href="N_UltimateXR_Extensions_System_IO">UltimateXR.Extensions.System.IO Namespace</a><br />