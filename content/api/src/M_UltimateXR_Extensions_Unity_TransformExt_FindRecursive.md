# TransformExt.FindRecursive Method 
 

Tries to find an object by its name in the given Transform or any of its children recursively

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Transform FindRecursive(
	this Transform self,
	string name,
	StringComparison stringComparison = StringComparison.Ordinal
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Transform<br />Transform whose hierarchy to search</dd><dt>name</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Name of the transform to find</dd><dt>stringComparison (Optional)</dt><dd>Type: <a href="https://learn.microsoft.com/dotnet/api/system.stringcomparison" target="_blank" rel="noopener noreferrer">System.StringComparison</a><br />Comparison rules to use</dd></dl>

#### Return Value
Type: Transform<br />First transform found with the given name, or null if not found

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Transform. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />