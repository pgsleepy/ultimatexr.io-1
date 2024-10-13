# UxrGrabber.RequiredMirrorType Property 
 


Gets, based on <a href="P_UltimateXR_Manipulation_UxrGrabber_FingerDirection">FingerDirection</a> and <a href="P_UltimateXR_Manipulation_UxrGrabber_PalmOutDirection">PalmOutDirection</a>, which mirroring snap transforms should use with the grabber if they want to be mirrored.
 Snap transforms are GameObjects in <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> that determine where the hand should be placed during grabs by making the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a>'s transform align with the snap Transform. Mirroring snap transforms is used to quickly create/modify grab positions/orientations.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public TransformExt.MirrorType RequiredMirrorType { get; }
```


#### Return Value
Type: <a href="T_UltimateXR_Extensions_Unity_TransformExt_MirrorType">TransformExt.MirrorType</a><br />Which mirroring TransformExt.ApplyMirroring() should use

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />