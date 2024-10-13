# UxrLoopController Class
 

A wrapper class to turn a cancelable action into a controllable <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Start">Start()</a>/ <a href="M_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController_Stop">Stop()</a> pattern and run it uninterruptedly in a loop.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;<a href="T_UltimateXR_Core_Threading_TaskControllers_UxrCancellableController">UltimateXR.Core.Threading.TaskControllers.UxrCancellableController</a><br />&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Core.Threading.TaskControllers.UxrLoopController<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public sealed class UxrLoopController : UxrCancellableController
```

<a href="UltimateXR/Scripts/Core/Threading/TaskControllers/UxrLoopController.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrLoopController type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrLoopController__ctor">UxrLoopController</a></td><td>
Constructor.</td></tr></table>&nbsp;
<a href="#uxrloopcontroller-class">Back to Top</a>

## Operators
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public operator](media/puboperator.gif "Public operator")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Threading_TaskControllers_UxrLoopController_op_Explicit">Explicit(Action(CancellationToken) to UxrLoopController)</a></td><td>
Explicit conversion operator from <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action(T)</a> to UxrLoopController.</td></tr></table>&nbsp;
<a href="#uxrloopcontroller-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrloopcontroller-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Core_Threading_TaskControllers">UltimateXR.Core.Threading.TaskControllers Namespace</a><br />