# UxrGrabManager.SyncState Method 
 

Executes the state change described by [!:e].

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void SyncState(
	UxrStateSyncEventArgs e,
	bool propagateEvents
)
```


#### Parameters
&nbsp;<dl><dt>e</dt><dd>Type: <a href="T_UltimateXR_Core_StateSync_UxrStateSyncEventArgs">UltimateXR.Core.StateSync.UxrStateSyncEventArgs</a><br />State change information</dd><dt>propagateEvents</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether the event should propagate other internal events</dd></dl>

#### Implements
<a href="M_UltimateXR_Core_StateSync_IUxrStateSync_SyncState">IUxrStateSync.SyncState(UxrStateSyncEventArgs, Boolean)</a><br />

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />