---
title: "Multiplayer"
---

# Overview

Multiplayer, or multiuser, allows multiple users to participate simultaneously in the same environment.

In video games, multiplayer allows players to either compete or cooperate with others in real-time. It makes games more social and dynamic by adding interaction between players.

In simulation and training, multiplayer is used to let multiple people practice real-life scenarios together. It helps create realistic situations where users can learn and improve their skills.

UltimateXR fully supports multiplayer by providing an architecture that can sync all its components between users seamlessly. It works with any of today's popular multiplayer solutions, such as:
- [Unity NetCode](https://docs-multiplayer.unity3d.com/netcode/current/about/)
- [Photon Fusion](https://www.photonengine.com/fusion)
- [FishNet](https://fish-networking.gitbook.io/docs)
- [Mirror](https://mirror-networking.com/)
- [Dissonance](https://placeholder-software.co.uk/dissonance/docs/index.html) and [Photon Voice](https://www.photonengine.com/voice) (voice over network).

## Why multiplayer?

Why multiplayer? Isn’t it beyond what a VR framework should do? Yes and no.

UltimateXR doesn’t handle the actual connections, that’s what multiplayer SDKs like Unity NetCode or Photon are for. But what UltimateXR provides is an architecture built from the ground up to keep components in sync remotely, with connectors to the networking SDKs, making multiplayer functionality completely transparent to the developer.

With this setup, all components in UltimateXR sync automatically. In practice, this means avatars will move in sync on every computer, perform the same gestures, and even interact with the same objects at the same time, like grabbing or pulling in real time. All systems in UltimateXR are prepared to work in multiplayer environments.

## How does it work?

A more technical overview is given in the [Technical Overview](/docs/multiplayer/technical-overview) section.

UltimateXR provides multiplayer support out of the box with just a few clicks, using your preferred networking SDK, making it perfect for quick prototyping and indie projects.

For larger projects, where custom multiplayer code is required, UltimateXR has a simple yet powerful API that works with any of the supported multiplayer systems. This API has the additional benefit of providing state-saving and replay support seamlessly. [New multiplayer system integrations](/docs/programming-guide/architecture-extending-ultimatexr#new-multiplayer-sdk) will also work automatically.

{{% callout info %}}
Developers can also choose to use or combine native multiplayer SDK code if preferred. While UltimateXR's sync API offers many benefits and is highly recommended, some developers may opt to stick with a more familiar API.
{{% /callout %}}

## Features

- Native support for the most relevant networking and voice-over-network APIs (NetCode, Photon, Mirror, FishNet, Dissonance...). The modular design allows easy integration of new networking APIs as needed.
- Supports **sync-on-join** and **real-time synchronization**, ensuring new players receive the current session state on joining, while all actions are continuously synced across the network.
- The UltimateXR **Synchronization API** enables writing network code that works on any platform with any supported SDK. The API enforces a clean architecture, keeping source files free of multiplayer-specific code.
- **Replay functionality** is automatically supported when using the UltimateXR synchronization API instead of native network SDK code. This allows sessions to be recorded, saved, and replayed later, which is useful for gameplay video stabilization and session reviews.
