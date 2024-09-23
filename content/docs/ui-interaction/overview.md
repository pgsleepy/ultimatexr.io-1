---
title: "Overview"
---

# Overview

Graphical user interfaces, like in traditional software, are a key element in Virtual Reality to visualize data and interact with the application. 

Data is normally represented using components such as text, images, and video while the different actions are performed by pressing interactive elements like buttons and scroll views.

To provide maximum compatibility with existing workflows and designs, UltimateXR fully supports *Unity UI* and *TextMeshPro*. This means that even user interfaces that were designed without VR in mind, can automatically work using UltimateXR without any additional effort.

Here is an example of the popular [SRDebugger tool](https://www.stompyrobot.uk/tools/srdebugger/), working in VR using UltimateXR:

![](/docs/guides/media/ui/01SRDebugger.jpg)
 
## Interacting with a UI

UltimateXR supports two ways to interact with a user interface:

- Direct touch, using the fingertips that have a `UxrFingerTip` component.
- From a distance, using a laser pointer on one or both hands, through the `UxrLaserPointer` component.

## Setting up a UI

The first requirement to be able to use user interfaces is to add a Unity *EventSystem* GameObject to the scene using the GameObject -> UI -> EventSystem menu:

![](/docs/guides/media/ui/02EventSystem.jpg)

We then add the *UxrPointerInputModule* component to the *EventSystem* GameObject which looks as follows:

![](/docs/guides/media/ui/03UxrPointerInputModule.jpg)
 
The `UxrPointerInputModule` is required to enable interaction with canvases in the scene.

The *Auto Enable On World Canvases* option allows UltimateXR to automatically setup all the canvases in the scene that work in World mode (i.e. in 3D). This means that they will automatically support interaction using the given input type (fingertips or laser pointers).

If for some reason you don’t want UltimateXR to automatically set up pre-existing canvases or you are instantiating a canvas at runtime, you need to set up the canvas manually. This is done by simply adding a *UxrCanvas* component on the same GameObject that has the Unity Canvas:

![](/docs/guides/media/ui/04UxrCanvas.jpg)
 
A common mistake is to forget adding the `UxrCanvas` component to prefabs that are instantiated at runtime.
