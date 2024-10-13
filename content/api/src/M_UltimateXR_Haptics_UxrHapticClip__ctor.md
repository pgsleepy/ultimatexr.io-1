# UxrHapticClip Constructor 
 

Public constructor.

**Namespace:**&nbsp;<a href="N_UltimateXR_Haptics">UltimateXR.Haptics</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrHapticClip(
	AudioClip clip = null,
	UxrHapticClipType fallbackClipType = UxrHapticClipType.None,
	UxrHapticMode hapticMode = UxrHapticMode.Mix,
	float clipAmplitude = 1f,
	float fallbackAmplitude = 1f,
	float fallbackDurationSeconds = -1f
)
```


#### Parameters
&nbsp;<dl><dt>clip (Optional)</dt><dd>Type: AudioClip<br />The audio clip</dd><dt>fallbackClipType (Optional)</dt><dd>Type: <a href="T_UltimateXR_Haptics_UxrHapticClipType">UltimateXR.Haptics.UxrHapticClipType</a><br />The fallback clip if the primary audio clip is null</dd><dt>hapticMode (Optional)</dt><dd>Type: <a href="T_UltimateXR_Haptics_UxrHapticMode">UltimateXR.Haptics.UxrHapticMode</a><br />The haptic mixing mode</dd><dt>clipAmplitude (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The amplitude of the audio clip</dd><dt>fallbackAmplitude (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The amplitude of the fallback clip</dd><dt>fallbackDurationSeconds (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The duration in seconds of the fallback clip (negative = use predefined)</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Haptics_UxrHapticClip">UxrHapticClip Class</a><br /><a href="N_UltimateXR_Haptics">UltimateXR.Haptics Namespace</a><br />