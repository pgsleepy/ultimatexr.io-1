# UxrManipulationHapticFeedback.MinSpeed Property 
 

Gets or sets the minimum manipulation speed, which is the object travel speed while being manipulated below which the haptics will be sent with <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinFrequency">MinFrequency</a> and <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinAmplitude">MinAmplitude</a>. Speeds up to <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxSpeed">MaxSpeed</a> will send haptic feedback with frequency and amplitude values linearly increasing up to <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxFrequency">MaxFrequency</a> and <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxAmplitude">MaxAmplitude</a>. This allows to send haptic feedback with an intensity/frequency depending on how fast the object is being moved.

**Namespace:**&nbsp;<a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public float MinSpeed { get; set; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>

## See Also


#### Reference
<a href="T_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback">UxrManipulationHapticFeedback Class</a><br /><a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers Namespace</a><br />