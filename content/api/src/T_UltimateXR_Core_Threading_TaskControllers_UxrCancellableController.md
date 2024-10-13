# UxrCancellableController Class
 

Parent abstract class for <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a> and <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrTaskController">UxrTaskController</a>.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Core.Threading.TaskControllers.UxrCancellableController<br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UltimateXR.Core.Threading.TaskControllers.UxrLoopController</a><br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Threading_TaskControllers_UxrTaskController">UltimateXR.Core.Threading.TaskControllers.UxrTaskController</a><br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract class UxrCancellableController
```

<a href="UltimateXR/Scripts/Core/Threading/TaskControllers/UxrCancellableController.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrCancellableController type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController__ctor">UxrCancellableController</a></td><td>
Constructor.</td></tr></table>&nbsp;
<a href="#uxrcancellablecontroller-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_IsRunning">IsRunning</a></td><td>
Gets whether the inner job is currently running.</td></tr></table>&nbsp;
<a href="#uxrcancellablecontroller-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a></td><td>
Starts running inner job until completion or <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> is called.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start_1">Start(Int32)</a></td><td>
Similar to <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a>, but it automatically calls <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> after *duration* milliseconds.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start_2">Start(Single)</a></td><td>
Similar to <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a>, but it automatically calls <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> after *duration* seconds.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_StartAfter">StartAfter</a></td><td>
Similar to <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a>, but adding an initial *delay*.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_StartInternal">StartInternal</a></td><td>
Implements the internal logic between with <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a> and <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop</a></td><td>
Cancels the inner job.</td></tr></table>&nbsp;
<a href="#uxrcancellablecontroller-class">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Completed">Completed</a></td><td>
Triggered when the inner job is completed, without having been canceled.</td></tr></table>&nbsp;
<a href="#uxrcancellablecontroller-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrcancellablecontroller-class">Back to Top</a>

## Remarks
Wraps a <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtokensource" target="_blank" rel="noopener noreferrer">CancellationTokenSource</a> into a <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a> and <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> pattern, ensuring that <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> is called when the application quits.

## See Also


#### Reference
<a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers Namespace</a><br />