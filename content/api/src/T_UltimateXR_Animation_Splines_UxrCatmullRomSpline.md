# UxrCatmullRomSpline Class
 

Catmull-Rom spline. It is used to interpolate smoothly between a set of points.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;<a href="T_UltimateXR_Animation_Splines_UxrSpline">UltimateXR.Animation.Splines.UxrSpline</a><br />&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Animation.Splines.UxrCatmullRomSpline<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrCatmullRomSpline : UxrSpline
```

<a href="UltimateXR/Scripts/Animation/Splines/UxrCatmullRomSpline.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrCatmullRomSpline type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrCatmullRomSpline__ctor">UxrCatmullRomSpline</a></td><td /></tr></table>&nbsp;
<a href="#uxrcatmullromspline-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Splines_UxrCatmullRomSpline_HasValidData">HasValidData</a></td><td>
Does the object contain valid data in order to evaluate the curve?
 (Overrides <a href="P_UltimateXR_Animation_Splines_UxrSpline_HasValidData">UxrSpline.HasValidData</a>.)</td></tr></table>&nbsp;
<a href="#uxrcatmullromspline-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrCatmullRomSpline_Create">Create</a></td><td>
Creates a spline. If UsePrecomputedSampleCount > 0 it will also precompute samples in order to evaluate the spline using arc-length parameter.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrCatmullRomSpline_Evaluate">Evaluate(Single, Vector3)</a></td><td>
Evaluates the curve
 (Overrides <a href="M_UltimateXR_Animation_Splines_UxrSpline_Evaluate">UxrSpline.Evaluate(Single, Vector3)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Splines_UxrCatmullRomSpline_Evaluate_1">Evaluate(Vector3, Vector3, Vector3, Vector3, Single)</a></td><td>
Smoothly interpolates, using Catmull-Rom equations, from p1 to p2 using additional p0 and p3 points.</td></tr></table>&nbsp;
<a href="#uxrcatmullromspline-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrcatmullromspline-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines Namespace</a><br />