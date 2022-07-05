# TypeExt.ThrowIfInvalidCast Method 
 

Throws an <a href="https://docs.microsoft.com/dotnet/api/system.invalidcastexception" target="_blank" rel="noopener noreferrer">InvalidCastException</a> if the type defined by *from* can't be casted to the type defined by [!:to].

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System">UltimateXR.Extensions.System</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void ThrowIfInvalidCast(
	Type from,
	Type to
)
```


#### Parameters
&nbsp;<dl><dt>from</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">System.Type</a><br />Source type</dd><dt>to</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">System.Type</a><br />Destination type</dd></dl>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.invalidcastexception" target="_blank" rel="noopener noreferrer">InvalidCastException</a></td><td>Thrown when the source type can't be casted to the destination type</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_TypeExt">TypeExt Class</a><br /><a href="N_UltimateXR_Extensions_System">UltimateXR.Extensions.System Namespace</a><br />