# GameObjectExt.IsDynamic Method 
 

Checks whether the given GameObject is dynamic. Since isStatic doesn't work at runtime due to the static flags being editor-only, a workaround is required to try to find out if an object is dynamic or not.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool IsDynamic(
	this GameObject self
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: GameObject<br />GameObject to check</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the object appears to be dynamic

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type GameObject. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_GameObjectExt">GameObjectExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />