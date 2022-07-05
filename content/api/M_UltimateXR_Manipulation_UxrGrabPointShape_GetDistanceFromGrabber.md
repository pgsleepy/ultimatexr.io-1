# UxrGrabPointShape.GetDistanceFromGrabber Method 
 

Gets the distance from a <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> to a grab point, defined by transform used for snapping and the transform used to compute proximity.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract float GetDistanceFromGrabber(
	UxrGrabber grabber,
	Transform snapTransform,
	Transform distanceTransform
)
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabPointShape.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />Grabber to compute the distance from</dd><dt>snapTransform</dt><dd>Type: Transform<br />The Transform on the grabbable object that is used to align to the grabber</dd><dt>distanceTransform</dt><dd>Type: Transform<br />The Transform on the grabbable object that is used to compute the distance to the grabber</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a><br />Distance value

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabPointShape">UxrGrabPointShape Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />