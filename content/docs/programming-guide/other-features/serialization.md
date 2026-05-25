---
title: "Serialization"
---

# Serialization

## Overview

Serialization is the process of converting an object’s data into a format that can be stored, sent, and later restored. In practice, it means turning values such as positions, rotations or health into bytes that can be saved to a file, sent over a network, or kept in memory.

UltimateXR provides serialization functionality for reading and writing Unity data such as Vector3, Quaternion, and other common types, as well as UltimateXR-specific data such as framework types and component references.
It also simplifies serialization by allowing data to be serialized and deserialized using a single method instead of separate read and write methods, keeping the implementation compact and easier to maintain.
Built-in versioning support helps maintain backwards compatibility when serialized data changes over time.

You can also check the [Serialization API Reference](/api/N_UltimateXR_Core_Serialization).

### Why Serialization Is Needed

UltimateXR uses serialization internally for several core systems:

- **State synchronization for multiplayer**: In networked VR experiences, the state of avatars, grabbed objects, and interactive elements needs to be continuously sent between clients. Serialization converts these state changes into compact byte streams that can be transmitted efficiently over the network.
- **State saving and loading**: Serialization enables saving the complete state of a scene (object positions, component properties, user progress) to disk and restoring it later. This is the foundation for game saves and session persistence.
- **Replay systems**: By serializing state snapshots or state changes over time, applications can record and play back user sessions. This is useful for training review, debugging, or demonstration purposes.

### Why Users Might Need It

Beyond the built-in systems, the serialization framework is available for users to serialize their own custom data. Common use cases include:

- **Custom component state**: If you have components with data that needs to be saved, synced, or replayed. Consult the [StateSave guide](/docs/programming-guide/state-serialization-and-synchronization/statesave) for the implementation details.
- **Custom types**: Implementing `IUxrSerializable` integrates them into UltimateXR's state management.

## Supported Types

The `UxrVarType` enum lists all variable types supported by the serialization system:

- **C# primitives**: `bool`, `byte`, `sbyte`, `char`, `int`, `uint`, `long`, `ulong`, `float`, `double`, `decimal`, `string`.
- **Other**: `Enum`, `Type`, `Guid`, tuple, `DateTime`, `TimeSpan`.
- **Collections**: Of any serializable type: `Array`, `List`, `Dictionary`, `HashSet`.
- **Unity types**: `Vector2`, `Vector3`, `Vector4`, `Color`, `Color32`, `Quaternion`, `Matrix4x4`.
- **Custom types**: Any type by implementing `IUxrSerializable`.

## UxrBinarySerializer

The `UxrBinarySerializer` class is the main low-level serialization tool. It wraps a `BinaryReader` or `BinaryWriter` and provides a unified API for both reading and writing, determined by the `IsReading` property.

Example:

```c#
// Serialization and deserialization use the same method
public void Serialize(UxrBinarySerializer serializer)
{
    int version = serializer.SerializeVersion(CurrentVersion);
    
    serializer.Serialize(ref _health);
    serializer.Serialize(ref _position);
    serializer.Serialize(ref _name);
    
    if (version >= 2)
    {
        serializer.Serialize(ref _armor);
    }
}
```

## IUxrSerializable

The `IUxrSerializable` interface adds serialization capabilities to a class. Classes that implement this interface can be serialized by the `UxrBinarySerializer`.

### Properties

- `int` `SerializationVersion`  
  Gets the current serialization version of the class. This number should be incremented each time the serialization format changes, enabling backwards compatibility.

### Methods

- `void` `Serialize(IUxrSerializer serializer, int serializationVersion)`  
  Serializes or deserializes the object's data using the provided serializer.

### Example

```c#
public class PlayerData : IUxrSerializable
{
    public int SerializationVersion => 2;
    
    public void Serialize(IUxrSerializer serializer, int serializationVersion)
    {
        serializer.Serialize(ref _name);
        serializer.Serialize(ref _score);
        
        if (serializationVersion >= 2)
        {
            serializer.Serialize(ref _level);
        }
    }
    
    private string _name;
    private int    _score;
    private int    _level;
}
```

## Serialization Extensions

### BinaryReaderExt

Extension methods for `BinaryReader` that add support for reading all the supported types.

### BinaryWriterExt

Extension methods for `BinaryWriter` that add support for writing all the supported types.

## UxrVarType

The `UxrVarType` enum is used internally by the serialization system to identify variable types.

## API Reference

For more information, refer to the [Serialization API Reference](/api/N_UltimateXR_Core_Serialization).
