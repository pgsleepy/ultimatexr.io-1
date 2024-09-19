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

UltimateXR doesn’t handle the actual connections, that’s what multiplayer SDKs like Unity NetCode or Photon are for. But what UltimateXR provides is an architecture built from the ground up to keep components in sync remotely, with connectors to those SDKs, making multiplayer functionality completely transparent to the developer.

With this setup, all components in UltimateXR sync automatically. In practice, this means avatars will move in sync on every computer, perform the same gestures, and even interact with the same objects at the same time, like grabbing or pulling in real time.

## How does it work?

A more technical overview is given in the [Technical Overview](/docs/multiplayer/technical-overview) section.

UltimateXR provides multiplayer support out of the box with just a few clicks, using your preferred networking SDK, making it perfect for quick prototyping and indie projects.

For larger projects, where custom multiplayer code is required, UltimateXR has a simple yet powerful API that works with any the supported multiplayer systems. This API has the additional benefit of providing state-saving and replay support seamlessly. New multiplayer system integrations will also work automatically.

Developers can also choose to use native multiplayer SDK code if preferred.

