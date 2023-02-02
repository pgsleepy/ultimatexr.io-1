# UxrManager Events
 

The <a href="T_UltimateXR_Core_UxrManager">UxrManager</a> type exposes the following members.


## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")![Static member](media/static.gif "Static member")</td><td><a href="E_UltimateXR_Core_UxrManager_AvatarMoved">AvatarMoved</a></td><td>
Called right after an <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> was moved.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")![Static member](media/static.gif "Static member")</td><td><a href="E_UltimateXR_Core_UxrManager_AvatarMoving">AvatarMoving</a></td><td>
Called right before an <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> is about to be moved.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")![Static member](media/static.gif "Static member")</td><td><a href="E_UltimateXR_Core_UxrManager_AvatarsUpdated">AvatarsUpdated</a></td><td>
Called right after processing all update stages in the current frame. Equivalent to <a href="E_UltimateXR_Core_UxrManager_StageUpdated">StageUpdated</a> for <a href="T_UltimateXR_Core_UxrUpdateStage">PostProcess</a></td></tr><tr><td>![Public event](media/pubevent.gif "Public event")![Static member](media/static.gif "Static member")</td><td><a href="E_UltimateXR_Core_UxrManager_AvatarsUpdating">AvatarsUpdating</a></td><td>
Called right before processing all update stages in the current frame. Equivalent to <a href="E_UltimateXR_Core_UxrManager_StageUpdating">StageUpdating</a> for <a href="T_UltimateXR_Core_UxrUpdateStage">Update</a></td></tr><tr><td>![Public event](media/pubevent.gif "Public event")![Static member](media/static.gif "Static member")</td><td><a href="E_UltimateXR_Core_UxrManager_PrecachingFinished">PrecachingFinished</a></td><td>
Called right after precaching finished. It's called on the first frame that starts to fade-in from black. See <a href="P_UltimateXR_Core_UxrManager_UsePrecaching">UsePrecaching</a>.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")![Static member](media/static.gif "Static member")</td><td><a href="E_UltimateXR_Core_UxrManager_PrecachingStarting">PrecachingStarting</a></td><td>
Called right before precaching is about to start. It's called on the first frame that is displayed black. See <a href="P_UltimateXR_Core_UxrManager_UsePrecaching">UsePrecaching</a>.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")![Static member](media/static.gif "Static member")</td><td><a href="E_UltimateXR_Core_UxrManager_StageUpdated">StageUpdated</a></td><td>
Called right after an update stage in the current frame. See <a href="T_UltimateXR_Core_UxrUpdateStage">UxrUpdateStage</a>.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")![Static member](media/static.gif "Static member")</td><td><a href="E_UltimateXR_Core_UxrManager_StageUpdating">StageUpdating</a></td><td>
Called right before an update stage in the current frame. See <a href="T_UltimateXR_Core_UxrUpdateStage">UxrUpdateStage</a>.</td></tr></table>&nbsp;
<a href="#uxrmanager-events">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Core_UxrManager">UxrManager Class</a><br /><a href="N_UltimateXR_Core">UltimateXR.Core Namespace</a><br />