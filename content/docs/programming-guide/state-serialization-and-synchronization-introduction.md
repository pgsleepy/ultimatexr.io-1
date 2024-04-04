---
title: "State serialization and synchronization: Introduction"
---

# State serialization and synchronization: Introduction

## The three pillars

Among the most important core features in UltimateXR is the ability of a component to:

1) Be identified by a unique id.
2) Serialize/deserialize its state. We call this **StateSave**.
3) Notify and replicate any state changes. We call this **StateSync**.

All components in UltimateXR and user created components have these abilities. Either automatically by inheriting from `UxrComponent` (which is a `MonoBehaviour`) or by using the provided implementation for custom user classes that cannot inherit from `UxrComponent` because they already inherit from another class.

These three core features are used extensively in UltimateXR to provide powerful high level functionality, totally transparent to the user, such as:

- Native **multiplayer** support with automatic sync-on-join and runtime synchronization.
- Save state to a file, facilitating **save-game** functionality in videogames or **session persistence** in simulation/training applications.
- **Replay** functionality, allowing random seeking in sessions spanning hours, using minimum file size.

One of the main goals of UltimateXR has always been supporting these 3 big features (multiplayer, save-state and replay) using a **single, lightweight, platform-agnostic method of synchronization**.

We often say that UltimateXR is much more than an XR framework. This is probably the best example :)

## How does it look?

All built-in components in UltimateXR already come with **StateSave** and **StateSync** fully implemented. For example, an `UxrAvatar` can save/sync its transforms, hand poses, teleportation... etc.
Let's see some quick examples first of how easy it is to implement and use **StateSave**/**StateSync** functionality. We'll dive into the details later:

**Example 1**: Request complete scene serialization/deserialization. This can be used to save/load a session state to/from disk or through a network.

```c#
// Save complete scene state
byte[] serializedData = UxrManager.Instance.SaveStateChanges(UxrStateSaveLevel.Complete, UxrSerializationFormat.BinaryUncompressed);

// Load state
UxrManager.Instance.LoadStateChanges(serializedData);
```

**Example 2.a**: Create a flashlight component with **StateSync** support. This will automatically synchronize the color and toggled state with other users in a network session if there is one. It will also save changes in a replay, if it's being recorded.

```c#
// Add StateSync functionality to a flashlight component, which has a colored light that can be toggled on/off.
// Note: UxrComponent inherits from MonoBehaviour and adds new functionality, including syncing.
public Flashlight : UxrComponent
{
	// Inspector light reference.
	[SerializeField] private Light _light;

	// Expose color property with StateSync support.
	public Color LightColor
	{
		get => _light.color;
		set
		{
			BeginSync();
			_light.color = value;
			// Notify of new property value.
			EndSyncProperty(value);
		}
	}

	// Expose SetEnabled method call with StateSync support.
	public void SetEnabled(bool enabled, Color color)
	{
		BeginSync();
		_light.enabled = enabled;
		LightColor = color;
		// Notify of a method call with parameters.
		EndSyncMethod(new object[] { enabled, color });
	}
}
```

**Example 2.b**: Add **StateSave** support to the Flashlight component. This will automatically include the color and toggled state when saving or loading.
Please note that this example is more complex than typical scenarios because it involves serializing properties for a Unity `Light` component that require explicit get/set calls.
```c#
// Override SerializeState() to include our own data.
// Note that SerializeState is used for both Serialize and Deserialize operations, which
// simplifies and reduces the chance of errors.
protected override void SerializeState(bool isReading, int stateSerializationVersion, UxrStateSaveLevel level, UxrStateSaveOptions options)
{
	// Always call base implementation first using the same parameters
	base.SerializeState(isReading, stateSerializationVersion, level, options);

	if (level >= UxrStateSaveLevel.ChangesSinceBeginning)
	{
		// We can't use ref with Light properties, so we use temp vars.
		Color color        = _light.color;
		bool  lightEnabled = _light.enabled;

		// These serialize or deserialize depending on isReading.
		SerializeStateValue(level, options, nameof(color),        ref color);
		SerializeStateValue(level, options, nameof(lightEnabled), ref lightEnabled);

		if (isReading)
		{
			// If we're deserializing, update the state accordingly.
			_light.color   = color;
			_light.enabled = lightEnabled;
		}
	}
}
```

## Multiplayer, state-save and replay? How?

How can such different features be supported using a single, simple API?
We'll try to give a brief answer, and get into all the details in the upcoming sections:

- Multiplayer: **StateSave** is used on the server to send the complete state of the scene to new users upon joining. **StateSync** is used to replicate sync events at runtime across all clients. Special components like Transforms are automatically taken care of by the `UxrNetworkManager`, creating native components using any of the supported SDKs, completely transparent to the user.
- State-saving/loading: Using **StateSave** functionality, as demonstrated in Example 1 above.
- Replay: During recording a timeline is created using **StateSave** at different levels and at regular intervals: keyframes and sampling. **StateSync** events are intercepted and saved in the timeline whenever they are raised. To replay a file, the same **StateSave** functionality is used to load the keyframes and sampling, while the **StateSync** events are executed at their original timestamps. **StateSave** also includes functionality to interpolate to new state values, ensuring smooth replay and allowing for noise reduction.

## `IUxrUniqueId`, `IUxrStateSave` and `IUxrStateSync`

These are the 3 interfaces that grant access to the functionality described in this section:
- `IUxrUniqueId`: Access to the unique id.
- `IUxrStateSave`: Serialize the state to a binary stream and deserialize the state from a binary stream. Interpolate smoothly from one state to another.
- `IUxrStateSync`: Provide access to an event that is raised each time the state is changed and be able to serialize that event. Also be able to deserialize an event and execute the same change to replicate it.

All 3 interfaces are implemented by `UxrComponent`. Inheriting from `UxrComponent` instead of `MonoBehaviour` when creating custom components is the easiest way to automatically be able to use the functionality.
Some teams, however, already use a custom parent class in their codebase. Since C# doesn't support multiple inheritance it would not be possible to use the functionality this way. To overcome this, UltimateXR provides implementer classes for `IUxrUniqueId`, `IUxrStateSave`,  and `IUxrStateSync` so that they can easily be implemented in custom parent classes. For more details, check this guide.

[link to the guide]

Now let's start by knowing a little more about unique ids and why they're important.