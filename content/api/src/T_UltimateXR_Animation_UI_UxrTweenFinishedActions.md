# UxrTweenFinishedActions Enumeration
 

Different actions that can be executed once a <a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a> animation finished.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[FlagsAttribute]
public enum UxrTweenFinishedActions
```

<a href="UltimateXR/Scripts/Animation/UI/UxrTweenFinishedActions.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Animation.UI.UxrTweenFinishedActions.None">**None**</td><td>0</td><td>No action.</td></tr><tr><td /><td target="F:UltimateXR.Animation.UI.UxrTweenFinishedActions.RestoreOriginalValue">**RestoreOriginalValue**</td><td>1</td><td>Restores the original animated value that the component had before the animation.</td></tr><tr><td /><td target="F:UltimateXR.Animation.UI.UxrTweenFinishedActions.DisableTargetComponent">**DisableTargetComponent**</td><td>2</td><td>Disable the component that the <a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a> is animating.</td></tr><tr><td /><td target="F:UltimateXR.Animation.UI.UxrTweenFinishedActions.DeactivateGameObject">**DeactivateGameObject**</td><td>4</td><td>Deactivate the GameObject where the component is located.</td></tr><tr><td /><td target="F:UltimateXR.Animation.UI.UxrTweenFinishedActions.DestroyTween">**DestroyTween**</td><td>8</td><td>Destroy the <a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a> component.</td></tr><tr><td /><td target="F:UltimateXR.Animation.UI.UxrTweenFinishedActions.DestroyTargetComponent">**DestroyTargetComponent**</td><td>16</td><td>Destroy the component that the tween is animating.</td></tr><tr><td /><td target="F:UltimateXR.Animation.UI.UxrTweenFinishedActions.DestroyGameObject">**DestroyGameObject**</td><td>32</td><td>Destroy the GameObject where the component is located.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />