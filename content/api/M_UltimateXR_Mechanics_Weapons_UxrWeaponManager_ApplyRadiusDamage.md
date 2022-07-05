# UxrWeaponManager.ApplyRadiusDamage Method 
 

Applies radius damage to all elements around a source position.

**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void ApplyRadiusDamage(
	UxrActor actorSource,
	Vector3 position,
	float radius,
	float nearDamage,
	float farDamage
)
```


#### Parameters
&nbsp;<dl><dt>actorSource</dt><dd>Type: <a href="T_UltimateXR_Mechanics_Weapons_UxrActor">UltimateXR.Mechanics.Weapons.UxrActor</a><br />The actor that was responsible for the damage or null if there wasn't any</dd><dt>position</dt><dd>Type: Vector3<br />Explosion world position</dd><dt>radius</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Radius</dd><dt>nearDamage</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Damage at the very same point of the explosion</dd><dt>farDamage</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Damage at the distance set by *radius*</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrWeaponManager">UxrWeaponManager Class</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />