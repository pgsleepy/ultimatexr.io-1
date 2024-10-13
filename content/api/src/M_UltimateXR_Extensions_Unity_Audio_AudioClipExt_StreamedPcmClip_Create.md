# AudioClipExt.StreamedPcmClip.Create Method 
 

Creates a <a href="T_UltimateXR_Extensions_Unity_Audio_AudioClipExt_StreamedPcmClip">AudioClipExt.StreamedPcmClip</a> object from a data stream.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static AudioClipExt.StreamedPcmClip Create(
	Stream pcmStream,
	string clipName = "pcm"
)
```


#### Parameters
&nbsp;<dl><dt>pcmStream</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">System.IO.Stream</a><br />Source data stream</dd><dt>clipName (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Name that will be assigned to the clip</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Extensions_Unity_Audio_AudioClipExt_StreamedPcmClip">AudioClipExt.StreamedPcmClip</a><br /><a href="T_UltimateXR_Extensions_Unity_Audio_AudioClipExt_StreamedPcmClip">AudioClipExt.StreamedPcmClip</a> describing the PCM audio clip

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td><td>The bit depth is not supported</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Audio_AudioClipExt_StreamedPcmClip">AudioClipExt.StreamedPcmClip Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Audio">UltimateXR.Extensions.Unity.Audio Namespace</a><br />