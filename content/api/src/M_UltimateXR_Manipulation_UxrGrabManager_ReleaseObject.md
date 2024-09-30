# UxrGrabManager.ReleaseObject Method 
 

Releases an object from a hand.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void ReleaseObject(
	UxrGrabber grabber,
	UxrGrabbableObject grabbableObject,
	bool propagateEvents
)
```


#### Parameters
&nbsp;<dl><dt>grabber</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabber">UltimateXR.Manipulation.UxrGrabber</a><br />If non-null it will tell the grabber that releases the object. If it is null any grabber that is holding the object will release it</dd><dt>grabbableObject</dt><dd>Type: <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UltimateXR.Manipulation.UxrGrabbableObject</a><br />Object being released</dd><dt>propagateEvents</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to propagate events</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />