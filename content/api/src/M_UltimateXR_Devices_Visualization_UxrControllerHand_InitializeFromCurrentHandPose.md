# UxrControllerHand.InitializeFromCurrentHandPose Method 
 

Initializes the component when the controller hand is dynamic, such as when used through an <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> that changes poses.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void InitializeFromCurrentHandPose(
	UxrAvatar avatar,
	UxrHandSide handSide
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />Avatar the hand belongs to. The current enabled pose will be used to initialize the finger IK.</dd><dt>handSide</dt><dd>Type: <a href="T_UltimateXR_Core_UxrHandSide">UltimateXR.Core.UxrHandSide</a><br />Which hand side</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Visualization_UxrControllerHand">UxrControllerHand Class</a><br /><a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization Namespace</a><br />