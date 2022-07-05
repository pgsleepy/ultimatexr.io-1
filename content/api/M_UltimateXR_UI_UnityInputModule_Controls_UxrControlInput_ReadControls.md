# UxrControlInput.ReadControls Method 
 

Creates an awaitable task that blocks until a control from a given set is clicked, and returns the control that was clicked.

**Namespace:**&nbsp;<a href="N_UltimateXR_UI_UnityInputModule_Controls">UltimateXR.UI.UnityInputModule.Controls</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<UxrControlInput> ReadControls(
	CancellationToken ct,
	params UxrControlInput[] controls
)
```

<a href="UltimateXR/Scripts/UI/UnityInputModule/Controls/UxrControlInput.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>ct</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Cancellation token, to cancel the task</dd><dt>controls</dt><dd>Type: <a href="T_UltimateXR_UI_UnityInputModule_Controls_UxrControlInput">UltimateXR.UI.UnityInputModule.Controls.UxrControlInput</a>[]<br />Controls to listen to</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_UltimateXR_UI_UnityInputModule_Controls_UxrControlInput">UxrControlInput</a>)<br />Awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> returning the control that was clicked

## See Also


#### Reference
<a href="T_UltimateXR_UI_UnityInputModule_Controls_UxrControlInput">UxrControlInput Class</a><br /><a href="N_UltimateXR_UI_UnityInputModule_Controls">UltimateXR.UI.UnityInputModule.Controls Namespace</a><br />