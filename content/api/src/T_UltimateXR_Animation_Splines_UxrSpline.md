# UxrSpline Class
 

Spline base class. We use splines to interpolate smoothly between a set of points. Interpolation can be done using the traditional t [0.0f, 1.0f] parameter and also distances to allow arc-length evaluation.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Animation.Splines.UxrSpline<br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_Splines_UxrCatmullRomSpline">UltimateXR.Animation.Splines.UxrCatmullRomSpline</a><br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract class UxrSpline
```

<a href="UltimateXR/Scripts/Animation/Splines/UxrSpline.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrSpline type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrSpline__ctor">UxrSpline</a></td><td /></tr></table>&nbsp;
<a href="#uxrspline-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Splines_UxrSpline_ArcLength">ArcLength</a></td><td>
Gets the actual length of the curve.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Splines_UxrSpline_HasValidArcLengthData">HasValidArcLengthData</a></td><td>
Gets whether the spline contains valid data in order to evaluate the curve using arc length parametrization.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Splines_UxrSpline_HasValidData">HasValidData</a></td><td>
Gets whether the spline contains valid data in order to evaluate the curve.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Splines_UxrSpline_UsePrecomputedSampleCount">UsePrecomputedSampleCount</a></td><td>
Number of curve samples that are going to be pre-computed in order to enable arc length parametrization. This method must be called before creating the spline and will enable EvaluateUsingArcLength() calls. For short splines the default value is enough. For very long splines it may be required to increase the sample count.</td></tr></table>&nbsp;
<a href="#uxrspline-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrSpline_ComputeArcLengthSamples">ComputeArcLengthSamples</a></td><td>
Pre-computes a set of samples that will enable to evaluate the curve using arc-length parametrization.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrSpline_Evaluate">Evaluate(Single, Vector3)</a></td><td>
Evaluates the curve</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrSpline_Evaluate_1">Evaluate(Single, Vector3, Vector3)</a></td><td>
Evaluates the curve</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrSpline_EvaluateUsingArcLength">EvaluateUsingArcLength(Single, Vector3)</a></td><td>
Evaluates the curve using arc-length parametrization</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrSpline_EvaluateUsingArcLength_1">EvaluateUsingArcLength(Single, Vector3, Vector3)</a></td><td>
Evaluates the curve using arc-length parametrization</td></tr></table>&nbsp;
<a href="#uxrspline-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrspline-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines Namespace</a><br />