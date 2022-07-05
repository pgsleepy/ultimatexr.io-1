# UxrSnapToHandMode Enumeration
 

Enumerates the ways a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> can snap to a <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public enum UxrSnapToHandMode
```

<a href="UltimateXR/Scripts/Manipulation/UxrSnapToHandMode.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrSnapToHandMode.DontSnap">**DontSnap**</td><td>0</td><td>Don't snap. The <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> is simply linked to the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> and from then on it will move along with it.</td></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrSnapToHandMode.PositionOnly">**PositionOnly**</td><td>1</td><td>Keep the current <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> orientation and snap the position.</td></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrSnapToHandMode.RotationOnly">**RotationOnly**</td><td>2</td><td>Keep the current <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> position and snap the rotation.</td></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrSnapToHandMode.PositionAndRotation">**PositionAndRotation**</td><td>3</td><td>Snap the <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> position and rotation to the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />