# UxrGrabbableObject.DistanceOffsetByAngle Field
 

How much a difference in angle will offset the distance at which we compute a grabbable object from a grabber. Objects that are not so well aligned with the grabber will be considered slightly farther away by(angle* DistanceOffsetByAngle) units, this means in the [0, 0.05] range. This will favor grabbing objects that are better aligned when there are two or more at similar distances.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public const float DistanceOffsetByAngle = 0.0002777778f
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabbableObject.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Field Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />