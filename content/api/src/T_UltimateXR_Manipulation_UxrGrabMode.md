# UxrGrabMode Enumeration
 

What controller input we need to grab and release.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public enum UxrGrabMode
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabMode.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrGrabMode.GrabWhilePressed">**GrabWhilePressed**</td><td>0</td><td>Object is grabbed while the grab button is pressed.</td></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrGrabMode.GrabToggle">**GrabToggle**</td><td>1</td><td>One click on the grab button to grab, and another click to release it.</td></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrGrabMode.GrabAndKeepAlways">**GrabAndKeepAlways**</td><td>2</td><td>Object will keep being grabbed. It can be released manually through <a href="M_UltimateXR_Manipulation_UxrGrabbableObject_ReleaseGrabs">ReleaseGrabs(Boolean)</a>.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />