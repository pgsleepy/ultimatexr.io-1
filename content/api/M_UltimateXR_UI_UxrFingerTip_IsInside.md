# UxrFingerTip.IsInside Method 
 

Checks whether the finger tip is inside a box collider.

**Namespace:**&nbsp;<a href="N_UltimateXR_UI">UltimateXR.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public bool IsInside(
	BoxCollider box,
	bool allowWhileGrabbing = false
)
```


#### Parameters
&nbsp;<dl><dt>box</dt><dd>Type: BoxCollider<br />Box collider</dd><dt>allowWhileGrabbing (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether the operation that the check is for allows the hand to be grabbing something. This means if the value is false and the hand is currently grabbing, it will always return false no matter the finger tip is inside the box or not</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the finger tip is inside

## See Also


#### Reference
<a href="T_UltimateXR_UI_UxrFingerTip">UxrFingerTip Class</a><br /><a href="N_UltimateXR_UI">UltimateXR.UI Namespace</a><br />