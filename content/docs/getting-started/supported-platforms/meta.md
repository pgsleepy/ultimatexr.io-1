---
title: "Meta"
---

# Meta Quest

## Installing and setting up Meta Quest support

To begin setting up Meta Quest support, open the UltimateXR SDK Manager using the menu `Tools -> UltimateXR -> SDKs -> SDK Manager`.

Next, click on "Get SDK" under the Meta section. This will open the link to add the Meta XR Core SDK to your assets. Here is how that looks:

![](/media/docs/getting-started/supported-platforms/meta/Meta01AssetStore.png)

Having done that, please return to Unity and open the Package Manager using the menu `Window -> Package Manager`.

In this window select “My Assets” from the top drop-down menu as displayed.

![](/media/docs/getting-started/supported-platforms/meta/Oculus02MyAssets.png)

Navigate to the Meta XR Core SDK asset and select Install. After having installed the Meta XR Core SDK package, please import the package as well.

![](/media/docs/getting-started/supported-platforms/meta/Meta03PackageManager.png)

Finally, go to `Edit -> Project Settings` and enable Oculus support in the desktop platform. Also check Oculus support in the Android tab if you plan to create builds for Quest:

![](/media/docs/getting-started/supported-platforms/meta/Oculus04Management1.png)

## Creating a build for Meta Quest

Switch your platform to Android using `File -> Build Settings`.

![](/media/docs/getting-started/supported-platforms/meta/Oculus05Android.png)

Create a compatible Manifest file using the Oculus menu on top.

![](/media/docs/getting-started/supported-platforms/meta/Meta06Manifest.png)

Now create the .apk file for Android using `File -> Build Settings -> Build`

Note: Build and run may give shader errors on some configurations. If this is the case, use Build instead and use adb -install file.apk to install it on your device.

For detailed help regarding building and running Oculus apps using Unity please check https://developer.oculus.com/documentation/unity/unity-build/
