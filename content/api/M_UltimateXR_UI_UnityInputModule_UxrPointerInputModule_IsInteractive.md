# UxrPointerInputModule.IsInteractive Method 
 

Checks if the given GameObject is interactive. An object is considered interactive when it is able to handle either pointer down or pointer drag events. Since other non-interactive objects may be in front of interactive objects, the whole hierarchy is checked up to the first <a href="T_UltimateXR_UI_UnityInputModule_UxrCanvas">UxrCanvas</a> found.

**Namespace:**&nbsp;<a href="N_UltimateXR_UI_UnityInputModule">UltimateXR.UI.UnityInputModule</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static bool IsInteractive(
	GameObject uiGameObject
)
```


#### Parameters
&nbsp;<dl><dt>uiGameObject</dt><dd>Type: GameObject<br />UI GameObject to check</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a><br />Whether the given GameObject is interactive or not

## See Also


#### Reference
<a href="T_UltimateXR_UI_UnityInputModule_UxrPointerInputModule">UxrPointerInputModule Class</a><br /><a href="N_UltimateXR_UI_UnityInputModule">UltimateXR.UI.UnityInputModule Namespace</a><br />