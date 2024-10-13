# GameObjectExt.IsInLayerMask Method 
 

Checks whether the given GameObject's layer is present in a layer mask.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool IsInLayerMask(
	this GameObject self,
	LayerMask layerMask
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: GameObject<br />The GameObject whose layer to check</dd><dt>layerMask</dt><dd>Type: LayerMask<br />The layer mask to check against</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the GameObject's layer is present in the layer mask

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type GameObject. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_GameObjectExt">GameObjectExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />