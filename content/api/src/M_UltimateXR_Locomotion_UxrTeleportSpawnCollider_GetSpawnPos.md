# UxrTeleportSpawnCollider.GetSpawnPos Method 
 

If there are two spawn positions (one side and other side) it will return the farthest one to the avatar. This is useful to simulate ladders and other spawn elements that will allow to go from one side to the other. Otherwise it will just return the single spawn position.

**Namespace:**&nbsp;<a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public Transform GetSpawnPos(
	UxrAvatar avatar,
	out Vector3 targetPosition
)
```


#### Parameters
&nbsp;<dl><dt>avatar</dt><dd>Type: <a href="T_UltimateXR_Avatar_UxrAvatar">UltimateXR.Avatar.UxrAvatar</a><br />Avatar</dd><dt>targetPosition</dt><dd>Type: Vector3<br />Where the target position should be rendered. This is useful when you want a user to teleport to a chair, where the spawn position would be the base of the chair, but the target should be rendered on top of the seat instead.</dd></dl>

#### Return Value
Type: Transform<br />Farthest spawn position to the player available

## See Also


#### Reference
<a href="T_UltimateXR_Locomotion_UxrTeleportSpawnCollider">UxrTeleportSpawnCollider Class</a><br /><a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion Namespace</a><br />