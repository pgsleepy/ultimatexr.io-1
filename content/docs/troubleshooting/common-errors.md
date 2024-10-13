---
title: "Common Errors"
---

# Common Errors

## Compiler errors when removing SDKs

If you delete an SDK folder such as SteamVR or OVR you may get compiler errors right after. This is because the UltimateXR symbols for those SDKs are still present and enabling lines of code that reference classes that are no longer present.

![](/media/docs/troubleshooting/common-errors/01Errors.png)
 
If this happens, you need to navigate to Tools -> UltimateXR -> SDKs and remove the symbols for the SDK that was deleted.

![](/media/docs/troubleshooting/common-errors/02RemoveSymbols.png)

## Shader errors when using Build and Run

Build and Run may output the following shader errors:

![](/media/docs/troubleshooting/common-errors/03ShaderErrors.png)

You can follow the GitHub issue for this error at https://github.com/VRMADA/ultimatexr-unity/issues/2
