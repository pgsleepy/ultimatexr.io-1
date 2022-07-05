# UxrAvatar Events
 

The <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> type exposes the following members.


## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_AvatarUpdated">AvatarUpdated</a></td><td>
Event called right after the avatar goes through an <a href="T_UltimateXR_Core_UxrUpdateStage">UxrUpdateStage</a> of the updating process.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_AvatarUpdating">AvatarUpdating</a></td><td>
Event called right before before the avatar goes through an <a href="T_UltimateXR_Core_UxrUpdateStage">UxrUpdateStage</a> of the updating process.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_HandPoseChanged">HandPoseChanged</a></td><td>
Event called right after the avatar changed a hand's pose.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_HandPoseChanging">HandPoseChanging</a></td><td>
Event called right before the avatar is about to change a hand's pose.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")![Static member](media/static.gif "Static member")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_LocalAvatarStarted">LocalAvatarStarted</a></td><td>
Event called right after after the local avatar called its Start(). This is useful when the avatar is instantiated in a deferred way, such as a networking environment, and the avatar isn't ready during Awake()/OnEnable()/Start().</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_StateChanged">StateChanged</a></td><td>
Event raised when a relevant state of an object changed and requires storage/synchronization.</td></tr></table>&nbsp;
<a href="#uxravatar-events">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar Class</a><br /><a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />