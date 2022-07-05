# UxrAvatarRenderModes Enumeration
 

Flags describing the different avatar render elements that can be enabled/disabled separately.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[FlagsAttribute]
public enum UxrAvatarRenderModes
```

<a href="UltimateXR/Scripts/Avatar/UxrAvatarRenderModes.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Avatar.UxrAvatarRenderModes.None">**None**</td><td>0</td><td>Avatar isn't rendered.</td></tr><tr><td /><td target="F:UltimateXR.Avatar.UxrAvatarRenderModes.LeftController">**LeftController**</td><td>1</td><td>Left input controller 3D model is rendered. In single controller setups, both left and right will target the same controller.</td></tr><tr><td /><td target="F:UltimateXR.Avatar.UxrAvatarRenderModes.RightController">**RightController**</td><td>2</td><td>Right input controller 3D model is rendered. In single controller setups, both left and right will target the same controller.</td></tr><tr><td /><td target="F:UltimateXR.Avatar.UxrAvatarRenderModes.Avatar">**Avatar**</td><td>4</td><td>Avatar is rendered.</td></tr><tr><td /><td target="F:UltimateXR.Avatar.UxrAvatarRenderModes.AllControllers">**AllControllers**</td><td>3</td><td>All input controllers are rendered.</td></tr><tr><td /><td target="F:UltimateXR.Avatar.UxrAvatarRenderModes.AllControllersAndAvatar">**AllControllersAndAvatar**</td><td>7</td><td>All input controllers and the avatar are rendered.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />