# IUxrPrecacheable Interface
 

The IUxrPrecacheable interface is used in components that need to create instances at runtime and want a way to precache them so that there aren't any hiccups on instantiation. The <a href="T_UltimateXR_Core_UxrManager">UxrManager</a> will look for IUxrPrecacheable components when the scene is loaded and will instantiate and render the objects specified by <a href="P_UltimateXR_Core_Caching_IUxrPrecacheable_PrecachedInstances">PrecachedInstances</a> a certain amount of frames while the screen is still black. This will make sure their resources (meshes, textures) are cached in order to minimize instantiation delays.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Caching">UltimateXR.Core.Caching</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public interface IUxrPrecacheable
```

<a href="UltimateXR/Scripts/Core/Caching/IUxrPrecacheable.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The IUxrPrecacheable type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Caching_IUxrPrecacheable_PrecachedInstances">PrecachedInstances</a></td><td>
Gets the GameObjects, usually prefabs, that will be precached when the scene is loaded.</td></tr></table>&nbsp;
<a href="#iuxrprecacheable-interface">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Core_Caching">UltimateXR.Core.Caching Namespace</a><br />