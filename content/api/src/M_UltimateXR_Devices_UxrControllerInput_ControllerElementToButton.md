# UxrControllerInput.ControllerElementToButton Method 
 

Gets the controller button (<a href="T_UltimateXR_Devices_UxrInputButtons">UxrInputButtons</a>) enum value given a controller element ( <a href="T_UltimateXR_Devices_UxrControllerElements">UxrControllerElements</a>) enum value.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrInputButtons ControllerElementToButton(
	UxrControllerElements element
)
```


#### Parameters
&nbsp;<dl><dt>element</dt><dd>Type: <a href="T_UltimateXR_Devices_UxrControllerElements">UltimateXR.Devices.UxrControllerElements</a><br />Controller element to get the button enum value for</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Devices_UxrInputButtons">UxrInputButtons</a><br />Button enum value representing the controller element, or <a href="T_UltimateXR_Devices_UxrInputButtons">None</a> if it doesn't exist

## Remarks
This method doesn't support using flag composition for [!:element], use only a single value

## See Also


#### Reference
<a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput Class</a><br /><a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />