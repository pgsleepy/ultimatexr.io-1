---
title: "Planar Reflection"
---

# Planar Reflection

The planar reflection component renders a real-time reflection of the scene onto a flat surface with correct stereoscopic support for VR headsets.

![](/media/docs/rendering/effects/MirrorFX.png)

UltimateXR provides two planar reflection components, one for each supported render pipeline:

| Component | Render Pipeline |
|---|---|
| `UxrPlanarReflectionBrp` | Built-in Render Pipeline (BRP) |
| `UxrPlanarReflectionUrp` | Universal Render Pipeline (URP) |

## How It Works

At render time the component creates a secondary camera that mirrors the main camera across the reflection plane. It renders the scene into a render texture that is then passed to the surface material. Separate left and right eye textures are generated for correct stereo rendering in VR.
The **reflection plane** is defined by the position and orientation of the **Mirror Transform**: the plane sits at that transform's origin and its normal points along the **negative forward (−Z)** axis of that transform.

## Setup

### 1. Create the Mirror Surface

Create a GameObject with a mesh that represents the reflective surface (a `Quad`, a `Plane`, or any custom mesh).

### 2. Assign a Compatible Material

Assign the compatible **Stereo Planar Reflection** shader from **`UltimateXR/FX/`**. 

### 3. Add the Component

Add `UxrPlanarReflectionBrp` or `UxrPlanarReflectionUrp` to the same GameObject as the `Renderer`.

### 4. Orient the Surface

Rotate the GameObject so its **−Z (negative forward) axis** points toward the area to be reflected. For a vertical wall mirror, the −Z axis should point into the room. For a floor reflection, the −Z axis should point upward.

### 5. (Optional) Assign a Separate Mirror Transform

If the reflection plane is not aligned with the renderer's own transform (for example, the mesh is a child object), assign the correct transform to the **Mirror Transform** field. If left empty, the component falls back to its own transform.

## Parameters

![](/media/docs/rendering/effects/UxrPlanarReflectionUrp.png)

### UxrPlanarReflectionBrp (Built-in RP)

- **Force Clear Skybox**: Forces the internal reflection camera to clear with the skybox instead of the main camera's clear flags.
- **Mirror Transform**: The transform that defines the reflection plane. Its −forward axis is the plane normal. If not assigned, the component's own transform is used.
- **Disable Pixel Lights**: Disables per-pixel lighting on the reflection camera for performance. The reflection will use vertex lighting only.
- **Texture Size**: Resolution of the reflection render texture (width and height). Use powers of two. Lower values improve performance but have lower quality.
- **Clip Plane Offset**: Small offset applied to the reflection clip plane to avoid z-fighting and clipping artifacts at the mirror surface.
- **Reflect Layers**: Layer mask controlling which objects are rendered by the reflection camera.

### UxrPlanarReflectionUrp (Universal RP)

All BRP parameters above apply, plus:

- **Mirror Renderer**: The `Renderer` component to update with the reflection texture. If not assigned, the `Renderer` on the same GameObject is used.
- **Material When Disabled**: Material assigned to the mirror renderer when this component is disabled. Use a cheap non-reflective material here so the object still looks correct when reflections are turned off.

## Tips

- **Note for URP:** Unity URP requires the reflection camera to use skybox clearing for correct projection matrix computation. Enabling **Force Clear Skybox** resolves visual glitches if reflections appear distorted.
- **Performance:** Planar reflections render the scene a second time each frame. Keep **Texture Size** as low as visually acceptable, and use **Reflect Layers** to exclude objects that do not need to appear in the reflection (e.g., particles, UI).
- **Clip Plane Offset:** If you see the mirror surface itself appearing inside the reflection, increase this value slightly.
- **Disabled state (URP):** Assign a reflective material to **Material When Disabled** so that reflection probes still show reflections when the component is toggled off at runtime. Enable the component for real-time reflection when near only.