# UxrWallFadeMode Enumeration
 

Enumerates the different working modes for <a href="T_UltimateXR_CameraUtils_UxrCameraWallFade">UxrCameraWallFade</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_CameraUtils">UltimateXR.CameraUtils</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public enum UxrWallFadeMode
```

<a href="UltimateXR/Scripts/CameraUtils/UxrWallFadeMode.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.CameraUtils.UxrWallFadeMode.AllowTraverse">**AllowTraverse**</td><td>0</td><td>Fades to black when getting inside the geometry but allows to traverse and exit through the other side.</td></tr><tr><td /><td target="F:UltimateXR.CameraUtils.UxrWallFadeMode.Strict">**Strict**</td><td>1</td><td>Doesn't allow traversing. The condition to fade-in back again is that the camera needs to have a straight line without any traversing between the point where the head got in and the current position.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_CameraUtils">UltimateXR.CameraUtils Namespace</a><br />