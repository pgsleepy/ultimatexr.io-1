# ButtonExt.ReadAsync Method (CancellationToken, Button[])
 

Asynchronously waits until a Button in a set is clicked. Returns the Button that was clicked.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_UI">UltimateXR.Extensions.Unity.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<Button> ReadAsync(
	CancellationToken ct,
	params Button[] buttons
)
```


#### Parameters
&nbsp;<dl><dt>ct</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Cancellation token, to cancel the task</dd><dt>buttons</dt><dd>Type: Button[]<br />Buttons to wait for</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(Button)<br />Awaitable task that will finish once a button was clicked or the <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> was canceled, and that returns the Button that was clicked

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_UI_ButtonExt">ButtonExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_UI_ButtonExt_ReadAsync">ReadAsync Overload</a><br /><a href="N_UltimateXR_Extensions_Unity_UI">UltimateXR.Extensions.Unity.UI Namespace</a><br />