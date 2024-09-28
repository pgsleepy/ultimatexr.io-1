# UxrComponent.GetCachedComponent(*T*) Method 
 

Returns a Unity Component cached by type given that there is only one in the GameObject. If there is more than one, it will return the first that GetComponent``1() gets. This method is mainly used to avoid boilerplate code in property getters that return internally cached components.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Components">UltimateXR.Core.Components</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public T GetCachedComponent<T>()
where T : Component

```


#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Component type</dd></dl>

#### Return Value
Type: *T*<br />Cached component or null if there is none.

## See Also


#### Reference
<a href="T_UltimateXR_Core_Components_UxrComponent">UxrComponent Class</a><br /><a href="N_UltimateXR_Core_Components">UltimateXR.Core.Components Namespace</a><br />