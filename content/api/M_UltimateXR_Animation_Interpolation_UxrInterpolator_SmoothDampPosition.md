# UxrInterpolator.SmoothDampPosition Method 
 

Smooths a position value using the last position, new position and a smooth value between [0.0, 1.0].

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Vector3 SmoothDampPosition(
	Vector3 oldPos,
	Vector3 newPos,
	float smooth
)
```


#### Parameters
&nbsp;<dl><dt>oldPos</dt><dd>Type: Vector3<br />Old position</dd><dt>newPos</dt><dd>Type: Vector3<br />New position</dd><dt>smooth</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Smooth value [0.0, 1.0] where 0.0 is no smoothing and 1.0 is maximum smoothing</dd></dl>

#### Return Value
Type: Vector3<br />Smoothed position value

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolator">UxrInterpolator Class</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />