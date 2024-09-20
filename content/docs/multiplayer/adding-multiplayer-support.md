---
title: "Adding Multiplayer Support"
---

# Adding Multiplayer Support

Adding multiplayer support to an application can be intimidating. We’ve put special effort into developing our multiplayer system to offload as much work as possible from the user and simplify the process, all while maintaining maximum flexibility.

The system is simple enough for artists and designers to quickly set up multiplayer support and prototype gameplay, while offering programmers a robust API to implement custom multiplayer logic for videogames and large-scale enterprise projects.

## Choosing the networking SDK(s)

First, it's recommended to choose one of the supported networking SDKs for your application. If the UltimateXR synchronization API is used to write multiplayer code, the SDK can be switched at any point during development, as the API is platform-agnostic. However, if native multiplayer SDK code is used, those sections would need to be rewritten when changing the SDK.

To view the list of available SDKs for installation, open the SDK Manager by navigating to Unity’s Tools menu: UltimateXR -> SDKs -> SDK Manager.

![](/docs/multiplayer/media/supported-platforms/SDKManager.png)

## Creating the UxrNetworkManager

In the main or boot scene, begin by adding the UxrNetworkManager component through the Tools menu:

![](/docs/multiplayer/media/adding-multiplayer-support/CreateUxrNetworkManager.png)

This will add the UxrNetworkManager GameObject to the scene:

![](/docs/multiplayer/media/adding-multiplayer-support/SceneAfter.png)

This GameObject contains the `UxrNetworkManager` and also the `UxrInstanceManager` if it wasn't already present. The `UxrInstanceManager` is very important in multiplayer applications, since it's responsible for ensuring that instantiations are replicated across all clients and also that they have the same ID.
This GameObject will contain the `UxrNetworkManager` and, if not already present, the UxrInstanceManager. The UxrInstanceManager is very important for multiplayer applications. It ensures that object instantiations are replicated across all clients, keeping consistent IDs.

![](/docs/multiplayer/media/adding-multiplayer-support/UxrNetworkManagerInspector01.png)

## Setting up the avatar

## Using the prototyping UI

## Testing

## Where from here?


