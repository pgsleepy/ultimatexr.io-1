# UxrInterpolator Class
 

Provides functionality to interpolate between values using a wide range of interpolation modes. This class also provides functionality to interpolate between 2 strings using a typewriter effect.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Animation.Interpolation.UxrInterpolator<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static class UxrInterpolator
```

<a href="UltimateXR/Scripts/Animation/Interpolation/UxrInterpolator.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrInterpolator type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_GetInterpolationFactor">GetInterpolationFactor</a></td><td>
Gets the T value used for linear interpolations like Vector3.Lerp or Quaternion.Slerp using easing and loop.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate_1">Interpolate(Single, Single, Single, UxrEasing)</a></td><td>
Interpolates between two floating point values using a t between range [0.0, 1.0] and a given easing.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate_2">Interpolate(Single, Single, Single, UxrInterpolationSettings)</a></td><td>
Interpolates between two floating point values.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate_4">Interpolate(Quaternion, Quaternion, Single, UxrEasing)</a></td><td>
Spherically interpolates (SLERP) between two quaternions using a t between range [0.0, 1.0] and a given easing.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate_5">Interpolate(Quaternion, Quaternion, Single, UxrInterpolationSettings)</a></td><td>
Interpolates between two Quaternion values. The interpolation uses SLERP.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate_6">Interpolate(Vector3, Vector3, Single, UxrEasing)</a></td><td>
Interpolates between two points using a t between range [0.0, 1.0] and a given easing.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate_8">Interpolate(Vector4, Vector4, Single, UxrInterpolationSettings)</a></td><td>
Interpolates between two Vector4 values</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate">Interpolate(Single, Single, Single, Single, Single, UxrEasing, UxrLoopMode, Single, Boolean)</a></td><td>
Interpolates between two floating point values.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate_3">Interpolate(Quaternion, Quaternion, Single, Single, Single, UxrEasing, UxrLoopMode, Single, Boolean)</a></td><td>
Interpolates between two Quaternion values. The interpolation uses SLERP.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_Interpolate_7">Interpolate(Vector4, Vector4, Single, Single, Single, UxrEasing, UxrLoopMode, Single, Boolean)</a></td><td>
Interpolates between two Vector4 values</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")![Code example](media/CodeExample.png "Code example")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_InterpolateText">InterpolateText(Single, Boolean, String, Object[])</a></td><td>
Interpolates text using a typewriter effect</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_InterpolateText_1">InterpolateText(String, String, Single, Boolean)</a></td><td>
Interpolates text using a typewriter effect.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_SmoothDamp">SmoothDamp</a></td><td>
Smooths a float value using the previous value, new value and a smooth value between [0.0, 1.0].</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_SmoothDampPosition">SmoothDampPosition</a></td><td>
Smooths a position value using the last position, new position and a smooth value between [0.0, 1.0].</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_SmoothDampRotation">SmoothDampRotation</a></td><td>
Smooths a rotation value using the last rotation, new rotation and a smooth value between [0.0, 1.0]. This tries to do something similar to SmoothDamp(Vector3, Vector3, Vector3, Single, Single) but for rotations.</td></tr></table>&nbsp;
<a href="#uxrinterpolator-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />