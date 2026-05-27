---
title: "Animation"
---

# Animation

## Overview

UltimateXR provides a comprehensive animation system that covers transform animations, UI tweens, material animations, interpolation utilities, splines, and inverse kinematics. These tools can be used both from the inspector and programmatically.

You can also check the [Animation API Reference](/api/N_UltimateXR_Animation).

## Transform Animation

### UxrAnimatedTransform

The `UxrAnimatedTransform` component allows animating position, rotation, and scale of any GameObject. It supports multiple animation modes including single-shot, loop, and ping-pong, with configurable easing curves.

```c#
// Rotate an object continuously
UxrAnimatedTransform.Rotate(gameObject, UxrTransformRotationSpace.Local, 
    Vector3.zero, new Vector3(0, 360, 0), UxrLoopMode.Loop, 2.0f);

// Move an object to a position
UxrAnimatedTransform.Move(gameObject, UxrTransformTranslationSpace.World,
    startPos, endPos, UxrLoopMode.None, 1.0f);
```

### UxrLookAt

The `UxrLookAt` component continuously orientates an object to look at a specified point or along an axis. Different look-at modes are available, including looking at the local avatar's camera.

### UxrPositionInFrontOfCamera

Positions an object in front of the camera at a specified distance, useful for floating UI panels or HUD elements.

## UI Tweens

The tween system provides animated transitions for Unity UI elements. All tweens inherit from `UxrTween` and support configurable duration, delay, easing, and finished actions.

Available tweens:

- **`UxrCanvasAlphaTween`**: Animates the alpha of a `CanvasGroup`.
- **`UxrColorTween`**: Animates the color of a `Graphic` component.
- **`UxrImageFillTween`**: Animates the fill amount of an `Image`.
- **`UxrPositionTween`**: Animates the `anchoredPosition` of a `RectTransform`.
- **`UxrRotationTween`**: Animates the rotation of a `RectTransform`.
- **`UxrScaleTween`**: Animates the scale of a `RectTransform`.
- **`UxrTextContentTween`**: Animates text content with a typewriter effect.

```c#
// Fade in a canvas group over 0.5 seconds
UxrCanvasAlphaTween.FadeIn(canvasGroup, 0.5f);

// Animate a color
UxrColorTween.Animate(graphic, startColor, endColor, new UxrInterpolationSettings(1.0f, UxrEasing.EaseOutQuad));
```

## Material Animation

- **`UxrAnimatedMaterial`**: Animates material properties such as color, float, or texture offset over time.
- **`UxrAnimatedTextureFlipbook`**: Plays a flipbook animation on a material's texture.
- **`UxrMaterialRenderQueue`**: Overrides the render queue of a material at runtime.

## Interpolation

The `UxrInterpolator` class provides static methods to interpolate between values using a wide range of easing functions. It supports `float`, `int`, `Vector2`, `Vector3`, `Vector4`, `Color`, `Color32`, and `Quaternion` types.

```c#
// Interpolate a float with ease-out
float value = UxrInterpolator.Interpolate(startValue, endValue, t, UxrEasing.EaseOutQuad);
```

It also provides several useful framerate-independent smooth damping methods:

```c#
// Smooth damp a float value. Useful for smoothing noisy input or sensor data.
// smooth is [0.0, 1.0] where 0 = no smoothing, 1 = maximum smoothing.
_speed = UxrInterpolator.SmoothDamp(_speed, targetSpeed, 0.1f);

// Smooth damp a position. Useful for making an object follow a target smoothly.
transform.position = UxrInterpolator.SmoothDampPosition(transform.position, target.position, 0.15f);

// Smooth damp a rotation. Useful for making an object smoothly rotate towards a target orientation.
transform.rotation = UxrInterpolator.SmoothDampRotation(transform.rotation, target.rotation, 0.15f);

// Use unscaled time so that smoothing works correctly during pauses or slow-motion.
transform.position = UxrInterpolator.SmoothDampPosition(transform.position, target.position, 0.1f, true);
```

### Text Interpolation

The `UxrInterpolator` class also provides text interpolation methods that create typewriter effects. These are useful for gradually revealing text in UI elements, dialogue systems, or score animations.

The simplest overload interpolates between a start and end string:

```c#
// Typewriter effect: gradually reveal text as t goes from 0.0 to 1.0
string displayText = UxrInterpolator.InterpolateText(string.Empty, "Welcome to the Matrix!", t, true);
```

The `isForUnityTextUI` parameter, when set to `true`, uses rich text tags to add invisible characters during interpolation. This preserves the final text layout, preventing line wraps or jumps as characters appear.

A more advanced overload accepts a format string and start/end argument pairs. It automatically detects numerical values (`int`, `float`) and interpolates them numerically instead of using a typewriter effect:

```c#
// Animate a score counter from 0 to the final score
int finalScore = 999999;
string scoreText = UxrInterpolator.InterpolateText(t, true, "Final score: {0:000000}", 0, finalScore);

// Interpolate multiple values using format string arguments.
// Arguments are provided as sequential start/end pairs.
string statsText = UxrInterpolator.InterpolateText(t, true, "HP: {0} / MP: {1}", 0, maxHP, 0, maxMP);

// Combine typewriter text with numerical interpolation
string resultText = UxrInterpolator.InterpolateText(t, true, "{0}: {1:0.0}%", string.Empty, "Progress", 0.0f, 100.0f);
```

### UxrEasing

The `UxrEasing` enum provides a variety of easing functions: linear, ease-in, ease-out, ease-in-out, and their quadratic, cubic, and quartic variants.
Using it as an inspector type will draw a graph next to the variable.

```c#
[SerializeField] private UxrEasing _easing;
```

![](/media/docs/programming-guide/other-features/AnimationUxrEasing.png)

## Splines

- **`UxrCatmullRomSpline`**: A Catmull-Rom spline that passes through all control points, providing smooth curves.
- **`UxrLinearPath`**: A simple linear path connecting points with straight segments.

Both inherit from `UxrSpline`, which provides methods to evaluate position and tangent at any point along the curve.

## Inverse Kinematics

- **`UxrArmIKSolver`**: Implements basic inverse kinematics for an arm (shoulder, elbow, wrist).
- **`UxrBodyIK`**: Computes inverse kinematics for a full humanoid body.
- **`UxrCcdIKSolver`**: A general-purpose Cyclic Coordinate Descent IK solver that works with arbitrary bone chains.
- **`UxrWristTorsionIKSolver`**: Distributes wrist torsion across the forearm for more natural arm rotation.

## Other Components

- **`UxrObjectBlink`**: Makes a GameObject blink by toggling its visibility.
- **`UxrObjectFade`**: Fades a GameObject's materials in or out.
- **`UxrToggleObject`**: Toggles a GameObject's active state.
- **`UxrToggleObjectsUsingButtons`**: Toggles objects using controller button input.
- **`UxrDelayedDestroy`**: Destroys a GameObject after a specified delay.
- **`UxrAnimatedLightIntensity`**: Animates a light's intensity over time.

## API Reference

For more information, refer to the [Animation API Reference](/api/N_UltimateXR_Animation).
