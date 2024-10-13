# UxrCatmullRomSpline.Evaluate Method (Vector3, Vector3, Vector3, Vector3, Single)
 

Smoothly interpolates, using Catmull-Rom equations, from p1 to p2 using additional p0 and p3 points.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Vector3 Evaluate(
	Vector3 p0,
	Vector3 p1,
	Vector3 p2,
	Vector3 p3,
	float t
)
```


#### Parameters
&nbsp;<dl><dt>p0</dt><dd>Type: Vector3<br />Point 0</dd><dt>p1</dt><dd>Type: Vector3<br />Point 1</dd><dt>p2</dt><dd>Type: Vector3<br />Point 2</dd><dt>p3</dt><dd>Type: Vector3<br />Point 3</dd><dt>t</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Interpolation parameter [0.0f, 1.0f]</dd></dl>

#### Return Value
Type: Vector3<br />Interpolated point

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Splines_UxrCatmullRomSpline">UxrCatmullRomSpline Class</a><br /><a href="Overload_UltimateXR_Animation_Splines_UxrCatmullRomSpline_Evaluate">Evaluate Overload</a><br /><a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines Namespace</a><br />