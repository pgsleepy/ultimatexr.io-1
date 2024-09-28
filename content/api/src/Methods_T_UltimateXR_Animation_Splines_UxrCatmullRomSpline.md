# UxrCatmullRomSpline Methods
 

The <a href="T_UltimateXR_Animation_Splines_UxrCatmullRomSpline">UxrCatmullRomSpline</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrCatmullRomSpline_Create">Create</a></td><td>
Creates a spline. If UsePrecomputedSampleCount > 0 it will also precompute samples in order to evaluate the spline using arc-length parameter.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Splines_UxrCatmullRomSpline_Evaluate">Evaluate(Single, Vector3)</a></td><td>
Evaluates the curve
 (Overrides <a href="M_UltimateXR_Animation_Splines_UxrSpline_Evaluate">UxrSpline.Evaluate(Single, Vector3)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Splines_UxrCatmullRomSpline_Evaluate_1">Evaluate(Vector3, Vector3, Vector3, Vector3, Single)</a></td><td>
Smoothly interpolates, using Catmull-Rom equations, from p1 to p2 using additional p0 and p3 points.</td></tr></table>&nbsp;
<a href="#uxrcatmullromspline-methods">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrcatmullromspline-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Splines_UxrCatmullRomSpline">UxrCatmullRomSpline Class</a><br /><a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines Namespace</a><br />