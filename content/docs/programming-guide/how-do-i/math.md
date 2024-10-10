---
title: "Math"
---

# Math

There are tons of utilities and extensions in files such as `Vector3Ext`, `QuaternionExt`, `TransformExt`, `Matrix4x4Ext`, `MeshExt`... There is also the static `UxrInterpolator` class and curve classes like `UxrSpline`.

How can I get rotations and positions smoothed over time?

```c#
float smooth = 0.1f; // value between range [0.0, 1.0] telling how much to smooth the value

float smoothedValue = UxrInterpolator.SmoothDamp(oldValue, newValue, smooth);
Vector3 smoothedPos = UxrInterpolator.SmoothDamp(oldPos, newPos, smooth);
Quaternion smoothedRotation = UxrInterpolator.SmoothDamp(oldRot, newRot, smooth);
```

How can I interpolate between 2 values using different easings?

```c#
float  interpolatedValue = UxrInterpolator.Interpolate(startValue, endValue, t, UxrEasing.Linear);
Vector3 interpolatedPos = UxrInterpolator.Interpolate(startPos, endPos, t, UxrEasing.EaseOutQuad);
Quaternion interpolatedRot = UxrInterpolator.Interpolate(startRot, endRot, t, UxrEasing.InOutCubic);
```

How can I interpolate so that I make a ball bounce?

```c#
// Wait for 1 second, then start bouncing from top to floor taking 0.5 seconds and keep looping using ping-pong for 10 seconds. Use -1 to keep bouncing indefinitely.
Vector3 pos = UxrInterpolator.Interpolate(topPos, floorPos, 0.5f, 1.0f, Time.time, UxrEasing.EaseInQuart, UxrLoopMode.PingPong, 10.0f);
```

How can I move and rotate an object A so that if B was a child, it would make B align with C?

```c#
// Uses Transform extensions defined in TransformExt.cs
A.transform.ApplyAlignment(B, C);
```

How can I mirror an object A using a mirror transform B using its Z axis as mirror normal?

```c#
// Uses Transform extensions defined in TransformExt.cs
A.transform.ApplyMirroring(B.position, B.forward, MirrorType.MirrorYZ);
```

How can I create a spline and interpolate using an arc-length parameter instead of the usual t?

```c#
UxrCatmullRomSpline spline = new UxrCatmullRomSpline();
spline.Create(1.0f, v1, v2, v3, v4, v5);
float halfLength = spline.ArcLength / 2.0f;

if (spline.EvaluateUsingArcLength(halfLength, out Vector3 position, out Vector3 direction))
{
    Debug.Log($"Interpolation in the middle: Pos={position}, Dir={direction}");
}
```