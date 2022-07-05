# TransformExt.ApplyMirroring Method (Transform, Vector3, Vector3, TransformExt.MirrorType, Boolean, Boolean)
 

Applies a mirroring to a transform.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void ApplyMirroring(
	this Transform self,
	Vector3 mirrorPosition,
	Vector3 mirrorNormal,
	TransformExt.MirrorType mirrorType,
	bool rotate = true,
	bool reposition = true
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Transform<br />Transform to apply mirroring to</dd><dt>mirrorPosition</dt><dd>Type: Vector3<br />Mirror position</dd><dt>mirrorNormal</dt><dd>Type: Vector3<br />Mirror normal</dd><dt>mirrorType</dt><dd>Type: <a href="T_UltimateXR_Extensions_Unity_TransformExt_MirrorType">UltimateXR.Extensions.Unity.TransformExt.MirrorType</a><br />Which vectors to mirror. See <a href="T_UltimateXR_Extensions_Unity_TransformExt_MirrorType">TransformExt.MirrorType</a></dd><dt>rotate (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to rotate the object</dd><dt>reposition (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to translate the object</dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Transform. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="Overload_UltimateXR_Extensions_Unity_TransformExt_ApplyMirroring">ApplyMirroring Overload</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />