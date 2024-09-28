# ListExt.IndexOf(*T*) Method 
 

Gets the index of a given item in a list.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static int IndexOf<T>(
	this IReadOnlyList<T> self,
	T item
)

```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">System.Collections.Generic.IReadOnlyList</a>(*T*)<br />List where to look for the item</dd><dt>item</dt><dd>Type: *T*<br />Item to look for</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Element type</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a><br />Element index or -1 if not found

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(*T*). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Remarks
Equals() is used for comparison

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Collections_ListExt">ListExt Class</a><br /><a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections Namespace</a><br />