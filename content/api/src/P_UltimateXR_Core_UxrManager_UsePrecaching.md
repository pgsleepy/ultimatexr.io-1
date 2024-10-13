# UxrManager.UsePrecaching Property 
 

Gets or sets whether the manager uses pre-caching. Pre-caching happens right after the local avatar is enabled and consists of instantiating objects described in all <a href="T_UltimateXR_Core_Caching_IUxrPrecacheable">IUxrPrecacheable</a> components in the scene. These objects are placed right in front of the camera while it is faded black, so that they can't be seen, which forces their resources to be loaded in order to reduce hiccups when they need to be instantiated during the session. After that they are deleted and the scene is faded in.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core">UltimateXR.Core</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool UsePrecaching { get; set; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_UltimateXR_Core_UxrManager">UxrManager Class</a><br /><a href="N_UltimateXR_Core">UltimateXR.Core Namespace</a><br />