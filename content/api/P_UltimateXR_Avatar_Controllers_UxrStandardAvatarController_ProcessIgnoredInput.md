# UxrStandardAvatarController.ProcessIgnoredInput Property 
 

Gets or sets whether to also process ignored input for events. Input can be ignored by using <a href="M_UltimateXR_Devices_UxrControllerInput_SetIgnoreControllerInput">SetIgnoreControllerInput(UxrHandSide, Boolean)</a> and ProcessIgnoredInput tells whether to actually ignore it or not. By default the ignored input is also processed, which may seem counterintuitive but most of the time the input is ignored when specific objects are being grabbed. Since the avatar controller is responsible for triggering the grab events depending on user input, it was chosen that the default behaviour would be to also process ignored input.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Controllers">UltimateXR.Avatar.Controllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool ProcessIgnoredInput { get; set; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Controllers_UxrStandardAvatarController">UxrStandardAvatarController Class</a><br /><a href="N_UltimateXR_Avatar_Controllers">UltimateXR.Avatar.Controllers Namespace</a><br />