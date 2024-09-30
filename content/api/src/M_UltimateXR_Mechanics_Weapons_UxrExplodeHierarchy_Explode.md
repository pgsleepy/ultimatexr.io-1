# UxrExplodeHierarchy.Explode Method 
 

Explodes an object.

**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void Explode(
	GameObject root,
	float minExplodeVelocity,
	float maxExplodeVelocity,
	float secondsToExplode,
	float piecesLifeSeconds
)
```


#### Parameters
&nbsp;<dl><dt>root</dt><dd>Type: GameObject<br />Root object to explode</dd><dt>minExplodeVelocity</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Minimum random velocity assigned to the chunks</dd><dt>maxExplodeVelocity</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Maximum random velocity assigned to the chunks</dd><dt>secondsToExplode</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Seconds to wait before exploding</dd><dt>piecesLifeSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Life in seconds to assign to the chunks, after which they will be destroyed</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrExplodeHierarchy">UxrExplodeHierarchy Class</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />