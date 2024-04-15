---
title: "Multiplayer Programming"
---

# Multiplayer Programming

In UltimateXR, multiplayer functionality is platform-independent and relies on two key features:
- [StateSave](/docs/programming-guide/state-serialization-and-synchronization-statesave), for serializing component states. This allows the server to send the updated scene state to new clients when they join.
- [StateSync](/docs/programming-guide/state-serialization-and-synchronization-statesync), for synchronizing component state changes. This facilitates the propagation of component state changes among clients.

