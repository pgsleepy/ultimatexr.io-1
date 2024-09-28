# TransformExt.DestroyImmediateAllChildren(*T*) Method (Transform, Boolean)
 

Destroys all children GameObjects using DestroyImmediate() that have a given component type.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void DestroyImmediateAllChildren<T>(
	this Transform transform,
	bool includeInactive = true
)
where T : Component

```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform to destroy all children from</dd><dt>includeInactive (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Also delete children with inactive components?</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>\[Missing <typeparam name="T"/> documentation for "M:UltimateXR.Extensions.Unity.TransformExt.DestroyImmediateAllChildren``1(UnityEngine.Transform,System.Boolean)"\]</dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Transform. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_TransformExt_DestroyImmediateAllChildren">DestroyImmediateAllChildren Overload</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />