# UxrGrabbableObject.FirstGrabPointIsMain Property 
 

Gets or sets whether the first grab point in the list is the main grab in objects with more than one grab point. When an object is grabbed with both hands, the main grab controls the actual position while the secondary grab controls the direction. Set it to true in objects like a rifle, where the trigger hand should be the first grab in order to keep the object in place, and the front grab will control the aiming direction. If false, the grab point order is irrelevant and the hand that grabbed the object first will be considered as the main grab.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool FirstGrabPointIsMain { get; set; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />