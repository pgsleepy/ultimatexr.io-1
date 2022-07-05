# StringExt.IsSubDirectoryOf Method 
 

Checks if a path is a child of another path. Adapted from https://stackoverflow.com/questions/8091829/how-to-check-if-one-path-is-a-child-of-another-path

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System">UltimateXR.Extensions.System</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool IsSubDirectoryOf(
	this string candidate,
	string other
)
```


#### Parameters
&nbsp;<dl><dt>candidate</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Path candidate</dd><dt>other</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Path to check against</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the path is child of the parent path

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_StringExt">StringExt Class</a><br /><a href="N_UltimateXR_Extensions_System">UltimateXR.Extensions.System Namespace</a><br />