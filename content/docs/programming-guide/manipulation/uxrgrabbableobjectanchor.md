---
title: "UxrGrabbableObjectAnchor Programming Guide"
---

# UxrGrabbableObjectAnchor

## Introduction

The `UxrGrabbableObjectAnchor` component, when added to a GameObject, defines a point in space where `UxrGrabbableObject` entities can be placed on. Anchors work together with the `UxrGrabManager` to handle placement mechanics automatically.

{{% callout info %}}
The full API can be explored in the [UxrGrabbableObjectAnchor API Reference](/api/T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor) and the user guide can be found in the [UxrGrabbableObjectAnchor Component Guide](/docs/manipulation/uxrgrabbableobjectanchor).
{{% /callout %}}

Some key features include:
- **Automatic handling**: Placement mechanics are handled automatically by the `UxrGrabManager`. There is no special requirement to set it up in a scene; the grab manager will be available as soon as it is required.
- **Compatible tags**: Tags allow to model which objects can be placed on the anchor, using `UxrGrabbableObject`'s `Tag` property. If the list is empty, the anchor is compatible with all `UxrGrabbableObject` entities that do not have a tag.
- **Placing validators**: In addition to tags, custom validator functions can be registered to implement complex compatibility behavior that changes at runtime.
- **Visual feedback**: GameObjects can be assigned to activate or deactivate automatically based on manipulation events, providing visual cues to the user.
- **Event support**: Events such as `Placing`, `Placed`, `Removing`, and `Removed` allow custom logic to be executed when users interact with the anchor.

## Alignment and Proximity

These properties define how the anchor aligns objects and computes distances for placement.

### Properties

- `Transform` `AlignTransform`  
  Gets the transform used to snap the `UxrGrabbableObject` placed on the anchor. By default, it uses the anchor's own transform.
- `Transform` `DropProximityTransform`  
  Gets the transform used to compute the distance to `UxrGrabbableObject` entities, in order to determine if they are close enough to be placed. By default, it uses the anchor's own transform.
- `float` `MaxPlaceDistance`  
  Gets or sets the maximum distance from which an object that is released will be placed on the anchor.

## Current State

### Properties

- `UxrGrabbableObject` `CurrentPlacedObject`  
  Gets the `UxrGrabbableObject` that is currently placed on the anchor.

## Compatible Tags

Compatible tags control which `UxrGrabbableObject` entities can be placed on the anchor. If the tag list is empty, the anchor accepts all objects that do not have a tag. Objects with a tag can only be placed on anchors that include that tag in their compatible list.

### Methods

- `void` `AddCompatibleTags(params string[] tags)`  
  Adds one or more compatible tags to the anchor.
- `void` `RemoveCompatibleTags(params string[] tags)`  
  Removes one or more compatible tags from the anchor.

## Placing Validators

Placing validators are functions that provide additional runtime logic to determine whether a `UxrGrabbableObject` can be placed on the anchor. An object can be placed only if its tag is compatible **and** all registered validators return `true`.

### Methods

- `void` `AddPlacingValidator(Func<UxrGrabbableObject, bool> validator)`  
  Adds a placing validator function. The function receives a `UxrGrabbableObject` and returns whether it can be placed.
- `void` `RemovePlacingValidator(Func<UxrGrabbableObject, bool> validator)`  
  Removes a previously added placing validator.
- `bool` `IsCompatibleObject(UxrGrabbableObject grabbableObject)`  
  Checks whether the given object is compatible with the anchor, considering both tags and validators.

### Example

```c#
// Only allow placing if the object's name starts with "Key"
anchor.AddPlacingValidator(grabbable => grabbable.name.StartsWith("Key"));
```

## Removing Objects

### Methods

- `void` `RemoveObject(bool propagateEvents)`  
  Removes the currently placed object from the anchor, optionally propagating events.

## Visual Feedback

These properties allow assigning GameObjects that will be automatically activated or deactivated based on the anchor's state. They can be set up in the inspector or changed at runtime.

### Properties

- `GameObject` `ActivateOnCompatibleNear`  
  Gets or sets the GameObject that will be enabled when a grabbed compatible object is close enough to be placed on the anchor.
- `GameObject` `ActivateOnCompatibleNotNear`  
  Gets or sets the GameObject that will be enabled when there is no grabbed compatible object close enough.
- `GameObject` `ActivateOnHandNearAndGrabbable`  
  Gets or sets the GameObject that will be enabled when there is an object placed on the anchor and a grabber is close enough to grab it.
- `GameObject` `ActivateOnPlaced`  
  Gets or sets the GameObject that will be enabled when there is an object currently placed on the anchor.
- `GameObject` `ActivateOnEmpty`  
  Gets or sets the GameObject that will be enabled when there is no object placed on the anchor.

## Events

These events are raised during anchor interactions, allowing custom logic to be executed when objects are placed on or removed from the anchor.

Refer to the [Events](/docs/programming-guide/manipulation/events) guide for a full description.

- `Placing`  
  Raised right before an object is placed on the anchor.
- `Placed`  
  Raised right after an object was placed on the anchor.
- `Removing`  
  Raised right before the currently placed object is removed from the anchor.
- `Removed`  
  Raised right after the currently placed object was removed from the anchor.
- `SmoothPlaceTransitionEnded`  
  Raised right after an object that was placed on the anchor ended its smooth placing transition.

## API Reference

For more information, refer to the [UxrGrabbableObjectAnchor API Reference](/api/T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor).
