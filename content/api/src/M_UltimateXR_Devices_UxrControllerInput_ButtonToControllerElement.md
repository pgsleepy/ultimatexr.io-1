# UxrControllerInput.ButtonToControllerElement Method 
 

Gets the controller element (<a href="T_UltimateXR_Devices_UxrControllerElements">UxrControllerElements</a>) enum value given a controller button ( <a href="T_UltimateXR_Devices_UxrInputButtons">UxrInputButtons</a>) enum value.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrControllerElements ButtonToControllerElement(
	UxrInputButtons button
)
```


#### Parameters
&nbsp;<dl><dt>button</dt><dd>Type: <a href="T_UltimateXR_Devices_UxrInputButtons">UltimateXR.Devices.UxrInputButtons</a><br />Controller button to get the element enum value for</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Devices_UxrControllerElements">UxrControllerElements</a><br />Controller element enum value representing the controller button, or <a href="T_UltimateXR_Devices_UxrControllerElements">None</a> if it doesn't exist

## Remarks
This method doesn't support using flag composition for [!:button], use only a single value

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />