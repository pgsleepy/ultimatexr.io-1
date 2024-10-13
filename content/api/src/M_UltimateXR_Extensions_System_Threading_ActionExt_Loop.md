# ActionExt.Loop Method 
 

Executes repeatedly this <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>, in the main thread, at *rate* until cancellation is requested with *ct*.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void Loop(
	this Action self,
	float rate = 10f,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/System/Threading/ActionExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br /><a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a> to loop at *rate* Hz</dd><dt>rate (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Loop frequency in Hz</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Cancellation token</dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Threading_ActionExt">ActionExt Class</a><br /><a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading Namespace</a><br /><a href="M_UltimateXR_Extensions_System_Threading_ActionExt_LoopThreaded">ActionExt.LoopThreaded(Action, Single, CancellationToken)</a><br /><a href="M_UltimateXR_Extensions_System_Threading_ActionExt_ToLoop">ActionExt.ToLoop(Action, Single, Int32)</a><br />