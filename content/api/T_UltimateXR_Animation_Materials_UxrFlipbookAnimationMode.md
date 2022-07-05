# UxrFlipbookAnimationMode Enumeration
 

The different animation modes available in <a href="T_UltimateXR_Animation_Materials_UxrAnimatedTextureFlipbook">UxrAnimatedTextureFlipbook</a>

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public enum UxrFlipbookAnimationMode
```

<a href="UltimateXR/Scripts/Animation/Materials/UxrFlipbookAnimationMode.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

## Members
&nbsp;<table><tr><th></th><th>Member name</th><th>Value</th><th>Description</th></tr><tr><td /><td target="F:UltimateXR.Animation.Materials.UxrFlipbookAnimationMode.SingleSequence">**SingleSequence**</td><td>0</td><td>Frames are played back in a sequence, ending with the last frame.</td></tr><tr><td /><td target="F:UltimateXR.Animation.Materials.UxrFlipbookAnimationMode.Loop">**Loop**</td><td>1</td><td>Frames are played back in a sequence up to the last frame. The sequence starts again from the beginning indefinitely.</td></tr><tr><td /><td target="F:UltimateXR.Animation.Materials.UxrFlipbookAnimationMode.PingPong">**PingPong**</td><td>2</td><td>Frames are played back in a sequence up to the last frame and then back to the beginning again. This process is repeated indefinitely.</td></tr><tr><td /><td target="F:UltimateXR.Animation.Materials.UxrFlipbookAnimationMode.RandomFrame">**RandomFrame**</td><td>3</td><td>Random frames are played indefinitely.</td></tr><tr><td /><td target="F:UltimateXR.Animation.Materials.UxrFlipbookAnimationMode.RandomFrameNoRepetition">**RandomFrameNoRepetition**</td><td>4</td><td>Random frames are played indefinitely but there are never two same frames played one after the other.</td></tr></table>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials Namespace</a><br />