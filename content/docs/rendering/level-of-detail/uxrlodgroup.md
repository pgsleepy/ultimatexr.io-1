---
title: "UxrLODGroup"
---

# UxrLODGroup

`UxrLODGroup` is a wrapper around Unity's built-in `LODGroup` component that fixes two VR-specific issues:

1. **LOD bias correction**: Unity's default LOD distances are calculated for a 60° editor camera. In VR, headsets typically have a wider field of view, which causes LOD levels to switch too aggressively. `UxrLODGroup` corrects the global `QualitySettings.lodBias` based on the actual VR camera field of view so objects switch LOD at the same apparent distance as they would in the editor.

2. **Locomotion-aware LOD switching**: Unity's LOD system normally updates every frame based on the camera position. In VR, this means small head movements can cause visible LOD popping, even when the avatar is standing still.
`UxrLODGroup` can be used to avoid this when using teleport locomotion by only switching when the avatar has actually moved, such as after a teleport. If a different LOD level is needed, the switch can happen during the teleport fade, making the transition much less noticeable.
When smooth locomotion is active, standard Unity LOD behavior is used.

## Requirements

- Unity **`LODGroup`** component on the same GameObject (added automatically if missing).

## Setup

1. Select the GameObject that has (or will have) a Unity `LODGroup` component.
2. Add the **`UxrLODGroup`** component. Unity will automatically add a `LODGroup` if one is not already present.
3. Configure your LOD levels in the `LODGroup` as normal (renderers, transition percentages, etc.).
4. No further configuration is required. The component activates automatically when a local avatar is present.

## Parameters

**Only Fix LOD Bias**: When **off** (default), the component applies both the LOD bias correction and the locomotion-aware LOD switching. When **on**, only the LOD bias correction is applied.

{{% callout caution %}}
The LOD bias correction is a global Quality Setting. If you change `QualitySettings.lodBias` elsewhere at runtime, be aware that `UxrLODGroup` will have already scaled it at startup.
{{% /callout %}}