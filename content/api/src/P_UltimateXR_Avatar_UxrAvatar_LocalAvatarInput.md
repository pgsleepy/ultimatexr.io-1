# UxrAvatar.LocalAvatarInput Property 
 

Gets the controller input of the local avatar. If there is a local avatar present, the controller input is guaranteed to be non-null. If there is no input available, the controller input will simply return a dummy object that will generate no input events. It will return null if there is no local avatar currently in the scene.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrControllerInput LocalAvatarInput { get; }
```


#### Property Value
Type: <a href="T_UltimateXR_Devices_UxrControllerInput">UxrControllerInput</a>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />