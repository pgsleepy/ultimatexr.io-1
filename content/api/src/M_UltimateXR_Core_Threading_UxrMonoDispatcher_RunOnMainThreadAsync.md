# UxrMonoDispatcher.RunOnMainThreadAsync Method 
 

Runs code on the main thread, asynchronously.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Threading">UltimateXR.Core.Threading</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task RunOnMainThreadAsync(
	CancellationToken ct,
	Action action
)
```


#### Parameters
&nbsp;<dl><dt>ct</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Cancellation token that allows to cancel the task.</dd><dt>action</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />The action to execute.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />An awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> that finishes when the operation finished.

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a></td><td>A delegate callback throws an exception.</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Threading_UxrMonoDispatcher">UxrMonoDispatcher Class</a><br /><a href="N_UltimateXR_Core_Threading">UltimateXR.Core.Threading Namespace</a><br />