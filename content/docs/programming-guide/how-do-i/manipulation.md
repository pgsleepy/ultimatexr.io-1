---
title: "Manipulation"
---

# Manipulation

How do I know if an object is currently being grabbed?

Method1:

```c#
bool isBeingGrabbed = UxrGrabManager.Instance.IsBeingGrabbed(grabbableObject);
```

Method2:

```c#
bool isBeingGrabbed = grabbableObject.IsBeingGrabbed;
```

How do I get the object if it is being grabbed with a specific hand?

```c#
if (UxrGrabManager.Instance.GetObjectBeingGrabbed(avatar, UxrHandSide.Left, out UxrGrabbableObject grabbableObject)
{
    Debug.Log($"Object {grabbableObject.name} is being grabbed using the left hand");
}
```

How do I get the grabbing hand of an object?

```c#
if (UxrGrabManager.Instance.GetGrabbingHand(grabbableObject, 0, out UxrGrabber grabber))
{
    Debug.Log($"Avatar {grabber.Avatar.name} is grabbing object using the {grabber.Side} hand");
}
```

How do I get the grabbing hands if an object can be grabbed with more than one?

```c#
// Querying a specific grab point
if (UxrGrabManager.Instance.GetGrabbingHands(grabbableObject, 0, out List<UxrGrabber> grabbers))
{
}

// Querying all grab points
if (UxrGrabManager.Instance.GetGrabbingHands(grabbableObject, -1, out List<UxrGrabber> grabbers))
{
}
```

How can I force to keep a UxrGrabbableObject in place so that it can’t be moved?

```c#
grabbableObject.IsLockedInPlace = true;
```

How can I enable/disable a grab point in a grabbable object?

```c#
// Disable so that it can't be used
grabbableObject.SetGrabPointEnabled(0, false);

// Enable so that it can be used again
grabbableObject.SetGrabPointEnabled(0, true);

// Enable all grab points
grabbableObject.EnableAllGrabPoints();
```

How do I force to release a grabbed object?

Method1:

```c#
UxrGrabManager.Instance.ReleaseGrabs(grabbableObject, true);
```

Method2:

```c#
grabbableObject.ReleaseGrabs(true);
```

How do I place a grabbable object on an anchor?

```c#
// Instant placement
UxrGrabManager.Instance.PlaceObject(grabbableObject, GrabbleObjectAnchor, UxrPlacementType.Immediate, true);

// Smooth placement
UxrGrabManager.Instance.PlaceObject(grabbableObject, GrabbleObjectAnchor, UxrPlacementType.Smooth, true);
```

How do I get the velocity of an object being grabbed?

```c#
Vector3 velocity = UxrGrabManager.Instance.GetGrabbedObjectVelocity(grabbableObject);
```

How do I get the angular velocity of an object being grabbed?

```c#
Vector3 angularVelocity = UxrGrabManager.Instance.GetGrabbedObjectAngularVelocity(grabbableObject);
```

How do I create events to detect any object manipulation?

```c#
private void OnEnable()
{
    UxrGrabManager.Instance.ObjectGrabbing           += UxrGrabManager_ObjectGrabbing;
    UxrGrabManager.Instance.ObjectGrabbed            += UxrGrabManager_ObjectGrabbed;
    UxrGrabManager.Instance.ObjectReleasing          += UxrGrabManager_ObjectReleasing;
    UxrGrabManager.Instance.ObjectReleased           += UxrGrabManager_ObjectReleased;
    UxrGrabManager.Instance.ObjectPlacing            += UxrGrabManager_ObjectPlacing;
    UxrGrabManager.Instance.ObjectPlaced             += UxrGrabManager_ObjectPlaced;
    UxrGrabManager.Instance.ObjectRemoving           += UxrGrabManager_ObjectRemoving;
    UxrGrabManager.Instance.ObjectRemoved            += UxrGrabManager_ObjectRemoved;
    UxrGrabManager.Instance.AnchorRangeEntered       += UxrGrabManager_AnchorRangeEntered;
    UxrGrabManager.Instance.AnchorRangeLeft          += UxrGrabManager_AnchorRangeLeft;
    UxrGrabManager.Instance.PlacedObjectRangeEntered += UxrGrabManager_PlacedObjectRangeEntered;
    UxrGrabManager.Instance.PlacedObjectRangeLeft    += UxrGrabManager_PlacedObjectRangeLeft;
}

private void OnDisable()
{
    UxrGrabManager.Instance.ObjectGrabbing           -= UxrGrabManager_ObjectGrabbing;
    UxrGrabManager.Instance.ObjectGrabbed            -= UxrGrabManager_ObjectGrabbed;
    UxrGrabManager.Instance.ObjectReleasing          -= UxrGrabManager_ObjectReleasing;
    UxrGrabManager.Instance.ObjectReleased           -= UxrGrabManager_ObjectReleased;
    UxrGrabManager.Instance.ObjectPlacing            -= UxrGrabManager_ObjectPlacing;
    UxrGrabManager.Instance.ObjectPlaced             -= UxrGrabManager_ObjectPlaced;
    UxrGrabManager.Instance.ObjectRemoving           -= UxrGrabManager_ObjectRemoving;
    UxrGrabManager.Instance.ObjectRemoved            -= UxrGrabManager_ObjectRemoved;
    UxrGrabManager.Instance.AnchorRangeEntered       -= UxrGrabManager_AnchorRangeEntered;
    UxrGrabManager.Instance.AnchorRangeLeft          -= UxrGrabManager_AnchorRangeLeft;
    UxrGrabManager.Instance.PlacedObjectRangeEntered -= UxrGrabManager_PlacedObjectRangeEntered;
    UxrGrabManager.Instance.PlacedObjectRangeLeft    -= UxrGrabManager_PlacedObjectRangeLeft;
}

private void UxrGrabManager_ObjectGrabbing(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"Object {e.GrabbableObject.name} is about to be grabbed by {e.Grabber.Avatar.name}");
}

private void UxrGrabManager_ObjectGrabbed(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"Object {e.GrabbableObject.name} was grabbed by {e.Grabber.Avatar.name}");
}

private void UxrGrabManager_ObjectReleasing(object sender, UxrManipulationEventArgs e)
{
    // Parameter e.Grabber may be null if the object was released procedurally
    Debug.Log($"Object {e.GrabbableObject.name} is about to be released by {e.Grabber.Avatar.name}");
}

private void UxrGrabManager_ObjectReleased(object sender, UxrManipulationEventArgs e)
{
    // Parameter e.Grabber may be null if the object was released procedurally
    Debug.Log($"Object {e.GrabbableObject.name} was released by {e.Grabber.Avatar.name}");
}

private void UxrGrabManager_ObjectPlacing(object sender, UxrManipulationEventArgs e)
{
    // Parameter e.Grabber may be null if the object was placed procedurally
    Debug.Log($"Object {e.GrabbableObject.name} is about to be placed on anchor {e.GrabbableAnchor.name} by {e.Grabber.Avatar.name}");
}

private void UxrGrabManager_ObjectPlaced(object sender, UxrManipulationEventArgs e)
{
    // Parameter e.Grabber may be null if the object was placed procedurally
    Debug.Log($"Object {e.GrabbableObject.name} was placed on anchor {e.GrabbableAnchor.name} by {e.Grabber.Avatar.name}");
}

private void UxrGrabManager_ObjectRemoving(object sender, UxrManipulationEventArgs e)
{
    // Parameter e.Grabber may be null if the object was removed procedurally
    Debug.Log($"Object {e.GrabbableObject.name} was is about to be removed from anchor {e.GrabbableAnchor.name} by {e.Grabber.Avatar.name}");
}

private void UxrGrabManager_ObjectRemoved(object sender, UxrManipulationEventArgs e)
{
    // Parameter e.Grabber may be null if the object was removed procedurally
    Debug.Log($"Object {e.GrabbableObject.name} was is was removed from anchor {e.GrabbableAnchor.name} by {e.Grabber.Avatar.name}");
}

private void UxrGrabManager_AnchorRangeEntered(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"Object {e.GrabbableObject.name} grabbed by {e.Grabber.Avatar.name} entered the valid drop range of anchor {e.GrabbableAnchor.name}");
}

private void UxrGrabManager_AnchorRangeLeft(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"Object {e.GrabbableObject.name} grabbed by {e.Grabber.Avatar.name} left the valid drop range of anchor {e.GrabbableAnchor.name}");
}

private void UxrGrabManager_PlacedObjectRangeEntered(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"{e.Grabber.Side} hand of {e.Grabber.Avatar.name} entered the valid grab distance of object {e.GrabbableObject.name} currently placed on anchor {e.GrabbableAnchor.name}");
}

private void UxrGrabManager_PlacedObjectRangeLeft(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"{e.Grabber.Side} hand of {e.Grabber.Avatar.name} left the valid grab distance of object {e.GrabbableObject.name} currently placed on anchor {e.GrabbableAnchor.name}");
}
```

