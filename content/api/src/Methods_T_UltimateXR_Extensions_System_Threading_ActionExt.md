# ActionExt Methods
 

The <a href="T_UltimateXR_Extensions_System_Threading_ActionExt">ActionExt</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_ActionExt_Loop">Loop</a></td><td>
Executes repeatedly this <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>, in the main thread, at *rate* until cancellation is requested with *ct*.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_ActionExt_LoopThreaded">LoopThreaded</a></td><td>
Executes repeatedly this <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>, in a separated thread, at *rate* Hz until cancellation is requested using *ct*.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_ActionExt_ToLoop">ToLoop</a></td><td>
Creates a <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a> which wraps a cancellable loop executing this <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a> in the main thread.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_System_Threading_ActionExt_ToThreadedLoop">ToThreadedLoop</a></td><td>
Creates a <a href="T_UltimateXR_Core_Threading_TaskControllers_UxrLoopController">UxrLoopController</a> which wraps a cancellable loop executing this <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a> in a separate thread.</td></tr></table>&nbsp;
<a href="#actionext-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_System_Threading_ActionExt">ActionExt Class</a><br /><a href="N_UltimateXR_Extensions_System_Threading">UltimateXR.Extensions.System.Threading Namespace</a><br />