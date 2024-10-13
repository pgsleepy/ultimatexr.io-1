# UnityWebRequestExt.Send Method 
 

Sends a UnityWebRequest asynchronously.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_IO">UltimateXR.Extensions.Unity.IO</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task Send(
	this UnityWebRequest self,
	CancellationToken ct
)
```

<a href="UltimateXR/Scripts/Extensions/Unity/IO/UnityWebRequestExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: UnityWebRequest<br />Request to send</dd><dt>ct</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Cancellation token, to cancel the operation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />Awaitable task that will finish when the request was sent

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type UnityWebRequest. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="T_UltimateXR_Exceptions_HttpUwrException">HttpUwrException</a></td><td>HttpError flag is on</td></tr><tr><td><a href="T_UltimateXR_Exceptions_NetUwrException">NetUwrException</a></td><td>NetworkError flag is on</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_IO_UnityWebRequestExt">UnityWebRequestExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_IO">UltimateXR.Extensions.Unity.IO Namespace</a><br />