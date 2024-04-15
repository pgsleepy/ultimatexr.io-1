---
title: "Overview"
---

# Overview

UltimateXR supports a wide range of headsets and controllers, with the input built with three key objectives:

1. Offer compatibility through a single unified interface to interact with all supported devices.
2. Provide developers with the flexibility to add support for new controllers.
3. Ensure seamless integration of new support without requiring changes to existing avatars. Support for new devices will work out of the box.

The interface is provided through the `UxrControllerInput` class.
Developers can create support for new controllers [implementing a derived class](/docs/programming-guide/architecture-extending-ultimatexr#new-device-support).

All supported input controller components are contained within HandsIntegration prefabs, a special type of prefab in the framework to provide common functionality. Two variants are available: SmallHandsIntegration and BigHandsIntegration. Each avatar in the framework incorporates a HandsIntegration instance, selected based on the best fit for the avatar's hands. At runtime, only the component related to the active controllers is enabled.

The active `UxrControllerInput` can be accessed from anywhere in the code using the static property `UxrAvatar.LocalAvatarInput`.

{{% callout info %}}
In cases where there is no active controller, a `UxrDummyControllerInput` component is returned to avoid requiring null checks. The dummy controller input will not register any input events.
{{% /callout %}}

Let's see how to get user input through code in the next section.


