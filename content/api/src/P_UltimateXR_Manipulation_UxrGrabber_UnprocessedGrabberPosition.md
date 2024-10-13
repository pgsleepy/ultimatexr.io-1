# UxrGrabber.UnprocessedGrabberPosition Property 
 

The unprocessed grabber position. This is the position the grabber has taking only the hand controller tracking sensor into account. The hand position is updated by the <a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager</a> and may be forced into a certain position if the object being grabbed has constraints, altering also the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> position. Sometimes it is preferred to use the unprocessed grabber position.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public Vector3 UnprocessedGrabberPosition { get; }
```


#### Property Value
Type: Vector3

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />