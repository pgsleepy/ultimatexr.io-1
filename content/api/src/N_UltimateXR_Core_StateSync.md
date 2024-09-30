# UltimateXR.Core.StateSync Namespace

## Classes
&nbsp;<table><tr><th></th><th>Class</th><th>Description</th></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Core_StateSync_UxrStateSyncEventArgs">UxrStateSyncEventArgs</a></td><td>
Base event args to synchronize the state of entities for network synchronization.</td></tr></table>

## Interfaces
&nbsp;<table><tr><th></th><th>Interface</th><th>Description</th></tr><tr><td>![Public interface](media/pubinterface.gif "Public interface")</td><td><a href="T_UltimateXR_Core_StateSync_IUxrStateSync">IUxrStateSync</a></td><td>

Interface for entities that are able to expose internal state changes described by a <a href="T_UltimateXR_Core_StateSync_UxrStateSyncEventArgs">UxrStateSyncEventArgs</a> raised through a <a href="E_UltimateXR_Core_StateSync_IUxrStateSync_StateChanged">StateChanged</a> event. To support the synchronization, classes that implement this interface are also able to reproduce state changes using <a href="M_UltimateXR_Core_StateSync_IUxrStateSync_SyncState">SyncState(UxrStateSyncEventArgs, Boolean)</a>.
 This interface should be implemented in entities relevant in network synchronization.</td></tr></table>&nbsp;
