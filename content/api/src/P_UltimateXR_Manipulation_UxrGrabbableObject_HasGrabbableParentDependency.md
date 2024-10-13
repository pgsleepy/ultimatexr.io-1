# UxrGrabbableObject.HasGrabbableParentDependency Property 
 

Gets if the object has constraints and at the same time has a grabbable parent. This means that the object can either be considered as another grabbable part of the parent object or a separate grabbable object that is just attached to the parent object but has no control over it. The former are movable parts in a composite object while the latter are independent grabbable objects that happen to be in the hierarchy.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool HasGrabbableParentDependency { get; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />