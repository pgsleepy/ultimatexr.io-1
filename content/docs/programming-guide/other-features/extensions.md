---
title: "Extensions"
---

# Extensions

## Overview

UltimateXR provides a rich set of extension methods organized into two main categories: **System extensions** and **Unity extensions**. These methods add useful functionality to common types, reducing boilerplate code and improving readability.

You can also check the [System Extensions API Reference](/api/N_UltimateXR_Extensions_System) and the [Unity Extensions API Reference](/api/N_UltimateXR_Extensions_Unity).

## System Extensions

### Collections

- **`CollectionExt`**: Extensions for `ICollection<T>`, including methods to add ranges and check for null or empty collections.
- **`DictionaryExt`**: Extensions for `Dictionary<TKey, TValue>`, including safe get-or-add operations.
- **`EnumerableExt`**: Extensions for `IEnumerable<T>`, including random element selection, shuffling, and ForEach.
- **`ListExt`**: Extensions for `List<T>`, including swap, move, and random operations.

### Strings and Types

- **`StringExt`**: Extensions for `string`, including methods for case conversion, path manipulation, and content checks.
- **`TypeExt`**: Extensions for `Type`, including methods to check inheritance and get friendly type names.
- **`EnumExt`**: Extensions for enum types, including flag manipulation and iteration.
- **`GuidExt`**: Extensions for `Guid`, including conversion utilities.

### Numeric

- **`FloatExt`**: Extensions for `float`, including clamping, remapping, and approximate equality checks.
- **`IntExt`**: Extensions for `int`, including clamping and range utilities.

### IO

- **`BinaryReaderExt`**: Extensions for `BinaryReader`, adding methods to read Unity types such as `Vector3`, `Quaternion`, `Color`, and `Matrix4x4`.
- **`BinaryWriterExt`**: Extensions for `BinaryWriter`, adding methods to write Unity types.
- **`FileExt`**: Extensions for file operations, including safe read/write and path utilities.
- **`PathExt`**: Extensions for path manipulation.

### Threading

- **`TaskExt`**: Extensions for `Task`, including fire-and-forget execution with exception handling.
- **`ActionExt`**: Extensions for `Action` delegates.

## Unity Extensions

### Transforms and GameObjects

- **`TransformExt`**: Extensions for `Transform`, including methods to find children, compute directions, get closest axes, and manipulate hierarchies.
- **`GameObjectExt`**: Extensions for `GameObject`, including safe component access and hierarchy utilities.
- **`ComponentExt`**: Extensions for `Component`, including cached component access and hierarchy traversal.

### Math

- **`Vector2Ext`** / **`Vector3Ext`** / **`Vector4Ext`**: Extensions for vector types, including clamping, snapping, projection, and distance calculations.
- **`Vector2IntExt`** / **`Vector3IntExt`**: Extensions for integer vector types.
- **`QuaternionExt`**: Extensions for `Quaternion`, including conversion and interpolation utilities.
- **`Matrix4x4Ext`**: Extensions for `Matrix4x4`, including decomposition and transformation utilities.

### Rendering

- **`ColorExt`** / **`Color32Ext`**: Extensions for color types, including blending and conversion.
- **`ImageExt`**: Extensions for Unity `Image` components.
- **`MeshExt`**: Extensions for `Mesh`, including sub-mesh extraction operations.
- **`LODGroupExt`**: Extensions for `LODGroup`, including LOD level manipulation.

### Audio

- **`AudioClipExt`**: Extensions for `AudioClip`, including PCM data access and streaming support.
- **`AudioSourceExt`**: Extensions for `AudioSource`.

### Other

- **`CameraExt`**: Extensions for `Camera`, including viewport and frustum utilities.
- **`BehaviourExt`**: Extensions for `Behaviour` components.
- **`MonoBehaviourExt`**: Extensions for `MonoBehaviour`, including coroutine utilities.
- **`ObjectExt`**: Extensions for Unity `Object`, including safe null checks.
- **`SceneManagerExt`**: Extensions for scene management operations.
- **`AsyncOperationExt`**: Extensions for `AsyncOperation`, including awaitable support.
- **`ResourcesExt`**: Extensions for `Resources` loading.
- **`UnityWebRequestExt`**: Extensions for `UnityWebRequest`.

## API Reference

For more information, refer to the [System Extensions API Reference](/api/N_UltimateXR_Extensions_System) and the [Unity Extensions API Reference](/api/N_UltimateXR_Extensions_Unity).
