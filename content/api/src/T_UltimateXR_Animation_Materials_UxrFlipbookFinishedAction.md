# UxrFlipbookFinishedAction Enumeration
 

What should be done when a <a href="T_UltimateXR_Animation_Materials_UxrAnimatedTextureFlipbook">UxrAnimatedTextureFlipbook</a> animation finished. This is only supported with <a href="T_UltimateXR_Animation_Materials_UxrFlipbookAnimationMode">SingleSequence</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public enum UxrFlipbookFinishedAction
```

<a href="UltimateXR/Scripts/Animation/Materials/UxrFlipbookFinishedAction.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Animation.Materials.UxrFlipbookFinishedAction.DoNothing">**DoNothing**</td><td>0</td><td>Nothing happens when the animation finished.</td></tr><tr><td /><td target="F:UltimateXR.Animation.Materials.UxrFlipbookFinishedAction.DisableRenderer">**DisableRenderer**</td><td>1</td><td>After showing the last frame, the renderer is disabled.</td></tr><tr><td /><td target="F:UltimateXR.Animation.Materials.UxrFlipbookFinishedAction.DisableGameObject">**DisableGameObject**</td><td>2</td><td>After showing the last frame, the GameObject the component is attached to is disabled.</td></tr><tr><td /><td target="F:UltimateXR.Animation.Materials.UxrFlipbookFinishedAction.DestroyGameObject">**DestroyGameObject**</td><td>3</td><td>After showing the last frame, the GameObject the component is attached to is destroyed.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials Namespace</a><br />