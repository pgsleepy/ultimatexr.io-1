# EnumerableExt.MaxBy(*TSource*, *TKey*) Method (IEnumerable(*TSource*), Func(*TSource*, *TKey*))
 

Returns the maximal element of the given sequence, based on the given projection.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static TSource MaxBy<TSource, TKey>(
	this IEnumerable<TSource> source,
	Func<TSource, TKey> selector
)

```


#### Parameters
&nbsp;<dl><dt>source</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">System.Collections.Generic.IEnumerable</a>(*TSource*)<br />Source sequence</dd><dt>selector</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">System.Func</a>(*TSource*, *TKey*)<br />Selector to use to pick the results to compare</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>TSource</dt><dd>Type of the source sequence</dd><dt>TKey</dt><dd>Type of the projected element</dd></dl>

#### Return Value
Type: *TSource*<br />The maximal element, according to the projection.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(*TSource*). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td><td>*source* or *selector* is null</td></tr></table>

## Remarks
This overload uses the default comparer for the projected type. This operator uses deferred execution. The results are evaluated and cached on first use to returned sequence.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Collections_EnumerableExt">EnumerableExt Class</a><br /><a href="Overload_UltimateXR_Extensions_System_Collections_EnumerableExt_MaxBy">MaxBy Overload</a><br /><a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections Namespace</a><br />