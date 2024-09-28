# UxrComponent(*TP*, *TC*).GetParentChildren Method 
 

Gets the children from a specific parent.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Components">UltimateXR.Core.Components</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static IEnumerable<TC> GetParentChildren(
	TP parent,
	bool includeDisabled = false
)
```


#### Parameters
&nbsp;<dl><dt>parent</dt><dd>Type: <a href="T_UltimateXR_Core_Components_UxrComponent_2">*TP*</a><br />Parent to get the components from</dd><dt>includeDisabled (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to include disabled components or not</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_UltimateXR_Core_Components_UxrComponent_2">*TC*</a>)<br />Components meeting the criteria

## Remarks
When using the *includeDisabled* parameter, components that have never been enabled are not returned. Components are automatically registered through their Awake() call, which is never called if the object has never been enabled. In this case it is recommended to resort to GetComponentsInChildren``1(Boolean).

## See Also


#### Reference
<a href="T_UltimateXR_Core_Components_UxrComponent_2">UxrComponent(TP, TC) Class</a><br /><a href="N_UltimateXR_Core_Components">UltimateXR.Core.Components Namespace</a><br />