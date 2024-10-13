# ButtonExt.WaitForClickAsync Method 
 

Asynchronously waits until a Button is clicked.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_UI">UltimateXR.Extensions.Unity.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task WaitForClickAsync(
	this Button self,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/Unity/UI/ButtonExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Button<br />Button to wait for</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the task</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />Awaitable task that will finish once the button was clicked or the <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> was canceled

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Button. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_UI_ButtonExt">ButtonExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_UI">UltimateXR.Extensions.Unity.UI Namespace</a><br />