# MeshExt.CreateSpline Method 
 

Creates a Mesh tessellating a <a href="T_UltimateXR_Animation_Splines_UxrSpline">UxrSpline</a>

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Mesh CreateSpline(
	UxrSpline spline,
	int subdivisions,
	int sides,
	float radius
)
```


#### Parameters
&nbsp;<dl><dt>spline</dt><dd>Type: <a href="T_UltimateXR_Animation_Splines_UxrSpline">UltimateXR.Animation.Splines.UxrSpline</a><br />Spline to evaluate</dd><dt>subdivisions</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Number of subdivisions along the spline axis</dd><dt>sides</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Number of subdivisions in the section</dd><dt>radius</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Section radius</dd></dl>

#### Return Value
Type: Mesh<br />Mesh with the tessellated <a href="T_UltimateXR_Animation_Splines_UxrSpline">UxrSpline</a>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Render_MeshExt">MeshExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render Namespace</a><br />