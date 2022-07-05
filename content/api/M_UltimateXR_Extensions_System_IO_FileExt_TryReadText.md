# FileExt.TryReadText Method 
 

Reads text from a file asynchronously. Multiple file locations are supported:
&nbsp;<ul><li>Files in streamingAssetsPath</li><li>Files in an http:// location</li><li>Files in a file:// location</li></ul>&nbsp;
All other Uris will be considered file paths and the file:// location will be added.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_IO">UltimateXR.Extensions.System.IO</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<(bool success, string text)> TryReadText(
	string uri,
	Encoding encoding = null,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/System/IO/FileExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>uri</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />File location</dd><dt>encoding (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.text.encoding" target="_blank" rel="noopener noreferrer">System.Text.Encoding</a><br />Optional file encoding</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the asynchronous operation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://docs.microsoft.com/dotnet/api/system.valuetuple-2" target="_blank" rel="noopener noreferrer">ValueTuple</a>(<a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>, <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>))<br />A pair describing a boolean success value and the text read

## Remarks
UnityWebRequest.Get() is used internally to perform the actual reading

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_IO_FileExt">FileExt Class</a><br /><a href="N_UltimateXR_Extensions_System_IO">UltimateXR.Extensions.System.IO Namespace</a><br />