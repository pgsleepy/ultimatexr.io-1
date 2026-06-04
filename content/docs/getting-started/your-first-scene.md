---
title: "Your First Scene"
---

# Your First Scene

This guide walks you through creating a basic UltimateXR scene from scratch.

## 1. XR Provider

Before creating a scene, make sure Unity is set up to use the OpenXR provider. OpenXR is the recommended choice because it is supported across the widest range of headsets without requiring separate SDKs.

Go to **Edit -> Project Settings -> XR Plug-in Management**. If XR Plug-in Management is not yet installed, click **Install XR Plug-in Management** and wait for it to complete.

![](/media/docs/getting-started/your-first-scene/01XRPluginManagement.png)

Select the **PC, Mac & Linux Standalone** tab (the monitor icon) and enable **OpenXR**. If you intend to build for a standalone headset (Quest, Pico, etc.), also enable OpenXR on the **Android** tab.

![](/media/docs/getting-started/your-first-scene/02OpenXREnabled.png)

## 2. Create Scene

Go to **File -> New Scene** and select the **Basic (Built-in)** or **Basic URP** template depending on your project's render pipeline. Click **Create**.

Save the scene immediately with **File -> Save As** and give it a name.

## 3. Remove Default Camera

The built-in avatar already contains a correctly configured camera. The default **Main Camera** added by Unity must be removed to avoid conflicts.

In the **Hierarchy** window, select **Main Camera** and press **Delete**.

![](/media/docs/getting-started/your-first-scene/03RemoveCamera.png)

## 4. Create a Floor

The avatar needs a surface to stand on.

In the **Hierarchy** window, right-click and choose **3D Object -> Plane**. This creates a 10 × 10 metre plane centred at the origin, which is large enough for basic testing.

![](/media/docs/getting-started/your-first-scene/04Floor.png)

{{% callout tip "No headset yet?" %}}
Make sure the plane stays at position `(0, 0, 0)` so the avatar spawns on it.
{{% /callout %}}

## 5. Add a Built-in Avatar

UltimateXR provides ready-to-use avatars that can be added directly from the Tools menu.

Go to **Tools -> UltimateXR -> Avatar -> Add built-in avatar to the scene** and select one of the built-in avatars from the list.

![](/media/docs/getting-started/your-first-scene/05ToolsAvatar.png)

The avatar prefab is placed in the scene at the origin. It includes the camera rig, hand controllers, and all the components needed for interaction out of the box.

![](/media/docs/getting-started/your-first-scene/06AvatarInScene.png)

## 6. Hit Play

Press **Play** in the Unity Editor. If a headset is connected and the OpenXR runtime is running, you should see the scene through your headset immediately. Put on your headset, stand on the floor, and look around.

If you are testing without a headset, use the XR Device Simulator controls to move and look around in the Game view.

![](/media/docs/getting-started/your-first-scene/07PlayMode.png)

That's all it takes to get a working VR scene with UltimateXR. From here you can start adding interactable objects, UI, and more using the guides in this documentation.

## Next Steps

- [The Tools Menu](/docs/getting-started/tools-menu): Explore the other options available in the UltimateXR menu.
- [Avatars overview](/docs/avatars/overview): Learn how to customise or replace the built-in avatar.
- [Creating a Grabbable Ball](/docs/manipulation/tutorials/creating-a-grabbable-ball): Add your first interactable object to the scene.
