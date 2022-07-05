# ComponentExt.GetCommonRootComponentFromSet(*T*) Method 
 

From a set of components, returns which one of them has a transform that is a common root of all. The transform must be the transform of a component in the list.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static T GetCommonRootComponentFromSet<T>(
	params T[] components
)
where T : Component

```


#### Parameters
&nbsp;<dl><dt>components</dt><dd>Type: *T*[]<br />Components whose transforms to check</dd></dl>

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>\[Missing <typeparam name="T"/> documentation for "M:UltimateXR.Extensions.Unity.ComponentExt.GetCommonRootComponentFromSet``1(``0[])"\]</dd></dl>

#### Return Value
Type: *T*<br />Returns which transform from all the components passed as parameters is a common root of all. If no component has a transform that is a common root it returns null.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />