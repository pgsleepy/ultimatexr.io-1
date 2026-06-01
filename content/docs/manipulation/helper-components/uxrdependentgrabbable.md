---
title: "UxrDependentGrabbable"
---

# UxrDependentGrabbable

`UxrDependentGrabbable` prevents an object from being grabbed unless another specific object is already being held. This creates a grab dependency that lets you enforce real-world logic: the user must first pick up the parent object before they can interact with a part of it.

The classic example is a grenade and its safety pin. Without a dependency, a user trying to grab the grenade might accidentally grab the pin instead. With `UxrDependentGrabbable` on the pin, the pin's `UxrGrabbableObject` remains disabled until the grenade is being held.

![](/media/docs/manipulation/helper-components/uxrdependentgrabbable/01DependentGrabbable.jpg)

## How it works

The component disables its own `UxrGrabbableObject` on startup and re-enables it each frame while the referenced object is being grabbed. The moment the referenced object is released, the dependent object is disabled again — unless **Only Once** is enabled, in which case the dependent object stays enabled permanently after being grabbed for the first time.

## Setup

1. Add a `UxrGrabbableObject` to the dependent object (the pin, the latch, or whatever part requires the dependency).
2. Add `UxrDependentGrabbable` to the same GameObject.
3. Drag the object that must be held first into the **Dependent On** field.
4. Decide whether to enable **Only Once** (see below).

![](/media/docs/manipulation/helper-components/uxrdependentgrabbable/02Inspector.jpg)

## Parameter reference

- *Dependent On*: The `UxrGrabbableObject` that must be actively grabbed before this object can be grabbed. While this reference is not being held, the component's own `UxrGrabbableObject` is disabled and cannot be interacted with.
- *Only Once*: When enabled, the dependency check stops the first time the dependent object is successfully grabbed. After that point the object remains grabbable regardless of whether the referenced object is still being held. This is the correct setting for a grenade pin: once the pin is pulled, it should stay loose even if the user puts the grenade down.
