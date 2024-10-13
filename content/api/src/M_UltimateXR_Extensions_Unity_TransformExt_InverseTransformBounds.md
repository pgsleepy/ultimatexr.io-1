# TransformExt.InverseTransformBounds Method 
 

Transforms a given Bounds object in world space to the local space of a Transform.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Bounds InverseTransformBounds(
	this Transform transform,
	Bounds worldBounds
)
```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform defining the local space where to move the bounds to</dd><dt>worldBounds</dt><dd>Type: Bounds<br />Bounds in world space</dd></dl>

#### Return Value
Type: Bounds<br />Transformed bounds

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Transform. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td><td>transform is null</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />