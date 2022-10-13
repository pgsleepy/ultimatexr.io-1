# TransformExt.CalculateBounds Method (Transform, Space, Boolean)
 

Computes the bounds of all MeshRenderers that hang from a parent transform.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Bounds CalculateBounds(
	this Transform self,
	Space space = Space.World,
	bool includeInactive = false
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Transform<br />Parent Transform to get all the MeshRenderers of</dd><dt>space (Optional)</dt><dd>Type: Space<br />Space in which to retrieve the bounds</dd><dt>includeInactive (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to include inactive MeshRenderers</dd></dl>

#### Return Value
Type: Bounds<br />Bounds containing all MeshRenderers

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Transform. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td><td>Transform is null</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_TransformExt_CalculateBounds">CalculateBounds Overload</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />