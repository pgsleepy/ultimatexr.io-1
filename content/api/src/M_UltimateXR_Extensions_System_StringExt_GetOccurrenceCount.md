# StringExt.GetOccurrenceCount Method 
 

Gets the number of occurrences of a string in another string.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System">UltimateXR.Extensions.System</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static int GetOccurrenceCount(
	this string self,
	string key,
	bool caseSensitive = true
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />The string where to perform the search</dd><dt>key</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />The string to find</dd><dt>caseSensitive (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether the search should be case sensitive</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a><br />Number of occurrences of *key* in the source string

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_StringExt">StringExt Class</a><br /><a href="N_UltimateXR_Extensions_System">UltimateXR.Extensions.System Namespace</a><br />