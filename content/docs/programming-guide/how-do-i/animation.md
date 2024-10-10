---
title: "Animation"
---

# Animation

How do I animate a material color over time?

```c#
// Start
UxrAnimatedMaterial animation = UxrAnimatedMaterial.AnimateBlinkColor(gameObject, "_BaseColor", startColor, ColorExt.ScaleColorBrightness(startColor, 2.5f));

// Stop method #1
animation.Stop();

// Stop method #2
UxrAnimatedMaterial.Stop(gameObject);
```

How do I animate a material over a limited amount of time, with the maximum flexibility and do something when finished?

```c#
UxrAnimatedMaterial animation = UxrAnimatedMaterial.AnimateInterpolation(gameObject,
                                                                         materialSlotIndex,
                                                                         UxrMaterialMode.InstanceOnly,
                                                                         UxrMaterialParameterType.Float,
                                                                         "ParameterName",
                                                                         Vector4.one * startValue,
                                                                         Vector4.one * endValue,
                                                                         new UxrInterpolationSettings(durationSeconds, delaySeconds, UxrEasing.Linear),
                                                                         () => DoSomethingAtTheEnd());
```

How can I make an object start moving linearly in world space?

```c#
// Will start moving 3 units per second in the world forward direction
UxrAnimatedTransform animation = UxrAnimatedTransform.Translate(gameObject, UxrTransformTranslationSpace.World, Vector3.forward * 3.0f);

// Stop
animation.Stop();
```

How can I make an object start bouncing in local space?

```c#
// Start bouncing looping forever in the local Y direction where from top (above 2 units) to bottom (local zero) it takes 0.5 seconds.
UxrAnimatedTransform animation = UxrAnimatedTransform.PositionInterpolation(gameObject, UxrTransformTranslationSpace.Local, Vector3.zero, Vector3.up * 2.0f, new UxrInterpolationSettings(0.5f, 0.0f, UxrEasing.EaseOutQuart, UxrLoopMode.PingPong));

// Stop
animation.Stop();
```

How can I make an object start facing towards the avatar eye?

```c#
UxrLookAtLocalAvatar.MakeLookAt(gameObject, allowRotateAroundVerticalAxis, allowRotateAroundHorizontalAxis, useInvertedForwardAxis);

// Stop
UxrLookAtLocalAvatar.RemoveLookAt(gameObject);
```
