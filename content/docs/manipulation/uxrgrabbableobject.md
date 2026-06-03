---
title: "UxrGrabbableObject"
---

# UxrGrabbableObject

`UxrGrabbableObject` is the central component of the UltimateXR manipulation system. Adding it to a GameObject makes that object interactable so that avatars can grab it, move it, throw it, and place it on anchors (objects with the [`UxrGrabbableObjectAnchor`](/docs/manipulation/uxrgrabbableobjectanchor) component). It works out of the box with no required setup, but it can be configured in many ways when you need more control. It supports anything from simple objects the user can pick up freely to constrained interactions such as levers, steering wheels, and complex compound objects.

Manipulation is handled by the `UxrGrabManager` singleton, which is automatically created by the system. Any scene that has an avatar with `UxrGrabber` components and at least one `UxrGrabbableObject` will automatically work.

## Quick Start

Add `UxrGrabbableObject` to any GameObject and press Play. The object is now grabbable. The hand will snap to it, without fitting, using the default grip, and the object will follow the hand freely.

That is the starting point. The rest of this guide shows how to customize that default behavior for different types of interaction.

![](/media/docs/manipulation/uxrgrabbableobject/01DefaultGrabbableInspector.png)

## Avatar Registration and Grab Poses

By default, any avatar that has a `UxrGrabber` can pick up the object, but the grip will be generic. For a realistic, object-fitted grip you register specific avatars and configure per-avatar poses.

Find **Register Avatar for Grips** and drag an avatar prefab into the field. The inspector will highlight the parameters that can be configured per avatar in green.

![](/media/docs/manipulation/uxrgrabbableobject/02RegisterAvatar.png)

Once an avatar is registered, two things become possible:

1. **Grip Pose**: Select a hand pose asset for each grab point on that avatar. The inspector will display a 3D preview of the grip directly in the Scene window.
2. **Snap transforms**: Click **Create Left Snap** and **Create Right Snap** to create child transforms that define exactly where and how the hand aligns to the object. Move and rotate these transforms in the scene to fine-tune the grip.

Use **Selected Avatar Grips** to switch between registered avatars and edit each one independently. Every avatar shape and size can have its own fitted grip on the same object.

![](/media/docs/manipulation/uxrgrabbableobject/03Pose01.png)

When a snap transform is selected in the hierarchy, the preview switches to show that specific grip, and the `UxrGrabbableSnapTransform` component on it lets you adjust the blend value for blend poses.

![](/media/docs/manipulation/uxrgrabbableobject/04Snap.png)

After adjusting the blend and repositioning both snaps, the grip fits the object correctly for that avatar.

![](/media/docs/manipulation/uxrgrabbableobject/05EndResult.png)

### Hiding the Hand Instead of Posing It

If you do not want to set up grab poses, enable **Hide Hand Renderer** on the grab point. The hand mesh is hidden while the object is held, and the object itself stands in as the visual hand. This is the "Tomato Presence" technique, a term coined by Owlchemy Labs. The idea is that the brain accepts the held object as a hand proxy. It works surprisingly well and avoids all pose setup.

## Multiple Grab Points

Objects can have any number of grab points, allowing them to be picked up from different angles with different grips. Use the **+** button in the Grab Points section to add new points.

![](/media/docs/manipulation/uxrgrabbableobject/05ZGrabPoints.png)

Give each grab point a meaningful name using the **Name In Editor** field. The name is used as the base for the snap transform GameObjects that are created later, so descriptive names make the hierarchy easier to understand.

With many grab points the Scene window can become cluttered with preview meshes:

![](/media/docs/manipulation/uxrgrabbableobject/06Cluttering.png)

Collapse grab points you are not currently editing, or use **Preview Grip Pose Meshes** to filter the preview to left hand only, right hand only, both, or none:

![](/media/docs/manipulation/uxrgrabbableobject/07ClutteringFixed.png)

**Tips for working with grab points:**

