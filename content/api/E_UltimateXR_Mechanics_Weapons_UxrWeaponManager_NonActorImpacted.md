# UxrWeaponManager.NonActorImpacted Event
 

Event called whenever there was a projectile impact but no <a href="T_UltimateXR_Mechanics_Weapons_UxrActor">UxrActor</a> was involved. Mostly hits against the scenario that still generate decals, FX, etc.

**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public event EventHandler<UxrNonDamagingImpactEventArgs> NonActorImpacted
```

<a href="UltimateXR/Scripts/Mechanics/Weapons/UxrWeaponManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Mechanics_Weapons_UxrNonDamagingImpactEventArgs">UxrNonDamagingImpactEventArgs</a>)

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrWeaponManager">UxrWeaponManager Class</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />