# UxrTaskController&nbsp;Explicit Conversion (Func(CancellationToken, Task) to UxrTaskController)
 

Explicit conversion operator from <a href="https://docs.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func(T, TResult)</a> to <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrTaskController">UxrTaskController</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static explicit operator UxrTaskController (
	Func<CancellationToken, Task> taskFunc
)
```


#### Parameters
&nbsp;<dl><dt>taskFunc</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">System.Func</a>(<a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a>, <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>)<br />A cancelable task that will be executed asynchronously until completion or <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> is called.</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrTaskController">UxrTaskController</a><br />A new instance of <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrTaskController">UxrTaskController</a> wrapping *taskFunc*.

## See Also


#### Reference
<a href="T_UltimateXR_Core_Threading_TaskControllers_UxrTaskController">UxrTaskController Class</a><br /><a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers Namespace</a><br />