---
title: "Controller Mapping"
---

# Controller Mapping

UltimateXR provides a common interface through `UxrControllerInput` to access all supported controllers. Below we list the mapping used for each controller, sorted alphabetically by vendor.

## HP ##

### HP Reverb G2 ###

| Element  | UltimateXR              | Notes                        |
| -------- | ----------------------- | ---------------------------- |
| Joystick | UxrInput2D.Joystick     |                              |
| Button A | UxrInputButtons.Button1 | Right Side                   |
| Button B | UxrInputButtons.Button2 | Right Side                   |
| Button X | UxrInputButtons.Button1 | Left Side                    |
| Button Y | UxrInputButtons.Button2 | Left Side                    |
| Menu     | UxrInputButtons.Menu    |                              |
| Trigger  | UxrInput1D.Trigger      | Also UxrInputButtons.Trigger |
| Grip     | UxrInput1D.Grip         | Also UxrInputButtons.Grip    |

## HTC ##

### HTC Vive ###

| Element  | UltimateXR              | Notes                        |
| -------- | ----------------------- | ---------------------------- |
| Touchpad | UxrInput2D.Joystick     |                              |
| Menu     | UxrInputButtons.Menu    |                              |
| Trigger  | UxrInput1D.Trigger      | Also UxrInputButtons.Trigger |
| Grip     | UxrInput1D.Grip         | Also UxrInputButtons.Grip    |

### Vive Cosmos ###

| Element  | UltimateXR              | Notes                        |
| -------- | ----------------------- | ---------------------------- |
| Joystick | UxrInput2D.Joystick     |                              |
| Button A | UxrInputButtons.Button1 | Right Side                   |
| Button B | UxrInputButtons.Button2 | Right Side                   |
| Button X | UxrInputButtons.Button1 | Left Side                    |
| Button Y | UxrInputButtons.Button2 | Left Side                    |
| Bumper   | UxrInputButtons.Bumper  |                              |
| System   | UxrInputButtons.Menu    |                              |
| Trigger  | UxrInput1D.Trigger      | Also UxrInputButtons.Trigger |
| Grip     | UxrInput1D.Grip         | Also UxrInputButtons.Grip    |

### Vive Focus 3 ###

| Element  | UltimateXR              | Notes                        |
| -------- | ----------------------- | ---------------------------- |
| Joystick | UxrInput2D.Joystick     |                              |
| Button A | UxrInputButtons.Button1 | Right Side                   |
| Button B | UxrInputButtons.Button2 | Right Side                   |
| Button X | UxrInputButtons.Button1 | Left Side                    |
| Button Y | UxrInputButtons.Button2 | Left Side                    |
| Menu     | UxrInputButtons.Menu    | Left Side Only               |
| Trigger  | UxrInput1D.Trigger      | Also UxrInputButtons.Trigger |
| Grip     | UxrInput1D.Grip         | Also UxrInputButtons.Grip    |

## Magic Leap ##

### Magic Leap2 ###

| Element  | UltimateXR              | Notes                        |
| -------- | ----------------------- | ---------------------------- |
| Joystick | UxrInput2D.Joystick     |                              |
| Bumper   | UxrInputButtons.Bumper  |                              |
| Menu     | UxrInputButtons.Menu    |                              |
| Trigger  | UxrInput1D.Trigger      | Also UxrInputButtons.Trigger |
| Grip     | UxrInput1D.Grip         | Also UxrInputButtons.Grip    |

## Meta ##

### Meta Quest 2 ###

| Element   | UltimateXR                    | Notes                        |
| --------- | ----------------------------- | ---------------------------- |
| Joystick  | UxrInput2D.Joystick           |                              |
| Button A  | UxrInputButtons.Button1       | Right Side                   |
| Button B  | UxrInputButtons.Button2       | Right Side                   |
| Button X  | UxrInputButtons.Button1       | Left Side                    |
| Button Y  | UxrInputButtons.Button2       | Left Side                    |
| ThumbRest | UxrInputButtons.ThumbCapSense | Not available using SteamVR  |
| Menu      | UxrInputButtons.Menu          | Left Side Only               |
| Trigger   | UxrInput1D.Trigger            | Also UxrInputButtons.Trigger |
| Grip      | UxrInput1D.Grip               | Also UxrInputButtons.Grip    |

### Meta Quest Pro ###

| Element   | UltimateXR                    | Notes                        |
| --------- | ----------------------------- | ---------------------------- |
| Joystick  | UxrInput2D.Joystick           |                              |
| Button A  | UxrInputButtons.Button1       | Right Side                   |
| Button B  | UxrInputButtons.Button2       | Right Side                   |
| Button X  | UxrInputButtons.Button1       | Left Side                    |
| Button Y  | UxrInputButtons.Button2       | Left Side                    |
| ThumbRest | UxrInputButtons.ThumbCapSense | Not available using SteamVR  |
| Menu      | UxrInputButtons.Menu          | Left Side Only               |
| Trigger   | UxrInput1D.Trigger            | Also UxrInputButtons.Trigger |
| Grip      | UxrInput1D.Grip               | Also UxrInputButtons.Grip    |

### Meta Quest 3 ###

| Element   | UltimateXR                    | Notes                        |
| --------- | ----------------------------- | ---------------------------- |
| Joystick  | UxrInput2D.Joystick           |                              |
| Button A  | UxrInputButtons.Button1       | Right Side                   |
| Button B  | UxrInputButtons.Button2       | Right Side                   |
| Button X  | UxrInputButtons.Button1       | Left Side                    |
| Button Y  | UxrInputButtons.Button2       | Left Side                    |
| ThumbRest | UxrInputButtons.ThumbCapSense | Not available using SteamVR  |
| Menu      | UxrInputButtons.Menu          | Left Side Only               |
| Trigger   | UxrInput1D.Trigger            | Also UxrInputButtons.Trigger |
| Grip      | UxrInput1D.Grip               | Also UxrInputButtons.Grip    |

