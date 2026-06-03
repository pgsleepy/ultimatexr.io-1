---
title: "UxrFirearmAmmoLabel"
---

# UxrFirearmAmmoLabel

`UxrFirearmAmmoLabel` drives a UI text element with the current ammo count of a firearm magazine. Add it alongside a `UxrFirearmWeapon` on the weapon root to display live ammo information on a world-space canvas attached to the weapon, such as an on-gun display.

![](/media/docs/weapon-system/helper-components/AmmoLabel.png)

The component supports both Unity UI `Text` and TextMeshPro `TextMeshProUGUI` targets. It only updates the label when the displayed values actually change, so it does not generate unnecessary allocations or string operations every frame.

When no magazine is attached, the label shows dashes instead of numbers. When a magazine with infinite capacity is attached (capacity of `int.MaxValue`), the label shows an empty string.

![](/media/docs/weapon-system/helper-components/UxrFirearmAmmoLabelInspector.png)

## Setup

1. Create a world-space Canvas as a child of the weapon hierarchy.
2. Add a `Text` or `TextMeshProUGUI` component to a Canvas child.
3. Add `UxrFirearmAmmoLabel` to the **same GameObject as the `UxrFirearmWeapon`**.
4. Drag the text Graphic component into **Text Target**.
5. Set **Trigger Index** to match the trigger whose magazine this label should display.

## Parameter Reference

- *Text Target*: The `Graphic` component (`Text` or `TextMeshProUGUI`) that displays the ammo information.
- *Trigger Index*: Index of the trigger in the firearm whose magazine ammo is displayed.
- *Show Capacity*: When enabled, the label shows both rounds remaining and magazine capacity in the format `current/capacity`. When disabled, only the rounds remaining are shown.
- *Digits*: Minimum number of digits for numeric values. Values shorter than this are left-padded with zeros. For example, a value of `2` displays `07` instead of `7`.
