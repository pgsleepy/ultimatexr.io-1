---
title: "3D Buttons"
---

# 3D Buttons

Standard Unity UI buttons are flat. They live on a Canvas and work well for menus and HUDs, but in VR you often want physical-looking controls — a button that visually depresses when pressed, a dial knob that tilts slightly under a fingertip, or a rocker switch that pivots around its center.

{{</* video src="/media/docs/ui-interaction/3d-buttons/3DButtons.mp4" */>}}

UltimateXR provides two components that bridge 2D UI interaction with 3D object animation: `UxrButton3DPress` and `UxrButton3DRotate`.

## How it works

The system uses a layered approach:

1. An Unity world `Canvas` is placed in front of the 3D button geometry. The `Canvas` contains multiple invisible buttons, one for each 3D button object.
2. Invisible buttons are GameObjects with `UxrNonDrawingGraphic` and `UxrControlInput` components. `UxrNonDrawingGraphic` is like `Image` but doesn't render anything. `UxrControlInput` gathers the input.
3. Each one of these GameObjects also has a `UxrButton3DPress` or `UxrButton3DRotate` component that references the target 3D Object to be moved or rotated.
4. The `UxrFingerTip` or `UxrLaserPointer` interacts with that invisible canvas element exactly as it would with any UI button.
5. The `UxrButton3DPress` or `UxrButton3DRotate` will listen to the press and release events from the `UxrControlInput` and physically move or rotate the 3D object in response.

The 3D geometry reacts to the interaction while the actual input detection is handled cleanly by the 2D UI system.

## UxrButton3DPress

`UxrButton3DPress` moves a target 3D object by a configurable local offset when the associated `UxrControlInput` is pressed, and returns it to its original position on release.

### Setup

1. Create your 3D button geometry (a cylinder, cube, or custom mesh).
2. Place an invisible Canvas in front of it, sized to cover the pressable area.
3. Add a child GameObject, the size of the button, with a `UxrNonDrawingGraphic` component. This makes it invisible but still raycasted.
4. Add `UxrControlInput` and `UxrButton3DPress` to the same object.
5. In the `UxrButton3DPress` inspector, drag the 3D geometry object into the **Target Transform** field.
6. Set **Pressed Local Offset** to the distance and direction the object should travel when pressed. For a button that pushes inward on the Z axis, use something like `(0, 0, -0.005)`.

![](/media/docs/ui-interaction/3d-buttons/UxrButton3DPress.png)

### Parameter reference

- *Target Transform*: The 3D `Transform` that will be moved when the button is pressed.
- *Pressed Local Offset*: The local-space offset applied to the target while the button is held down. On release, the target returns to its original local position.

## UxrButton3DRotate

`UxrButton3DRotate` rotates a target 3D object when pressed, computing the rotation axis automatically from the position of the press relative to the button's center. This makes it ideal for soft-touch buttons or rocker switches that pivot depending on which side is pressed.

### Setup

The setup is the same as `UxrButton3DPress`:

1. Create the 3D button geometry.
2. Place an invisible world canvas in front of it.
3. Add a child GameObject, the size of the button, with a `UxrNonDrawingGraphic` component and `UxrControlInput`.
4. Add `UxrButton3DRotate` and assign the 3D geometry to **Target Transform**.
5. Set **Button Local Up Axis** to the 3D object's axis that should be treated as "up".
6. Set **Pressed Degrees** to the angle the button should rotate when pressed.

![](/media/docs/ui-interaction/3d-buttons/UxrButton3DRotate.png)

The component calculates the rotation from the button center to the point of contact. This means pressing the left side tilts the button left, and pressing the right side tilts it right, automatically.

### Parameter reference

- *Target Transform*: The 3D `Transform` that will be rotated when the button is pressed.
- *Button Local Up Axis*: The local-space axis that defines "up" for the rotation calculation. Default is `(0, 1, 0)`.
- *Pressed Degrees*: The angle in degrees the target rotates while the button is held. On release, the target returns to its original rotation.
