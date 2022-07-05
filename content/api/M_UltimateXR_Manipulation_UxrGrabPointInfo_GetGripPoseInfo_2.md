# UxrGrabPointInfo.GetGripPoseInfo Method (UxrAvatar, Boolean)
 

Gets the grip pose info for the given avatar instance or prefab.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrGripPoseInfo GetGripPoseInfo(
	UxrAvatar avatar,
	bool usePrefabInheritance = true
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />Avatar to get the grip pose info for</dd><dt>usePrefabInheritance (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />If the given avatar prefab info wasn't found, whether to look for the pose info for any prefab above the first prefab in the hierarchy. This allows child prefabs to inherit poses and manipulation settings of parent prefabs</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Manipulation_UxrGripPoseInfo">UxrGripPoseInfo</a><br />Grip pose info. If [!:usePrefabInheritance] is false it will return null if the given prefab wasn't found. If [!:usePrefabInheritance] is true, it will return <a href="P_UltimateXR_Manipulation_UxrGrabPointInfo_DefaultGripPoseInfo">DefaultGripPoseInfo</a> if nor the prefab nor a parent prefab entry were found

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabPointInfo">UxrGrabPointInfo Class</a><br /><a href="Overload_UltimateXR_Manipulation_UxrGrabPointInfo_GetGripPoseInfo">GetGripPoseInfo Overload</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />