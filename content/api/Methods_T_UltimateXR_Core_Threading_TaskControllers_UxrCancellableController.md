# UxrCancellableController Methods
 

The <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController">UxrCancellableController</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a></td><td>
Starts running inner job until completion or <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> is called.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start_1">Start(Int32)</a></td><td>
Similar to <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a>, but it automatically calls <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> after *duration* milliseconds.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start_2">Start(Single)</a></td><td>
Similar to <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a>, but it automatically calls <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> after *duration* seconds.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_StartAfter">StartAfter</a></td><td>
Similar to <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a>, but adding an initial *delay*.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_StartInternal">StartInternal</a></td><td>
Implements the internal logic between with <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a> and <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop</a></td><td>
Cancels the inner job.</td></tr></table>&nbsp;
<a href="#uxrcancellablecontroller-methods">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrcancellablecontroller-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController">UxrCancellableController Class</a><br /><a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers Namespace</a><br />