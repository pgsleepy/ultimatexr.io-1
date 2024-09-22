---
title: "Multiplayer Programming"
---

# Multiplayer Programming

Multiplayer programming ensures that data in a game or application is synchronized across different devices, allowing multiple users to interact with each other in real time within the same virtual environment.

Without it, actions like a player jumping or shooting on one computer wouldn't be visible to others. Every relevant action a user takes must be sent to other devices, while also receiving updates from the rest, so everyone shares the same experience.

## Multiplayer programming in UltimateXR

UltimateXR’s core functionality has multiplayer support. All key components such as avatars, grabbing and manipulation come with built-in state synchronization, allowing multiple users to join a session and interact seamlessly.

However, when developers introduce new custom functionality in their application, additional multiplayer programming will be required to enable that functionality in a multiplayer environment.

In these cases, UltimateXR developers can choose how to to implement new multiplayer functionality:

1) Using the **UltimateXR Sync API**: A simple yet powerful, platform-agnostic API that not only facilitates multiplayer functionality but also enables automatic support for replays and game saves.
2) Using the **native networking API**: Implements the new multiplayer functionality using the chosen networking system (Mirror, FishNet, NetCode, Photon, etc.).

### Pros of using the UltimateXR Sync API:
  - **Clean and Simple**: It keeps your codebase clean by avoiding platform-specific networking code.
  - **Cross-Networking Support**: Works seamlessly across all supported networking systems without requiring code changes.
  - **Enhanced Functionality**: Enables additional features like replays and game saves with no extra effort.

### Cons of using the UltimateXR Sync API:
  - **Familiarity with Native APIs**: Developers may be more familiar with the networking API of their chosen system.
  - **Sync Variables**: The native networking system is required for using sync variables, though this will be addressed in future updates.
  - **No Built-in Anti-Cheating Support Yet**: The current version lacks built-in anti-cheating mechanisms, but this feature is planned for future releases.

### Additional Notes:
Certain aspects of network programming, such as lobbies, match-making, and connections, have intentionally been left to the native networking system. These parts are highly specific to each application and are currently beyond the scope of UltimateXR. However, during development, the Prototyping UI provided by UltimateXR for each supported networking module offers a quick solution for testing multiplayer features.

## UltimateXR Sync API

In UltimateXR, multiplayer functionality is platform-independent and relies on two key features:
- [StateSave](/docs/programming-guide/state-serialization-and-synchronization-statesave), for serializing component states. This allows the server to send the updated scene state to new clients when they join.
- [StateSync](/docs/programming-guide/state-serialization-and-synchronization-statesync), for synchronizing component state changes. This facilitates the propagation of component state changes among clients.

Other functionality, such as Transform synchronization, is provided through native components.

