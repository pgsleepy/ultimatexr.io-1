# UxrStandardAvatarController.CanHandInteractWithUI Method 
 

Gets if the hand is available to interact with UI elements, such as pressing buttons. This is used by the UI interaction system to ignore the hand for these events. For example, when the hand is holding an object it could be desirable to not let it interact inadvertently with any user interface.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Controllers">UltimateXR.Avatar.Controllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public override bool CanHandInteractWithUI(
	UxrHandSide handSide
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which hand to check</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the given handed can interact with user interfaces

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_Controllers_UxrStandardAvatarController">UxrStandardAvatarController Class</a><br /><a href="N_UltimateXR_Avatar_Controllers">UltimateXR.Avatar.Controllers Namespace</a><br />