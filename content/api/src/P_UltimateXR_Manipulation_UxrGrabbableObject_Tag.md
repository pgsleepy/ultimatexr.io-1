# UxrGrabbableObject.Tag Property 
 

String that identifies which <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> components are compatible for placement. A <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> can be placed on an <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> only if:
&nbsp;<ul><li>Tag is null or empty and <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> has no compatible tags set</li><li>Tag has a value that is in one of the compatible tag entries in <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a></li></ul>&nbsp;
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public string Tag { get; set; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />