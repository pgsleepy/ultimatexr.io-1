# UxrAvatarMode Enumeration
 

Avatar operating modes.

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public enum UxrAvatarMode
```

<a href="UltimateXR/Scripts/Avatar/UxrAvatarMode.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Avatar.UxrAvatarMode.Local">**Local**</td><td>0</td><td>Avatar is updated automatically using input/tracking components. This is the avatar that is controlled by the user.</td></tr><tr><td /><td target="F:UltimateXR.Avatar.UxrAvatarMode.UpdateExternally">**UpdateExternally**</td><td>1</td><td>"Puppet" mode where avatar is not updated internally and transforms are required to be updated externally instead. These are remote avatars controlled by other users in a networking scenario, avatars in replay mode, etc...</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />