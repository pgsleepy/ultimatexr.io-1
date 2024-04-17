---
title: "Keyboard"
---

# Keyboard

UltimateXR provides platform independent keyboard input to support both the old and new Unity input systems.

The static `UxrKeyboardInput` class has functionality to check for key presses:

Check whether a key is being pressed:

```c#
static bool GetPressed(UxrKey key)
```

Check if a key was pressed during the present frame:

```c#
static bool GetPressDown(UxrKey key)
```

Check whether a key was released during the present frame:

```c#
static bool GetPressUp(UxrKey key)
```

**Example 1**: Checks if the A key is being presssed:

```c#
bool isBeingPressed = UxrKeyboardInput.GetPressed(UxrKey.A);
```

**Example 2**: Checks if the space bar was pressed during the present frame:

```c#
bool wasPressed = UxrKeyboardInput.GetPressDown(UxrKey.Space);
```

**Example 3**: Checks if the Enter key was released during the present frame:

```c#
bool wasReleased = UxrKeyboardInput.GetPressUp(UxrKey.Space);
```