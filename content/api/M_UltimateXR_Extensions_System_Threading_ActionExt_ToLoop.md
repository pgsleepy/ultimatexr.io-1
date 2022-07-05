# ActionExt.ToLoop Method 
 

Creates a <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a> which wraps a cancellable loop executing this <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a> in the main thread.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrLoopController ToLoop(
	this Action self,
	float rate = 10f,
	int autoStartDelay = -1
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br /><a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a> to loop at *rate* Hz</dd><dt>rate (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Loop frequency in Hz</dd><dt>autoStartDelay (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Delay in milliseconds before loop executes its first iteration.
&nbsp;<ul><li>Equal or greater than zero: tells <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a> to automatically start looping *autoStartDelay* milliseconds after creation.</li><li>Negative (default) [!:UxrLoopController.Start()] needs to be called on returned <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a> to start looping.</li></ul></dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a><br />A <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a> to handle ([!:UxrLoopController.Start()], [!:UxrLoopController.Stop]) the loop execution.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Threading_ActionExt">ActionExt Class</a><br /><a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading Namespace</a><br /><a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UltimateXR.Core.Threading.TaskControllers.UxrLoopController</a><br /><a href="M_UltimateXR_Extensions_System_Threading_ActionExt_Loop">ActionExt.Loop(Action, Single, CancellationToken)</a><br /><a href="M_UltimateXR_Extensions_System_Threading_ActionExt_ToThreadedLoop">ActionExt.ToThreadedLoop(Action, Single, Int32)</a><br />