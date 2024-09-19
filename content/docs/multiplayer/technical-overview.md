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

When a new user connects to the server, UltimateXR uses the **StateSave** functionality to serialize all component changes since the scene was loaded into a byte stream. This byte stream is then sent to the user, where it is deserialized, ensuring their scene matches the current session state.

For example, a gun component might only serialize its ammo count, while other components may serialize much more data. The `UxrInstanceManager`, for instance, will serialize a list of instantiated prefab prefabs, including their instance IDs, positions, and rotations. Upon deserialization, it will recreate the necessary prefabs, assign them the correct IDs, and position them accurately in the scene.

UltimateXR provides all the necessary functionality to serialize and deserialize the complete state of a session, while the underlying networking SDK is only used to transmit this data.

To illustrate how this works, here’s an example of the code that enables full scene serialization and deserialization using the UltimateXR API:

```c#
// Save complete scene state and compress it.
byte[] serializedData = UxrManager.Instance.SaveStateChanges(UxrStateSaveLevel.Complete, UxrSerializationFormat.BinaryGzip);

// Load scene state. Format is automatically detected.
UxrManager.Instance.LoadStateChanges(serializedData);
```

As easy as that!

{{% callout info %}}
StateSave can be used in fact for much more than sync-on-join. It can be used to create savegame functionality, gameplay replays and much more.
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
        get => life;
        set
        {
            BeginSync();
            _life = value;
            // Notify that the property changed to a new value.
            EndSyncProperty(value);
        }
    }

    // Expose ChangeTeam method call with StateSync support.
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

{{% callout info %}}
StateSync is also used beyond multiplayer. Keeping track of all changes and storing them in a timeline is the basis of our replay system.
{{% /callout %}}


## More Information

For a complete guide on **StateSave** and **StateSync** functionality please visit the [State Serialization and Synchronization](/docs/programming-guide/state-serialization-and-synchronization-introduction) section of the Programming Guide.
