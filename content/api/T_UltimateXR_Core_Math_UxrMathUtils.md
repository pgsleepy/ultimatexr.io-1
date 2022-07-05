# UxrMathUtils Class
 

Contains math computations involving elements that do not belong to a specific class. Most math is available through extensions classes in namespaces such as UltimateXR.Extensions.System.Math or UltimateXR.Extensions.Unity.Math. Math related to animation is also available through classes in namespaces such as UltimateXR.Animation.IK, UltimateXRAnimation.Interpolation or UltimateXR.Animation.Splines. This class will contain math functionality that cannot be assigned to any extensions class.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Core.Math.UxrMathUtils<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static class UxrMathUtils
```

<a href="UltimateXR/Scripts/Core/Math/UxrMathUtils.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrMathUtils type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrMathUtils_ApplyAlignment">ApplyAlignment</a></td><td>
Applies to *position* and *rotation* the transformation to make a transform defined by *sourcePosition* and *sourceRotation* move and rotate to *targetPosition* and *targetRotation*.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrMathUtils_FindLineCircleIntersections2D">FindLineCircleIntersections2D</a></td><td>
Tries to find the intersection(s) between a 2D line and a 2D circle Code from: http://csharphelper.com/blog/2014/09/determine-where-a-line-intersects-a-circle-in-c/</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrMathUtils_IsBoxInsideBox">IsBoxInsideBox(Vector3, Quaternion, Vector3, Vector3, Vector3, BoxCollider, Vector3)</a></td><td>
Checks if a box is completely (all corners) inside a BoxCollider</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrMathUtils_IsBoxInsideBox_1">IsBoxInsideBox(Vector3, Quaternion, Vector3, Vector3, Vector3, Vector3, Quaternion, Vector3, Vector3, Vector3, Vector3)</a></td><td>
Checks if box1 is completely (all corners) inside box2</td></tr></table>&nbsp;
<a href="#uxrmathutils-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />