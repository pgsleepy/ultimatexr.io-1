---
title: "Getting User Input"
---

# Getting User Input

## `UxrControllerInput`

Input information can be accessed using the `UxrControllerInput` component using `UxrAvatar.LocalAvatarInput`. The `LocalAvatarInput` is a static property which means it can be used globally from anywhere in the code. It will return the currently active controller input component, or a dummy component if no controller is currently active.
A dummy controller input will remove the requirement of null checks and not generate any input events.

## Controller Type

`UxrControllerInput` exposes the `SetupType` property, which can adopt the following values:
- `UxrControllerSetupType.Single`: Single controller setup, such as a gamepad, remote or a gun.
- `UxrControllerSetupType.Dual`: Dual controller setup (left+right controllers).

## Controller Capabilities

`UxrControllerInput` also exposes the `GetControllerCapabilities()` method, which will return `UxrControllerInputCapabilities` flags:
- `HapticImpulses`: The controller supports raw haptic impulses, to produce tactile feedback to simulate touch for enhanced immersion.
- `HapticClips`: The controller supports haptic impulses defined by an audio clip.
- `TrackedHandPose`: The controller supports finger tracking, through capacitive sensors or similar. For example the Valve Index have this capability.

## Controller Handedness

Handedness refers to the distinction between left-handed and right-handed controllers. In `Dual` controller setups each controller is grabbed using a different hand. In `Single` controller setups, handedness might be supported or not.
In devices with a single controller, such as the old Oculus Go, for example, the controller could be configured for the left hand or the right hand. In a gamepad, however, handedness does not apply.

Whether handedness is supported or not is indicated by the `IsHandednessSupported` property.

When handedness is supported, the following properties dictate the behavior:
- `Handedness`: Specifies the primary controller side In `Single` setups, it indicates which hand wields the controller. For `Dual` setups, it designates the hand wielding the primary controller. Input can be queried for left and right sides, as well as for primary and secondary.
- `Primary`/`Secondary`: Will translate to left or right depending on the `Handedness` assigned.

{{% callout tip %}}
Changing the Handedness property allows logic to be implemented that supports both left-handed and right-handed users.
{{% /callout %}}

## Elements in a Controller

Despite variations among controllers, they share common elements. These include:
- **Buttons**, managed using `UxrInputButtons` flags.
- **Single-axis analog input**, such as trigger input, identified by the `UxrInput1D` type.
- **Two-axis analog input**, like an analog joystick, identified by the `UxrInput2D` type.

Buttons have discrete states, pressed or depressed, while analog inputs provide continuous input ranging from 0.0 to 1.0. `UxrInput1D` elements provide a single, analog input. `UxrAxis2D` provides an analog input with 2 components, such as the xy values of a joystick.

To identify controller elements, regardless of type, UltimateXR uses the `UxrControllerElements` enum supporting:
- `Joystick`: Primary joystick.
- `Joystick2`: Secondary joystick. Some controllers have 2 joysticks, such as the Windows Mixed Reality or the Valve Index.
- `DPad`: Directional pad. The D-pad typically consists of a cross-shaped arrangement of four directional buttons (up, down, left, and right). If not available, the primary joystick is usually mapped to the dpad.
- `Trigger`: Input button typically controlled with the index finger. The trigger is normally pressure-sensitive, allowing for varying degrees of input based on how firmly the user presses it.
- `Trigger2`: Secondary trigger. A gamepad, for instance, has 2 triggers.
- `Grip`: Input button typically controlled with the middle finger. Like the trigger, the grip is normally pressure-sensitive.
- `ThumbCapSense`: Capacitive sensor for the thumb.
- `IndexCapSense`: Capacitive sensor for the index finger.
- `MiddleCapSense`: Capacitive sensor for the middle finger.
- `RingCapSense`: Capacitive sensor for the ring finger.
- `LittleCapSense`: Capacitive sensor for the little finger.
- `Button1`: The button 1.
- `Button2`: The button 2.
- `Button3`: The button 3.
- `Button4`: The button 4.
- `Bumper`: The primary bumper, also called shoulder, button.
- `Bumper2`: The secondary bumper, also called shoulder, button. A gamepad, for instance, has 2 bumpers.
- `Back`: The back button.
- `Menu`: The menu button.

## Buttons

Buttons provide discrete input, either pressed or depressed.

UltimateXR supports the following buttons through the `UxrInputButtons` flags:

- `UxrInputButtons.Joystick`
- `UxrInputButtons.JoystickLeft`
- `UxrInputButtons.JoystickRight`
- `UxrInputButtons.JoystickUp`
- `UxrInputButtons.JoystickDown`
- `UxrInputButtons.Joystick2`
- `UxrInputButtons.Joystick2Left`
- `UxrInputButtons.Joystick2Right`
- `UxrInputButtons.Joystick2Up`
- `UxrInputButtons.Joystick2Down`
- `UxrInputButtons.DPadLeft`
- `UxrInputButtons.DPadRight`
- `UxrInputButtons.DPadUp`
- `UxrInputButtons.DPadDown`
- `UxrInputButtons.Trigger`
- `UxrInputButtons.Trigger2`
- `UxrInputButtons.Grip`
- `UxrInputButtons.ThumbCapSense`
- `UxrInputButtons.IndexCapSense`
- `UxrInputButtons.MiddleCapSense`
- `UxrInputButtons.RingCapSense`
- `UxrInputButtons.LittleCapSense`
- `UxrInputButtons.Button1`
- `UxrInputButtons.Button2`
- `UxrInputButtons.Button3`
- `UxrInputButtons.Button4`
- `UxrInputButtons.Bumper`
- `UxrInputButtons.Bumper2`
- `UxrInputButtons.Back`
- `UxrInputButtons.Menu`

Input components will provide input for their available buttons. There are some special cases, where DPad, for example, will be assigned the joystick data as digital values if no DPad is available. This is to improve support when controllers lack certain elements.

Some buttons are analog in nature but will generate digital values when used with `UxrInputButtons`. For example Joystick values, `Trigger` or `Grip` will report pressed/unpressed values this way.

### Button Input Methods



## `UxrInput1D`

## `UxrInput2D`

## DebugInputPanel