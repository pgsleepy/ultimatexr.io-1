# UxrAvatar.GetAvatarChain Method 
 

Gets the <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> component chain. This is the avatar's own <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> component followed by all parent prefab <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> components up to the root parent prefab. If the avatar is an instance the first component will reference its own component instantiated in the scene, not the avatar component in the source prefab. <a href="M_UltimateXR_Avatar_UxrAvatar_GetPrefabGuidChain">GetPrefabGuidChain()</a> can be used to traverse the prefab chain information including the source prefab.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public IEnumerable<UxrAvatar> GetAvatarChain()
```

<a href="UltimateXR/Scripts/Avatar/UxrAvatar.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a>)<br />Upwards <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> component chain. If the avatar is a prefab itself, it will be the first component in the list. If the avatar is an instance, the first component will be the one from the instance instead of the source prefab. Components cannot store references to their own prefab because on instantiation they will automatically point to the instantiated component. <a href="M_UltimateXR_Avatar_UxrAvatar_GetPrefabGuidChain">GetPrefabGuidChain()</a> can be used to traverse the prefab information chain, including the source prefab.

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br /><a href="M_UltimateXR_Avatar_UxrAvatar_GetPrefabGuidChain">UxrAvatar.GetPrefabGuidChain()</a><br />