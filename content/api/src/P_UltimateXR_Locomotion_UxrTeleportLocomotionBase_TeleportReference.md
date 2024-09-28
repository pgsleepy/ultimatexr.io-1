# UxrTeleportLocomotionBase.TeleportReference Property 
 

Gets or sets the transform that will be used as reference for [!:TeleportPosition] and [!:TeleportDirection] to keep the relative positioning/orientation to while performing potential transitions, such as fades, before the actual teleporting. It is usually assigned the transform of the object that was hit with the destination raycast. The reference transform is used to make teleport transitions work correctly when the avatar is on a moving object. Without it, using absolute position and rotation only, would spawn the avatar with an incorrect offset due to the delay the transition introduces before the teleport.

**Namespace:**&nbsp;<a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected Transform TeleportReference { get; }
```


#### Property Value
Type: Transform

## See Also


#### Reference
<a href="T_UltimateXR_Locomotion_UxrTeleportLocomotionBase">UxrTeleportLocomotionBase Class</a><br /><a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion Namespace</a><br />