# UxrControllerInput.FilterTwoAxesDeadZone Method 
 

Filters a two-axis input using a dead-zone. Values inside the dead-zone will remain (0.0, 0.0).

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected static Vector2 FilterTwoAxesDeadZone(
	Vector2 input2DPos,
	float deadZone
)
```


#### Parameters
&nbsp;<dl><dt>input2DPos</dt><dd>Type: Vector2<br />2-axis value</dd><dt>deadZone</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Dead-zone threshold [0.0, 1.0]</dd></dl>

#### Return Value
Type: Vector2<br />Filtered input

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />