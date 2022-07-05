# UxrCancellableController.Start Method (Int32)
 

Similar to <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a>, but it automatically calls <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> after *duration* milliseconds.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void Start(
	int duration
)
```


#### Parameters
&nbsp;<dl><dt>duration</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Allowed running time until <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> is automatically called, in milliseconds</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController">UxrCancellableController Class</a><br /><a href="Overload_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start Overload</a><br /><a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers Namespace</a><br />