# UxrAvatar.GetPrefabGuidChain Method 
 

Gets the prefab GUID chain. This is the source prefab Guid followed by all parent prefab GUIDs up to the root parent prefab.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public IEnumerable<string> GetPrefabGuidChain()
```

<a href="UltimateXR/Scripts/Avatar/UxrAvatar.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)<br />Upwards prefab GUID chain. If the avatar is a prefab itself, it will be the first GUID in the list.

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br /><a href="M_UltimateXR_Avatar_UxrAvatar_GetAvatarChain">UxrAvatar.GetAvatarChain()</a><br />