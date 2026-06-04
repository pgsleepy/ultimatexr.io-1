---
title: "Tools Menu"
---

# The Tools Menu

Once UltimateXR is installed, a new menu will be available under Tools->UltimateXR providing quick access to common functionality.

![](/media/docs/getting-started/tools-menu/ToolsMenu.png)

## The Avatar menu

![](/media/docs/getting-started/tools-menu/ToolsMenuAvatars.png)

Avatars are the visual representation of users in virtual reality.
The Avatar menu enables users to incorporate a fully functional built-in avatar into the scene. These built-in avatars can be used directly or serve as parent prefabs to create custom variants. Creating a prefab variant offers the advantage of inheriting all the functionalities of the parent while allowing users to customize the graphical appearance and add new components as needed.
More information about avatars can be found in the [Avatars guide](/docs/avatars/overview).

## The Networking menu

![](/media/docs/getting-started/tools-menu/ToolsMenuNetworking.png)

The Networking menu enables users to activate networking capabilities, facilitating full multiplayer support for projects. Multiplayer functionality, also known as multiuser functionality, allows multiple users to experience the same environment, view each other, and interact within it.
UltimateXR offers native networking functionality through connectors with the most commonly used networking SDKs.

More information about multiplayer can be found in the [Multiplayer guide](/docs/multiplayer/overview).

## The SDKs menu

![](/media/docs/getting-started/tools-menu/ToolsMenuSdks.png)

The SDKs menu provides access to the SDK Manager, which serves as the central hub in UltimateXR for managing integrations with other platforms. Within the SDK Manager, users can explore all platform categories and view the available SDKs that can be installed, along with their current status.

Another important feature accessible from the SDKs menu is the symbols removal tool. After uninstalling an SDK, residual code from the SDK may still be present in Unity, leading to compiler errors. The symbols removal tool effectively eliminates any remaining references to the uninstalled SDK.

## The Utils menu

![](/media/docs/getting-started/tools-menu/ToolsMenuUtils.png)

Through the Utils menu users can access a variety of transform utilities, allowing to perform tasks such as aligning objects, orienting objects towards specific targets, and mirroring objects across planes.

## Global Settings

The Global Settings menu provides access to the global settings file, where project-wide options are stored. If the project does not already have a global settings file, the menu will create a new one.

![](/media/docs/getting-started/tools-menu/ToolsMenuGlobalSettings.png)

The Log Levels section provides control over the amount of information that is logged for each UltimateXR module. Sometimes the console can become cluttered with too many messages, and it might be better turning some modules off. On the other hand, sometimes increasing the log level for a specific module can help tracking down the source of an error. The available modules are:

- **Animation**: Log level for animation events.
- **Avatar**: Log level for avatar events.
- **Core**: Log level for core events.
- **Devices**: Log level for controller input device events.
- **Locomotion**: Log level for locomotion events.
- **Manipulation**: Log level for manipulation events.
- **Networking**: Log level for networking events.
- **Rendering**: Log level for rendering events.
- **UI**: Log level for UI events.
- **Weapons**: Log level for weapon system events.

The Networking section provides control over some networking related options:
- **Initial State Msg Format** selects the networking message format to use when the host returns the initial state of the session upon joining. Compression has a little CPU overhead but will use less bandwidth.
- **State Sync Msg Format** selects the message format used for exchanging state synchronization updates. These messages are typically small in size and are sent uncompressed by default, as compression is not applied to smaller data.
- **Unique ID Debug Level** selects the amount of debug information sent together with unique IDs through the network. During development this can help diagnose missing IDs by showing object names or paths. Set to **No Debug** in production builds.
- **Sync Grabbable Physics** selects whether to sync grabbable objects with rigidbodies that have no NetworkTransform/NetworkRigidbody set up. This fallback keeps position, rotation and speed manually in sync by sending periodic RPC messages.
- **Grabbable Sync Interval Seconds** selects the interval in seconds that grabbable objects with rigidbodies are kept in sync when there are no NetworkTransform/NetworkRigidbody set up. Lower values will send RPC messages more frequently but will increase the use of bandwidth.
- **Transform Sync Interval Seconds** selects the interval in seconds between transform synchronization messages for objects using `UxrSyncObject` with network transform synchronization enabled. Lower values increase update frequency and bandwidth usage.
