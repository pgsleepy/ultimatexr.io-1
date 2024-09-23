---
title: "Assemblies and Namespaces"
---

# Assemblies and Namespaces

## Assemblies

UltimateXR is structured in two [assemblies](https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html):
- **UltimateXR**, containing all the runtime code. This assembly is defined through the file /UltimateXR/UltimateXR.asmdef. All the runtime code is located under /UltimateXR/Scripts in the .unitypackage and Asset Store distributions. When UltimateXR is imported using the Package Manager, the runtime code can be found in /UltimateXR/Runtime/Scripts.
- **UltimateXR.Editor**, containing all the Unity Editor code such as custom inspectors, tools and SDK Management. This assembly is defined through the file /UltimateXR/Editor/UltimateXR.Editor.asmdef. All the editor code is located under the /UltimateXR/Editor folder.

## Runtime Root Namespaces

The runtime code is organized in the following root namespaces:
- **UltimateXR.Animation**: Components for animation, Inverse Kinematics, interpolation, splines and UI tweening.
- **UltimateXR.Attributes**: Different attributes that can be used for inspector variables.
- **UltimateXR.Audio**: Utilities for audio playback.
- **UltimateXR.Avatar**: Avatar components and avatar rig definitions.
- **UltimateXR.CameraUtils**: Components to apply effects to the avatar camera.
- **UltimateXR.Core**: Core components and classes, constants, serialization, settings and core interface implementers.
- **UltimateXR.Devices**: Support for all different input/tracking devices, hand tracking, debug panels and 3D controller visualization.
- **UltimateXR.Exceptions**: Definition of custom UltimateXR exceptions.
- **UltimateXR.Extensions**: Huge collection of extensions for .Net and Unity classes.
- **UltimateXR.Guidance**: Components that are used to provide visual cues to guide users in virtual reality.
- **UltimateXR.Haptics**: Components and utilities to provide tactile feedback through controllers.
- **UltimateXR.Locomotion**: Different components to enable movement in virtual reality.
- **UltimateXR.Manipulation**: Components facilitating object grabbing and manipulation using hands. Hand pose system.
- **UltimateXR.Mechanics**: Support for different systems that can be used in virtual reality. Weapon system.
- **UltimateXR.Networking**: Networking system providing multiuser/multiplayer and voice communication support. Implementation for different SDKs.
- **UltimateXR.Rendering**: Components for different rendering effects. LOD support.
- **UltimateXR.UI**: Components to interact with user interfaces using finger tips or laser pointers. Integration with the Unity UI system. Keyboard UIs.

## Editor Root Namespaces

These contain mostly custom inspectors, tools and drawers for the runtime components in the namespace with the same name.
- **UltimateXR.Animation**: Custom inspectors for components in the runtime UltimateXR.Animation namespace.
- **UltimateXR.Attributes**: Custom drawers for the attributes in the runtime UltimateXR.Attributes namespace.
- **UltimateXR.Audio**: Custom inspectors for components in the runtime UltimateXR.Audio namespace.
- **UltimateXR.Avatar**: Custom inspectors for components in the runtime UltimateXR.Avatar namespace. HandsIntegration gizmos.
- **UltimateXR.Core**: Custom inspectors for components in the runtime UltimateXR.Core namespace. SDK Manager window.
- **UltimateXR.Devices**: Custom inspectors for components in the runtime UltimateXR.Devices namespace.
- **UltimateXR.Haptics**: Custom inspectors for components in the runtime UltimateXR.Haptics namespace.
- **UltimateXR.Locomotion**: Custom inspectors for components in the runtime UltimateXR.Locomotion namespace.
- **UltimateXR.Manipulation**: Custom inspectors for components in the runtime UltimateXR.Manipulation namespace. Hand pose editor and presets.
- **UltimateXR.Mechanics**: Custom inspectors for components in the runtime UltimateXR.Mechanics namespace.
- **UltimateXR.Networking**: Custom inspectors for components in the runtime UltimateXR.Networking namespace.
- **UltimateXR.Readme**: Readme custom inspector.
- **UltimateXR.Sdks**: SDK locator functionality. SDK locators for all supported external SDKs.
- **UltimateXR.UI**: Custom inspectors for components in the runtime UltimateXR.UI namespace.
- **UltimateXR.Utilities**: Utility tools. Custom editor log window. Component processing API.
