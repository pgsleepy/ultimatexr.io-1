# TransformExt.ApplyAlignment Method (Transform, Transform, Transform, Boolean, Boolean, Single)
 

Applies the transformation required to make *sourceAlign* align with *targetAlign*.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void ApplyAlignment(
	this Transform self,
	Transform sourceAlign,
	Transform targetAlign,
	bool rotate = true,
	bool translate = true,
	float t = 1f
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Transform<br />Transform to apply the alignment to</dd><dt>sourceAlign</dt><dd>Type: Transform<br />Source reference that will try to match *targetAlign*</dd><dt>targetAlign</dt><dd>Type: Transform<br />Target reference</dd><dt>rotate (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Allows to control whether to rotate or not</dd><dt>translate (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Allows to control whether to translate or not</dd><dt>t (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Optional interpolation value</dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Transform. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_TransformExt_ApplyAlignment">ApplyAlignment Overload</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />