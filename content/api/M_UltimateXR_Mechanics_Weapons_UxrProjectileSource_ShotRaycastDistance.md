# UxrProjectileSource.ShotRaycastDistance Method 
 

Gets the distance where a shot using the current position and orientation will impact.

**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public float ShotRaycastDistance(
	int shotTypeIndex
)
```


#### Parameters
&nbsp;<dl><dt>shotTypeIndex</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Index in <a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileSource_ShotTypes">ShotTypes</a>, telling which shot type to use</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a><br />Shot distance or a negative value telling the current target is out of range

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrProjectileSource">UxrProjectileSource Class</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />