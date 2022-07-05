# IUxrStateSync.SyncState Method 
 

Executes the state change described by [!:e].

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_StateSync">UltimateXR.Core.StateSync</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
void SyncState(
	UxrStateSyncEventArgs e,
	bool propagateEvents
)
```

<a href="UltimateXR/Scripts/Core/StateSync/IUxrStateSync.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>e</dt><dd>Type: <a href="T_UltimateXR_Core_StateSync_UxrStateSyncEventArgs">UltimateXR.Core.StateSync.UxrStateSyncEventArgs</a><br />State change information</dd><dt>propagateEvents</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether the event should propagate other internal events</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Core_StateSync_IUxrStateSync">IUxrStateSync Interface</a><br /><a href="N_UltimateXR_Core_StateSync">UltimateXR.Core.StateSync Namespace</a><br />