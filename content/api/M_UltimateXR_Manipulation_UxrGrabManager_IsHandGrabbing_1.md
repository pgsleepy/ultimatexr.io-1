# UxrGrabManager.IsHandGrabbing Method (UxrAvatar, UxrGrabbableObject, UxrHandSide, Boolean)
 

Checks if an avatar's hand is grabbing a grabbable object.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool IsHandGrabbing(
	UxrAvatar avatar,
	UxrGrabbableObject grabbableObject,
	UxrHandSide handSide,
	bool alsoCheckDependentGrab = true
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />Avatar to check</dd><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />Object to check if it is being grabbed</dd><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Whether to check the left hand or right hand</dd><dt>alsoCheckDependentGrab (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to also check for any parent <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> that controls its direction and is physically connected.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the object is being grabbed by the avatar using the given hand

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="Overload_UltimateXR_Manipulation_UxrGrabManager_IsHandGrabbing">IsHandGrabbing Overload</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />