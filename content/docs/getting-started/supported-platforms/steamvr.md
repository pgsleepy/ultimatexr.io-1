---
title: "SteamVR"
---

# SteamVR

## Installing and setting up SteamVR support

Make sure your project is currently targeting desktop in File -> Build Settings.

![](/docs/guides/media/supported-platforms/steamvr/SteamVR01Desktop.png)

Open the UltimateXR SDK Manager using Tools -> UltimateXR -> SDKs -> SDK Manager.

![](/docs/guides/media/supported-platforms/steamvr/SteamVR02SDKManager.png)
 
Press the Get SDK button under the SteamVR section. This will open the Asset Store. Select Add to My Assets to add it to your Unity assets.

![](/docs/guides/media/supported-platforms/steamvr/SteamVR03AssetStore.png)
 
Now open the Package Manager using Window -> Package Manager. Select My Assets.

![](/docs/guides/media/supported-platforms/steamvr/SteamVR04MyAssets.png)
 
Import the SteamVR plugin

![](/docs/guides/media/supported-platforms/steamvr/SteamVR04ZSteamAsset.png)

Go back to the UltimateXR SDK Manager. If everything went correctly the SteamVR section will show that the SteamVR actions need to be generated.

![](/docs/guides/media/supported-platforms/steamvr/SteamVR05NeedsActions.png)
 
Open Window -> SteamVR Input. SteamVR will request permission to generate an actions file. Click yes.

![](/docs/guides/media/supported-platforms/steamvr/SteamVR06Actions.png)
 
Going back to the UltimateXR SDK Manager the SteamVR section will now show the option to create the UltimateXR actions. The UltimateXR actions will allow to use the input module with SteamVR. Click on Create Actions.

![](/docs/guides/media/supported-platforms/steamvr/SteamVR07CreateActions.png)

After some processing the SDK Manager should now show the following state:

![](/docs/guides/media/supported-platforms/steamvr/SteamVR08ActionsAvailable.png)

The last step is to enable the OpenVR plugin, which is the one used by the SteamVR SDK. Open Edit -> Project Settings and check the OpenVR plugin provider under the desktop section.

![](/docs/guides/media/supported-platforms/steamvr/SteamVR09OpenVR.png)
