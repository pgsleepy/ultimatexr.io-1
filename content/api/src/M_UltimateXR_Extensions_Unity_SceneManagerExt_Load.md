# SceneManagerExt.Load Method 
 

Creates an awaitable task that asynchronously loads a new scene.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task Load(
	string sceneName,
	LoadSceneMode mode,
	CancellationToken ct = default
)
```


#### Parameters
&nbsp;<dl><dt>sceneName</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Scene to load</dd><dt>mode</dt><dd>Type: LoadSceneMode<br />Mode in which the scene will be loaded</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the task</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />Awaitable task

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_SceneManagerExt">SceneManagerExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />