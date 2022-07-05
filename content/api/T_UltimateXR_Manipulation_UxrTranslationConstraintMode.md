# UxrTranslationConstraintMode Enumeration
 

Enumerates the ways a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> position can be constrained when being manipulated.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public enum UxrTranslationConstraintMode
```

<a href="UltimateXR/Scripts/Manipulation/UxrTranslationConstraintMode.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrTranslationConstraintMode.Free">**Free**</td><td>0</td><td>No constraints.</td></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrTranslationConstraintMode.RestrictToBox">**RestrictToBox**</td><td>1</td><td>The <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> position is constrained to a box defined by a BoxCollider.</td></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrTranslationConstraintMode.RestrictLocalOffset">**RestrictLocalOffset**</td><td>2</td><td>The local position is constrained between minimum and maximum offsets.</td></tr><tr><td /><td target="F:UltimateXR.Manipulation.UxrTranslationConstraintMode.RestrictToSphere">**RestrictToSphere**</td><td>3</td><td>The <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> position is constrained to a sphere defined by a SphereCollider.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />