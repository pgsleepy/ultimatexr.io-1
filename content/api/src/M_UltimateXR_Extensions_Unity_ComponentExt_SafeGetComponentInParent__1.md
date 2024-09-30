# ComponentExt.SafeGetComponentInParent(*T*) Method 
 

Gets the Component of a given type in the GameObject or any of its parents. It also works on prefabs, where regular GetComponentInParent(Type, Boolean) will not work: https://issuetracker.unity3d.com/issues/getcomponentinparent-is-returning-null-when-the-gameobject-is-a-prefab

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static T SafeGetComponentInParent<T>(
	this Component self
)

```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Component<br />\[Missing <param name="self"/> documentation for "M:UltimateXR.Extensions.Unity.ComponentExt.SafeGetComponentInParent``1(UnityEngine.Component)"\]</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Component type to get</dd></dl>

#### Return Value
Type: *T*<br />Component in same GameObject or any of its parents. Null if it wasn't found

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Component. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />