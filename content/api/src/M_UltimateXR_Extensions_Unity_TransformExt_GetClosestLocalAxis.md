# TransformExt.GetClosestLocalAxis Method 
 

Gets a vector representing the axis from a Transform that has the smallest angle to a given world-space vector. The returned vector may be any of the three positive or negative axes in local space of the Transform.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Vector3 GetClosestLocalAxis(
	this Transform self,
	Vector3 vector
)
```


#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Transform<br />Transform whose axes to compare to the given vector</dd><dt>vector</dt><dd>Type: Vector3<br />World-space vector to compare</dd></dl>

#### Return Value
Type: Vector3<br />A local-space vector representing the positive or negative axis with the smallest angle to the vector

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Transform. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />