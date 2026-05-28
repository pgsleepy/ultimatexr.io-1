---
title: "OpenXR"
---

# OpenXR

## Installing and setting up OpenXR support

OpenXR is a cross-platform, vendor-neutral standard supported by most modern VR and AR headsets. Using OpenXR allows you to target multiple devices with a single build.

The OpenXR plugin is provided through the OpenXR Plugin package.

Open `Window->Package Management->Package Manager` and in the Unity Registry navigate to `OpenXR Plugin`. Install the package.

![](/media/docs/getting-started/supported-platforms/openxr/PackageManager.png)

Now open `Edit->Project Settings` and select the XR Plugin Management section from the left.
Enable the **OpenXR** plugin for your target platform (PC for desktop headsets, Android for standalone devices such as Meta Quest).

![](/media/docs/getting-started/supported-platforms/openxr/XRPluginManagement.png)

Go to `Edit -> Project Settings -> XR Plug-in Management -> OpenXR`. Add the **Interaction Profiles** for the controllers you want to support. Common profiles include:

- Oculus Touch Controller Profile (Meta Quest)
- HTC Vive Controller Profile
- Valve Index Controller Profile
- HP Reverb G2 Controller Profile
- Microsoft Motion Controller Profile (Windows Mixed Reality)

![](/media/docs/getting-started/supported-platforms/openxr/InteractionProfiles.png)

## Building for Android

To create a build for standalone headsets (e.g. Meta Quest):

- Switch your platform to Android using `File -> Build Settings`.
- In `Edit -> Project Settings -> XR Plug-in Management`, make sure OpenXR is enabled under the Android tab as well, and that the appropriate interaction profiles are added.
- Build your application using `File -> Build Settings -> Build`.
