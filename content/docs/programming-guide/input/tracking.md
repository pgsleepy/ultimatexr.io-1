---
title: "Tracking"
---

# Tracking

## Overview

Each `UxrControllerInput` component has a corresponding `UxrControllerTracking` component that updates the controller positions and orientations in space each frame. These are used by UltimateXR to update the avatar hands.

![](/media/docs/programming-guide/input/tracking/InputTrackingComponents.png)
**Image**: Example of input and tracking components, giving support for the Quest 3 controllers in SteamVR.

## Sensor

Positioning avatar hands accurately with controllers poses a significant challenge. The reported position and rotation of the controller **sensor** cannot be directly applied to the hands, as this would result in virtual hands being placed far from the user's actual hands, leading to a sense of disconnection.

{{% callout info %}}
The process described here is transparent to the user. It is detailed to provide a better understanding of how tracking support for multiple devices works.
{{% /callout %}}

The sensor represents the point on the controller that is the origin for its coordinates. At runtime, the XR platform reports the sensor positions and orientations for each controller.
UltimateXR positions the avatar's hands using the sensor data along with a predefined controller placement in the hand defined in the **HandsIntegration** prefab.

![](/media/docs/programming-guide/input/tracking/HandsIntegrationExample.png)
**Image**: The HandsIntegration present in the CyborgAvatarExample prefab.

The HandsIntegration prefab is a special prefab in UltimateXR, added to all avatars at edit-time. It includes `UxrControllerInput` and `UxrControllerTracking` components for all supported controllers, providing automatic device support.
The `UxrControllerTracking` components keep references to sensor GameObjects for the left and right controllers. These sensor GameObjects have been carefully placed on virtual hand gizmos present in the HandsIntegration prefab.

During avatar setup, these virtual hands will only need to be aligned to the avatar hands, which will include all the sensors in the process. This is all done automatically.

This ensures avatar hands stay aligned with real-world hands, regardless of the controller used, all seamlessly.

![](/media/docs/programming-guide/input/tracking/HandsIntegrationAlign.png)
**Image**: The aligned hand gizmo in HandsIntegration, colored in green.

## Benefits of HandsIntegration

Using an external prefab for device support offers several key advantages:

- Simplifies the process by eliminating the need for users to manually add device support; adding the prefab is enough.
- Automatic updates: When new devices are supported by the prefab, all avatars receive the new functionality without additional steps.
- Streamlined adjustments: Tweaking settings within the prefab enhances functionality on all avatars.

## Properties

`UxrControllerTracking` exposes the following properties:

- `SensorLeftPos`: Gets the left controller sensor world position.
- `SensorRightPos`: Gets the right controller sensor world position.
- `SensorLeftRot`: Gets the world rotation of the left controller sensor
- `SensorRightRot`: Gets the world rotation of the right controller sensor

- `SensorLeftHandPos`: Gets the world position of the left avatar hand using the left sensor position.
- `SensorRightHandPos`: Gets the world position of the right avatar hand using the left sensor position.
- `SensorLeftHandRot`: Gets the world rotation of the left avatar hand using the left sensor rotation.
- `SensorRightHandRot`: Gets the world rotation of the right avatar hand using the right sensor rotation.

## Velocity and Averaging

Although `UxrControllerTracking` exposes tracking properties, they contain unprocessed data.

The `UxrGrabber` component has special functionality that can compute velocity. It averages values over multiple frames and takes into account the controller's position in the hand, resulting in improved behavior when throwing objects.
Consult the  [`UxrGrabber` programming guide](/docs/programming-guide/manipulation-uxrgrabber) for more information.