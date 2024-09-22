---
title: "Multiplayer Programming"
---

# Multiplayer Programming

Multiplayer programming ensures that data in a game or application is synchronized across different devices, allowing multiple users to interact with each other in real time within the same virtual environment.

Without it, actions like a player jumping or shooting on one computer wouldn't be visible to others. Every relevant action a user takes must be sent to other devices, while also receiving updates from the rest, so everyone shares the same experience.

## Multiplayer programming in UltimateXR

UltimateXR’s core functionality supports multiplayer out of the box. All key components such as avatars, grabbing and manipulation come with built-in state synchronization, allowing multiple users to join a session and interact seamlessly.

However, when developers introduce new custom functionality, additional multiplayer programming will be required to enable that functionality in a multiplayer environment.

In these cases, UltimateXR developers have 3 different options to implement new multiplayer functionality:

1) Use the **UltimateXR Sync API**: A simple yet powerful, platform-agnostic API that not only facilitates multiplayer functionality but also enables automatic support for replays and game saves.
2) Use the **native networking API**: Implements the new multiplayer functionality using the chosen networking system (Mirror, FishNet, NetCode, Photon, etc.).
3) Mix both

## UltimateXR Sync API

In UltimateXR, multiplayer functionality is platform-independent and relies on two key features:
- [StateSave](/docs/programming-guide/state-serialization-and-synchronization-statesave), for serializing component states. This allows the server to send the updated scene state to new clients when they join.
- [StateSync](/docs/programming-guide/state-serialization-and-synchronization-statesync), for synchronizing component state changes. This facilitates the propagation of component state changes among clients.

Other functionality, such as Transform synchronization, is provided through native components.

