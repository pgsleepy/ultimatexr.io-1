# StringExt.ReplaceInvalidFilePathChars Method 
 

Replaces the invalid characters in a file path with a given character.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System">UltimateXR.Extensions.System</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static string ReplaceInvalidFilePathChars(
	this string self,
	char fallbackChar = '_'
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />The file path to process</dd><dt>fallbackChar (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">System.Char</a><br />The valid character to use as replacement</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a><br />New string with the replacements

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td><td>The replacement character is part of the invalid characters</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_StringExt">StringExt Class</a><br /><a href="N_UltimateXR_Extensions_System">UltimateXR.Extensions.System Namespace</a><br />