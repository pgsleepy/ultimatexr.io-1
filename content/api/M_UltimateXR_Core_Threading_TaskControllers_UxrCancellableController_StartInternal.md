# UxrCancellableController.StartInternal Method 
 

Implements the internal logic between with <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a> and <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected abstract void StartInternal(
	CancellationToken ct,
	Action onCompleted
)
```

<a href="UltimateXR/Scripts/Core/Threading/TaskControllers/UxrCancellableController.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>ct</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Flags, with <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken.iscancellationrequested#system-threading-cancellationtoken-iscancellationrequested" target="_blank" rel="noopener noreferrer">IsCancellationRequested</a>, when <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> has been requested.</dd><dt>onCompleted</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Optional callback when the logic has completed, so that the base class can free resources.</dd></dl>

## Remarks
In case the implementation can finish on its own, please invoke *onCompleted* instead of <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController">UxrCancellableController Class</a><br /><a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers Namespace</a><br /><a href="T_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController">UltimateXR.Core.Threading.TaskControllers.UxrCancellableController</a><br />