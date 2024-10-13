# UxrPointerInputModule.FindFirstRaycast Method 
 

Finds the raycast that will be used to find out which UI element the user interacted with.

**Namespace:**&nbsp;<a href="N_UltimateXR_UI_UnityInputModule">UltimateXR.UI.UnityInputModule</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
protected static RaycastResult FindFirstRaycast(
	List<RaycastResult> candidates,
	UxrPointerEventData pointerEventData
)
```


#### Parameters
&nbsp;<dl><dt>candidates</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.generic.list-1" target="_blank" rel="noopener noreferrer">System.Collections.Generic.List</a>(RaycastResult)<br />List of candidates, sorted in increasing distance order</dd><dt>pointerEventData</dt><dd>Type: <a href="T_UltimateXR_UI_UnityInputModule_UxrPointerEventData">UltimateXR.UI.UnityInputModule.UxrPointerEventData</a><br />Pointer data</dd></dl>

#### Return Value
Type: RaycastResult<br />The raycast that describes the UI element that the user interacted with

## See Also


#### Reference
<a href="T_UltimateXR_UI_UnityInputModule_UxrPointerInputModule">UxrPointerInputModule Class</a><br /><a href="N_UltimateXR_UI_UnityInputModule">UltimateXR.UI.UnityInputModule Namespace</a><br />