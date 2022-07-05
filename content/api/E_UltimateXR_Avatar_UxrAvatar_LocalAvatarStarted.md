# UxrAvatar.LocalAvatarStarted Event
 

Event called right after after the local avatar called its Start(). This is useful when the avatar is instantiated in a deferred way, such as a networking environment, and the avatar isn't ready during Awake()/OnEnable()/Start().

**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static event EventHandler<UxrAvatarStartedEventArgs> LocalAvatarStarted
```

<a href="UltimateXR/Scripts/Avatar/UxrAvatar.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">System.EventHandler</a>(<a href="T_UltimateXR_Avatar_UxrAvatarStartedEventArgs">UxrAvatarStartedEventArgs</a>)

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />