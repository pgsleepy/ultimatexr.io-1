# IUxrStateSync Interface
 


Interface for entities that are able to expose internal state changes described by a <a href="T_UltimateXR_Core_StateSync_UxrStateSyncEventArgs">UxrStateSyncEventArgs</a> raised through a <a href="E_UltimateXR_Core_StateSync_IUxrStateSync_StateChanged">StateChanged</a> event. To support the synchronization, classes that implement this interface are also able to reproduce state changes using <a href="M_UltimateXR_Core_StateSync_IUxrStateSync_SyncState">SyncState(UxrStateSyncEventArgs, Boolean)</a>.
 This interface should be implemented in entities relevant in network synchronization.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_StateSync">UltimateXR.Core.StateSync</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public interface IUxrStateSync
```

<a href="UltimateXR/Scripts/Core/StateSync/IUxrStateSync.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The IUxrStateSync type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_StateSync_IUxrStateSync_SyncState">SyncState</a></td><td>
Executes the state change described by [!:e].</td></tr></table>&nbsp;
<a href="#iuxrstatesync-interface">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Core_StateSync_IUxrStateSync_StateChanged">StateChanged</a></td><td>
Event raised when a relevant state of an object changed and requires storage/synchronization.</td></tr></table>&nbsp;
<a href="#iuxrstatesync-interface">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Core_StateSync">UltimateXR.Core.StateSync Namespace</a><br />