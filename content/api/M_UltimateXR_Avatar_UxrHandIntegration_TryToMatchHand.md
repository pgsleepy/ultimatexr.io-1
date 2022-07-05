# UxrHandIntegration.TryToMatchHand Method 
 

Tries to align the hand integration transform to fit the current avatar's hand as best as possible.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool TryToMatchHand()
```


#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />True if the transform was changed, false otherwise. False means that the avatar hand was missing the required bone references, either fingers or the wrist

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrHandIntegration">UxrHandIntegration Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />