# UxrAvatar.GetControllerInputForward Method 
 

Gets the transform in the given hand controller that points forward. The controller needs to have a 3D model assigned to it, which all controllers in the framework have.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public Transform GetControllerInputForward(
	UxrHandSide handSide
)
```


#### Parameters
&nbsp;<dl><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Hand to get the forward of</dd></dl>

#### Return Value
Type: Transform<br />The transform describing the controller forward direction (use forward to get the actual vector). Null if there is no input controller available or if it doesn't have a 3D model assigned.

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />