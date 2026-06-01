---
title: "Magnifying Glass"
---

# Magnifying Glass

`UxrMagnifyingGlassUrp` renders a magnified (or demagnified) view of the scene through a flat glass surface, using the **Universal Render Pipeline (URP)**. It is designed for objects such as magnifying glasses, lenses, or viewfinders and produces a correct stereoscopic result for both eyes.

![](/media/docs/rendering/effects/MagnifyingGlassFX.png)

## How It Works

At render time the component creates a secondary camera whose projection matrix is modified to zoom in or out around the glass center. The result is rendered into separate left and right eye textures, which are passed to the glass material. The camera's near clip plane is set to the glass surface so only what is behind the glass (from the user's perspective) is visible through it.

The **glass plane orientation** is defined by the **Glass Axes** transform: the secondary camera looks in the **forward (+Z)** direction of that transform, and the user looks through the glass along the same axis.

## Requirements

- **Render pipeline:** Universal Render Pipeline (URP) only.
- **Material:** The glass object's `Renderer` must use a material with the **`UltimateXR/FX/Stereo Magnifying Glass (URP)`** shader.

## Setup

### 1. Create the Glass Object

Create a GameObject with a flat mesh (e.g., a `Quad` or a circular disc) representing the lens surface.

### 2. Assign a Compatible Material

Assign a material with the **`UltimateXR/FX/Stereo Magnifying Glass (URP)`** shader.

### 3. Add the Component

Add `UxrMagnifyingGlassUrp` to the same GameObject as the `Renderer`.

### 4. Orient the Glass

Rotate the GameObject so its **+Z (forward) axis** points in the direction the user looks through the lens, away toward the scene.

### 5. Adjust Magnification

Set **Fov Scale** to control how much the scene is magnified. A value greater than 1 zooms in (magnifies); a value less than 1 zooms out.

## Parameters

![](/media/docs/rendering/effects/UxrMagnifyingGlass.png)

- **Force Clear Skybox**: Forces the internal refraction camera to clear with the skybox rather than using the camera's clear flags.
- **Glass Axes**: Transform defining the glass orientation. The +Z (forward) axis determines the look direction through the lens. If not assigned, the component's own transform is used.
- **Disable Pixel Lights**: Disables per-pixel lighting on the refraction camera for performance.
- **Texture Size**: Resolution of the refraction render texture (width and height). Use powers of two.
- **Antialias**: Anti-aliasing sample count for the render texture.
- **Clip Plane Offset**: Offset applied to the near clip plane at the glass surface. Increase if geometry behind the glass clips incorrectly.
- **Camera Forward Offset**: Applied to the refraction camera when rendering.
- **Fov Scale**: Zoom level. Values **above 1** zoom in (magnify the scene). Values **below 1** zoom out (show a wider area).
- **IPD Adjust**: Multiplier applied to the inter-pupillary distance when positioning left and right eye cameras. Adjust if the stereo separation looks incorrect through the lens.
- **Offset Left**: Horizontal screen-space offset for the left eye render, in normalized viewport units. Used to fine-tune stereo alignment.
- **Offset Right**: Horizontal screen-space offset for the right eye render.
- **Layers**: Layer mask controlling which objects are rendered through the lens.