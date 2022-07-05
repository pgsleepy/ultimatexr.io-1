# UxrGrabManager.GetGrabbedObjectAngularVelocity Method 
 

Gets the current world-space angular velocity, in degrees per second, of an object that is being grabbed.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public Vector3 GetGrabbedObjectAngularVelocity(
	UxrGrabbableObject grabbableObject,
	bool smooth = true
)
```


#### Parameters
&nbsp;<dl><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />Grabbable object</dd><dt>smooth (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to smooth the velocity using a previous frame data window for improved behavior</dd></dl>

#### Return Value
Type: Vector3<br />Angular velocity in world-space euler angle degrees per second

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />