---
title: "Introduction"
---

# Introduction

Locomotion in Virtual Reality is the technique that enables travelling from one place to another. Current headsets allow the user to explore the virtual world simply by walking around in the real world. In most cases, however, the available room space is not enough. In addition, there are other limitations that cannot be solved by walking around in a room, such as climbing up ladders, jumping off cliffs, or exploring huge scenarios.

Locomotion methods try to solve all these limitations.

One of the biggest challenges since VR became mainstream has been consolidating standard locomotion methods to explore the virtual world. Some of the reasons why it is so challenging are:

- **Motion sickness**: Which happens when your eyes tell your brain you're moving around but your body feels still.
- **Intuitiveness**: Users must learn and get used to new input mechanics to move around.
- **Personal preferences**: Users have very different preferences, and it is very important to support them all.

UltimateXR provides built-in components to support the most common locomotion methods. Built-in locomotion components, such as `UxrTeleportLocomotion` or `UxrSmoothLocomotion`, can be placed on any object in the avatar hierarchy. The UltimateXR avatar prefabs, for example, come with teleport components by default. Switching to another locomotion method can be done by disabling these default components and adding other component(s) to any object in the avatar hierarchy.

The framework also provides great flexibility to create new mechanics. There is no limitation on the amount of active locomotion components in an avatar. Some might add a single feature to the already existing components, such as climbing, but it is important that they all can work together.

It is also possible to have a single custom locomotion component that takes care of everything.
