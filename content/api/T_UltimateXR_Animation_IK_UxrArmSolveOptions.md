# UxrArmSolveOptions Enumeration
 

Different clavicle options supported by <a href="M_UltimateXR_Animation_IK_UxrArmIKSolver_SolveIKPass">SolveIKPass(UxrArmSolveOptions, UxrArmOverExtendMode)</a> when clavicle data is present in the rig.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_IK">UltimateXR.Animation.IK</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[FlagsAttribute]
public enum UxrArmSolveOptions
```

<a href="UltimateXR/Scripts/Animation/IK/UxrArmSolveOptions.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Animation.IK.UxrArmSolveOptions.None">**None**</td><td>0</td><td>No options.</td></tr><tr><td /><td target="F:UltimateXR.Animation.IK.UxrArmSolveOptions.ResetClavicle">**ResetClavicle**</td><td>1</td><td>Reset the clavicle position.</td></tr><tr><td /><td target="F:UltimateXR.Animation.IK.UxrArmSolveOptions.SolveClavicle">**SolveClavicle**</td><td>2</td><td>Solve the clavicle position. Can be used together with ResetClavicle so that the clavicle is solved without using the current position data.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_IK">UltimateXR.Animation.IK Namespace</a><br />