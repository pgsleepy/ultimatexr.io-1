# TransformExt.GetNthNonNullTransformFromSet Method 
 

Gets the n-th non-null transform from a set of transforms.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Transform GetNthNonNullTransformFromSet(
	int n,
	params Transform[] transforms
)
```


#### Parameters
&nbsp;<dl><dt>n</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />How many non-null elements to skip until the next non-null is returned</dd><dt>transforms</dt><dd>Type: Transform[]<br />Variable number of transforms to check</dd></dl>

#### Return Value
Type: Transform<br />Returns the i-th non-null transform or null if none was found

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_TransformExt">TransformExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />