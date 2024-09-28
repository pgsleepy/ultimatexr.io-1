# UxrGrabbableObjectAnchor.RemovePlacingValidator Method 
 

Removes a placing validator added using <a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_AddPlacingValidator">AddPlacingValidator(Func(UxrGrabbableObject, Boolean))</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void RemovePlacingValidator(
	Func<UxrGrabbableObject, bool> validator
)
```


#### Parameters
&nbsp;<dl><dt>validator</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">System.Func</a>(<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a>, <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)<br />Validator to remove</dd></dl>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td><td>the validator function is null</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />