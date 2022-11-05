# EnumerableExt Class<a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable(T)</a> extensions.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Extensions.System.Collections.EnumerableExt<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static class EnumerableExt
```

<a href="UltimateXR/Scripts/Extensions/System/Collections/EnumerableExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The EnumerableExt type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Collections_EnumerableExt_ForEach__1">ForEach(TIn)</a></td><td>
Applies an <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a> on all elements in a collection.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Collections_EnumerableExt_ForEachAsync__1">ForEachAsync(TIn)(IEnumerable(TIn), Func(TIn, Task))</a></td><td>
Asynchronously applies a function on all elements in a collection.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Collections_EnumerableExt_ForEachAsync__2">ForEachAsync(TIn, TOut)(IEnumerable(TIn), Func(TIn, Task(TOut)))</a></td><td>
Asynchronously applies a function to all elements in a collection.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Collections_EnumerableExt_ForEachThreaded__1">ForEachThreaded(TIn)(IEnumerable(TIn), Action(TIn))</a></td><td>
Asynchronously applies an action on all elements in a collection.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Collections_EnumerableExt_ForEachThreaded__2">ForEachThreaded(TIn, TOut)(IEnumerable(TIn), Func(TIn, TOut))</a></td><td>
Asynchronously applies a function on all elements in a collection.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Collections_EnumerableExt_MaxBy__2">MaxBy(TSource, TKey)(IEnumerable(TSource), Func(TSource, TKey))</a></td><td>
Returns the maximal element of the given sequence, based on the given projection.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Collections_EnumerableExt_MaxBy__2_1">MaxBy(TSource, TKey)(IEnumerable(TSource), Func(TSource, TKey), IComparer(TKey))</a></td><td>
Returns the maximal element of the given sequence, based on the given projection and the specified comparer for projected values.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Collections_EnumerableExt_RandomElement__1">RandomElement(TIn)</a></td><td>
Returns a random element from the collection.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Collections_EnumerableExt_SplitCamelCase">SplitCamelCase</a></td><td>
Splits a list of strings using CamelCase.</td></tr></table>&nbsp;
<a href="#enumerableext-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Extensions_System_Collections">UltimateXR.Extensions.System.Collections Namespace</a><br />