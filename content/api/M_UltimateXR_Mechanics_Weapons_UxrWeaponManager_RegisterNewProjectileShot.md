# UxrWeaponManager.RegisterNewProjectileShot Method 
 

Registers a new projectile shot so that it gets automatically update by the manager from that moment until it hits something or gets destroyed.

**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void RegisterNewProjectileShot(
	UxrProjectileSource projectileSource,
	UxrShotDescriptor shotDescriptor,
	Vector3 position,
	Quaternion orientation
)
```


#### Parameters
&nbsp;<dl><dt>projectileSource</dt><dd>Type: <a href="T_UltimateXR_Mechanics_Weapons_UxrProjectileSource">UltimateXR.Mechanics.Weapons.UxrProjectileSource</a><br />Projectile source</dd><dt>shotDescriptor</dt><dd>Type: <a href="T_UltimateXR_Mechanics_Weapons_UxrShotDescriptor">UltimateXR.Mechanics.Weapons.UxrShotDescriptor</a><br />Shot descriptor</dd><dt>position</dt><dd>Type: Vector3<br />World position</dd><dt>orientation</dt><dd>Type: Quaternion<br />World orientation. The projectile will travel in the forward (z) direction</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrWeaponManager">UxrWeaponManager Class</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />