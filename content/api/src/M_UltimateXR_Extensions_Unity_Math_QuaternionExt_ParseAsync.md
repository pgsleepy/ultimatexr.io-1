# QuaternionExt.ParseAsync Method 
 

Parses a Quaternion asynchronously.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<Quaternion?> ParseAsync(
	string s,
	CancellationToken ct = default
)
```


#### Parameters
&nbsp;<dl><dt>s</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Source string</dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the operation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://docs.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(Quaternion))<br />Awaitable <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a> that returns the parsed Quaternion or null if there was an error

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Math_QuaternionExt">QuaternionExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math Namespace</a><br />