---
title: "UxrToggleControlInput"
---

# UxrToggleControlInput

`UxrToggleControlInput` extends `UxrControlInput` with toggle behaviour. A toggle retains its selected or deselected state between clicks. Add it to any UI element that should behave like a checkbox, a tab, or an on/off switch.

![](/media/docs/ui-interaction/uxrtogglecontrolinput/SingleExample.png)

Because it inherits from `UxrControlInput`, it also supports all the audio and haptic feedback options described in the [UxrControlInput](/docs/ui-interaction/uxrcontrolinput) page.

![](/media/docs/ui-interaction/uxrtogglecontrolinput/UxrToggleControlInput.png)

## Initial State

The **Initial State** setting controls what the toggle's selected state will be at the start of the scene. The three options are:

- **Toggled Off**: The toggle starts deselected.
- **Toggled On**: The toggle starts selected.
- **Don't Change**: The toggle keeps whatever state it was left in during edit time (for example, driven by a prefab or a serialized value).

## Showing State Visually

Two GameObject lists let you show or hide objects based on the current toggle state, without any scripting:

- **Enable When Selected**: The objects in this list are activated while the toggle is on and deactivated when it turns off.
- **Enable When Not Selected**: The reverse: activated when the toggle is off, deactivated when it turns on.

This makes it straightforward to swap an "on" icon for an "off" icon, show an indicator light, or display a checkmark simply by assigning the right GameObjects to each list.

## Color Changes

The **Color Changes** list lets you pair any `Graphic` component (Image, Text, etc.) with two colors: one for the selected state and one for the deselected state. The component switches the graphic's color automatically whenever the toggle changes state. Use this to tint a button background, change text color, or highlight an outline.

Each entry in the list has three fields:
- **Graphic**: The `Graphic` component whose color should change.
- **Color Selected**: The color applied when the toggle is on.
- **Color Not Selected**: The color applied when the toggle is off.

## Toggle Audio

In addition to the press/click/release audio inherited from `UxrControlInput`, the toggle has two dedicated audio clips:

- **Audio Toggle On**: Played when the toggle switches to the selected state.
- **Audio Toggle Off**: Played when the toggle switches to the deselected state.

Each clip has its own volume slider.

## Can Toggle Only Once

Enabling **Can Toggle Only Once** locks the toggle after its first interaction. Once clicked, the toggle becomes permanently selected and the `UxrControlInput` is disabled so it cannot be interacted with again.

## UxrToggleGroup

`UxrToggleGroup` groups several `UxrToggleControlInput` components so they behave as a single selection control.

![](/media/docs/ui-interaction/uxrtogglecontrolinput/ToggleGroup.png)

This is useful when the user must choose one option from a fixed set. Instead of each toggle working independently, the group makes sure that selecting one option automatically deselects the others.

A typical setup looks like this:

```csharp
UxrToggleGroup
├── UxrToggleControlInput: Option 1
├── UxrToggleControlInput: Option 2
└── UxrToggleControlInput: Option 3
```

## Parameter Reference

- *Initial State*: The selected state at scene start. Options: Toggled Off, Toggled On, Don't Change.
- *Can Toggle Only Once*: When enabled, the toggle can only be clicked once. After the first click the control is disabled permanently.
- *Enable When Selected*: GameObjects to activate while the toggle is in the selected state. Deactivated when not selected.
- *Enable When Not Selected*: GameObjects to activate while the toggle is in the deselected state. Deactivated when selected.
- *Color Changes*: List of graphic/color pairs. Each entry specifies a `Graphic` component and the colors to apply in each state.
- *Audio Toggle On*: Audio clip played when the toggle switches to selected.
- *Audio Toggle Off*: Audio clip played when the toggle switches to deselected.
- *Audio Toggle On Volume*: Volume for the toggle-on clip (0 to 1).
- *Audio Toggle Off Volume*: Volume for the toggle-off clip (0 to 1).
