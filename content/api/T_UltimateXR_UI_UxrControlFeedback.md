# UxrControlFeedback Class
 

Defines sound and haptic feedback for pressing events. Each <a href="T_UltimateXR_UI_UnityInputModule_Controls_UxrControlInput">UxrControlInput</a>, for instance, has a UxrControlFeedback for each of its click/down/up events.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.UI.UxrControlFeedback<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_UI">UltimateXR.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrControlFeedback
```

<a href="UltimateXR/Scripts/UI/UxrControlFeedback.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrControlFeedback type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UxrControlFeedback__ctor">UxrControlFeedback()</a></td><td>
Default constructor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UxrControlFeedback__ctor_1">UxrControlFeedback(UxrHapticClip)</a></td><td>
Constructor allowing to define the haptic clip.</td></tr></table>&nbsp;
<a href="#uxrcontrolfeedback-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrControlFeedback_AudioClip">AudioClip</a></td><td>
Gets or sets the audio clip.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrControlFeedback_AudioVolume">AudioVolume</a></td><td>
Gets or sets the audio volume.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrControlFeedback_HapticClip">HapticClip</a></td><td>
Gets or sets the haptic clip.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UxrControlFeedback_UseAudio3D">UseAudio3D</a></td><td>
Gets or sets whether to use 3D audio.</td></tr></table>&nbsp;
<a href="#uxrcontrolfeedback-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_UI_UxrControlFeedback_FeedbackClick">FeedbackClick</a></td><td>
Regular click</td></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_UI_UxrControlFeedback_FeedbackDown">FeedbackDown</a></td><td>
Subtle click</td></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_UI_UxrControlFeedback_FeedbackUp">FeedbackUp</a></td><td>
No feedback</td></tr></table>&nbsp;
<a href="#uxrcontrolfeedback-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrcontrolfeedback-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_UI">UltimateXR.UI Namespace</a><br />