---
title: "UxrLODGroup Programming Guide"
---

# UxrLODGroup

## Introduction

The `UxrLODGroup` component helps Unity `LODGroup` components behave more consistently in VR.

Unity selects LOD levels based on the relative screen size of the object. In VR, headset cameras usually have a much wider field of view than a regular editor or desktop camera. Because of this, objects occupy a smaller portion of the screen at the same distance, causing Unity to switch to lower-detail LOD levels earlier than expected.

`UxrLODGroup` corrects this behavior by applying a LOD bias adjustment, helping LOD transitions better match the visual result expected from the Unity editor.

{{% callout info %}}
The full API can be explored in the [UxrLODGroup API Reference](/api/T_UltimateXR_Rendering_LOD_UxrLODGroup).
{{% /callout %}}

## The Problem

Unity's `LODGroup` component determines which LOD level to display using the object's relative screen size. This works well in standard rendering, but in VR the headset camera typically uses a wider field of view.

A wider field of view makes objects appear smaller on screen at the same physical distance, which makes the LOD transitions incorrect.

For more details, see the [Unity forum discussion](https://forum.unity.com/threads/lodgroup-in-vr.455394/).

## LOD Bias Fix

The component, when added to a GameObject with a `LODGroup` component, applies a LOD bias correction so that LOD switching in VR behaves like it does in the Unity editor. This ensures that the correct LOD levels are selected based on the actual visual size of the object.

## Teleport-Only LOD Switching

When using non-smooth locomotion (such as teleportation), the component switches LOD levels only when the avatar moves, rather than on every frame. This prevents LOD transitions caused by head movement alone.

When using smooth locomotion, regular LOD switching is used instead, since the avatar's position changes continuously.

This behavior can be disabled using the **Only Fix LOD Bias** parameter, which applies only the bias correction without modifying the LOD switching behavior.

## Properties

- `LODGroup` `LODGroupComponent`  
  Gets the Unity `LODGroup` component on the same GameObject.

## API Reference

For more information, refer to the [UxrLODGroup API Reference](/api/T_UltimateXR_Rendering_LOD_UxrLODGroup).
