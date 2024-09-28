# TaskExt.WaitUntil Method (Func(Boolean), Single, Action, CancellationToken)
 

Creates an awaitable task that blocks until a condition is true, waiting a certain amount of seconds at maximum. An optional action can be called if the task was cancelled or it timed out.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task WaitUntil(
	Func<bool> condition,
	float duration,
	Action cancelCallback = null,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/System/Threading/TaskExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>condition</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">System.Func</a>(<a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)<br />The condition that will perpetuate the block</dd><dt>duration</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The maximum amount of seconds to wait while the condition is true</dd><dt>cancelCallback (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional action to execute if the task was canceled or it timed out</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the task</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />Awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Threading_TaskExt">TaskExt Class</a><br /><a href="Overload_UltimateXR_Extensions_System_Threading_TaskExt_WaitUntil">WaitUntil Overload</a><br /><a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading Namespace</a><br />