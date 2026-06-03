---
title: "UxrMuzzleFlash"
---

# UxrMuzzleFlash

`UxrMuzzleFlash` animates a muzzle flash effect by randomizing the angle and scale of its mesh renderers each time the GameObject is enabled. Together with a flipbook texture, this gives a different flash appearance on every shot without any animation clips.

{{< video src="/media/docs/weapon-system/helper-components/MuzzleFlash.mp4" >}}

Add this component to the muzzle flash prefab that is assigned to **Prefab Instantiate On Tip When Shot** in a `UxrShotDescriptor`. Each time a round is fired, the prefab is instantiated at the barrel tip, `UxrMuzzleFlash` applies the randomization on `Awake`, and the object is destroyed after the configured lifetime.

The component supports sprite sheet materials: set **Texture Columns** and **Texture Rows** to the layout of the sprite sheet and the component will pick a random frame on each instantiation.

![](/media/docs/weapon-system/helper-components/MuzzleFlashFlipbook.png)

## Parameter Reference

![](/media/docs/weapon-system/helper-components/UxrMuzzleFlashInspector.png)

- *Material*: The material used by the flash mesh renderers. This is the material whose texture offset is modified when a sprite sheet is used.
- *Texture Columns*: Number of columns in the sprite sheet. Set to 1 if the material does not use a sprite sheet.
- *Texture Rows*: Number of rows in the sprite sheet. Set to 1 if the material does not use a sprite sheet.
- *Randomize Angle*: When enabled, the GameObject is rotated by a random angle around its forward axis on each instantiation.
- *Min Randomize Scale*: Minimum random uniform scale factor applied to the flash.
- *Max Randomize Scale*: Maximum random uniform scale factor applied to the flash.
- *Scale Offset Var Name*: Shader property name used to set the texture scale and offset for sprite sheet sampling. Defaults to the standard Unity main texture transform property.
