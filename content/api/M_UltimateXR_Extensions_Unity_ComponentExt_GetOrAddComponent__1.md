# ComponentExt.GetOrAddComponent(*T*) Method 
 

Gets the Component of a given type. If it doesn't exist, it is added to the GameObject.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static T GetOrAddComponent<T>(
	this Component self
)
where T : Component

```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Component<br />Component whose GameObject will be used to retrieve or add the given component type to</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Component type to get or add</dd></dl>

#### Return Value
Type: *T*<br />Existing component or newly added if it didn't exist before

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Component. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />