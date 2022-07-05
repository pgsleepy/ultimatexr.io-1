# UxrGrabManager.TryRelease Method 
 

Tries to release something.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrGrabber TryRelease(
	UxrAvatar avatar,
	UxrHandSide handSide
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />Avatar that tried to release something</dd><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Whether it is trying to release using the left hand or right hand</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a><br />The grabber component that released an object, if an object was released.

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />