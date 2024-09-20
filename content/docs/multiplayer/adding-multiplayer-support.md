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

This GameObject will contain the `UxrNetworkManager` and, if not already present, the UxrInstanceManager. The UxrInstanceManager is very important for multiplayer applications. It ensures that object instantiations are replicated across all clients, keeping consistent IDs.

The `UxrNetworkManager` is responsible for setting up all networking functionality. During edit-time, it handles the automatic removal, addition and configuration of the networking components when the selected SDK changes. At runtime, the components that were added are responsible for keeping the communication between the connected clients.

![](/docs/multiplayer/media/adding-multiplayer-support/UxrNetworkManagerInspector01.png)

Whenever the selected networking SDK is changed, the UxrNetworkManager will automatically remove the old components and configure the new ones. These components are (XXX being the selected SDK):
- **UltimateXR connectors**: A `UxrXXXNetwork` component for the networking and `UxrXXXVoiceNetwork` component if a voice-over-network was also enabled. These are responsible for adding the other components below.
- **UltimateXR networking avatar component**: A `UxrXXXAvatar` component is added to each registered avatar prefab. These manage the actual communication through RPCs (Remote Procedure Calls) using the networking SDK.
- **Native global networking components**: Native network managers and components from the selected SDK, which provide the core networking functionality.
- **Native GameObject networking components**: Native network components like `NetworkObject` and `NetworkTransform` from the selected SDK, responsible for synchronizing the position and orientation of movable objects, such as avatar heads and hands.

UltimateXR keeps track of all GameObjects and components that have been added, to be able to remove the old components when the SDK changed. Users who want to know which GameObjects or components were added can use the View Component Info button:

![](/docs/multiplayer/media/adding-multiplayer-support/ViewGlobalComponentInfo.png)

This will open up a window detailing all the elements that were added:

![](/docs/multiplayer/media/adding-multiplayer-support/ViewGlobalComponentInfoWindow.png)

## Setting up the avatar

## Using the prototyping UI

## Testing

## Where from here?


