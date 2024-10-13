# UxrCompass.SetTargetTemporary Method (Transform, UxrCompassDisplayMode, Single)
 

Sets the current target. When the object gets into sight it will show the icon described by *displayMode* during a limited amount of time (TemporaryDurationSeconds). The timer is reset each time the object gets out of sight.

**Namespace:**&nbsp;<a href="N_UltimateXR_Guides">UltimateXR.Guides</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void SetTargetTemporary(
	Transform target,
	UxrCompassDisplayMode displayMode = UxrCompassDisplayMode.OnlyCompass,
	float iconScale = 1f
)
```


#### Parameters
&nbsp;<dl><dt>target</dt><dd>Type: Transform<br />New target or null to stop</dd><dt>displayMode (Optional)</dt><dd>Type: <a href="T_UltimateXR_Guides_UxrCompassDisplayMode">UltimateXR.Guides.UxrCompassDisplayMode</a><br />The display mode</dd><dt>iconScale (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />The icon size multiplier</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Guides_UxrCompass">UxrCompass Class</a><br /><a href="Overload_UltimateXR_Guides_UxrCompass_SetTargetTemporary">SetTargetTemporary Overload</a><br /><a href="N_UltimateXR_Guides">UltimateXR.Guides Namespace</a><br />