# UxrHapticClip Properties
 

The <a href="T_UltimateXR_Haptics_UxrHapticClip">UxrHapticClip</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_Clip">Clip</a></td><td>
Gets or sets the primary AudioClip to use as source for vibration. If the device does not support audio clips as sources or this value is null, <a href="P_UltimateXR_Haptics_UxrHapticClip_FallbackClipType">FallbackClipType</a> will be used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_ClipAmplitude">ClipAmplitude</a></td><td>
Gets or sets the amplitude to play <a href="P_UltimateXR_Haptics_UxrHapticClip_Clip">Clip</a>. Valid range is [0.0, 1.0].</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_FallbackAmplitude">FallbackAmplitude</a></td><td>
Gets or sets the amplitude to play the fallback clip (1.0f = use default).</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_FallbackClipType">FallbackClipType</a></td><td>
Gets or sets the fallback clip: A value from a pre-defined set of procedurally generated haptic feedback clips. It will be used if the current device can't play AudioClip as haptics or <a href="P_UltimateXR_Haptics_UxrHapticClip_Clip">Clip</a> is not assigned.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_FallbackDurationSeconds">FallbackDurationSeconds</a></td><td>
Gets or sets the duration in seconds of the fallback clip (negative = use predefined).</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_UxrHapticClip_HapticMode">HapticMode</a></td><td>
Gets or sets whether to replace or mix the clip with any current haptic feedback being played.</td></tr></table>&nbsp;
<a href="#uxrhapticclip-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Haptics_UxrHapticClip">UxrHapticClip Class</a><br /><a href="N_UltimateXR_Haptics">UltimateXR.Haptics Namespace</a><br />