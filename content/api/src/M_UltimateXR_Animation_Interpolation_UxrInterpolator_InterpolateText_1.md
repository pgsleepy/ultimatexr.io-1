# UxrInterpolator.InterpolateText Method (String, String, Single, Boolean)
 

Interpolates text using a typewriter effect.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static string InterpolateText(
	string startText,
	string endText,
	float t,
	bool isForUnityTextUI
)
```


#### Parameters
&nbsp;<dl><dt>startText</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Start text</dd><dt>endText</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />End text</dd><dt>t</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Interpolation t between range [0.0, 1.0]</dd><dt>isForUnityTextUI</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />If true, uses the rich text properties of the Unity UI text component to add invisible characters during interpolation. These invisible characters will help keeping the final text layout so that there are no line wraps or line jumps during the interpolation.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a><br />Interpolated text

## Remarks
See <a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_InterpolateText">InterpolateText(Single, Boolean, String, Object[])</a> to use a format string and arguments for more advanced interpolation and numerical string interpolation.

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolator">UxrInterpolator Class</a><br /><a href="Overload_UltimateXR_Animation_Interpolation_UxrInterpolator_InterpolateText">InterpolateText Overload</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />