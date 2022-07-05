# UxrAsyncInitAbstractSingleton(*T*).InitInternal Method 
 

Initializes the singleton asynchronously. Calls <a href="M_UltimateXR_Core_Components_Singleton_UxrAsyncInitAbstractSingleton_1_InitAsync">InitAsync(CancellationToken)</a> which is required to be implemented in child classes.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Components_Singleton">UltimateXR.Core.Components.Singleton</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected override void InitInternal(
	Action initializedCallback
)
```


#### Parameters
&nbsp;<dl><dt>initializedCallback</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Callback required to run when the initialization finished.</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Components_Singleton_UxrAsyncInitAbstractSingleton_1">UxrAsyncInitAbstractSingleton(T) Class</a><br /><a href="N_UltimateXR_Core_Components_Singleton">UltimateXR.Core.Components.Singleton Namespace</a><br />