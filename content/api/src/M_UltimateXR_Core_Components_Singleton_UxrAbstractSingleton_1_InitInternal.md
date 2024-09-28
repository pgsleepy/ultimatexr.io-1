# UxrAbstractSingleton(*T*).InitInternal Method 
 

The default internal initialization. Child classes can override this method if they require initialization code.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Components_Singleton">UltimateXR.Core.Components.Singleton</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected virtual void InitInternal(
	Action initializedCallback
)
```


#### Parameters
&nbsp;<dl><dt>initializedCallback</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a><br />Callback called when the initialization finished.</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1">UxrAbstractSingleton(T) Class</a><br /><a href="N_UltimateXR_Core_Components_Singleton">UltimateXR.Core.Components.Singleton Namespace</a><br />