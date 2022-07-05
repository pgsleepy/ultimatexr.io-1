# UxrGrabManager.GetClosestGrabbableObject Method (UxrAvatar, UxrHandSide, UxrGrabbableObject, Int32)
 

Gets the closest grabbable object that can be grabbed by an <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> using the given hand.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool GetClosestGrabbableObject(
	UxrAvatar avatar,
	UxrHandSide handSide,
	out UxrGrabbableObject grabbableObject,
	out int grabPoint
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />Avatar to check</dd><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Whether to check the left hand or right hand</dd><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />Returns the closest grabbable object or null if none was found</dd><dt>grabPoint</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">System.Int32</a><br />Returns the grab point that can be grabbed</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether a grabbable object was found

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="Overload_UltimateXR_Manipulation_UxrGrabManager_GetClosestGrabbableObject">GetClosestGrabbableObject Overload</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />