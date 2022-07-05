# UxrLocomotion.IsSmoothLocomotion Property 
 


Gets whether the locomotion updates the avatar each frame. An example of smooth locomotion is <a href="T_UltimateXR_Locomotion_UxrSmoothLocomotion">UxrSmoothLocomotion</a> where the user moves the avatar in an identical way to a FPS video-game. An example of non-smooth locomotion is <a href="T_UltimateXR_Locomotion_UxrTeleportLocomotion">UxrTeleportLocomotion</a> where the avatar is moved only on specific occasions.

The smooth locomotion concept should not be confused with the ability to move the head around each frame. Smooth locomotion refers to the avatar position, which is determined by the avatar's root GameObject. It should also not be confused with the ability to perform teleportation in a smooth way. Even if some teleportation locomotion methods can teleport using smooth transitions, it should not be considered as smooth locomotion.

The smooth locomotion property can be used to determine whether certain operations, such as LOD switching, should be processed each frame or only when the avatar position changed.


**Namespace:**&nbsp;<a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract bool IsSmoothLocomotion { get; }
```

<a href="UltimateXR/Scripts/Locomotion/UxrLocomotion.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_UltimateXR_Locomotion_UxrLocomotion">UxrLocomotion Class</a><br /><a href="N_UltimateXR_Locomotion">UltimateXR.Locomotion Namespace</a><br />