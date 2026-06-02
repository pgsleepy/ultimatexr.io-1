---
title: "UxrLaserPointer"
---

# UxrLaserPointer

`UxrLaserPointer` enables distance-based UI interaction by casting a ray from the hand toward any Unity Canvas in the scene. The ray is rendered as a visible line with an optional color-coded interactive/non-interactive hit indicator. Clicking is performed with a configurable controller button.

The built-in UltimateXR avatar prefabs come with `UxrLaserPointer` components already set up on both hands. They are disabled by default since fingertip interaction is the primary mode, but enabling the laser pointer GameObjects in the **HandsIntegration** hierarchy is all that is needed to support laser pointer interaction too.

## Setting Up a UxrLaserPointer

If you are working with a custom avatar or want to add a laser pointer manually:

1. In your avatar hierarchy, create an empty child GameObject on the hand bone (or the controller model object) and name it something like `LaserPointer`.
2. Add the `UxrLaserPointer` component to that GameObject.
3. Orient the GameObject so its **forward vector** points in the direction the laser should travel.
4. Set **Hand** to match which hand this pointer belongs to.
5. Make sure a `UxrPointerInputModule` is present on the EventSystem in the scene.

![](/media/docs/ui-interaction/uxrlaserpointer/07LaserPointerComponent.png)

## Enabling the Laser

By default the laser is shown only while the user touches the joystick (**Show Laser Input** defaults to Joystick, **Show Laser Button Event** defaults to Touching).

Two special values for **Show Laser Input** change this behaviour:

- **None**: The laser is always visible. Use this for applications where the laser is the primary interaction method and should always be on.
- **Everything**: The laser is never shown by the input rule and must be enabled through another mechanism, such as `UxrCanvas.AutoEnableLaserPointer`. Use this when you want the laser to appear automatically only when the hand is pointing at a canvas.

## What the Laser Can Hit

**Target Types** is a flag field that controls what the laser reacts to. The available targets are:

- **UI**: Unity UI Canvas elements (buttons, sliders, scroll views, etc.).
- **Colliders 2D**: 2D physics colliders.
- **Colliders 3D**: 3D physics colliders.

All three are enabled by default. Deselect any you do not need to improve performance or avoid unintended hits.

**Trigger Colliders Interaction** controls whether the laser ray collides with physics volumes that have the **Is Trigger** flag set. The default is to ignore trigger volumes.

**Blocking Mask** is a layer mask that limits which layers can block the laser ray when hitting 3D objects. By default all layers block the ray. Restrict this mask if you want the laser to pass through certain geometry.

## Inspector Reference

### General

- *Hand*: Which hand controls the laser.
- *Use Controller Forward*: When enabled and the avatar is rendering a controller model, the laser uses the controller model's forward direction instead of the component's own transform forward. Enable this so the laser visually extends from the controller tip.

### Interaction

- *Target Types*: The types of objects the laser can interact with. Flags: UI, Colliders 2D, Colliders 3D.
- *Trigger Colliders Interaction*: Whether the ray collides with trigger volumes. Default is to ignore them.
- *Blocking Mask*: Layer mask that determines which layers can block or be hit by the laser ray.

### Input

- *Click Input*: The controller button that performs a click on a UI element when pressed.
- *Show Laser Input*: The controller button that enables the laser while held. Set to **None** to keep the laser always on, or **Everything** to disable input-driven enabling and rely on `UxrCanvas.AutoEnableLaserPointer` instead.
- *Show Laser Button Event*: The button event that triggers the laser enable (e.g. Touching, PressDown). Works together with **Show Laser Input**.

### Appearance

- *Invisible*: When enabled, the ray line and hit quad are hidden. Raycasting still runs, so invisible laser pointers can drive UI interaction without any visible beam.
- *Ray Length*: Maximum length of the laser ray in metres. If the ray hits a surface before this distance it shortens to the hit point.
- *Ray Width*: Thickness of the rendered laser line in metres.
- *Ray Color Interactive*: Color of the ray when pointing at an interactive UI element.
- *Ray Color Non-Interactive*: Color of the ray when pointing at a non-interactive surface.
- *Ray Hit Material*: Material used to render the small quad that appears at the ray hit point.
- *Ray Hit Size*: Size of the hit indicator quad in metres.
- *Optionally Enable Object*: An optional GameObject that is enabled and disabled along with the laser.