- You can edit grab poses live in the Hand Pose Editor while previews update in real time in the Scene window.
- Use Unity's component copy/paste to quickly duplicate a configured grab point to another.
- Use the mirror buttons in `UxrGrabbableSnapTransform` to quickly copy snap orientations between the left and right hands, so you only need to adjust one side.

## Two-hand Grabbing

When more than one grab point is defined and **Allow 2 Hands Grab** is enabled, the object can be held with both hands simultaneously.

**First Grab Point Is Main** determines how the object behaves when two hands are on it. When enabled, the first grab point in the list controls the object's world position while the second grab point controls the direction the object points. This is the correct setting for a rifle: the trigger hand keeps the weapon's position stable while the forward hand steers the barrel direction. When disabled, neither hand has priority and the object is centered between the two grabs.

## Grab Dependency (Compound Grabbables)

When a `UxrGrabbableObject` exists inside the hierarchy of another `UxrGrabbableObject`, the system sees a parent-child relationship between two grabbable parts. A door handle and door is the typical example: the handle can rotate around itself, and that rotation should also rotate the door.

### Dependent Objects (Control Parent Direction)

If you leave **Ignore Parent Dependency** disabled on the child, it is then considered a movable part of the compound object. While the child is grabbed, its movement drives the parent according to the parent's constraints: turning the handle also swings the door. Enable **Control Parent Direction** on the parent to allow a grabbed child to steer the parent's orientation.

### Independent Objects

Enable **Ignore Parent Dependency** on the child when it just happens to live in the same hierarchy but should behave as a completely standalone grabbable, unaffected by the parent.

### Dummy Grabbable Parents

Sometimes the parent needs constraints (the door needs a rotation limit) but should not itself be directly grabbable. Enable **Is Dummy Grabbable Parent** on the parent in that case. The parent gets the constraints but cannot be grabbed directly, only through the child handle.

An aircraft yoke column is another good example: the column moves forward and back when the yoke itself is pushed or pulled.

Here is an example where the door itself cannot be grabbed directly, but it can still be opened and closed through the door handle:
![](/media/docs/manipulation/uxrgrabbableobject/08DummyGrabbableParent.png)

The door has a `UxrGrabbableObject` component, and its child handle has another `UxrGrabbableObject`. The parent door has **Is Dummy Grabbable Parent** enabled, which shows a simpler inspector without the standard grabbable options.
The handle also shows options to control the parent-child relationship:
![](/media/docs/manipulation/uxrgrabbableobject/10ChildInspector.png)

## Translation Constraints

**Translation Constraint Mode** controls how the object's position is limited while being held:

- **Free**: No position limits, the object follows the hand anywhere.
- **Restrict Local Offset**: The object can only move within a local-axis-aligned bounding box defined by **Translation Limits Min** and **Translation Limits Max**. Use this for sliders, drawer handles, and any object that slides along a rail.
- **Restrict To Box**: Position is constrained to the volume of a `BoxCollider` assigned to **Restrict To Box**. The pivot must stay inside that box.
- **Restrict To Sphere**: Position is constrained to the volume of a `SphereCollider` assigned to **Restrict To Sphere**.
- **Locked**: The object cannot move at all. It can still be grabbed but the hand snaps to it without moving it.

![](/media/docs/manipulation/uxrgrabbableobject/TranslationConstraints.png)

**Translation Resistance** adds a drag-like resistance to movement. A value of zero means no resistance. Higher values require more hand movement to push the object and can be used to simulate heavy objects or objects on tight rails.

### Constrained Grab Release Distance

When an object has constraints, the virtual hand is locked to the grab point and cannot stray far from it. If the real hand moves too far from where the virtual hand is locked, for example by walking backward while holding a lever, the grip should release automatically. **Constrained Grab Release Distance** sets this threshold in meters.

## Rotation Constraints

**Rotation Constraint Mode** controls how rotation is limited:

- **Free**: No rotation limits.
- **Restrict Local Rotation**: Rotation is clamped per-axis between **Rotation Angle Limits Min** and **Rotation Angle Limits Max**. Use this for levers, door hinges, dials, and joysticks.
- **Locked**: The object cannot rotate.

**Rotation Resistance** is the rotational equivalent of translation resistance.

