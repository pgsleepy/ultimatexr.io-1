# UxrController3DModel.GetElementsOriginalMaterials Method 
 

Gets the list of original shared materials of all objects that represent the given different controller input elements. The original materials are the shared materials that the input elements had at the beginning, before any modifications.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public IEnumerable<Material> GetElementsOriginalMaterials(
	UxrControllerElements elements
)
```

<a href="UltimateXR/Scripts/Devices/Visualization/UxrController3DModel.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>elements</dt><dd>Type: <a href="T_UltimateXR_Devices_UxrControllerElements">UltimateXR.Devices.UxrControllerElements</a><br />Flags representing the input elements to get the original shared materials from</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(Material)<br />List of original shared materials used by the objects representing the given controller input elements

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Visualization_UxrController3DModel">UxrController3DModel Class</a><br /><a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization Namespace</a><br />