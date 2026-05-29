---
title: "Extending Locomotion"
---

# Extending Locomotion

UltimateXR provides two extension points depending on the type of locomotion you want to implement:

- **`UxrLocomotion`** — base class for any locomotion (teleport, custom, etc.)
- **`UxrSmoothLocomotion`** — abstract base for `CharacterController`-driven smooth locomotion (extends `UxrLocomotion`)

---

## Option A: Extending UxrLocomotion (Any Locomotion)

Use this for fully custom locomotion — teleport variants, waypoint systems, scripted movement, etc.

1. Create a class that derives from `UxrLocomotion`.
2. Override `IsSmoothLocomotion` to return `true` if the avatar is moved every frame, or `false` for discrete teleport-style movement.
3. Override `UpdateLocomotion()` — this is called every frame by the framework.
4. Use `UxrManager` methods to move the avatar so that the event system, networking, and LOD components are notified correctly:
   - `UxrManager.Instance.MoveAvatarTo(avatar, position, direction)`
   - `UxrManager.Instance.TranslateAvatar(avatar, translation)`
   - `UxrManager.Instance.RotateLocalAvatar(degrees, turnType, ...)`
   - `UxrManager.Instance.TeleportLocalAvatar(...)`
5. Add the component anywhere in the avatar hierarchy and disable any conflicting locomotion components.

```csharp
public class MyCustomLocomotion : UxrLocomotion
{
    public override bool IsSmoothLocomotion => false;

    protected override void UpdateLocomotion()
    {
        // Read input, then use UxrManager to move the avatar
        if (SomeTeleportCondition())
        {
            UxrManager.Instance.TeleportLocalAvatar(destination, rotation, UxrTranslationType.Fade);
        }
    }
}
```

---

## Option B: Extending UxrSmoothLocomotion (CharacterController Locomotion)

Use this when you want smooth, continuous movement driven by a `CharacterController`. The base class handles movement, rotation, gravity, collider fitting, and the input pipeline. You only need to supply the inputs.

### Required Override

```csharp
protected abstract IEnumerable<IUxrSmoothLocomotionInput> GetDefaultInputs();
```

Return one or more input providers here. These are registered automatically on `Start()`.

```csharp
public class MyVRLocomotion : UxrSmoothLocomotion
{
    protected override IEnumerable<IUxrSmoothLocomotionInput> GetDefaultInputs()
    {
        // Return an input component attached to this GameObject
        return GetComponents<IUxrSmoothLocomotionInput>();
    }
}
```

### Optional Virtual Overrides

| Method | Purpose |
|---|---|
| `GetMovementBasis()` | Returns the transform whose forward/right define movement direction. Default: camera/head. |
| `UpdateLocomotionInputs()` | Override to add custom input processing on top of movement/rotation/jump. |
| `MoveBody(UxrMovementInput)` | Override to customise how the `CharacterController` is moved. |
| `RotateAvatar(Vector2)` | Override to customise yaw/pitch rotation behavior. |
| `ValidateCameraPitch(ref float)` | Clamp or constrain the camera pitch angle. |
| `ValidateMovementBounds(ref Vector3)` | Constrain the motion vector before it is applied. |
| `InterpolateLocomotion()` | Override smooth interpolation of avatar root and camera transforms. |
| `PerformJump()` | Called when jump input is detected (stub by default). |
| `DefaultEyeHeight` | Default eye height used in non-VR modes to size the collider. |

### Turn Types

Set `TurnType` on the component to control rotation behavior:

| `UxrTurnType` | Behavior |
|---|---|
| `NotAllowed` | Rotation is disabled. |
| `Snap` | Immediate rotation with no transition. |
| `Fade` | Fades to a color, rotates, fades back. |
| `Interpolate` | Smoothly interpolates to the new rotation over time. |
| `Smooth` | Continuous rotation proportional to stick input. |

### Runtime Input Management

You can add and remove input providers at runtime:

```csharp
// Add an additional input source
mySmoothLocomotion.RegisterInput(myGamepadInput);

// Remove it later
mySmoothLocomotion.UnregisterInput(myGamepadInput);

// Inspect all currently registered inputs
foreach (IUxrSmoothLocomotionInput input in mySmoothLocomotion.LocomotionInputs) { ... }
```

### Moving the Avatar Programmatically

```csharp
// Smoothly moves the avatar to a world-space position over 0.5 seconds
mySmoothLocomotion.MoveAvatarTo(targetPosition);

// Force the move even if IsTranslationAllowed is false
mySmoothLocomotion.MoveAvatarTo(targetPosition, UxrSmoothMoveToOptions.Force);

// Custom duration
mySmoothLocomotion.MoveAvatarTo(targetPosition, UxrSmoothMoveToOptions.Default, 1.0f);
```

