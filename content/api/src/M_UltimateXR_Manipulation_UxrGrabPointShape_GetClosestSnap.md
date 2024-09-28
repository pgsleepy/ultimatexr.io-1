# UxrGrabPointShape.GetClosestSnap Method 
 

Gets the closest snap position and rotation that should be used when a <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> tries to a grab point, defined by transform used for snapping and the transform used to compute proximity.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract void GetClosestSnap(
	UxrGrabber grabber,
	Transform snapTransform,
	Transform distanceTransform,
	out Vector3 position,
	out Quaternion rotation
)
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabPointShape.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber to compute the snapping for</dd><dt>snapTransform</dt><dd>Type: Transform<br />The Transform on the grabbable object that is used to align to the grabber</dd><dt>distanceTransform</dt><dd>Type: Transform<br />The Transform on the grabbable object that is used to compute the distance to the grabber</dd><dt>position</dt><dd>Type: Vector3<br />Snap position</dd><dt>rotation</dt><dd>Type: Quaternion<br />Snap rotation</dd></dl>

#### Return Value
Type: <br />Distance value

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabPointShape">UxrGrabPointShape Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />