# GameObjectExt.GetTopmostCanvas Method 
 

Gets the topmost <a href="T_UltimateXR_UI_UnityInputModule_UxrCanvas">UxrCanvas</a> upwards in the hierarchy if it exists.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrCanvas GetTopmostCanvas(
	this GameObject self
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: GameObject<br />The GameObject whose parents to look for</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_UI_UnityInputModule_UxrCanvas">UxrCanvas</a><br />The topmost <a href="T_UltimateXR_UI_UnityInputModule_UxrCanvas">UxrCanvas</a> component upwards in the hierarchy or null if it doesn't exists

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type GameObject. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_GameObjectExt">GameObjectExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />