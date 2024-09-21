---
title: "Adding Multiplayer Support"
---

# Adding Multiplayer Support

Adding multiplayer support to an application can be intimidating. We’ve put special effort into developing the multiplayer system to offload as much work as possible from the user and simplify the process, all while maintaining maximum flexibility.

The system is simple enough for artists and designers to quickly set up multiplayer support and prototype gameplay, while offering programmers a robust API to implement custom multiplayer logic for videogames and large-scale enterprise projects.

## Installing the networking SDKs

First, it's recommended to choose one of the supported networking SDKs for your application. If the UltimateXR synchronization API is used to write multiplayer code, the SDK can be switched at any point during development, as the API is platform-agnostic. However, if native multiplayer SDK code is used, those sections would need to be rewritten when changing the SDK.

To view the list of available SDKs for installation, open the SDK Manager by navigating to Unity’s Tools menu: UltimateXR -> SDKs -> SDK Manager:

![](/docs/multiplayer/media/adding-multiplayer-support/MenuSDKManager.png)

Navigate to the networking tab to view the available networking SDKs. For voice-over-network, select the Voice Over Network tab:

![](/docs/multiplayer/media/supported-platforms/SDKManager.png)

## Creating the UxrNetworkManager

In the main or boot scene, begin by adding the `UxrNetworkManager` component through the Tools menu:

![](/docs/multiplayer/media/adding-multiplayer-support/CreateUxrNetworkManager.png)

This will add the UxrNetworkManager GameObject to the scene:

![](/docs/multiplayer/media/adding-multiplayer-support/SceneAfter.png)

This GameObject will contain the `UxrNetworkManager` and, if not already present, the `UxrInstanceManager`. The `UxrInstanceManager` is very important for multiplayer applications. It ensures that object instantiations are replicated across all clients, keeping consistent IDs.

The `UxrNetworkManager` is responsible for setting up all networking functionality. During edit-time, it handles the automatic removal, addition and configuration of the networking components when the selected SDK changes. At runtime, the components that were added are responsible for keeping the communication between the connected clients.

The added GameObject's inspector will look like this uninitialized:

![](/docs/multiplayer/media/adding-multiplayer-support/UxrNetworkManagerInspector01.png)

## Selecting the network systems

The top part of the `UxrNetworkManager` allows to change the selected network system:

![](/docs/multiplayer/media/adding-multiplayer-support/ViewGlobalComponentInfo.png)

Whenever the selected networking system is changed, the `UxrNetworkManager` will automatically remove the old components and configure the new ones. These components are (XXX being the selected system):
- **UltimateXR connectors**: A `UxrXXXNetwork` component for the networking and `UxrXXXVoiceNetwork` component if a voice-over-network was also enabled. These are responsible for adding the components listed below:
- **UltimateXR networking avatar component**: A `UxrXXXAvatar` component is added to each registered avatar prefab. These manage the actual communication through RPCs (Remote Procedure Calls) using the networking SDK.
- **Native global networking components**: Native network managers and components from the selected network system, which provide the core networking functionality.
- **Native GameObject networking components**: Native network components like `NetworkObject` and `NetworkTransform` from the selected network system, responsible for synchronizing the position and orientation of movable objects, such as avatar heads and hands.

UltimateXR keeps track of all GameObjects and components that have been added, so that it can remove the old components when the network system is changed. Users who want to see which GameObjects or components were added can use the View Component Info button. This will open a window displaying details of all the added elements:

![](/docs/multiplayer/media/adding-multiplayer-support/ViewGlobalComponentInfoWindow.png)

By tracking the networking components and GameObjects that have been added, users will never have to manually remove them. Just select 'None' as network system and the components and GameObjects will be automatically removed.

## Setting up the avatar

The next step is to set up the avatar or avatars for multiplayer. During this process, the `UxrNetworkManager` will add the necessary components to synchronize the avatar's head and hands, as well as the specific UltimateXR network avatar component for the selected SDK (e.g., UxrFishNetAvatar, UxrNetCodeAvatar, UxrPhotonFusionAvatar, etc.).

