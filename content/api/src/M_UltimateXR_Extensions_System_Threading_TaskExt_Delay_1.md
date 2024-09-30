# TaskExt.Delay Method (Single, CancellationToken)
 

Creates an awaitable task that finishes after a given amount of seconds.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task Delay(
	float seconds,
	CancellationToken ct = default
)
```


#### Parameters
&nbsp;<dl><dt>seconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Number of seconds to wait</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the task</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />Awaitable task

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Threading_TaskExt">TaskExt Class</a><br /><a href="Overload_UltimateXR_Extensions_System_Threading_TaskExt_Delay">Delay Overload</a><br /><a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading Namespace</a><br />