How do I create events to detect manipulation on a specific object?

Method1: If you are dealing with an external UxrGrabbableObject named _grabbableObject

```c#
private void OnEnable()
{
    _grabbableObject.Grabbing            += GrabbableObject_Grabbing;
    _grabbableObject.Grabbed             += GrabbableObject_Grabbed;
    _grabbableObject.Releasing           += GrabbableObject_Releasing;
    _grabbableObject.Released            += GrabbableObject_Released;
    _grabbableObject.Placing             += GrabbableObject_Placing;
    _grabbableObject.Placed              += GrabbableObject_Placed;
    _grabbableObject.ConstraintsApplying += GrabbableObject_ConstraintsApplying;
    _grabbableObject.ConstraintsApplied  += GrabbableObject_ConstraintsApplied;
    _grabbableObject.ConstraintsFinished += GrabbableObject_ConstraintsFinished;
}

private void OnDisable()
{
    _grabbableObject.Grabbing            -= GrabbableObject_Grabbing;
    _grabbableObject.Grabbed             -= GrabbableObject_Grabbed;
    _grabbableObject.Releasing           -= GrabbableObject_Releasing;
    _grabbableObject.Released            -= GrabbableObject_Released;
    _grabbableObject.Placing             -= GrabbableObject_Placing;
    _grabbableObject.Placed              -= GrabbableObject_Placed;
    _grabbableObject.ConstraintsApplying -= GrabbableObject_ConstraintsApplying;
    _grabbableObject.ConstraintsApplied  -= GrabbableObject_ConstraintsApplied;
    _grabbableObject.ConstraintsFinished -= GrabbableObject_ConstraintsFinished;
}

private void GrabbableObject_Grabbing(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"Object {e.GrabbableObject.name} is about to be grabbed by avatar {e.Grabber.Avatar.name}");
}

private void GrabbableObject_Grabbed(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"Object {e.GrabbableObject.name} was grabbed by avatar {e.Grabber.Avatar.name}");
}

private void GrabbableObject_Releasing(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"Object {e.GrabbableObject.name} is about to be released by avatar {e.Grabber.Avatar.name}");
}

private void GrabbableObject_Released(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"Object {e.GrabbableObject.name} was released by avatar {e.Grabber.Avatar.name}");
}

private void GrabbableObject_Placing(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"Object {e.GrabbableObject.name} is about to be placed on anchor {e.GrabbableAnchor.name} by avatar {e.Grabber.Avatar.name}");
}

private void GrabbableObject_Placed(object sender, UxrManipulationEventArgs e)
{
    Debug.Log($"Object {e.GrabbableObject.name} was placed on anchor {e.GrabbableAnchor.name} by avatar {e.Grabber.Avatar.name}");
}

private void GrabbableObject_ConstraintsApplying(object sender, UxrApplyConstraintsEventArgs e)
{
    Debug.Log($"Object {_grabbableObject.name} is about to be constrained (if required)");
}

private void GrabbableObject_ConstraintsApplied(object sender, UxrApplyConstraintsEventArgs e)
{
    Debug.Log($"Object {_grabbableObject.name} was constrained and can now be constrained using user specific code");
}

private void GrabbableObject_ConstraintsFinished(object sender, UxrApplyConstraintsEventArgs e)
{
    Debug.Log($"All constraints on object {_grabbableObject.name} were applied");
}
```

