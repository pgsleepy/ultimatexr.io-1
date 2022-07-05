# UxrHapticClip Class
 

Describes a haptic clip. It is possible to specify an audio clip whose wave will be used as a primary source for the vibration, but also a secondary clip type that will be used if the device doesn't support audio clips as haptic feedback. If no audio clip is specified, the fallback clip type will always be used.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Haptics.UxrHapticClip<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Haptics">UltimateXR.Haptics</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrHapticClip
```

<a href="UltimateXR/Scripts/Haptics/UxrHapticClip.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrHapticClip type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Haptics_UxrHapticClip__ctor">UxrHapticClip</a></td><td>
Public constructor.</td></tr></table>&nbsp;
<a href="#uxrhapticclip-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_Clip">Clip</a></td><td>
Gets or sets the primary AudioClip to use as source for vibration. If the device does not support audio clips as sources or this value is null, <a href="P_UltimateXR_Haptics_UxrHapticClip_FallbackClipType">FallbackClipType</a> will be used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_ClipAmplitude">ClipAmplitude</a></td><td>
Gets or sets the amplitude to play <a href="P_UltimateXR_Haptics_UxrHapticClip_Clip">Clip</a>. Valid range is [0.0, 1.0].</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_FallbackAmplitude">FallbackAmplitude</a></td><td>
Gets or sets the amplitude to play the fallback clip (1.0f = use default).</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_FallbackClipType">FallbackClipType</a></td><td>
Gets or sets the fallback clip: A value from a pre-defined set of procedurally generated haptic feedback clips. It will be used if the current device can't play AudioClip as haptics or <a href="P_UltimateXR_Haptics_UxrHapticClip_Clip">Clip</a> is not assigned.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_FallbackDurationSeconds">FallbackDurationSeconds</a></td><td>
Gets or sets the duration in seconds of the fallback clip (negative = use predefined).</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_HapticMode">HapticMode</a></td><td>
Gets or sets whether to replace or mix the clip with any current haptic feedback being played.</td></tr></table>&nbsp;
<a href="#uxrhapticclip-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrhapticclip-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Haptics">UltimateXR.Haptics Namespace</a><br />