### Rotation Provider

When an object has both a translation constraint and a rotation constraint with actual range of motion, the **Rotation Provider** setting (visible when **Auto Rotation Provider** is off) controls how the hand drives the rotation:

- **Hand Orientation**: The object rotates as the hand wrist rotates. Good for knobs and small joysticks where torque comes from twisting the wrist.
- **Hand Position Around Pivot**: The object rotates based on where the hand moves around the pivot axis. Good for large levers, steering wheels, and door handles where the leverage comes from arm movement, not wrist rotation.

When **Auto Rotation Provider** is enabled the system picks the most appropriate provider automatically based on the object's shape and constraint configuration.

**Longitudinal Axis** specifies which of the object's local axes (X, Y, or Z) runs along its length. This is used when rotation is constrained on two or more axes to determine which axis the object's "barrel" follows.

**Needs 2 Hands to Rotate** prevents the object from rotating when grabbed with only one hand. The object can be picked up, but it will not rotate until the second hand joins the grip.

![](/media/docs/manipulation/uxrgrabbableobject/RotationConstraints.png)

## Physics

Assign a `Rigidbody` component to **Rigidbody** to enable physics-driven release. When the object is grabbed, its rigidbody is made kinematic so the hand drives it. On release:

- If **Rigidbody Dynamic On Release** is enabled, the rigidbody becomes dynamic and receives the throwing velocity of the hand. The object can then be thrown like a real object.
- If disabled, the rigidbody stays kinematic after release.

**Vertical Release Multiplier** and **Horizontal Release Multiplier** scale the release velocity independently for each direction. Values greater than 1 produce a stronger throw in that direction. Values less than 1 dampen it.

![](/media/docs/manipulation/uxrgrabbableobject/PhysicsSettings.png)

## Grab Proximity

By default the [`UxrGrabber`](/docs/manipulation/uxrgrabber) component's own transform is used to measure distance to nearby `UxrGrabbableObject` components. For scenes where you need finer control, for example, a cockpit where small buttons should react to the tip of the index finger while larger controls react to the palm. You can add additional transforms to the [`UxrGrabber`](/docs/manipulation/uxrgrabber) component's **Optional Proximity Transforms** list.

Each grab point on the `UxrGrabbableObject` can then specify which proximity transform index it prefers via the **Grabber Proximity Index** field, overriding the default grabber-transform distance check.

## Priority

When two grabbable objects are within reach simultaneously, the grab manager uses **Priority** to decide which one to offer to the user. A higher-priority object always wins over a lower-priority one regardless of distance. Objects with the same priority are resolved by distance and orientation.

## Placement

### Anchor Compatible Tag

**Anchor Compatible Tag** is a string identifier that controls which `UxrGrabbableObjectAnchor` sockets can accept this object. An object can be placed on an anchor only if:

- Both have no tag set, **or**
- The object's tag appears in the anchor's **Compatible Tags** list.

### Start Anchor

**Start Anchor** references the `UxrGrabbableObjectAnchor` where the object is initially placed when the scene starts. If the object begins in the scene already sitting on an anchor, assign that anchor here.

### Create Anchor at Startup

Enabling **Create Anchor at Startup** generates a `UxrGrabbableObjectAnchor` automatically at runtime, positioned exactly where the object starts. The generated anchor accepts only objects with a matching tag (if one is set). This is a convenient way to create a fixed home position for an object without placing an anchor manually in the editor.

### Anchor Snap

**Anchor Snap** references the transform on this object that will be aligned to the anchor's **Align Transform** when the object is placed. Leave this unassigned (or enable **Use Self**) to align the object's pivot.

**Anchor Snap Mode** controls what gets snapped:

- **Don't Snap**: Placement happens but the object is not repositioned or reoriented.
- **Position Only**: Only the position snaps. Rotation is preserved.
- **Rotation Only**: Only the rotation snaps, Position is preserved.
- **Position And Rotation**: Both snap (default).

### Proximity

