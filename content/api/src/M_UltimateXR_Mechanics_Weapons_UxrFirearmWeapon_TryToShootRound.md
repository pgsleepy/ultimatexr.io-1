# UxrFirearmWeapon.TryToShootRound Method 
 

Tries to shoot a round using the given trigger.

**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool TryToShootRound(
	int triggerIndex
)
```


#### Parameters
&nbsp;<dl><dt>triggerIndex</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Index in _triggers</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether a round was shot. If no round was shot it can mean that:
&nbsp;<ul><li>The trigger index references an entry that doesn't exist.</li><li>The firearm isn't loaded.</li><li>The firearm doesn't have any ammo left or there is no magazine attached.</li><li>The shoot frequency doesn't allow to shoot again so quickly.</li></ul>

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrFirearmWeapon">UxrFirearmWeapon Class</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />