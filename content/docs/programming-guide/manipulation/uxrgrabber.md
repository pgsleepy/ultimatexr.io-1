---
title: "UxrGrabber Programming Guide"
---

# UxrGrabber

## Introduction

The `UxrGrabber` component is added to an avatar's hands, enabling them to interact with `UxrGrabbableObject` entities in the scene. Normally there are two per avatar, one on each hand. They are usually added to the hand GameObject since it is the `UxrGrabber` transform where grabbable objects will be snapped to when snapping is used.

{{% callout info %}}
The full API can be explored in the [UxrGrabber API Reference](/api/T_UltimateXR_Manipulation_UxrGrabber) and the user guide can be found in the [UxrGrabber Component Guide](/docs/manipulation/uxrgrabber).
{{% /callout %}}

Some key features include:
- **Automatic setup**: The `UxrGrabber` is typically set up automatically when configuring an avatar, through the HandsIntegration prefab. The `UxrGrabManager` handles all interactions between grabbers and grabbable objects.
- **Proximity transforms**: By default, the grabber's own transform is used to compute distances to grabbable objects. Additional proximity transforms can be specified so that grabbable objects can choose which one to use. For example, in an aircraft cockpit, knobs may prefer the distance from the tip of the index finger, while bigger objects prefer the palm of the hand.
- **Hand orientation info**: The component provides directional information about the hand, such as finger direction, palm direction, and thumb direction.
- **Velocity tracking**: Current and smoothed velocity and angular velocity are available, useful for throwing mechanics.

## Hand Side

### Properties

- `UxrHandSide` `Side`  
  Gets whether the grabber component is on the left or right hand.
- `UxrHandSide` `OppositeSide`  
  Gets the opposite hand side.
- `UxrGrabber` `OppositeHandGrabber`  
  Gets the opposite hand grabber in the same avatar.

## Hand Orientation

These properties provide directional information about the hand, useful for computing grab orientations and mirroring snap transforms.

### Properties

- `Vector3` `LocalFingerDirection`  
  Gets the 'UxrGrabber' positive or negative local axis that points towards the fingers, excluding the thumb.
- `Vector3` `FingerDirection`  
  Gets `LocalFingerDirection` in world-space.
- `Vector3` `LocalPalmOutDirection`  
  Gets the 'UxrGrabber' positive or negative local axis pointing outwards from the palm.
- `Vector3` `PalmOutDirection`  
  Gets `PalmOutDirection` in world-space.
- `Vector3` `LocalPalmThumbDirection`  
  Gets the 'UxrGrabber' positive or negative local axis pointing towards the thumb.
- `Vector3` `PalmThumbDirection`  
  Gets `PalmThumbDirection` in world-space.
- `TransformExt.MirrorType` `RequiredMirrorType`  
  Gets which mirroring type snap transforms should use with the grabber if they want to be mirrored. Snap transforms are GameObjects in `UxrGrabbableObject` that determine where they should be placed in the grabber during grabs.

## Hand Bone

### Properties

- `Transform` `HandBone`  
  Gets the avatar hand bone that corresponds to the grabber.
- `Vector3` `HandBoneRelativePos`  
  Gets the relative position of the hand bone to the grabber.
- `Quaternion` `HandBoneRelativeRot`  
  Gets the relative rotation of the hand bone to the grabber.

## Hand Renderer

### Properties

- `Renderer` `HandRenderer`  
  Gets or sets the hand renderer. If unassigned, the component will try to find it automatically from the avatar.

## Grab State

### Properties

- `UxrGrabbableObject` `GrabbedObject`  
  Gets the currently grabbed object, or null if no object is being grabbed.

## Unprocessed Transform

The grabber's position and rotation may be altered by the `UxrGrabManager` when the grabbed object has constraints. These properties provide the original, unprocessed values based solely on the hand controller tracking sensor.

### Properties

- `Vector3` `UnprocessedGrabberPosition`  
  Gets the unprocessed grabber position, based only on the hand controller tracking sensor.
- `Quaternion` `UnprocessedGrabberRotation`  
  Gets the unprocessed grabber rotation, based only on the hand controller tracking sensor.

## Velocity

These properties are useful for implementing throwing mechanics and other physics-based interactions.

### Properties

- `Vector3` `Velocity`  
  Gets the grabber's current frame velocity.
- `Vector3` `AngularVelocity`  
  Gets the grabber's current frame angular velocity.
- `Vector3` `SmoothVelocity`  
  Gets the grabber's velocity smoothed using averaged previous frame data.
- `Vector3` `SmoothAngularVelocity`  
  Gets the grabber's angular velocity smoothed using averaged previous frame data.

## Proximity Transforms

By default, the grabber's own transform is used to compute distances to `UxrGrabbableObject` entities. Additional proximity transforms can be added to the grabber so that each grabbable object can choose which one to use for distance computation.

### Methods

- `Transform` `GetProximityTransform(int proximityIndex = -1)`  
  Gets the proximity transform at the given index. Use -1 for the default (the grabber's own transform) and 0 to n for any optional proximity transform. If the index is out of range, the default transform is returned.

## API Reference

For more information, refer to the [UxrGrabber API Reference](/api/T_UltimateXR_Manipulation_UxrGrabber).
