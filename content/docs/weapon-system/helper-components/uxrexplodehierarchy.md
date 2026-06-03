---
title: "UxrExplodeHierarchy"
---

# UxrExplodeHierarchy

`UxrExplodeHierarchy` detaches and physically launches all the child colliders of a GameObject when triggered. Each child piece becomes an independent rigidbody with a random velocity and angular velocity, then fades out and is destroyed after a configurable lifetime. This can be used to create destruction effects for props.

When the component is on the same GameObject as a `UxrActor`, the explosion is triggered automatically when the actor dies. It can also be triggered explicitly from any point in your scene.

![](/media/docs/weapon-system/helper-components/UxrExplodeHierarchyInspector.png)

## Setting up a destructible object

1. Model the object with its pieces as separate child meshes, each with its own `Collider` and its own `Renderer`. The colliders should be disabled at start so they do not interfere while the object is intact. `UxrExplodeHierarchy` enables and detaches them at explosion time.
2. Add `UxrExplodeHierarchy` to the root GameObject.
3. Configure the speed and angular speed ranges for the flying chunks.
4. Set **Pieces Life Seconds** to control how long the chunks survive before disappearing.
5. Set **Pieces Fadeout Seconds** to fade the chunks out before they are destroyed.

If you want the object to explode on actor death, also add `UxrActor` to the root. The two components detect each other automatically.

## Timer-based explosion

Set **Seconds To Explode** to a positive value to start a countdown when the component enables. When the timer runs out, `ExplodeNow` is called automatically. Setting a negative value disables the timer. The timer can also be read from `ExplodeTimer` at runtime.

## Parameter reference

- *Audio Explode Pool*: Array of audio samples. One is chosen at random and played when the object explodes.
- *Min Explode Speed*: Minimum random speed in metres per second assigned to each chunk on explosion.
- *Max Explode Speed*: Maximum random speed in metres per second assigned to each chunk on explosion.
- *Min Explode Angular Speed*: Minimum random angular speed in radians per second assigned to each chunk.
- *Max Explode Angular Speed*: Maximum random angular speed in radians per second assigned to each chunk.
- *Seconds To Explode*: Countdown in seconds from component enable to automatic explosion. Use a negative value to disable the countdown.
- *Pieces Life Seconds*: Lifetime in seconds of each chunk after the explosion. Chunks are destroyed after this time.
- *Pieces Fadeout Seconds*: Duration in seconds of the fade-out applied to chunks before they are destroyed. The fade begins at `Pieces Life Seconds - Pieces Fadeout Seconds`.