# ListExt.RandomElementsWithoutRepetitionExcept(*T*) Method 
 

Returns a list with n random elements from a list without repetition. An additional list can be provided to exclude elements from appearing in the results.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static List<T> RandomElementsWithoutRepetitionExcept<T>(
	this IReadOnlyList<T> self,
	IReadOnlyList<T> listToExclude,
	int count
)

```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">System.Collections.Generic.IReadOnlyList</a>(*T*)<br />List to get the random elements from</dd><dt>listToExclude</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">System.Collections.Generic.IReadOnlyList</a>(*T*)<br />List of elements to exclude from the results</dd><dt>count</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Number of random elements to get</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Element type</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.list-1" target="_blank" rel="noopener noreferrer">List</a>(*T*)<br />List with random elements. If *count* is larger than the list, the result list will be as long as the input list minus the excluded elements.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(*T*). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Remarks
Uses Unity's random number generator (Range(Int32, Int32)).

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Collections_ListExt">ListExt Class</a><br /><a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections Namespace</a><br />