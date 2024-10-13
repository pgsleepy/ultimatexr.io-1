# UxrGrabPointInfo.GetCompatibleGripPoseInfos Method 
 

Gets all the grip pose infos that can be used with the given avatar.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public IEnumerable<UxrGripPoseInfo> GetCompatibleGripPoseInfos(
	UxrAvatar avatar,
	bool usePrefabInheritance = true
)
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabPointInfo.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />The avatar to check</dd><dt>usePrefabInheritance (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to check for compatibility using all the parents in the prefab hierarchy</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_UltimateXR_Manipulation_UxrGripPoseInfo">UxrGripPoseInfo</a>)<br />List of <a href="T_UltimateXR_Manipulation_UxrGripPoseInfo">UxrGripPoseInfo</a> that are potentially compatible with the given avatar

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabPointInfo">UxrGrabPointInfo Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />