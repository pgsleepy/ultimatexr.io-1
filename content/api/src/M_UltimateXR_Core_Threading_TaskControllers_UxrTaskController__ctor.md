# UxrTaskController Constructor 
 

Constructor.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrTaskController(
	Func<CancellationToken, Task> taskFunc,
	bool autoStart = false
)
```


#### Parameters
&nbsp;<dl><dt>taskFunc</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">System.Func</a>(<a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a>, <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>)<br />A cancelable task which that be executed asynchronously until completion or <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> is called.</dd><dt>autoStart (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />
&nbsp;<ul><li><strong>`false` (`False` in Visual Basic):</strong> - <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a> needs to be called in order to start *taskFunc* execution.</li><li><strong>`true` (`True` in Visual Basic):</strong> - *taskFunc* starts executing immediately.</li></ul></dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Threading_TaskControllers_UxrTaskController">UxrTaskController Class</a><br /><a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers Namespace</a><br />