The Avatar Setup section of the `UxrNetworkManager` allows you to register and unregister avatars:

![](/docs/multiplayer/media/adding-multiplayer-support/RegisterAvatar01.png)

You can drop any avatar prefab here. If you drop an avatar from a scene, it will register the source prefab if one exists. If not, an error message will appear.

{{% callout tip %}}
The recommended approach is to create a multiplayer prefab variant from an existing avatar prefab, so that multiplayer-specific changes are kept in that prefab when it is registered. To do this, simply drag an avatar prefab instance from the scene into the project window. A pop-up window will appear where you can select 'Prefab Variant'.
![](/docs/multiplayer/media/adding-multiplayer-support/PrefabVariant.png)
{{% /callout %}}

After an avatar has been registered we can also list which components have been added to the avatar for information. If the avatar is unregistered or the SDK is changed, UltimateXR will take care of removing or replacing all GameObjects and components that were added.

In this case, we have registered a prefab variant for the **CyborgAvatarExample** that comes with the UltimateXR full scene sample:

![](/docs/multiplayer/media/adding-multiplayer-support/RegisterAvatar02.png)

Which for Photon Fusion coupled with Photon Voice will list these GameObjects/components when clicking the "View Info" button:

![](/docs/multiplayer/media/adding-multiplayer-support/ViewAvatarComponents.png)

This process happens behind the scenes and can be modified or reverted at any time by clicking 'Remove' next to the registered avatar.

There are two important points to note about avatars in multiplayer:
- Avatars should **not** be present in the scene during edit-time. **In multiplayer, avatars are spawned at runtime**. Delete any avatars that are in the scene to run multiplayer.
- The `UxrNetworkManager` will set the multiplayer avatar prefab mode to 'UpdateExternally'. When the local avatar is spawned, it switches to 'Local'. The 'Local' avatar is updated based on the connected VR system, while 'UpdateExternally' avatars act like puppets, receiving updates from external data; in this case, other clients.

![](/docs/multiplayer/media/adding-multiplayer-support/AvatarUpdateExternally.png)

{{% callout caution %}}
Remember to remove or disable the avatars in the scene when using multiplayer to ensure user spawning works correctly.
{{% /callout %}}

## Using the prototyping UI

When a networking system is selected, the appropriate UltimateXR SDK connector components are added to the `UxrNetworkManager` GameObject. We have provided each connector with a 'Use Prototyping UI' checkbox that will visualize a quick connection menu on top during playmode. This checkbox is enabled by default.

Continuing with our example using Photon Fusion, these are the connector components added to `UxrNetworkManager`. The networking component shows the prototyping UI option:

![](/docs/multiplayer/media/adding-multiplayer-support/UsePrototypeUI.png)

When the prototyping UI is enabled, the following menu appears during playmode:

![](/docs/multiplayer/media/adding-multiplayer-support/PrototypeUIRuntime.png)

This menu is extremely useful during development. For final builds, the option can be disabled, and developers can add their custom connection logic.

UltimateXR's sync-on-join and runtime synchronization will continue to work seamlessly, as the network logic is stored in the networking avatar components and is triggered when avatars are spawned. Developers can review the connector's source code for insights into how the prototyping UI works and how to create their own custom connection logic.

## Testing

So far we've completed the following steps:
1) Installation of a supported networking SDK.
2) Creation and setup of the `UxrNetworkManager` GameObject.
3) Multiplayer avatar setup.

At this point, we are ready to test our scene.

With the prototyping UI, multiplayer can be quickly tested by creating a build and running it simultaneously in the Unity Editor. One should start as the server/host and the other as client. It's recommended to run both in windowed mode so they remain visible at the same time. The window in focus will receive the controller input.

![](/docs/multiplayer/media/adding-multiplayer-support/MultiplayerTest.png)
