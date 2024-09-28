# AsyncOperationExt.Wait Method 
 

Creates an awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> that finishes when the given AsyncOperation finished.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_IO">UltimateXR.Extensions.Unity.IO</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<AsyncOperation> Wait(
	this AsyncOperation self,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/Unity/IO/AsyncOperationExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: AsyncOperation<br />Unity asynchronous operation object</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the operation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(AsyncOperation)<br />Awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> returning the caller AsyncOperation object

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type AsyncOperation. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_IO_AsyncOperationExt">AsyncOperationExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_IO">UltimateXR.Extensions.Unity.IO Namespace</a><br />