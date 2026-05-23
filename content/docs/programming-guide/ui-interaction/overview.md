---
title: "UI Interaction Programming Guide"
---

# Overview

The **UI interaction system** in UltimateXR enables avatars to interact with Unity UI canvases in VR using laser pointers or fingertips. It builds on top of Unity's `EventSystem` and can either replace the standard input module or work alongside it, allowing touch and mouse input to remain available in parallel with VR interaction.

This guide offers a programmatic perspective. For detailed instructions on setting up components in Unity, please refer to the [UI Interaction User Guide](/docs/ui-interaction/overview). You can also check the [UI API Reference](/api/N_UltimateXR_UI).

## Key Components

### [UxrCanvas](/docs/programming-guide/ui-interaction/overview#uxrcanvas)

The `UxrCanvas` component can be added to GameObjects that have a Unity `Canvas` component. It enables VR interaction with the canvas using `UxrFingerTip` or `UxrLaserPointer` components. Key properties include:

- `UxrInteractionType` `CanvasInteractionType`  
  Gets or sets the type of interaction: `FingerTips`, `LaserPointers`, or both.
- `bool` `AutoEnableLaserPointer`  
  Gets or sets whether laser pointers automatically show their laser while pointing towards the canvas.
- `float` `AutoEnableDistance`  
  Gets or sets the distance below which the laser pointer will automatically show.
- `float` `FingerTipMinHoverDistance`  
  Gets or sets the distance below which a finger tip will generate hovering events.
- `bool` `IsCompatible(UxrHandSide handSide)`  
  Checks if the canvas can be used with the given hand. This allows restricting interaction to the left or right hand only.

### [UxrLaserPointer](/docs/programming-guide/ui-interaction/overview#uxrlaserpointer)

The `UxrLaserPointer` component is added to an avatar's hand (or any object) to interact with UI using a laser beam. It provides extensive configuration for input, appearance, and behavior.

- `UxrHandSide` `HandSide`  
  Gets the hand the laser pointer belongs to.
- `bool` `IsLaserEnabled`  
  Gets whether the laser is currently enabled, considering force-enable, auto-enable, and controller input.
- `Transform` `LaserTransform`  
  Gets the transform used to compute the laser direction.
- `Vector3` `LaserPos` / `LaserDir`  
  Gets the laser origin position and direction.
- `UxrLaserPointerTargetTypes` `TargetTypes`  
  Gets or sets the elements the laser can interact with: UI, 2D colliders, 3D colliders, or any combination.
- `UxrInputButtons` `ClickInput`  
  Gets or sets which controller button triggers a click (default: Trigger).
- `bool` `ForceLaserEnabled`  
  Gets or sets whether the laser should be forcefully enabled, bypassing input requirements.
- `bool` `Invisible`  
  Gets or sets whether the laser ray is invisible.
- `float` `RayLength` / `RayWidth`  
  Gets or sets the laser ray length and width.
- `Color` `RayColorInteractive` / `RayColorNonInteractive`  
  Gets or sets the laser color when pointing at interactive or non-interactive elements.

#### Methods

- `bool` `IsClickedThisFrame()`  
  Checks whether the laser pointer was clicked during the current frame.
- `bool` `IsReleasedThisFrame()`  
  Checks whether the laser pointer was released during the current frame.
- `bool` `TryGetLaserHitPosition(out Vector3 hitPosition)`  
  Tries to get the current laser hit position.
- `bool` `TryGetPointerEventData(out UxrPointerEventData pointerEventData)`  
  Tries to get the current pointer event data.

### [UxrFingerTip](/docs/programming-guide/ui-interaction/overview#uxrfingertip)

The `UxrFingerTip` component is added to the tip of an avatar's finger, allowing direct touch interaction with UI canvases. It is normally added only to the index fingers.

- `UxrHandSide` `Side`  
  Gets the hand the finger tip belongs to.
- `bool` `IsHandGrabbing`  
  Gets whether the hand is currently grabbing an object. When grabbing, finger tip interactions are disabled by default.
- `Vector3` `WorldPos` / `WorldDir` / `WorldSpeed`  
  Gets the current world position, direction, and speed of the finger tip.
- `bool` `IsInside(BoxCollider box, bool allowWhileGrabbing = false)`  
  Checks whether the finger tip is inside a box collider.
- `bool` `TryGetPointerEventData(out UxrPointerEventData pointerEventData)`  
  Tries to get the current pointer event data.

### UxrPointerInputModule

The `UxrPointerInputModule` is a singleton that replaces Unity's standard input module. It processes all VR pointer input from both finger tips and laser pointers. Key properties include:

- `bool` `Enabled`  
  Gets or sets whether the input module is enabled.
- `bool` `AutoEnableOnCanvases`  
  Gets or sets whether to automatically add `UxrCanvas` components to canvases that don't have one.
- `UxrInteractionType` `InteractionTypeOnAutoEnable`  
  Gets or sets the interaction type used when auto-enabling canvases.
- `bool` `AutoAssignEventCamera`  
  Gets or sets whether to automatically assign the event camera on canvases.

## How It Works

1. Add a `UxrCanvas` component to any Unity `Canvas` that should support VR interaction and is not pre-instantiated in the scene.
2. Ensure `UxrLaserPointer` and/or `UxrFingerTip` components are available on the avatar's hands. Built-in avatars come with everything pre-configured.
3. The `UxrPointerInputModule` singleton automatically processes input from all registered pointers and finger tips. It also adds `UxrCanvas` to all the `Canvas` components in the scene if required.
4. Add `UxrControlInput` components to individual UI elements to handle events programmatically.

## API Reference

For more information, refer to the [UI API Reference](/api/N_UltimateXR_UI) and the [Unity Input Module API Reference](/api/N_UltimateXR_UI_UnityInputModule).