## Oculus ##

### Oculus Rift ###

| Element   | UltimateXR                    | Notes                        |
| --------- | ----------------------------- | ---------------------------- |
| Joystick  | UxrInput2D.Joystick           |                              |
| Button A  | UxrInputButtons.Button1       | Right Side                   |
| Button B  | UxrInputButtons.Button2       | Right Side                   |
| Button X  | UxrInputButtons.Button1       | Left Side                    |
| Button Y  | UxrInputButtons.Button2       | Left Side                    |
| ThumbRest | UxrInputButtons.ThumbCapSense | Not available using SteamVR  |
| Menu      | UxrInputButtons.Menu          | Left Side Only               |
| Trigger   | UxrInput1D.Trigger            | Also UxrInputButtons.Trigger |
| Grip      | UxrInput1D.Grip               | Also UxrInputButtons.Grip    |

### Oculus Rift-S ###

| Element   | UltimateXR                    | Notes                        |
| --------- | ----------------------------- | ---------------------------- |
| Joystick  | UxrInput2D.Joystick           |                              |
| Button A  | UxrInputButtons.Button1       | Right Side                   |
| Button B  | UxrInputButtons.Button2       | Right Side                   |
| Button X  | UxrInputButtons.Button1       | Left Side                    |
| Button Y  | UxrInputButtons.Button2       | Left Side                    |
| ThumbRest | UxrInputButtons.ThumbCapSense | Not available using SteamVR  |
| Menu      | UxrInputButtons.Menu          | Left Side Only               |
| Trigger   | UxrInput1D.Trigger            | Also UxrInputButtons.Trigger |
| Grip      | UxrInput1D.Grip               | Also UxrInputButtons.Grip    |

### Oculus Quest ###

| Element   | UltimateXR                    | Notes                        |
| --------- | ----------------------------- | ---------------------------- |
| Joystick  | UxrInput2D.Joystick           |                              |
| Button A  | UxrInputButtons.Button1       | Right Side                   |
| Button B  | UxrInputButtons.Button2       | Right Side                   |
| Button X  | UxrInputButtons.Button1       | Left Side                    |
| Button Y  | UxrInputButtons.Button2       | Left Side                    |
| ThumbRest | UxrInputButtons.ThumbCapSense | Not available using SteamVR  |
| Menu      | UxrInputButtons.Menu          | Left Side Only               |
| Trigger   | UxrInput1D.Trigger            | Also UxrInputButtons.Trigger |
| Grip      | UxrInput1D.Grip               | Also UxrInputButtons.Grip    |

## Pico ##

### Pico Neo 3 ###

| Element   | UltimateXR                    | Notes                        |
| --------- | ----------------------------- | ---------------------------- |
| Joystick  | UxrInput2D.Joystick           |                              |
| Button A  | UxrInputButtons.Button1       | Right Side                   |
| Button B  | UxrInputButtons.Button2       | Right Side                   |
| Button X  | UxrInputButtons.Button1       | Left Side                    |
| Button Y  | UxrInputButtons.Button2       | Left Side                    |
| Menu      | UxrInputButtons.Menu          |                              |
| Home      | UxrInputButtons.Back          |                              |
| Trigger   | UxrInput1D.Trigger            | Also UxrInputButtons.Trigger |
| Grip      | UxrInput1D.Grip               | Also UxrInputButtons.Grip    |

### Pico 4 ###

| Element   | UltimateXR                    | Notes                        |
| --------- | ----------------------------- | ---------------------------- |
| Joystick  | UxrInput2D.Joystick           |                              |
| Button A  | UxrInputButtons.Button1       | Right Side                   |
| Button B  | UxrInputButtons.Button2       | Right Side                   |
| Button X  | UxrInputButtons.Button1       | Left Side                    |
| Button Y  | UxrInputButtons.Button2       | Left Side                    |
| Menu      | UxrInputButtons.Menu          |                              |
| Home      | UxrInputButtons.Back          |                              |
| Trigger   | UxrInput1D.Trigger            | Also UxrInputButtons.Trigger |
| Grip      | UxrInput1D.Grip               | Also UxrInputButtons.Grip    |

## Valve ##

### Index Controller ###

| Element                | UltimateXR                    | Notes                        |
| ---------------------- | ----------------------------- | ---------------------------- |
| Joystick               | UxrInput2D.Joystick           |                              |
| Trackpad               | UxrInput2D.Joystick2          |                              |
| Button A               | UxrInputButtons.Button1       |                              |
| Button B               | UxrInputButtons.Button2       |                              |
| Menu                   | UxrInputButtons.Menu          |                              |
| Home                   | UxrInputButtons.Back          |                              |
| Trigger                | UxrInput1D.Trigger            | Also UxrInputButtons.Trigger |
| Middle finger tracking | UxrInput1D.Grip               | Also UxrInputButtons.Grip    |
| Finger tracking        | -                             | Tracks finger curl values    |

## Windows Mixed Reality ##

### Common WMR ###

| Element   | UltimateXR                    | Notes                        |
| --------- | ----------------------------- | ---------------------------- |
| Joystick  | UxrInput2D.Joystick           |                              |
| Touchpad  | UxrInput2D.Joystick2          |                              |
| Menu      | UxrInputButtons.Menu          |                              |
| Trigger   | UxrInput1D.Trigger            | Also UxrInputButtons.Trigger |
| Grip      | UxrInput1D.Grip               | Also UxrInputButtons.Grip    |
