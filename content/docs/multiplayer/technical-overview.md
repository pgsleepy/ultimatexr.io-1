---
title: "Technical Overview"
---

# Technical Overview

The following overview is highly technical and intended for developers who want to learn more about the details of how multiplayer functionality is implemented in UltimateXR.

## Simplified connection diagram

This diagram provides a simplified overview of how client connectivity is managed using UltimateXR:

![](/docs/multiplayer/media/technical-overview/ConnectionDiagram.png)

The colored dots represent components in the scene that require network synchronization: UltimateXR components and custom user components that use the UltimateXR synchronization API.

UltimateXR monitors all changes in these components and automatically synchronizes them with their counterparts on other clients during multiplayer sessions. These changes could be a property update, such as `player.Color = Color.red`, or a method invocation like `player.Shoot(pos, dir);`.

This data is serialized and transmitted through a connector interface, which abstracts the underlying networking implementation. This flexibility allows UltimateXR to seamlessly integrate with a variety of networking solutions.

## Inside the Network Connectors

The UltimateXR network connectors are a small collection of components for each of the supported networking systems (FishNet, Mirror, NetCode, Photon...). They provide a common interface to send and receive the data required by UltimateXR to keep the components in sync during multiplayer sessions. The network connector components are created by the `UxrNetworkManager` whenever the user changes the active networking system.

Network connectors can be found under the directory at /Scripts/Networking/Integrations/Net. Voice will contain the connectors for the voice-over-network SDKs.

![](/docs/multiplayer/media/technical-overview/Connectors.png)

For each networking system, there are always 2 components:
1) The network implementation, deriving from `UxrNetworkImplementation`. For example `UxrFishNetNetwork` or `UxrUnityNetCodeNetwork`. This component is added by the `UxrNetworkManager` to the same GameObject and is responsible for creating all the other necessary components to enable networking support for the selected networking system SDK, such as:
   - The network avatar, described below.
   - Native Networking Components: These are added to both the scene and the avatar prefab, including elements like the network manager, NetworkObject components, and NetworkTransform components.
2) The network avatar, implementing the `IUxrNetworkAvatar` interface. For example `UxrFishNetAvatar` or `UxrUnityNetCodeAvatar`. This component is added to the avatar prefab by the UxrNetworkImplementation mentioned above. It contains the communication code, including the RPCs responsible for sync-on-join and state synchronization during runtime.

The network implementation component also includes the connection prototyping code for each SDK. This feature helps speed up testing during development by displaying a UI that allows developers to easily create a multiplayer session as a host or server, connect as a client, and manage other basic multiplayer actions.

## Inheriting from `UxrComponent`

A multiplayer session requires two key features:

- **Sync-on-join**: When a user joins, they receive the current state of the session, covering all changes made since the scene initially loaded. This includes a complete list of spawned objects, player positions, modified transforms, variables, and much more.
- **State Synchronization**: Ensures that all changes stay in sync during the session by replicating updates and events from one client to everyone else. Examples include a boolean changing from true to false, a player firing a gun, or a door opening.

With this in mind, UltimateXR provides through its base `UxrComponent` class the ability of any component to:

1) Be identified by a unique id.
2) Serialize/deserialize its current state. We call this **StateSave**.
3) Notify and replicate any state changes. We call this **StateSync**.

All components in UltimateXR and user created components that inherit from `UxrComponent` have these abilities.

{{% callout info %}}
When users cannot inherit from `UxrComponent` because their class already inherits from another common base class, UltimateXR provides a way to use interfaces instead.
{{% /callout %}}

## Sync-on-join

When a new user connects to the server, UltimateXR uses the **StateSave** functionality to serialize all component changes since the scene was loaded into a byte stream. This byte stream is then sent to the user, where it is deserialized, ensuring their scene matches the current session state.

For example, a gun component might only serialize its ammo count, while other components may serialize much more data. The `UxrInstanceManager`, for instance, will serialize a list of instantiated prefab prefabs, including their instance IDs, positions, and rotations. Upon deserialization, it will recreate the necessary prefabs, assign them the correct IDs, and position them accurately in the scene.

UltimateXR provides all the necessary functionality to serialize and deserialize the complete state of a session, while the underlying networking SDK is only used to transmit this data.

To illustrate how this works, here’s an example of the code that enables full scene serialization and deserialization using the UltimateXR API:

```c#
// On the server side: Save complete scene state and compress it.
byte[] serializedData = UxrManager.Instance.SaveStateChanges(UxrStateSaveLevel.Complete, UxrSerializationFormat.BinaryGzip);

// On the joining client side: Load scene state.
UxrManager.Instance.LoadStateChanges(serializedData);
```

As easy as that!

{{% callout info %}}
**StateSave** can be used for much more than just sync-on-join. It can also enable savegame functionality, gameplay replays, and other features.
{{% /callout %}}

## State Synchronization

During a session, users will trigger changes in components through gameplay, such as updates to property values or method calls that need to be executed on other clients. UltimateXR offers a simple yet powerful synchronization API that we call **StateSync**.

Here’s an example: This code implements a `Player` component with a `Life` property that automatically syncs its value with other clients when changed, and a `ChangeTeam()` method that triggers on all clients whenever it’s called. The **StateSync** funcionality is inherited from the base `UxrComponent` class.

```c#
public Player : UxrComponent
{
    // Expose Life property with StateSync support.
    public int Life
    {
        get => _life;
        set
        {
            BeginSync();
            _life = value;
            // Notify that the property changed to a new value.
            EndSyncProperty(value);
        }
    }

    // Expose ChangeTeam() method call with StateSync support.
    public void ChangeTeam(int team, Color color)
    {
        BeginSync();
        // Do stuff here using the parameters received.		
        // Notify of method call using the same parameters.
        EndSyncMethod(new object[] { team, color });
    }
	
    private int _life;
}
```

Changes to the `Life` property on one client will automatically update the value on all other clients. Similarly, calls to the `ChangeTeam()` method will be propagated, ensuring the method is executed with the same parameters on all clients.

But how? Whenever any component in UltimateXR finishes a synchronization block, a `UxrManager.ComponentStateChanged` event is raised. During multiplayer sessions, the framework intercepts these events, serializes them, and sends them to other users. The events are then deserialized and executed on their end, ensuring that all components stay in sync across all users.

All of this functionality is provided by UltimateXR, with the multiplayer SDK used only to broadcast the serialized events through the network.

The diagram describing this process is shown below:
![](/docs/programming-guide/media/StateSyncDiagram.png)

{{% callout info %}}
**StateSync** can also be used beyond multiplayer. Keeping track of all changes and storing them in a timeline is the basis of our replay system.
{{% /callout %}}

## More Information

For a complete guide on **StateSave** and **StateSync** functionality please visit the [State Serialization and Synchronization](/docs/programming-guide/state-serialization-and-synchronization-introduction) section of the Programming Guide.
