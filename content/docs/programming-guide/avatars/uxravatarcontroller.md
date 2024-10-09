---
title: "Avatar Controller"
---

# UxrAvatarController

The `UxrAvatarController` serves as the base class for controlling avatars in UltimateXR. While the `UxrAvatar` component defines the avatar's structure and appearance, `UxrAvatarController` is responsible for the updating.

UltimateXR comes with a fully-featured built-in controller called `UxrStandardAvatarController`, which handles tasks like object manipulation, inverse kinematics, and hand tracking. However, for developers who need more flexibility, custom controllers can be built by inheriting from `UxrAvatarController` and adding personalized update logic.

## Properties

- `Initialized`: An overridable property that checks if the avatar controller has completed its setup and is ready to update the avatar.
- `UsesSmoothLocomotion`: This overridable property determines whether the avatar is using smooth locomotion. Smooth locomotion continuously updates the avatar’s position each frame, while non-smooth locomotion moves the avatar in discrete jumps.
- `AllowHandTracking`: Controls whether hand tracking is allowed, which can be use by the implementing controller to enable it when available.

## Methods

- `CanHandInteractWithUI()`: This overridable method checks if a hand is free to interact with UI elements, like pressing buttons. For example, if a hand is holding an object, it may be desirable to prevent accidental interaction with user interfaces.

## UxrStandardAvatarController

### Properties

- `ControllerEvents`: Gets the list of controller events for both hands.
- `LeftControllerEvents`: Retrieves the controller events related to the left hand.
- `RightControllerEvents`: Retrieves the controller events related to the right hand.
- `LeftHandDefaultPoseName`: Gets the default pose name used for the left hand when no other pose is active.
- `RightHandDefaultPoseName`: Gets the default pose name used for the right hand when no other pose is active.
- `LeftHandGrabPoseName`: Gets the pose name used for the left hand when a grabbing action is triggered.
- `RightHandGrabPoseName`: Gets the pose name used for the right hand when a grabbing action is triggered.
- `LeftHandGrabButtons`: Gets the button(s) that trigger the left hand grab action.
- `RightHandGrabButtons`: Gets the button(s) that trigger the right hand grab action.
- `IsLeftHandInsideFingerPointingVolume`: Checks if the left hand is inside a pointing volume.
- `IsRightHandInsideFingerPointingVolume`: Checks if the right hand is inside a pointing volume.
- `UseArmIK`: Controls whether Inverse Kinematics (IK) is used for the arms.
- `ArmIKElbowAperture`: Sets the relaxed elbow aperture value for arm IK.
- `UseBodyIK`: Controls whether body IK is enabled.
- `LeftHandDefaultPoseNameOverride`: Gets or sets an override for the left hand's default pose.
- `RightHandDefaultPoseNameOverride`: Gets or sets an override for the right hand's default pose.
- `LeftHandGrabPoseNameOverride`: Gets or sets an override for the left hand's grab pose.
- `RightHandGrabPoseNameOverride`: Gets or sets an override for the right hand's grab pose.
- `LeftHandGrabButtonsOverride`: Gets or sets an override for the button(s) that trigger the left hand grab.
- `RightHandGrabButtonsOverride`: Gets or sets an override for the button(s) that trigger the right hand grab.
- `ProcessIgnoredInput`: Controls whether ignored input is still processed by the avatar controller.

### Methods

- `SolveBodyIK()`: Solves the body IK using the current headset and controller positions.

## Implementing a Custom Avatar Controller

While the built-in `UxrStandardAvatarController` provides complete functionality, there may be cases where you need a custom controller to handle unique behaviors or advanced functionality in your project.

### Steps

1. Create a New Class: Start by creating a new class that inherits from `UxrAvatarController`. This will give you access to all the base functionality that you can override and extend.

```c#
public class MyCustomAvatarController : UxrAvatarController
{
    
}
```

2. Override Properties:
- `Initialized` to return `true` once the component has finished its `Awake()` or `Start()`, depending on the implementation, and can be used.
- `UsesSmoothLocomotion` depending on how the controller will move the avatar. This is used by certain components such as `UxrLodGroup` to know whether to execute certain logic (e.g., LOD switch per frame or only on teleport).

3. Override Key Methods: Override the relevant methods to implement your own avatar update logic. These include:
- `UpdateAvatar()` for gathering input and tracking data.
- `UpdateAvatarAnimation()` for controlling animations and updating rig transforms.
- `UpdateAvatarManipulation()` for handling grabbing and manipulation.
- `UpdateAvatarPostprocess()` for things that require to run after all the other stages.

For example:
```c#
public class MyCustomAvatarController : UxrAvatarController
{
	public override bool Initialized          => _initialized;
	public override bool UsesSmoothLocomotion => true;
		
	protected override void Awake()
	{
		base.Awake();
		
		// Initialize things here
		
		_initialized = true;
	}    

	protected override void UpdateAvatar()
	{
		base.UpdateAvatar();

		// The following uses base functionality from UxrAvatarController:

		// Update all enabled UxrControllerInput components on the avatar,
		// refreshing the current input state.
		UpdateInputDevice();
		
		// Let the all enabled UxrLocomotion components on the avatar
		// update its position and orientation.
		UpdateLocomotion();
		
		// Update all enabled UxrTrackingDevice components on the avatar,
		// refreshing the positional data after locomotion.
		UpdateTrackingDevices();
		
		// Do things here.
	}
	
	protected override void UpdateAvatarAnimation()
	{
		base.UpdateAvatarAnimation();
		
		// Do things here.

		// This updates the avatar fingers using the currently assigned pose
		Avatar.UpdateHandPoseTransforms();
	}

	protected override void UpdateAvatarManipulation()
	{
		// To integrate with the grab manager, check the user input and do:
		
		// When the user presses a grab:
		// UxrGrabManager.Instance.TryGrab(Avatar, handSide);
		
		// When the user depresses the grab or presses release:
        // UxrGrabManager.Instance.TryRelease(Avatar, handSide);
	}
	
	protected override void UpdateAvatarPostProcess()
	{
		base.UpdateAvatarPostProcess();

		// Do post-process here
	}
	
	private bool _initialized;
}
```

{{% callout info %}}
Check the [UxrManager Update Sequence](/docs/programming-guide/architecture/uxrmanager#update-sequence) to see how the update process flows during each frame.
{{% /callout %}}

4. Assign the custom controller: Once your custom controller is ready, add it to your avatar in the scene. Replace the standard avatar controller with your new custom controller component.