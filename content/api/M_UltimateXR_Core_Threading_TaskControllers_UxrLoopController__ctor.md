# UxrLoopController Constructor 
 

Constructor.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrLoopController(
	Action<CancellationToken> loopAction,
	int autoStartDelay = -1
)
```


#### Parameters
&nbsp;<dl><dt>loopAction</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">System.Action</a>(<a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a>)<br />A cancelable and loopable action that will be executing repeatedly until <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> is called.</dd><dt>autoStartDelay (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />
&nbsp;<ul><li>If set, *loopAction* starts looping after *autoStartDelay* milliseconds.</li><li>If not set, *loopAction* starts looping immediately.</li></ul></dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController Class</a><br /><a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers Namespace</a><br />