**Anchor Proximity Position** references the transform used to measure how close the object is to anchors when deciding whether it can be placed. Leave unassigned (or enable **Use Self**) to use the object's own pivot for distance measurement.

**Parent When Placing** controls whether the object is parented to the anchor's GameObject when placed on it. Enable this when the anchor or its parent moves and the placed object should move along with it.

![](/media/docs/manipulation/uxrgrabbableobject/PlacementSettings.png)

## Parameter Reference

### General

- *Register Avatar for Grips*: Registers an avatar prefab to have per-avatar grip configuration. Parameters highlighted in green are overridable per registered avatar.
- *Selected Avatar Grips*: Switches which registered avatar's grip parameters are shown and editable in the inspector.
- *Is Dummy Grabbable Parent*: Marks this object as non-grabbable directly, but still active as a constrained parent for children to drive.
- *Control Parent Direction*: When this child is grabbed, its movement steers the parent object's direction according to the parent's constraints.
- *Ignore Parent Dependency*: When enabled, this child is treated as a standalone object independent of any grabbable parent in the hierarchy.
- *Priority*: Objects with higher priority are offered to the user first when multiple objects are in reach. Default is 0.
- *Allow 2 Hands Grab*: When more than one grab point exists, controls whether the object can be held by both hands simultaneously.

### Constraints

- *Translation Constraint Mode*: How the object's position is limited while grabbed. Options: Free, Restrict Local Offset, Restrict To Box, Restrict To Sphere, Locked.
- *Restrict To Box*: The `BoxCollider` that defines the allowed volume when Translation Constraint Mode is Restrict To Box.
- *Restrict To Sphere*: The `SphereCollider` that defines the allowed volume when Translation Constraint Mode is Restrict To Sphere.
- *Translation Limits Min*: Minimum local-axis offsets allowed when Translation Constraint Mode is Restrict Local Offset.
- *Translation Limits Max*: Maximum local-axis offsets allowed when Translation Constraint Mode is Restrict Local Offset.
- *Rotation Constraint Mode*: How the object's rotation is limited while grabbed. Options: Free, Restrict Local Rotation, Locked.
- *Rotation Angle Limits Min*: Minimum rotation in degrees per axis when Rotation Constraint Mode is Restrict Local Rotation.
- *Rotation Angle Limits Max*: Maximum rotation in degrees per axis when Rotation Constraint Mode is Restrict Local Rotation.
- *Auto Rotation Provider*: When enabled, the system automatically selects the most appropriate rotation provider for the object.
- *Rotation Provider*: Visible when Auto Rotation Provider is off. Controls how the hand drives rotation on a constrained object. Options: Hand Orientation (wrist twist), Hand Position Around Pivot (leverage).
- *Longitudinal Axis*: The local axis that runs along the length of the object. Used to resolve rotation when multiple axes are constrained.
- *Needs 2 Hands to Rotate*: Prevents rotation of a constrained object when only one hand is grabbing it.
- *Constrained Grab Release Distance*: Maximum distance in meters between the real hand and the locked virtual grab point before the grip is automatically released.
- *Translation Resistance*: Resistance to hand-driven movement. Zero means no resistance. Higher values simulate heavier or stiffer objects.
- *Rotation Resistance*: Resistance to hand-driven rotation.

### Physics

- *Rigidbody*: The `Rigidbody` component used for physics. Made kinematic during a grab and optionally dynamic on release.
- *Rigidbody Dynamic On Release*: When enabled, the rigidbody becomes dynamic on release so the object can be thrown. When disabled it stays kinematic.
- *Vertical Release Multiplier*: Scale factor applied to the vertical component of the throwing velocity.
- *Horizontal Release Multiplier*: Scale factor applied to the horizontal component of the throwing velocity.

### Avatar Grips

- *Preview Grip Pose Meshes*: Controls which hand preview meshes are shown in the Scene window. Options: Both Hands, Left Only, Right Only, None.

### Grab Points

- *First Grab Point Is Main*: In two-hand grabs, the first grab point controls world position while the second controls direction. Disable to let the hand that grabbed first act as main.
- *Grab Point*: The main grabbing point configuration (see Grab Point Parameters below).
- *Additional Grab Points*: Extra grab points that allow the object to be grabbed from different angles or with different grips.

#### Grab Point Parameters (Applies to Main and Additional Grab Points)

- *Name In Editor*: Display name for this grab point in the inspector foldout, also used as base name for generated snap transforms.
- *Grab Mode*: How the grab is held. Options: Grab While Pressed (hold button), Grab Toggle (press to grab, press to release), Grab And Keep Always (only released by code).
- *Default Grab Button(s)*: When enabled, uses the avatar's standard grab button. When disabled, **Grab Button(s)** becomes active.
- *Grab Button(s)*: The input button or combination required to grab via this point, when not using the default.
- *Both Hands Compatible*: When enabled, either hand can use this grab point. When disabled, only the hand specified in **Compatible Hand** can use it.
- *Compatible Hand*: The hand allowed to grab via this point when **Both Hands Compatible** is off.
- *Hide Hand Renderer*: When enabled, the hand renderer is hidden while this grab point is active.
- *Grip Pose*: The hand pose asset used for this grab point on the selected registered avatar.
- *Pose Blend*: Blend value for blend poses, controlling how open or closed the hand is.
- *Grip Snap Left Hand*: Snap transform for the left hand. The left `UxrGrabber` aligns to this transform on grab.
- *Grip Snap Right Hand*: Snap transform for the right hand. The right `UxrGrabber` aligns to this transform on grab.
- *Create Left Snap*: Creates a child transform to use as the left hand snap reference.
- *Create Right Snap*: Creates a child transform to use as the right hand snap reference.
- *Snap Mode*: Which axes snap when the object is grabbed. Options: Don't Snap, Position Only, Rotation Only, Position And Rotation.
- *Snap Direction*: Whether the object snaps to the hand or the hand snaps to the object. For constrained objects the hand always snaps to the object regardless of this setting.
- *Grip Snap Transform*: Selects whether the object's own transform or a designated snap transform is used as the alignment reference.
- *Align To Controller*: When enabled, the object aligns to the controller axes on grab. Important for weapons and tools where aiming direction must match the controller.
- *Align To Controller Axes*: An optional transform to use as the reference for controller alignment instead of the object's own axes.
- *Grabbable Valid Distance*: Determines how proximity to this grab point is measured. Options: Use Proximity (distance to transform), Box Constrained (hand must be inside a box).
- *Grabbable Valid Box*: The `BoxCollider` the hand must be inside when Grabbable Valid Distance is Box Constrained.
- *Max Distance Grab*: Maximum distance at which the hand can grab via this point when using proximity mode.
- *Grabbable Distance Reference*: The transform on this object used as the reference point for proximity calculations.
- *Grabbable Proximity Transform*: Custom transform for proximity distance measurement. Overrides the default when assigned.
- *Use Grabber Default Proximity*: When enabled, the grabber's own transform is used for distance checks. When disabled, a specific proximity transform from the grabber can be selected.
- *Grabber Proximity Index*: Index of the additional proximity transform on the `UxrGrabber` component to use for distance calculations when **Use Grabber Default Proximity** is off.
- *Enable When Hand Near*: Optional `GameObject` that will be activated when a hand is close enough to grab via this point.

### Placement

- *Parent When Placing*: When enabled, the object is parented to the `UxrGrabbableObjectAnchor` when placed on it.
- *Create Anchor at Startup*: Generates a `UxrGrabbableObjectAnchor` at the object's start position automatically at runtime.
- *Start Anchor*: The `UxrGrabbableObjectAnchor` where this object is initially placed at scene start.
- *Anchor Compatible Tag*: String identifier used to match this object to compatible `UxrGrabbableObjectAnchor` sockets.
- *Anchor Snap*: Transform on this object that aligns to the anchor's align transform when placed.
- *Anchor Snap Mode*: How the object snaps to the anchor. Options: Don't Snap, Position Only, Rotation Only, Position And Rotation.
- *Anchor Proximity Position*: Transform used to measure distance to anchors when determining if placement should trigger.