---

## Custom Input: Implementing IUxrSmoothLocomotionInput

To provide input from a new device or control scheme, implement `IUxrSmoothLocomotionInput` directly, or extend `UxrSmoothLocomotionInput` (which adds input filtering via `AllowedInputs`).

### Using UxrSmoothLocomotionInput (recommended)

Override the internal methods and return your input values:

```csharp
public class MyKeyboardInput : UxrSmoothLocomotionInput
{
    protected override UxrMovementInput GetMovementInputInternal()
    {
        float x = Input.GetAxis("Horizontal");
        float y = Input.GetAxis("Vertical");
        return new UxrMovementInput { Input = new Vector2(x, y), UseAcceleration = true };
    }

    protected override Vector2 GetRotationInputInternal()
    {
        return new Vector2(Input.GetAxis("Mouse X"), Input.GetAxis("Mouse Y"));
    }

    protected override bool IsSprintInputInternal()   => Input.GetKey(KeyCode.LeftShift);
    protected override bool IsJumpInputInternal()     => Input.GetKeyDown(KeyCode.Space);
    protected override float IsCrouchInputInternal()  => Input.GetKey(KeyCode.LeftControl) ? 1f : 0f;
    protected override float IsStandInputInternal()   => 0f;
    protected override float GetZoomInInputInternal() => 0f;
    protected override float GetZoomOutInputInternal()=> 0f;
}
```

You can then disable specific input types at runtime using the `AllowedInputs` flags property:

```csharp
// Disable rotation input (e.g., during a cutscene)
myInput.AllowedInputs &= ~UxrAllowedInputs.Rotation;

// Re-enable all inputs
myInput.AllowedInputs = UxrAllowedInputs.All;
```

---

## Key Properties Reference

The following properties are available on `UxrSmoothLocomotion` and can be set from the Inspector or at runtime:

**Movement**

| Property | Default | Description |
|---|---|---|
| `MaxSpeed` | 3.5 | Maximum horizontal movement speed (m/s). |
| `UseAcceleration` | true | Whether to use gradual acceleration/deceleration. |
| `Acceleration` | 30 | Rate of speed increase. |
| `Deceleration` | 40 | Rate of speed decrease. |
| `SprintModifier` | 2.0 | Speed multiplier while sprinting. |
| `MovementDeadzone` | 0.15 | Minimum input magnitude before movement starts. |
| `IsTranslationAllowed` | true | Master toggle for all translation. |

**Rotation**

| Property | Default | Description |
|---|---|---|
| `TurnType` | `Snap` | Turn mode (see Turn Types above). |
| `TurnDeadzone` | 0.15 | Minimum input before a discrete turn fires. |
| `TurnCooldown` | 0.25 s | Delay before another discrete turn while holding input. |
| `TurnStepDegrees` | 45° | Angle per discrete turn. |
| `SmoothTurnSpeedDeg` | 90°/s | Speed for `Smooth` turn mode. |
| `FadeTurnSeconds` | — | Duration of fade effect for `Fade` turn mode. |
| `InterpolateTurnSeconds` | — | Duration of interpolation for `Interpolate` turn mode. |

**Gravity**

| Property | Default | Description |
|---|---|---|
| `Gravity` | -9.81 | Downward acceleration while airborne. |
| `GroundedStickForce` | -2.0 | Small downward force applied while grounded. |
| `TerminalVelocity` | -20 | Maximum falling speed. |

**Collider**

| Property | Default | Description |
|---|---|---|
| `ColliderMinHeight` | 1.2 m | Minimum capsule height. |
| `ColliderMaxHeight` | 2.2 m | Maximum capsule height. |
| `ColliderRadius` | 0.2 m | Capsule radius. |
| `EyeToTopDistance` | 0.08 m | Distance from eye level to top of capsule. |
| `ColliderCenterYOffset` | 0 | Vertical offset for capsule center alignment. |
| `SnapBackDistanceThreshold` | 0.20 m | Max head drift before snapping back to collider. |

---

## Reference Implementations

- **`UxrStandardSmoothLocomotion`** — VR smooth locomotion using controller joysticks (left stick to move, right stick to turn). Good starting point for custom VR locomotion.
- **`UxrTeleportLocomotion`** — Arc-based teleport with destination validation, fade/interpolate transitions, and optional turn-in-place.
