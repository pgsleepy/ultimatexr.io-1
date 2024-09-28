# TaskExt.WaitWhile Method (Func(Boolean), Int32, CancellationToken)
 

Creates an awaitable task that blocks while a condition is true, a timeout occurs or the task is canceled.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task WaitWhile(
	Func<bool> condition,
	int timeout,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/System/Threading/TaskExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>condition</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">System.Func</a>(<a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)<br />The condition that will perpetuate the block</dd><dt>timeout</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Timeout, in milliseconds</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the task</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />Awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.timeoutexception" target="_blank" rel="noopener noreferrer">TimeoutException</a></td><td>Thrown after [!:timeout] milliseconds</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Threading_TaskExt">TaskExt Class</a><br /><a href="Overload_UltimateXR_Extensions_System_Threading_TaskExt_WaitWhile">WaitWhile Overload</a><br /><a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading Namespace</a><br />