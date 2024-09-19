---
title: "Technical Overview"
---

# Technical Overview

The following overview is highly technical and intended for programmers who want to learn more about the details of how multiplayer functionality is implemented in UltimateXR.

## `UxrComponent` as base

A multiplayer session requires two key features:

- **Sync-on-join**: When a user joins, they receive the current state of the session, covering all changes made since the scene initially loaded. This includes a complete list of spawned objects, player positions, modified transforms, variables, and much more.
- **State Synchronization**: Ensures that all changes stay in sync during the session by replicating updates and events from one client to everyone else. Examples include a boolean changing from true to false, a player firing a gun, or a door opening.

With this in mind, UltimateXR provides through its base `UxrComponent` class the ability of any component to:

1) Be identified by a unique id.
2) Serialize/deserialize its current state. We call this **StateSave**.
3) Notify and replicate any state changes. We call this **StateSync**.

All components in UltimateXR and user created components that inherit from `UxrComponent` have these abilities.

## Sync-on-join

## State Synchronization
