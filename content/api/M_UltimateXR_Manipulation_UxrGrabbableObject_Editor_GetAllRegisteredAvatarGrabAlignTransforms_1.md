# UxrGrabbableObject.Editor_GetAllRegisteredAvatarGrabAlignTransforms Method (UxrAvatar, Boolean, Boolean, Boolean)
 

Gets all the align transforms of a given registered avatar and hand.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public IEnumerable<Transform> Editor_GetAllRegisteredAvatarGrabAlignTransforms(
	UxrAvatar avatar,
	bool includeLeft,
	bool includeRight,
	bool usePrefabInheritance
)
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabbableObject.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />The avatar instance or prefab</dd><dt>includeLeft</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to include snap transforms for the left hand</dd><dt>includeRight</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to include snap transforms for the right hand</dd><dt>usePrefabInheritance</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to get the transforms for</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(Transform)<br />List of align transforms

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="Overload_UltimateXR_Manipulation_UxrGrabbableObject_Editor_GetAllRegisteredAvatarGrabAlignTransforms">Editor_GetAllRegisteredAvatarGrabAlignTransforms Overload</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />