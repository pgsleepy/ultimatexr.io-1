# UxrWeaponManager.DamageReceived Event
 

Event triggered right after the actor received damage. Setting <a href="M_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_Cancel">Cancel()</a> is not supported, since the damage was already taken.

**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public event EventHandler<UxrDamageEventArgs> DamageReceived
```

<a href="UltimateXR/Scripts/Mechanics/Weapons/UxrWeaponManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs">UxrDamageEventArgs</a>)

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrWeaponManager">UxrWeaponManager Class</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />