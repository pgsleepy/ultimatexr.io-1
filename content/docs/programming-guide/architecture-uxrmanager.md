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

{{% callout info %}}
Precaching helps reduce loading times and prevents stuttering at runtime by ensuring that assets are readily available when they are required.
{{% /callout %}}

When a prefab is first instantiated, Unity loads all its associated assets such as textures, models, and sounds. If these assets aren't already in memory and have to be loaded from disk, it can slow down the process. However, subsequent uses of the same prefab benefit from having these assets already in memory, resulting in reduced chances of hiccups.

With precaching, prefabs expected to be used during gameplay are loaded when the scene loads and shown in front of the camera to ensure the rendering. This happens over a set number of frames, usually 50 by default, while the screen stays black to hide the process. Once the precaching is done, the instances are removed, and the scene gradually fades in.
By doing this, the assets needed for these prefabs are more likely to be in memory, which helps prevent interruptions during gameplay.

### `IUxrPrecacheable`

When a new scene is loaded, the framework will look for all components with the `IUxrPrecacheable` interface. The property `PrecachedInstances` from this interface returns the list of prefabs that should be instantiated for precaching.

When users implement new components that instantiate prefabs at runtime, it should be considered whether to add the `IUxrPrecacheable` interface to benefit from the precaching functionality.

The following example defines a custom component that implements the `IUxrPrecacheable` interface and precaches two prefabs: `_prefab1` and `_prefab2`:

```c#
public class MyComponent : UxrComponent, IUxrPrecacheable
{
	[SerializeField] private GameObject _prefab1;
	[SerializeField] private GameObject _prefab2;
	
	public IEnumerable<GameObject> PrecachedInstances
	{
		get
		{
			yield return _prefab1;
			yield return _prefab2;
		}
	}
}
```

## Update Sequence

The `UxrManager` is updated in different stages. Updating in stages provides better control over how components are processed, improving scalability and making debugging easier. Events are available to let developers know when each stage begins or ends, allowing for customization and additional functionality as needed.

The different stages are defined by the `UxrUpdateStage` enum:
- `Update`: Gets new input and tracking values from the controllers. Updates the avatar position using the current locomotion.
- `AvatarUsingTracking`: Updates the avatar extremities using the new tracking values.
- `Manipulation`: Updates the manipulation system.
- `Animation`: Updates the hands based on the current hand poses or hand tracking values.
- `PostProcess`: Applies final processing like Inverse Kinematics.

The following diagram provides on the left a high level view of the stages involved in the update during a single frame. On the right it shows the events raised before and after each stage.

![](/docs/programming-guide/media/UxrManagerUpdateOrder.png)

The `Update` stage runs within the Unity `Update()` method of UxrManager. All the other stages, known collectively as **PostUpdate**, are normally executed within the `LateUpdate()` method of `UxrManager`. You can adjust this behavior using the `PostUpdateMode` property or inspector variable. You can set it to either `Update`, for execution during `Update()`, or `LateUpdate`, for execution during `LateUpdate()`.

## Events

### Stage Update Events

### Precaching Events

### `ComponentStateChanged` Event

## Teleporting

## State Serialization

## State Synchronization