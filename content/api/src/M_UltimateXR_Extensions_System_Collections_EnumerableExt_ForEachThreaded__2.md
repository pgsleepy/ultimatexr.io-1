# EnumerableExt.ForEachThreaded(*TIn*, *TOut*) Method (IEnumerable(*TIn*), Func(*TIn*, *TOut*))
 

Asynchronously applies a function on all elements in a collection.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task<TOut[]> ForEachThreaded<TIn, TOut>(
	this IEnumerable<TIn> list,
	Func<TIn, TOut> function
)

```


#### Parameters
&nbsp;<dl><dt>list</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">System.Collections.Generic.IEnumerable</a>(*TIn*)<br />Elements to apply the function on</dd><dt>function</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">System.Func</a>(*TIn*, *TOut*)<br />Function to apply</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>TIn</dt><dd>Element type</dd><dt>TOut</dt><dd>\[Missing <typeparam name="TOut"/> documentation for "M:UltimateXR.Extensions.System.Collections.EnumerableExt.ForEachThreaded``2(System.Collections.Generic.IEnumerable{``0},System.Func{``0,``1})"\]</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(*TOut*[])<br />Task wrapping the Task.WhenAll applying the function on all elements in a collection

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(*TIn*). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Collections_EnumerableExt">EnumerableExt Class</a><br /><a href="Overload_UltimateXR_Extensions_System_Collections_EnumerableExt_ForEachThreaded">ForEachThreaded Overload</a><br /><a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections Namespace</a><br />