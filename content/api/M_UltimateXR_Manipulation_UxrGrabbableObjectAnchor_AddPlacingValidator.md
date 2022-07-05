# UxrGrabbableObjectAnchor.AddPlacingValidator Method 
 

Adds a placing validator to the internal list of validators. Placing validators are functions that are used in addition to compatibility tags in order to determine if a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> can be placed on the anchor. An object can be placed on an anchor if the tag is compatible and if it is allowed by all of the placing validators.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void AddPlacingValidator(
	Func<UxrGrabbableObject, bool> validator
)
```


#### Parameters
&nbsp;<dl><dt>validator</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">System.Func</a>(<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a>, <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)<br />New placing validator function to add. It takes an <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> as input and returns a boolean telling whether it can be placed or not</dd></dl>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td><td>The validator function is null</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />