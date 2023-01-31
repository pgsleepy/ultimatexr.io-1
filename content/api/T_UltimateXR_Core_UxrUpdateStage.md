# UxrUpdateStage Enumeration
 

Enumerates the different update stages during a frame used by <a href="T_UltimateXR_Core_UxrManager">UxrManager</a> events.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core">UltimateXR.Core</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public enum UxrUpdateStage
```

<a href="UltimateXR/Scripts/Core/UxrUpdateStage.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Core.UxrUpdateStage.Update">**Update**</td><td>0</td><td>Stage where avatars update their internal state, input, tracking and locomotion (root avatar Transform).</td></tr><tr><td /><td target="F:UltimateXR.Core.UxrUpdateStage.AvatarUsingTracking">**AvatarUsingTracking**</td><td>1</td><td>Stage where avatars update bones that are tracked using tracking devices.</td></tr><tr><td /><td target="F:UltimateXR.Core.UxrUpdateStage.Manipulation">**Manipulation**</td><td>2</td><td>Stage where the <a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager</a> updates grabbable objects and avatar hand position/orientation constraints as a result of manipulation.</td></tr><tr><td /><td target="F:UltimateXR.Core.UxrUpdateStage.Animation">**Animation**</td><td>3</td><td>Stage where avatars update the different Transform components for hand animation and poses.</td></tr><tr><td /><td target="F:UltimateXR.Core.UxrUpdateStage.PostProcess">**PostProcess**</td><td>4</td><td>Post-processing stage where post-processing such as Inverse Kinematics are applied.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Core">UltimateXR.Core Namespace</a><br />