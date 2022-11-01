# GameObjectExt.GetBounds Method 
 

Calculates the GameObjectBounds. The bounds are the Renderer's bounds if there is one in the GameObject. Otherwise it will encapsulate all renderers found in the children. If *forceRecurseIntoChildren* is true, it will also encapsulate all renderers found in the children no matter if the GameObject has a Renderer component or not.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Bounds GetBounds(
	this GameObject self,
	bool forceRecurseIntoChildren
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: GameObject<br />The GameObject whose Bounds to get</dd><dt>forceRecurseIntoChildren</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to also encapsulate all renderers found in the children no matter if the GameObject has a Renderer component or not</dd></dl>

#### Return Value
Type: Bounds<br />Bounds in world-space.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type GameObject. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_GameObjectExt">GameObjectExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />