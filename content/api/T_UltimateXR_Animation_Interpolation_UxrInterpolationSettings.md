# UxrInterpolationSettings Class
 

Describes the different parameters of an interpolation.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Animation.Interpolation.UxrInterpolationSettings<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrInterpolationSettings
```

<a href="UltimateXR/Scripts/Animation/Interpolation/UxrInterpolationSettings.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrInterpolationSettings type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolationSettings__ctor">UxrInterpolationSettings()</a></td><td>
Default constructor</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolationSettings__ctor_1">UxrInterpolationSettings(Single, Single, UxrEasing, UxrLoopMode, Single, Boolean, Boolean)</a></td><td>
UxrInterpolationSettings constructor.</td></tr></table>&nbsp;
<a href="#uxrinterpolationsettings-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_DelaySeconds">DelaySeconds</a></td><td>
Gets or sets the interpolation delay in seconds. The delay is usually relative to the time the object that it uses was enabled and specifies an initial waiting time before the actual interpolation will start.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_DelayUsingEndValue">DelayUsingEndValue</a></td><td>
Gets or sets whether to use the interpolation end value during the initial delay, if there is a <a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_DelaySeconds">DelaySeconds</a> value specified. By default the interpolation uses the start value during the initial delay.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_DurationSeconds">DurationSeconds</a></td><td>
Gets or sets the interpolation duration in seconds. In looped interpolations it tells the duration of a single loop.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_Easing">Easing</a></td><td>
Gets or sets the easing function to use by the interpolation.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_LoopedDurationSeconds">LoopedDurationSeconds</a></td><td>
Gets or sets the total animation duration in interpolations that use looping. The duration of a single loop is described by <a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_DurationSeconds">DurationSeconds</a>. A negative value tells to loop indefinitely.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_LoopMode">LoopMode</a></td><td>
Gets or sets if and how to loop the interpolation.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_UseUnscaledTime">UseUnscaledTime</a></td><td>
Gets or sets whether to use unscaled time (unscaledTime) or regular time time when interpolating. Regular time is affected by timeScale, which is normally used to pause the application or simulate slow motion effects.</td></tr></table>&nbsp;
<a href="#uxrinterpolationsettings-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_CheckInterpolationHasFinished">CheckInterpolationHasFinished</a></td><td>
Checks if the given time has surpassed the interpolation duration.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Interpolation_UxrInterpolationSettings_GetInterpolationFactor">GetInterpolationFactor</a></td><td>
Gets the T value used for linear interpolations given a time value.</td></tr></table>&nbsp;
<a href="#uxrinterpolationsettings-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrinterpolationsettings-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />