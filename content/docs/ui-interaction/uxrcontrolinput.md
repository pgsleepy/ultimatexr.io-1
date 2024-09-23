---
title: "UxrControlInput"
---

# UxrControlInput

The *UxrControlInput* is a very useful component that provides additional functionality when added to interactive components such as buttons or even images. Among other things it allows to:

- Specify audios whenever an element was pressed/clicked/released.
- Specify haptic feedback whenever an element was pressed/clicked/released.
- Provide a clean scripting API with properties and events that facilitate the programming of UI interaction.

Audio and haptic feedback can be configured using the *UxrControlInput* inspector:

![](/docs/guides/media/ui/08ControlInput.jpg)
 
Which completely expanded looks like this:

![](/docs/guides/media/ui/09ExpandedControlInput.jpg) 

Each press/release/click event allows to specify an optional audio clip that should be played and optional haptic feedback.

The haptic clip supports some interesting features:

- If a Clip (audio file) is specified and the current system supports audio data as haptic feedback, the clip will be transformed to vibration and played through the controllers.
- If a Clip was not specified or the current system doesn’t support audio data as haptic feedback, a Fallback Clip from a pre-defined set of vibrations can be played. You may use a negative value as duration in seconds to specify the default clip duration.

## UxrControlInput scripting

Some examples of common `UxrControlInput` use can be found [here](/docs/programming-guide/how-do-i#ui).

The full *UxrControlInput* API can be found [here](/api/T_UltimateXR_UI_UnityInputModule_Controls_UxrControlInput).
