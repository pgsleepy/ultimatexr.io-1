---
title: "Overview"
---

# Overview

Developing object interaction for Virtual Reality is a very challenging task. In traditional applications one normally gets close an interactive object and presses a key that will trigger an animation. Sometimes these interactions can get more complicated and procedural animation is required to make sure the interaction looks more natural.

In Virtual Reality you are not looking at the world from a small window, you are inside the world.

Things work on a very different scale, and you rely on your own hands to touch things. You no longer look at a screen when you interact with something, you are moving your real hands close to an object to grab it. You can even try to cheat since the physical limitations do no longer apply. There is nothing that prevents you from punching through a virtual wall since there is no wall in the real world that will stop your hand. Well... Sometimes accidents happen and you break your TV by mistake. 

All this makes it very difficult to create interactive VR applications from scratch without any help.

One of the biggest challenges of UltimateXR was creating a manipulation system that would feel natural. Bad interactions immediately throw somebody off and ruin an application. Good interactions create memorable experiences and that is what we are aiming for.

In this guide we will show you the key components enabling manipulation using UltimateXR:

- `UxrGrabbableObject`: Component that enables an object to be grabbed.
- `UxrGrabbableObjectAnchor`: Component that can be used to place a `UxrGrabbableObject` on.
- `UxrGrabber`: Component added to each hand of an avatar enabling it to grab objects.

## Prerequisites

- Having an avatar instantiated in the scene, such as any of the built-in UltimateXR avatars. It should have a grab action with a default grab pose set in the `UxrStandardAvatarController` component in the avatar root object.

You can use any of the UltimateXR avatar prefabs located in /UltimateXR/prefabs/avatars
