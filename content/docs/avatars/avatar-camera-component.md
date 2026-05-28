---
title: "Avatar Camera Components"
---

# Avatar Camera Components

The avatar's `Camera` is what renders the virtual world. It follows the headset's position and rotation, and it can also include optional UltimateXR camera components that provide additional features.

Inside the avatar hierarchy, hanging from the **Camera Controller** GameObject, you will find the **Camera**. The `UxrAvatar` component automatically identifies it and exposes it through the **Camera Component** property. All of the utilities described here are added directly to this Camera GameObject.

![](/media/docs/avatars/avatar-camera-component/CameraHierarchy.png)

## UxrCameraWallFade

`UxrCameraWallFade` prevents the user from seeing through walls when they physically lean into or step through solid geometry. As the camera approaches a surface the view fades to a color, and an out-of-bounds space is shown until the user pulls back to a valid position.

Add it to the avatar's Camera GameObject.

![](/media/docs/avatars/avatar-camera-component/UxrWallFade.png)

### General Settings

- **Collision Layers**: The physics layers treated as solid blocking geometry. Set this to the layers used by your scene's walls, floors, and ceilings.
- **Fade Far Distance**: The distance from geometry at which the fade starts to build up. Think of this as the outer edge of the safety zone.
- **Fade Near Distance**: The distance at which the fade reaches full intensity. At this point the out-of-bounds space is fully visible.
- **Head Radius**: The radius of the sphere used to approximate the user's head for collision detection.
- **Ignore Trigger Colliders**: When enabled, trigger volumes are excluded from wall fade checks.
- **Ignore Dynamic Objects**: When enabled, objects with a `RigidBody` will not trigger the fade.
- **Ignore Grabbed Objects**: When enabled, objects currently held by the avatar are excluded from the checks.

### Portal Settings

When the user is fully inside geometry, a portal opening is rendered pointing back toward the safe space. This gives the user a clear visual cue for where to move.

![](/media/docs/avatars/avatar-camera-component/Portal.png)

- **Portal Hole Radius**: The radius of the portal opening.
- **Portal Hole Radius Min**: The minimum size the portal can shrink to as the user moves deeper into geometry.
- **Portal Hole Edge Softness**: How soft or sharp the edge of the portal appears.

### Out-of-Bounds Space Settings

When the fade is fully active, the user sees a virtual environment rather than clipped geometry. You can customize this space.

- **Floor / Ceiling Grid Colors and Sizes**: The appearance of the grid drawn on the floor and ceiling of the out-of-bounds space.
- **Main Grid Line Interval**: The number of secondary grid cells between each main grid line.
- **Horizon Color**: The color the floor, ceiling, and grid fade into at a distance.
- **Ceiling Height**: How high the ceiling grid is drawn relative to the floor Y position.
- **Horizon Fade Start / End Distance**: The distance range over which everything fades to the horizon color.

`UxrCameraWallFade` also integrates with the locomotion system. Locomotion components query this component to determine whether movement is permitted, which prevents users from taking advantage of wall clipping to shortcut through your level.

## UxrCameraFade

`UxrCameraFade` provides a general-purpose screen fade overlay. It renders a fullscreen quad in front of the camera and transitions it in or out over a specified duration.

The framework uses this component internally for scene transitions and teleportation effects, but you can also drive it directly from your own scripts.

Add it to the avatar's Camera GameObject.

```csharp
// Fade to black over 0.5 seconds, then fade back in over 0.5 seconds
cameraFade.StartFade(
    fadeOutDurationSeconds: 0.5f,
    fadeInDurationSeconds: 0.5f,
    fadeColor: Color.black,
    fadeOutFinishedCallback: null,
    fadeInFinishedCallback: null
);
```

You can also enable a solid color overlay at any time and dismiss it when you are ready:

```csharp
cameraFade.EnableFadeColor(Color.black, quantity: 1.0f);
// ... do work ...
cameraFade.DisableFadeColor();
```

## UxrFirstPersonCamera

`UxrFirstPersonCamera` marks a Camera as a first-person view. When this camera renders, it automatically hides the renderers listed in `UxrAvatar.FirstPersonHiddenRenderers`, typically the head, neck or glasses that would otherwise clip through the camera. It also sets a global shader parameter `_UxrRenderFirstPersonEffects` that compatible shaders can use to apply first-person-only visual effects.

Add it to the avatar's Camera GameObject and assign the **Avatar** reference to your avatar.

![](/media/docs/avatars/avatar-camera-component/UxrFirstPersonCamera.png)

The **First Person Hidden Renderers** list on the `UxrAvatar` component determines which renderers are hidden during first-person rendering. Populate this list with the head and neck meshes of your avatar so they disappear automatically whenever the first-person camera is active.