Method2: Remove boilerplate if you are creating a component class that will be added to a GameObject with an UxrgrabbableObject by inheriting from UxrGrabbableObjectComponent<T>

```c#
class MyComponent : UxrGrabbableObjectComponent<MyComponent>
{
    protected override void OnObjectGrabbing(UxrManipulationEventArgs e)
    {
        Debug.Log($"Object {e.GrabbableObject.name} is about to be grabbed by avatar {e.Grabber.Avatar.name}");
    }

    protected override void OnObjectGrabbed(UxrManipulationEventArgs e)
    {
        Debug.Log($"Object {e.GrabbableObject.name} was grabbed by avatar {e.Grabber.Avatar.name}");
    }

    protected override void OnObjectReleasing(UxrManipulationEventArgs e)
    {
        Debug.Log($"Object {e.GrabbableObject.name} is about to be released by avatar {e.Grabber.Avatar.name}");
    }

    protected override void OnObjectReleased(UxrManipulationEventArgs e)
    {
        Debug.Log($"Object {e.GrabbableObject.name} was released by avatar {e.Grabber.Avatar.name}");
    }

    protected override void OnObjectPlacing(UxrManipulationEventArgs e)
    {
        Debug.Log($"Object {e.GrabbableObject.name} is about to be placed on anchor {e.GrabbableAnchor.name} by avatar {e.Grabber.Avatar.name}");
    }

    protected override void OnObjectPlaced(UxrManipulationEventArgs e)
    {
        Debug.Log($"Object {e.GrabbableObject.name} was placed on anchor {e.GrabbableAnchor.name} by avatar {e.Grabber.Avatar.name}");
    }

    protected override void OnObjectConstraintsApplying(UxrApplyConstraintsEventArgs e)
    {
        Debug.Log($"Object {e.GrabbableObject.name} is about to be constrained (if required)");
    }

    protected override void OnObjectConstraintsApplied(UxrApplyConstraintsEventArgs e)
    {
        Debug.Log($"Object {e.GrabbableObject.name} was constrained and can now be constrained using user specific code");
    }

    protected override void OnObjectConstraintsFinished(UxrApplyConstraintsEventArgs e)
    {
        Debug.Log($"All constraints on object {e.GrabbableObject.name} were applied");
    }
}
```

How do I apply manual constraints or modifications on a grabbable object making sure that I don’t mess up with UltimateXR’s updating?

```c#
private void OnEnable()
{
    _grabbableObject.ConstraintsApplied += grabbableObject_ConstraintsApplied;
}

private void OnDisable()
{
    _grabbableObject.ConstraintsApplied -= grabbableObject_ConstraintsApplied;
}

// This method is called every frame right after UltimateXR updated the grabbable object
// position/rotation and applied all necessary constraints.
// We can now apply our own constraints on it or other effects. This can be used
// to add more complex behavior to a grabbed object. Some examples:
//   -Add recoil to a custom weapon.
//   -Shake an object while holding it.
//   -Apply more complex translation/rotation constraints than the UxrGrabbableObject provides.
private void grabbableObject_ConstraintsApplied(UxrApplyConstraintsEventArgs e)
{
    // Keeps the local y position between 0.8 and 1.2
    Vector3 localPosition = _grabbableObject.transform.localPosition;
    localPosition.y = Mathf.Clamp(localPosition.y, 0.8f, 1.2f);
    _grabbableObject.transform.localPosition = localPosition;
}
```