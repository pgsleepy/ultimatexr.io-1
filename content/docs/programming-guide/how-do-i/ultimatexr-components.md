---
title: "UltimateXR Components"
---

# UltimateXR Components

All UltimateXR components ultimately derive from `UxrComponent`, which inherits from `MonoBehaviour`.

How can I iterate over all `UxrComponent` in the scene? Enabled or not

```c#
foreach (UxrComponent component in UxrComponent.AllComponents)
{
    Debug.Log($"{component.name}: {component.GetType().Name}")
}
```

How can I iterate over all the enabled `UxrComponent` in the scene?

```c#
foreach (UxrComponent component in UxrComponent.EnabledComponents)
{
    Debug.Log($"{component.name}: {component.GetType().Name}")
}
```

How can I iterate over all enabled `UxrComponent<T>` in the scene?
*Note*: UxrComponent<T> is used when it is interesting to be able to iterate over all components of the same type.

```c#
foreach (UxrGrabbableObject grabbableObject in UxrGrabbableObject.EnabledComponents)
{
    Debug.Log($"Found grabbable object {grabbableObject.name}");
}
```

How can I set up an event so that I get notified every time an `UxrComponent` is enabled?

```c#
UxrComponent.GlobalEnabled += UxrComponent_GlobalEnabled;

private void UxrComponent_GlobalEnabled(UxrComponent component)
{
    Debug.Log($"Component {component.name} of type {component.GetType().Name} was enabled");
}
```

How can I get a unique ID for an object that derives from `UxrComponent`?

```c#
UxrComponent component = ...
Debug.Log(component.UniqueId);
```

How can I get the `UxrComponent` with a given unique ID?

```c#
if (UxrComponent.TryGetComponentById(uniqueId, out UxrComponent component))
{
    Debug.Log($"Found {component.name}");
}
```

How can I get the full path in the scene of a given component? 
*Note*: This will work on any Unity component and uses the `ComponentExt` extension.

```c#
Component component = ...
Debug.Log(component.GetPathUnderScene());
```

How can I get a unique full scene path by including sibling index, type and component index information?
*Note*: This will work on any Unity component and uses the `ComponentExt` extension.

```c#
Component component = ...
Debug.Log(component.GetUniqueScenePath());
```