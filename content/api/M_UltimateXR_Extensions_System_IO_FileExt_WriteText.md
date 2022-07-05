# FileExt.WriteText Method 
 

Asynchronously writes text to a file location.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_IO">UltimateXR.Extensions.System.IO</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task WriteText(
	string path,
	string text,
	Encoding encoding = null,
	bool append = false,
	CancellationToken ct = default
)
```


#### Parameters
&nbsp;<dl><dt>path</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />File full path to be opened for writing</dd><dt>text</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Text to write</dd><dt>encoding (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.text.encoding" target="_blank" rel="noopener noreferrer">System.Text.Encoding</a><br />Optional file encoding</dd><dt>append (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Optional boolean telling whether to append or override. Default behaviour is to override.</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the asynchronous operation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />Awaitable task

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.operationcanceledexception" target="_blank" rel="noopener noreferrer">OperationCanceledException</a></td><td>Task canceled using *ct*</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_IO_FileExt">FileExt Class</a><br /><a href="N_UltimateXR_Extensions_System_IO">UltimateXR.Extensions.System.IO Namespace</a><br />