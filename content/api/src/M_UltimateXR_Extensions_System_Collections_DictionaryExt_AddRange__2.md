# DictionaryExt.AddRange(*TKey*, *TValue*) Method 
 

Adds all elements in another dictionary to the dictionary.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void AddRange<TKey, TValue>(
	this IDictionary<TKey, TValue> self,
	IDictionary<TKey, TValue> other,
	bool overrideExistingKeys = false
)

```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">System.Collections.Generic.IDictionary</a>(*TKey*, *TValue*)<br />Destination dictionary</dd><dt>other</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">System.Collections.Generic.IDictionary</a>(*TKey*, *TValue*)<br />Source dictionary</dd><dt>overrideExistingKeys (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Determines if duplicated keys must be overriden with other's values</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>TKey</dt><dd>Key type</dd><dt>TValue</dt><dd>Value type</dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(*TKey*, *TValue*). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Collections_DictionaryExt">DictionaryExt Class</a><br /><a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections Namespace</a><br />