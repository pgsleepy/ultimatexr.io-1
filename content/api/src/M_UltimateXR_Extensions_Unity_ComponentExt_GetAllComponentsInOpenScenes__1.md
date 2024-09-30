# ComponentExt.GetAllComponentsInOpenScenes(*T*) Method 
 

Gets a list of all components of the given type in the open scenes

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static List<T> GetAllComponentsInOpenScenes<T>(
	bool includeInactive
)
where T : Component

```


#### Parameters
&nbsp;<dl><dt>includeInactive</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to include inactive components or not</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Type of component to look for</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.list-1" target="_blank" rel="noopener noreferrer">List</a>(*T*)<br />List of components

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />