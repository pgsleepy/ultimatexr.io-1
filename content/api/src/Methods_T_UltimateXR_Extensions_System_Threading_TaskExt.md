# TaskExt Methods
 

The <a href="T_UltimateXR_Extensions_System_Threading_TaskExt">TaskExt</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_Delay">Delay(Int32, CancellationToken)</a></td><td>
Creates an awaitable task that finishes after a given amount of milliseconds.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_Delay_1">Delay(Single, CancellationToken)</a></td><td>
Creates an awaitable task that finishes after a given amount of seconds.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_FireAndForget">FireAndForget</a></td><td>
Allows to run a task in "fire and forget" mode, when it is not required to await nor is it relevant whether it succeeds or not. There still needs to be a way to handle exceptions to avoid unhandled exceptions and process termination.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_Loop">Loop</a></td><td>
Loops iterating once per frame during a specified amount of time, executing a user-defined action.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_SkipFrames">SkipFrames</a></td><td>
Creates an awaitable task that finishes after a given amount of frames.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_WaitForNextFrame">WaitForNextFrame</a></td><td>
Creates an awaitable task that finishes the next frame.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_WaitUntil_2">WaitUntil(Func(Boolean), CancellationToken)</a></td><td>
Creates an awaitable task that blocks until a condition is true or the task is canceled.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_WaitUntil">WaitUntil(Func(Boolean), Int32, CancellationToken)</a></td><td>
Creates an awaitable task that blocks until a condition is true, a timeout occurs or the task is canceled.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_WaitUntil_1">WaitUntil(Func(Boolean), Single, Action, CancellationToken)</a></td><td>
Creates an awaitable task that blocks until a condition is true, waiting a certain amount of seconds at maximum. An optional action can be called if the task was cancelled or it timed out.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_WaitUntilCancelled">WaitUntilCancelled</a></td><td>
Provides a one-liner method to await until a task is cancelled.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_WaitWhile_2">WaitWhile(Func(Boolean), CancellationToken)</a></td><td>
Creates an awaitable task that blocks while a condition is true or the task is canceled.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_WaitWhile">WaitWhile(Func(Boolean), Int32, CancellationToken)</a></td><td>
Creates an awaitable task that blocks while a condition is true, a timeout occurs or the task is canceled.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_TaskExt_WaitWhile_1">WaitWhile(Func(Boolean), Single, Action, CancellationToken)</a></td><td>
Creates an awaitable task that blocks while a condition is true, waiting a certain amount of seconds at maximum. An optional action can be called if the task was cancelled or it timed out.</td></tr></table>&nbsp;
<a href="#taskext-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Threading_TaskExt">TaskExt Class</a><br /><a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading Namespace</a><br />