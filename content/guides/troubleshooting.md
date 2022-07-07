---
title: "Troubleshooting"
---

# Troubleshooting

## Compiler errors when removing SDKs

If you delete an SDK folder such as SteamVR or OVR you may get compiler errors right after. This is because the UltimateXR symbols for those SDKs are still present and enabling lines of code that reference classes that are no longer present.
 
If this happens, you need to navigate to Tools -> UltimateXR -> SDKs and remove the symbols for the SDK that was deleted.

![](/guides/media/troubleshooting/01Errors.png)
