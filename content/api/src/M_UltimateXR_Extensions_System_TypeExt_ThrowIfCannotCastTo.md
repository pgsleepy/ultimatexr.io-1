# TypeExt.ThrowIfCannotCastTo Method 
 

Throws an <a href="https://docs.microsoft.com/dotnet/api/system.invalidcastexception" target="_blank" rel="noopener noreferrer">InvalidCastException</a> if the type defined by *self* can't be casted to the type defined by [!:to].

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System">UltimateXR.Extensions.System</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void ThrowIfCannotCastTo(
	this Type self,
	Type to
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">System.Type</a><br />Source type</dd><dt>to</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">System.Type</a><br />Destination type</dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.invalidcastexception" target="_blank" rel="noopener noreferrer">InvalidCastException</a></td><td>Thrown when the source type can't be casted to the destination type</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_TypeExt">TypeExt Class</a><br /><a href="N_UltimateXR_Extensions_System">UltimateXR.Extensions.System Namespace</a><br />