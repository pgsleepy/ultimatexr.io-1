# TaskExt.Loop Method 
 

Loops iterating once per frame during a specified amount of time, executing a user-defined action.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task Loop(
	CancellationToken ct,
	float durationSeconds,
	Action<float> loopAction,
	UxrEasing easing = UxrEasing.Linear,
	bool forceLastT1 = false
)
```

<a href="UltimateXR/Scripts/Extensions/System/Threading/TaskExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>ct</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />The cancellation token</dd><dt>durationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Loop duration in seconds</dd><dt>loopAction</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">System.Action</a>(<a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>)<br />The action performed each frame, which will receive the interpolation [0.0, 1.0] parameter as argument.</dd><dt>easing (Optional)</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrEasing">UltimateXR.Animation.Interpolation.UxrEasing</a><br />The easing used to compute the interpolation parameter over time</dd><dt>forceLastT1 (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Will enforce a last iteration with 1.0 interpolation parameter. This will avoid having a last step with close than, but not 1.0, interpolation.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />\[Missing <returns> documentation for "M:UltimateXR.Extensions.System.Threading.TaskExt.Loop(System.Threading.CancellationToken,System.Single,System.Action{System.Single},UltimateXR.Animation.Interpolation.UxrEasing,System.Boolean)"\]

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Threading_TaskExt">TaskExt Class</a><br /><a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading Namespace</a><br />