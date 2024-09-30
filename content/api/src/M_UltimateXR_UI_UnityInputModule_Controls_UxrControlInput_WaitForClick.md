# UxrControlInput.WaitForClick Method 
 

Creates an awaitable task that blocks until a control is clicked.

**Namespace:**&nbsp;<a href="N_UltimateXR_UI_UnityInputModule_Controls">UltimateXR.UI.UnityInputModule.Controls</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task WaitForClick(
	UxrControlInput control,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/UI/UnityInputModule/Controls/UxrControlInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>control</dt><dd>Type: <a href="T_UltimateXR_UI_UnityInputModule_Controls_UxrControlInput">UltimateXR.UI.UnityInputModule.Controls.UxrControlInput</a><br />Control to listen to</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the task</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />Awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> returning the control that was clicked or null if the task was cancelled

## See Also


#### Reference
<a href="T_UltimateXR_UI_UnityInputModule_Controls_UxrControlInput">UxrControlInput Class</a><br /><a href="N_UltimateXR_UI_UnityInputModule_Controls">UltimateXR.UI.UnityInputModule.Controls Namespace</a><br />