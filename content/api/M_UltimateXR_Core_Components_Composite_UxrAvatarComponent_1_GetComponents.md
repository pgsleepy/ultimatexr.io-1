# UxrAvatarComponent(*T*).GetComponents Method (UxrAvatar, Boolean)
 

Gets the components of a specific avatar.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Components_Composite">UltimateXR.Core.Components.Composite</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static IEnumerable<T> GetComponents(
	UxrAvatar avatar,
	bool includeDisabled = false
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />Avatar to get the components from</dd><dt>includeDisabled (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to include disabled components or not</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1">*T*</a>)<br />Components meeting the criteria

## Remarks
When using the *includeDisabled* parameter, components that have never been enabled are not returned. Components are automatically registered through their Awake() call, which is never called if the object has never been enabled. In this case it is recommended to resort to GetComponentsInChildren``1(Boolean).

## See Also


#### Reference
<a href="T_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1">UxrAvatarComponent(T) Class</a><br /><a href="Overload_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1_GetComponents">GetComponents Overload</a><br /><a href="N_UltimateXR_Core_Components_Composite">UltimateXR.Core.Components.Composite Namespace</a><br />