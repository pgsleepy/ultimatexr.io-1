# TransformExt.GetCommonRootTransformFromSet Method 
 

From a set of transforms, returns which one of them is a common root of all if any. The transform must be in the list itself.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Transform GetCommonRootTransformFromSet(
	params Transform[] transforms
)
```


#### Parameters
&nbsp;<dl><dt>transforms</dt><dd>Type: Transform[]<br />Variable number of transforms to check</dd></dl>

#### Return Value
Type: Transform<br />Returns which transform from all the ones passed as parameters is a common root from all. If no one is a common root it will return null.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />