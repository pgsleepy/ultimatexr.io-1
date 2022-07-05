# UxrManipulationHapticFeedback.MaxSpeed Property 
 

Gets or sets the maximum manipulation speed, which is the object travel speed while being manipulated above which the haptics will be sent with <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxFrequency">MaxFrequency</a> and <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxAmplitude">MaxAmplitude</a>. Speeds down to <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinSpeed">MinSpeed</a> will send haptic feedback with frequency and amplitude values linearly decreasing down to <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinFrequency">MinFrequency</a> and <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinAmplitude">MinAmplitude</a>. This allows to send haptic feedback with an intensity/frequency depending on how fast the object is being moved.

**Namespace:**&nbsp;<a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public float MaxSpeed { get; set; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>

## See Also


#### Reference
<a href="T_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback">UxrManipulationHapticFeedback Class</a><br /><a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers Namespace</a><br />