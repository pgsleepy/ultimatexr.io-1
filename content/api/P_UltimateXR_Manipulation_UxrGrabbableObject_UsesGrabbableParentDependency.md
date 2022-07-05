# UxrGrabbableObject.UsesGrabbableParentDependency Property 
 


Gets whether the object has a parent dependency (<a href="P_UltimateXR_Manipulation_UxrGrabbableObject_HasGrabbableParentDependency">HasGrabbableParentDependency</a> is true) and is using it through _ignoreGrabbableParentDependency in the inspector.

When a grabbable object that has position/rotation constraints hangs from a hierarchy where another grabbable object is somewhere above, the child grabbable object can either be:
&nbsp;<ul><li>Dependent (_ignoreGrabbableParentDependency is false): The object is considered as another part of the parent grabbable object. It will be constrained by its parent object and can optionally also control the parent's direction when both are being grabbed.</li><li>Independent (_ignoreGrabbableParentDependency is true): The object is considered as a separate entity where it just happens to be placed under the hierarchy.</li></ul>&nbsp;
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool UsesGrabbableParentDependency { get; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />