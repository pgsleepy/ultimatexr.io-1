# ResourcesExt.Load(*T*) Method 
 

Loads a resource asynchronously.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_IO">UltimateXR.Extensions.Unity.IO</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<T> Load<T>(
	string filePath,
	CancellationToken ct = default
)
where T : Object

```

<a href="UltimateXR/Scripts/Extensions/Unity/IO/ResourcesExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>filePath</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />The path relative to a Resources folder</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the operation</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Resource type to load</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(*T*)<br />Awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> that returns the loaded resource

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_IO_ResourcesExt">ResourcesExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_IO">UltimateXR.Extensions.Unity.IO Namespace</a><br />