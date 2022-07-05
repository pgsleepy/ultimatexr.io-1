# UxrAvatar.GetAllHandPoses Method 
 

Gets all hand poses in the avatar, including those inherited from parent prefabs. If more than one pose exists with the same name, only the overriden will be in the results.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public IEnumerable<UxrHandPoseAsset> GetAllHandPoses()
```


#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UxrHandPoseAsset</a>)<br />List of all poses in the avatar and any of its parent prefabs

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />