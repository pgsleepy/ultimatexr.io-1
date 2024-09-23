---
title: "Setting up the Avatar"
---

# Setting up the avatar

The built-in avatars in UltimateXR already come with fingertips and laser pointers pre-configured. The prefabs have the fingertips enabled and the laser pointers disabled by default. If you want to use laser pointers instead, you can enable them by enabling the GameObjects hanging from the HandsIntegration object as shown below:

![](/docs/guides/media/ui/05LaserPointers.jpg)

## Setting up fingertips in a custom avatar

Fingertips are enabled using the *UxrFingerTip* component and are normally added only to the index finger on each hand, to facilitate touch interaction and avoid undesired pressing. You may use a GameObject hanging from the distal bone of the finger.

An important consideration is to align the forward vector of the GameObject containing the *UxrFingerTip* component in the direction the pressing is performed. Using a slight downward angle is desired because press actions are normally performed that way. UltimateXR filters out press actions that aren’t performed in a natural angle, so be careful with this step. The right and up vectors do not require to have a specific orientation.

![](/docs/guides/media/ui/06FingerTip.jpg)
 
## Setting up laser pointers in a custom avatar.

UI laser pointers are enabled using the *UxrLaserPointer* component, which are normally added to an object hanging from each hand in the avatar.
