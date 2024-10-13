# UxrGrabbableObject.Placed Event
 

Event called right after the object was placed. An object is placed when the last grip is released and there is a compatible <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> near enough to place it on. The grab event parameters use the same values as <a href="E_UltimateXR_Manipulation_IUxrGrabbable_Placed">Placed</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public event EventHandler<UxrManipulationEventArgs> Placed
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabbableObject.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Manipulation_UxrManipulationEventArgs">UxrManipulationEventArgs</a>)

#### Implements
<a href="E_UltimateXR_Manipulation_IUxrGrabbable_Placed">IUxrGrabbable.Placed</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />