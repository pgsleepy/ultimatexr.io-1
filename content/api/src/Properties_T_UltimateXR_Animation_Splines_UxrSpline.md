# UxrSpline Properties
 

The <a href="T_UltimateXR_Animation_Splines_UxrSpline">UxrSpline</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Splines_UxrSpline_ArcLength">ArcLength</a></td><td>
Gets the actual length of the curve.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Splines_UxrSpline_HasValidArcLengthData">HasValidArcLengthData</a></td><td>
Gets whether the spline contains valid data in order to evaluate the curve using arc length parametrization.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Splines_UxrSpline_HasValidData">HasValidData</a></td><td>
Gets whether the spline contains valid data in order to evaluate the curve.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Splines_UxrSpline_UsePrecomputedSampleCount">UsePrecomputedSampleCount</a></td><td>
Number of curve samples that are going to be pre-computed in order to enable arc length parametrization. This method must be called before creating the spline and will enable EvaluateUsingArcLength() calls. For short splines the default value is enough. For very long splines it may be required to increase the sample count.</td></tr></table>&nbsp;
<a href="#uxrspline-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Splines_UxrSpline">UxrSpline Class</a><br /><a href="N_UltimateXR_Animation_Splines">UltimateXR.Animation.Splines Namespace</a><br />