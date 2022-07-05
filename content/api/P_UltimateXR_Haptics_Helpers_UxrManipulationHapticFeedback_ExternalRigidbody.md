# UxrManipulationHapticFeedback.ExternalRigidbody Property 
 

In continuous manipulation mode, allows to get the linear/rotational speed from an external rigidbody instead of the object being grabbed. This is useful to emulate the tension propagated by a connected physics-driven object. For example, in a flail weapon, the grabbable object is the handle which also has the <a href="T_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback">UxrManipulationHapticFeedback</a> component, but the physics-driven head is the object that should be monitored for haptics to generate better results.

**Namespace:**&nbsp;<a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public Rigidbody ExternalRigidbody { get; set; }
```


#### Property Value
Type: Rigidbody

## See Also


#### Reference
<a href="T_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback">UxrManipulationHapticFeedback Class</a><br /><a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers Namespace</a><br />