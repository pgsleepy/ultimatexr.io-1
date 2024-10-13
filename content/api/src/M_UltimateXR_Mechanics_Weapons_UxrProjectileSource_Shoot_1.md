# UxrProjectileSource.Shoot Method (Int32, Vector3, Quaternion)
 

Shoots a round, overriding the source position and orientation.

**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void Shoot(
	int shotTypeIndex,
	Vector3 projectileSource,
	Quaternion projectileOrientation
)
```


#### Parameters
&nbsp;<dl><dt>shotTypeIndex</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Index in <a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileSource_ShotTypes">ShotTypes</a>, telling which shot type to fire</dd><dt>projectileSource</dt><dd>Type: Vector3<br />Source shot position</dd><dt>projectileOrientation</dt><dd>Type: Quaternion<br />Shot source orientation. The shot will be fired in the z (forward) direction</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrProjectileSource">UxrProjectileSource Class</a><br /><a href="Overload_UltimateXR_Mechanics_Weapons_UxrProjectileSource_Shoot">Shoot Overload</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />