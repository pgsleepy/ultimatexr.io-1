---
title: "Controller Mapping"
---

# Controller Mapping

UltimateXR provides a common interface using `UxrControllerInput` to access all supported controllers. Here we list how they are mapped to this interface.

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

### Vive Cosmos ###

### Vive Focus 3 ###

## Magic Leap ##

### Magic Leap2 ###

## Meta ##

### Meta Quest 2 ###

### Meta Quest Pro ###

### Meta Quest 3 ###

## Oculus ##

### Oculus Rift ###

### Oculus Rift-S ###

### Oculus Quest ###

## Pico ##

### Pico Neo 3 ###

### Pico 4 ###

## Valve ##

## Windows Mixed Reality ##

### Common WMR ###