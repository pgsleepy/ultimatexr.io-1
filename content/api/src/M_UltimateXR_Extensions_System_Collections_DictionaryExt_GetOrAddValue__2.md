# DictionaryExt.GetOrAddValue(*TKey*, *TValue*) Method 
 

Gets a given value defined by a key in a dictionary. If the key is not found, it is added and the value is given the default value.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static TValue GetOrAddValue<TKey, TValue>(
	this IDictionary<TKey, TValue> self,
	TKey key
)
where TValue : new()

```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">System.Collections.Generic.IDictionary</a>(*TKey*, *TValue*)<br />Dictionary</dd><dt>key</dt><dd>Type: *TKey*<br />Key to look for</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>TKey</dt><dd>Key type</dd><dt>TValue</dt><dd>Value type</dd></dl>

#### Return Value
Type: *TValue*<br />Value in the dictionary. If the key doesn't exist it will be added and the return value will be the default value

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(*TKey*, *TValue*). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Collections_DictionaryExt">DictionaryExt Class</a><br /><a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections Namespace</a><br />