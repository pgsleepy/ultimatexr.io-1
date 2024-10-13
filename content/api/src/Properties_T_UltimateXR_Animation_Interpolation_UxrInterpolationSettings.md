# UxrInterpolationSettings Properties
 

The <a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UxrInterpolationSettings</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_DelaySeconds">DelaySeconds</a></td><td>
Gets or sets the interpolation delay in seconds. The delay is usually relative to the time the object that it uses was enabled and specifies an initial waiting time before the actual interpolation will start.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_DelayUsingEndValue">DelayUsingEndValue</a></td><td>
Gets or sets whether to use the interpolation end value during the initial delay, if there is a <a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_DelaySeconds">DelaySeconds</a> value specified. By default the interpolation uses the start value during the initial delay.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_DurationSeconds">DurationSeconds</a></td><td>
Gets or sets the interpolation duration in seconds. In looped interpolations it tells the duration of a single loop.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_Easing">Easing</a></td><td>
Gets or sets the easing function to use by the interpolation.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_LoopedDurationSeconds">LoopedDurationSeconds</a></td><td>
Gets or sets the total animation duration in interpolations that use looping. The duration of a single loop is described by <a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_DurationSeconds">DurationSeconds</a>. A negative value tells to loop indefinitely.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_LoopMode">LoopMode</a></td><td>
Gets or sets if and how to loop the interpolation.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_UseUnscaledTime">UseUnscaledTime</a></td><td>
Gets or sets whether to use unscaled time (unscaledTime) or regular time time when interpolating. Regular time is affected by timeScale, which is normally used to pause the application or simulate slow motion effects.</td></tr></table>&nbsp;
<a href="#uxrinterpolationsettings-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolationSettings">UxrInterpolationSettings Class</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />