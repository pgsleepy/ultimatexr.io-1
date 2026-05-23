---
title: "Other UI Components"
---

# Other UI Components

## UxrButton3D

The `UxrButton3D` component makes 3D buttons react to UI presses. You can place a UI on top of 3D buttons using `UxrNonDrawingGraphic`, making the UI interactive without rendering any graphics. When the UI buttons are pressed, the underlying 3D buttons respond visually to those presses.

- **`UxrButton3DPress`**: A button that moves along an axis when pressed.
- **`UxrButton3DRotate`**: A button that rotates around an axis when pressed.

Both variants integrate with the `UxrControlInput` event system, so the same event-driven approach used for canvas UI can be applied to 3D buttons.

## UxrCameraPointer

The `UxrCameraPointer` component enables gaze-based interaction with UI. When added to the avatar's camera, it allows the user to interact with canvases by looking at them. This is useful for scenarios where hand controllers are not available, such as seated experiences or accessibility modes.

## UxrKeyboardUI

The `UxrKeyboardUI` component provides a virtual keyboard for VR. It renders a full keyboard layout on a canvas and generates key events that can be used to fill input fields or handle text input programmatically.

### Related Components

- `UxrKeyboardKeyUI`  
  Represents an individual key on the virtual keyboard.
- `UxrKeyType`  
  Enumerates the different key types (printable, toggle caps, tab, shift, backspace, enter, etc.).
- `UxrKeyLayoutType`  
  Enumerates the different keyboard layout pages (letters, symbols).

## UxrHiScores

The hi-scores helper components provide a ready-to-use leaderboard UI:

- **`UxrHiScoresPanelEntries`**: Displays a list of hi-score entries.
- **`UxrHiScoresPanelEnterName`**: Provides a panel for the user to enter their name using the virtual keyboard.
- **`UxrHiScoresEntry`**: Represents a single hi-score entry with name and score data.

## Utility Components

- **`UxrControlInputDestroyOnPress`**: Destroys the `UxrControlInput` component's GameObject when it is pressed. Useful for dismissible UI elements.
- **`UxrHoverTimerClick`**: Automatically triggers a click after the pointer has hovered over a control for a specified duration.
- **`UxrDynamicPixelsPerUnit`**: Dynamically adjusts the `Canvas.pixelsPerUnit` property based on the distance to the user, improving text readability.
- **`UxrNonDrawingGraphic`**: A `Graphic` component that does not render anything but still receives raycasts. Useful for creating invisible interaction areas.
- **`UxrIgnoreCanvas`**: When added to a canvas, tells the `UxrPointerInputModule` to ignore it for VR interaction.
- **`UxrRightToLeftSupport`**: Provides right-to-left text layout support for UI elements.

## API Reference

For more information, refer to the [UI API Reference](/api/N_UltimateXR_UI) and the [Unity Input Module API Reference](/api/N_UltimateXR_UI_UnityInputModule).
