---
title: "Input/Tracking"
---

# Input/Tracking

How can I know the name of the headset that is connected?

```c#
Debug.Log(UxrTrackingDevice.HeadsetDeviceName);
```

How can I know the name of the controllers that are connected?

```c#
Debug.Log(UxrAvatar.LocalAvatarInput.LeftControllerName + ", " + UxrAvatar.LocalAvatarInput.RightControllerName);
```

How can I know if a controller has certain elements?

```c#
bool mainJoystickIsTouchpad = UxrAvatar.LocalAvatarInput.MainJoystickIsTouchpad;
bool hasTriggerAndGrab = UxrAvatar.LocalAvatarInput.HasControllerElements(UxrHandSide.Left, UxrControllerElements.Grip | UxrControllerElements.Trigger);
```

How can I know if a controller button was pressed?

Method1 (direct query):

```c#
bool wasPressed = UxrAvatar.LocalAvatarInput.GetButtonsPressDown(UxrHandSide.Left, UxrInputButtons.Button1);
```

Method2 (direct query):

```c#
bool wasPressed = UxrAvatar.LocalAvatarInput.GetButtonsEvent(UxrHandSide.Left, UxrInputButtons.Button1, UxrButtonEventType.PressDown);
```

Method3 (using event subscription):

```c#
UxrControllerInput.GlobalButtonStateChanged += Input_ButtonStateChanged;

private void Input_ButtonStateChanged(object sender, UxrInputButtonEventArgs e)
{
    Debug.Log($"Pressed {e.HandSide}, {e.Button}, {e.ButtonEventType}");
}
```

How can I know if two controller buttons are being pressed at the same time?

```c#
bool areBeingPressed = UxrAvatar.LocalAvatarInput.GetButtonsPress(UxrHandSide.Left, UxrInputButtons.Button1 | UxrInputButtons.Button2);
```

How can I set the user handedness?

```c#
UxrAvatar.LocalAvatarInput.Handedness = UxrHandedness.Left;
```

How can I get a trigger input based on handedness instead of physical side?

```c#
float trigger = UxrAvatar.LocalAvatarInput.GetInput1D(UxrAvatar.LocalAvatarInput.Handedness, UxrInput1D.Trigger);
```

How can I set to ignore input?

```c#
UxrAvatar.LocalAvatarInput.SetIgnoreControllerInput(UxrHandSide.Left, true);
```

How can I still know if a controller button was pressed on a controller even if it was set to ignore input?

```c#
bool wasPressedWhileIgnoring = UxrAvatar.LocalAvatarInput.GetButtonsPressDown(UxrHandSide.Left, UxrInputButtons.Button1, true);
```

How can I get the forward direction of a controller?

```c#
Vector3 forward = UxrAvatar.LocalAvatar.GetControllerInputForward(UxrHandSide.Left).forward;
```

When the avatar is rendering the controllers (avatar.RenderMode = UxrAvatarRenderModes.AllControllers), how can I make a certain button blink for a tutorial that I’m making?
*Note*: This feature is currently supported but we are finalizing the legal terms to include the graphics for the controllers.

```c#
// Start blinking the trigger and grip buttons 3 times per second for 2 seconds
UxrAvatar.LocalAvatarInput.StartControllerElementsBlinking(UxrHandSide.Left, UxrControllerElements.Trigger | UxrControllerElements.Grip, Color.white, 3.0f, 2.0f);

// Stop trigger blinking
UxrAvatar.LocalAvatarInput.StopControllerElementsBlinking(UxrHandSide.Left, UxrControllerElements.Trigger);

// Stop all remaining 
UxrAvatar.LocalAvatarInput.StopAllBlinking(UxrHandSide.Left);
```

How can I get the speed/velocity of the hands?

```c#
if (UxrKeyboardInput.GetPressDown(UxrKey.Enter))
{
    // Velocity using current-last frame data:
    Vector3 leftInstantVelocity  = UxrAvatar.LocalAvatar.GetGrabber(UxrHandSide.Left).Velocity;
	Vector3 rightInstantVelocity = UxrAvatar.LocalAvatar.GetGrabber(UxrHandSide.Right).Velocity;
	
	// Velocity using multiple frame data:
	Vector3 leftSmoothVelocity   = UxrAvatar.LocalAvatar.GetGrabber(UxrHandSide.Left).SmoothVelocity;
	Vector3 rightSmoothVelocity  = UxrAvatar.LocalAvatar.GetGrabber(UxrHandSide.Right).SmoothVelocity;
}
```

How can I get keyboard input?

```c#
if (UxrKeyboardInput.GetPressDown(UxrKey.Enter))
{
    Debug.Log("Enter key was pressed");
}
```