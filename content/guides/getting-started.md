---
title: "Getting started"
---

# Getting started

## Installation and setup

UltimateXR can be installed by downloading the latest [.unitypackage]({{< param latest_version_download_url >}}) (version {{< param latest_version >}}).


We are in the process of providing additional ways of getting the framework:

- Downloading via Github
- Installation through the Unity Package Manager
- Downloading through the Unity Asset Store

## Requirements

Unity 2021.2 or higher. LTS version is highly recommended.

## Uninstalling the previous version first

Before installing any new version, it is extremely important to delete the whole UltimateXR folder first. This will make sure that files that aren’t present in newer versions are removed. Not doing so may create unwanted compilation errors.
Deleting UltimateXR before installing will not break any reference link. Unity’s .meta files include IDs that make sure that the references are kept.

## Downloading and installing the .unitypackage file

Download the latest UltimateXR [.unitypackage]({{< param latest_version_download_url >}}) (version {{< param latest_version >}}). It contains a big sample scene so the file size is larger than usual. The core package and sample scene will be split in two different packages in the future to limit disk size and lower installation time.

Right click on the Project Window and select Import Package -> Custom Package…. 

![](/guides/media/getting-started/01ImportPackage.png)
  
Select the downloaded file and click Import. Importing assets may take a while due to the included sample scene.

## Setting up the environment

UltimateXR works with any render pipeline (BRP or Built-in Render Pipeline, URP or Universal Render Pipeline, HDRP or High-Definition Render Pipeline) although for the moment it comes with BRP and URP compatible materials.

The example scene is built using URP materials. BRP and HDRP versions will be provided in upcoming versions.
URP is recommended when creating Virtual Reality applications in Unity for the following reasons:

- BRP will be deprecated at some point.
- URP’s goal is to work on all supported platforms, including mobile for untethered XR devices.
- URP is the only viable option for untethered devices, where performance is limited. URP’s performance on these devices is very high.
- URP is very flexible and can also provide high quality graphics in more performant desktop setups.
 
To create a project using the Universal Render Pipeline, create a new project and select the URP template:

![](/guides/media/getting-started/02NewProject.png)

Now go to Edit -> Project settings. Select XR Plugin Management and install the XR Plugin Management package. This will enable the creation of virtual reality applications.

![](/guides/media/getting-started/03XRPluginManagement1.png)
 
After installing the XR Plugin Management you may activate support for some of the devices that have out-of-the-box integration with Unity. Remember to activate them in desktop, which is used both by the editor in play mode and by desktop builds, and also in the destination platform for your builds, which may be different.

![](/guides/media/getting-started/04XRPluginManagement2.png)
 
Your project is now ready to go! You may want to add support for different XR devices next. Luckily UltimateXR takes care of seamlessly integrating with different XR APIs. Go to the Integrations section to check how to add support for your target devices.
