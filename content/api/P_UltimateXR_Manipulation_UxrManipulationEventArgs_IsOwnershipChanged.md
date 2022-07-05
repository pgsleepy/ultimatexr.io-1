# UxrManipulationEventArgs.IsOwnershipChanged Property 
 

Gets whether the manipulation changed an object's ownership. This is if <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsMultiHands">IsMultiHands</a> and <a href="P_UltimateXR_Manipulation_UxrManipulationEventArgs_IsSwitchHands">IsSwitchHands</a> are both false. This is useful to filter events that should be processed only if an object switched from belonging to an avatar to not belonging anymore or vice-versa, ignoring events where the object was already in the hands of an avatar and is just switching hands or being grabbed with more than one hand.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool IsOwnershipChanged { get; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />