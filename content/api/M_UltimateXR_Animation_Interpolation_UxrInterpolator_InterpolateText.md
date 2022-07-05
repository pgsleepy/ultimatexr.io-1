# UxrInterpolator.InterpolateText Method (Single, Boolean, String, Object[])
 

Interpolates text using a typewriter effect

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static string InterpolateText(
	float t,
	bool isForUnityTextUI,
	string formatString,
	params Object[] formatStringArgs
)
```


#### Parameters
&nbsp;<dl><dt>t</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Interpolation t between range [0.0, 1.0]</dd><dt>isForUnityTextUI</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />If true, uses the rich text properties of the Unity UI text component to add invisible characters during interpolation. These invisible characters will help keeping the final text layout so that there are no line wraps or line jumps during the interpolation.</dd><dt>formatString</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />The format string (what would be the first parameter of <a href="https://docs.microsoft.com/dotnet/api/system.string.format#system-string-format(system-string-system-object())" target="_blank" rel="noopener noreferrer">Format(String, Object[])</a>)</dd><dt>formatStringArgs</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a>[]<br />
Start/end pairs that will be interpolated and fed into <a href="https://docs.microsoft.com/dotnet/api/system.string.format#system-string-format(system-string-system-object())" target="_blank" rel="noopener noreferrer">Format(String, Object[])</a>. These should be sequential pairs of values of the same type that represent the start value and the end value. For instance format could be "{0}:{1}" and args could be startArg0, endArg0, startArg1, endArg1. This will print 2 interpolated values (Arg0 and Arg1) whose start and end values are defined by the other 4 parameters.

The interpolation can detect numerical values (int/float) and use numerical interpolation instead of raw string interpolation. This can be useful for effects as seen in the examples.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a><br />Interpolated string

## Examples
Simple typewriter effect to write a sentence starting from empty: (t goes from 0.0 to 1.0) 
```
InterpolateText(t, true, "{0}", string.Empty, "Welcome to the Matrix!");
```


## Examples
Using format string args to create an increasing score animation. The numerical values are interpolated instead of using a typewriter effect. (t goes from 0.0 to 1.0). 
```
int finalScore = 999999;
InterpolateText(t, true, "Final score: {0:000000}", 0, finalScore);
```


## See Also


#### Reference
<a href="T_UltimateXR_Animation_Interpolation_UxrInterpolator">UxrInterpolator Class</a><br /><a href="Overload_UltimateXR_Animation_Interpolation_UxrInterpolator_InterpolateText">InterpolateText Overload</a><br /><a href="N_UltimateXR_Animation_Interpolation">UltimateXR.Animation.Interpolation Namespace</a><br />