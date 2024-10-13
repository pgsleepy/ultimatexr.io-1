# CollectionExt.SplitSetRange Method 
 

Splits a string using <a href="https://docs.microsoft.com/dotnet/api/system.string.split#system-string-split(system-char())" target="_blank" rel="noopener noreferrer">Split(Char[])</a> and sets the result in the collection.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static ICollection<string> SplitSetRange(
	this ICollection<string> self,
	string toSplit,
	char separator
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">System.Collections.Generic.ICollection</a>(<a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)<br />Collection to set the split result in</dd><dt>toSplit</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />String to split</dd><dt>separator</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">System.Char</a><br />Separator to use for splitting. This will be used to call <a href="https://docs.microsoft.com/dotnet/api/system.string.split#system-string-split(system-char())" target="_blank" rel="noopener noreferrer">Split(Char[])</a> on *toSplit*</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)<br />The result collection

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Collections_CollectionExt">CollectionExt Class</a><br /><a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections Namespace</a><br />