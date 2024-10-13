# UxrImpactDecal.CheckCreateDecal Method 
 

Checks if a given impact should generate a decal, and creates it if necessary.

**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrImpactDecal CheckCreateDecal(
	RaycastHit raycastHit,
	LayerMask checkLayerMask,
	UxrImpactDecal prefabDecal,
	float lifeTime,
	float fadeOutDurationSeconds,
	bool createDoubleSidedDecal = false,
	float doubleSidedDecalThickness = 0.001f
)
```


#### Parameters
&nbsp;<dl><dt>raycastHit</dt><dd>Type: RaycastHit<br />Impact raycast hit</dd><dt>checkLayerMask</dt><dd>Type: LayerMask<br />Layer mask that should generate a decal</dd><dt>prefabDecal</dt><dd>Type: <a href="T_UltimateXR_Mechanics_Weapons_UxrImpactDecal">UltimateXR.Mechanics.Weapons.UxrImpactDecal</a><br />The decal prefab to use when if the decal should be generated</dd><dt>lifeTime</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />New decal life time, after which it will fade out and be destroyed</dd><dt>fadeOutDurationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Decal fade out duration in seconds</dd><dt>createDoubleSidedDecal (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to also generate a secondary decal for the other side of the impact</dd><dt>doubleSidedDecalThickness (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Surface thickness to consider when generating the secondary decal for the other side</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Mechanics_Weapons_UxrImpactDecal">UxrImpactDecal</a><br />New decal or null if no decal was generated

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrImpactDecal">UxrImpactDecal Class</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />