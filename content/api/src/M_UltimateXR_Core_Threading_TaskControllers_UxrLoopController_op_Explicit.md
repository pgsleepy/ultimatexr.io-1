# UxrLoopController&nbsp;Explicit Conversion (Action(CancellationToken) to UxrLoopController)
 

Explicit conversion operator from <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action(T)</a> to <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static explicit operator UxrLoopController (
	Action<CancellationToken> loopAction
)
```


#### Parameters
&nbsp;<dl><dt>loopAction</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">System.Action</a>(<a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a>)<br />A cancelable and loopable action that will be executing repeatedly until <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> is called.</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a><br />A new instance of <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a> wrapping *loopAction*.

## See Also


#### Reference
<a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController Class</a><br /><a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers Namespace</a><br />