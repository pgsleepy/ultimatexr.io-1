# TransformExt.GetTransformsWithoutChildren Method 
 

Gets all the transforms that don't have any children.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void GetTransformsWithoutChildren(
	Transform transform,
	ref List<Transform> transforms
)
```


#### Parameters
&nbsp;<dl><dt>transform</dt><dd>Type: Transform<br />Transform where to start looking for. This method will only traverse the transform itself and its sub-hierarchy</dd><dt>transforms</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.list-1" target="_blank" rel="noopener noreferrer">System.Collections.Generic.List</a>(Transform)<br />A list where all the found transforms without children will be appended</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />