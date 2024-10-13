# Color32Ext.ToColor32 Method 
 

Transforms an array of bytes to a Color32 component by component. If there are not enough values to read, the remaining values are set to <a href="https://docs.microsoft.com/dotnet/api/system.byte.minvalue" target="_blank" rel="noopener noreferrer">MinValue</a> (0) for RGB and <a href="https://docs.microsoft.com/dotnet/api/system.byte.maxvalue" target="_blank" rel="noopener noreferrer">MaxValue</a> (255) for A.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Color32 ToColor32(
	this byte[] data
)
```


#### Parameters
&nbsp;<dl><dt>data</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">System.Byte</a>[]<br />Source data</dd></dl>

#### Return Value
Type: Color32<br />Result color

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type . When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Render_Color32Ext">Color32Ext Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render Namespace</a><br />