# UxrDamageEventArgs Constructor (UxrActor, UxrActor, Vector3, Single, Boolean)
 

Constructor for explosive damage.

**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrDamageEventArgs(
	UxrActor source,
	UxrActor target,
	Vector3 explosionPosition,
	float damage,
	bool dies
)
```


#### Parameters
&nbsp;<dl><dt>source</dt><dd>Type: <a href="T_UltimateXR_Mechanics_Weapons_UxrActor">UltimateXR.Mechanics.Weapons.UxrActor</a><br />Source actor or null if the damage didn't come from another actor</dd><dt>target</dt><dd>Type: <a href="T_UltimateXR_Mechanics_Weapons_UxrActor">UltimateXR.Mechanics.Weapons.UxrActor</a><br />Target actor</dd><dt>explosionPosition</dt><dd>Type: Vector3<br />Explosion world position</dd><dt>damage</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Damage amount</dd><dt>dies</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether the damage results in death</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs">UxrDamageEventArgs Class</a><br /><a href="Overload_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs__ctor">UxrDamageEventArgs Overload</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />