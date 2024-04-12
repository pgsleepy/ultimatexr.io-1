---
title: "UxrManager"
---

# UxrManager

`UxrManager` is the main manager in the UltimateXR framework. As a `UxrSingleton`, it can be accessed from any point in the application using `UxrManager.Instance`. As with other singletons, it can be pre-instantiated in the scene in order to change default parameters through the inspector, but it's mostly never pre-instantiated. If no manager is in the scene when accessing `Instance`, it will create one.

## Overview

`UxrManager` is mainly responsible for performing the update loop ensuring that all components are updated in the correct order. It also provides events so that users can also update components at the correct stage when it is required.

In addition to managing the update loop and events, `UxrManager` provides the following features:
- Precaching data when a scene is loaded to prevent performance hiccups when specific prefabs are instantiated.
- Avatar movement/teleportation through various methods.
- Serialization of scene state into byte streams and subsequent deserialization.
- Broadcasting component changes and mirroring changes from other devices such as network clients.

## Precaching

## Update Sequence

## Events

## Teleporting

## State Serialization

## State Synchronization