---
title: "UxrPointerInputModule"
---

# UxrPointerInputModule

`UxrPointerInputModule` is the bridge between UltimateXR and Unity's UI event system. It can either replace the standard input module or work alongside it, allowing touch and mouse input to remain available in parallel with VR interaction. With it, finger tips and laser pointers will generate the same pointer events that buttons, sliders, and scroll views normally receive from a mouse or touch screen.

You add it to the **EventSystem** GameObject in your scene. From that point on, any Unity Canvas in the scene can be interacted with using VR hands.

![](/media/docs/ui-interaction/uxrpointerinputmodule/UxrPointerInputModule.jpg)

## Adding it to your scene

1. Create an EventSystem if one does not already exist: **GameObject -> UI -> EventSystem**.
2. Select the EventSystem GameObject and add the `UxrPointerInputModule` component to it.
3. The existing Standalone Input Module can stay; `UxrPointerInputModule` is designed to run alongside it so that non-VR UI input also continues to work. Remove it to avoid any touch/mouse interaction.

## Automatic canvas setup

The most important option is **Auto Enable On World Canvases**. When enabled, `UxrPointerInputModule` scans all Canvas components in the scene after loading and automatically adds a `UxrCanvas` component to any world-space canvas that does not already have one. This means most scenes will work without touching individual canvases at all.

The **Interaction Types On Auto Enable** field controls which interaction method is set up on those auto-configured canvases: finger tips, laser pointers, or both.

![](/media/docs/ui-interaction/uxrpointerinputmodule/UxrCanvas.jpg)

If you are instantiating canvases at runtime, automatic setup does not cover them. In this case add a `UxrCanvas` component directly to any prefab that contains a Canvas.

## Parameter reference

- *Disable Other Input Modules*: When enabled, all other input modules on the EventSystem are bypassed. Enable this if you want VR-only interaction and do not want mouse or keyboard events interfering with the UI.
- *Auto Enable On World Canvases*: When enabled, the module automatically adds `UxrCanvas` to any world-space Canvas in the scene that has not been configured manually. Canvases set to Screen Space are not affected.
- *Auto Assign Event Camera*: When enabled, the module automatically assigns the local avatar's camera to each Canvas. This is required for correct world-space canvas raycasting and should normally be left on.
- *Interaction Types On Auto Enable*: Selects which interaction types are configured on canvases that are set up automatically. Options are Finger Tips, Laser Pointers, or both.
- *Finger Tip Min Hover Distance*: The distance from a finger tip to a canvas at which hover events begin to fire. Increase this value if you want the UI to start responding slightly before the finger makes physical contact.
- *Drag Threshold*: The minimum pointer movement in pixels required before a drag event is triggered. Works the same as Unity's standard drag threshold setting.
