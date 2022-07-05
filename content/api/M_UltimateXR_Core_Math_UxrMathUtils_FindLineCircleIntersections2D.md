# UxrMathUtils.FindLineCircleIntersections2D Method 
 

Tries to find the intersection(s) between a 2D line and a 2D circle Code from: http://csharphelper.com/blog/2014/09/determine-where-a-line-intersects-a-circle-in-c/

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static int FindLineCircleIntersections2D(
	Vector2 linePoint1,
	Vector2 linePoint2,
	Vector2 circlePos,
	float radius,
	out Vector2 intersection1,
	out Vector2 intersection2
)
```


#### Parameters
&nbsp;<dl><dt>linePoint1</dt><dd>Type: Vector2<br />Point A in the line</dd><dt>linePoint2</dt><dd>Type: Vector2<br />Point B in the line</dd><dt>circlePos</dt><dd>Type: Vector2<br />Circle position</dd><dt>radius</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Circle radius</dd><dt>intersection1</dt><dd>Type: Vector2<br />Intersection 1 result, if it exists</dd><dt>intersection2</dt><dd>Type: Vector2<br />Intersection 2 result, if it exists</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a><br />Number of intersections found (0, 1 or 2)

## See Also


#### Reference
<a href="T_UltimateXR_Core_Math_UxrMathUtils">UxrMathUtils Class</a><br /><a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />