# UltimateXR.Core Namespace

## Classes
&nbsp;<table><tr><th></th><th>Class</th><th>Description</th></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Core_UxrConstants">UxrConstants</a></td><td>
Static class containing common constants used across the framework.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Core_UxrConstants_Paths">UxrConstants.Paths</a></td><td>
Contains constants describing file paths in the framework.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Core_UxrConstants_Shaders">UxrConstants.Shaders</a></td><td>
Contains constants used in shaders such as variable names, keywords, values, etc.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Core_UxrManager">UxrManager</a></td><td>

Main manager in the UltimateXR framework. As a <a href="T_UltimateXR_Core_Components_Singleton_UxrSingleton_1">UxrSingleton</a> it can be accessed at any point in the application through <a href="P_UltimateXR_Core_Components_Singleton_UxrSingleton_1_Instance">UxrManager.Instance</a> . It can be pre-instantiated in the scene in order to change default parameters through the inspector but it is not required. When accessing the global <a href="P_UltimateXR_Core_Components_Singleton_UxrSingleton_1_Instance">UxrManager.Instance</a>, if no <a href="T_UltimateXR_Core_UxrManager">UxrManager</a> is currently available, one will be instantiated in the scene as the global Singleton.

<a href="T_UltimateXR_Core_UxrManager">UxrManager</a> is responsible for updating all key framework entities such as avatars each frame in the correct order. Events and callbacks are provided so that custom updates can be executed at appropriate stages of the updating process.

<a href="T_UltimateXR_Core_UxrManager">UxrManager</a> also provides commonly required functionality:
&nbsp;<ul><li>Pre-caching prefabs when scenes are loaded to eliminate hiccups.</li><li>Moving/rotating/teleporting avatars.</li><li>Provide events to notify when avatars have been moved/rotated/teleported.</li><li>Provide events to notify before and after updating a frame and at different stages of the updating process for finer control.</li></ul></td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Core_UxrTransform">UxrTransform</a></td><td>
Stores transform information.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Core_UxrUtils">UxrUtils</a></td><td /></tr></table>

## Enumerations
&nbsp;<table><tr><th></th><th>Enumeration</th><th>Description</th></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Core_UxrHandSide">UxrHandSide</a></td><td>
Enumerates the available hands.</td></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Core_UxrLogLevel">UxrLogLevel</a></td><td>
Enumerates the different log levels</td></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Core_UxrPostUpdateMode">UxrPostUpdateMode</a></td><td>
Enumerates where <a href="T_UltimateXR_Core_UxrManager">UxrManager</a> updates the <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> post-update. Among elements processed in the post-update is the animation. See <a href="P_UltimateXR_Core_UxrManager_PostUpdateMode">PostUpdateMode</a></td></tr><tr><td>![Public enumeration](media/pubenumeration.gif "Public enumeration")</td><td><a href="T_UltimateXR_Core_UxrUpdateStage">UxrUpdateStage</a></td><td>
Enumerates the different update stages during a frame used by <a href="T_UltimateXR_Core_UxrManager">UxrManager</a> events.</td></tr></table>&nbsp;
