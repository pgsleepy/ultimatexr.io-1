# UxrMonoDispatcher.RunOnMainThread Method (Action[])
 

Runs code on the main thread.

**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Threading">UltimateXR.Core.Threading</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void RunOnMainThread(
	params Action[] actions
)
```


#### Parameters
&nbsp;<dl><dt>actions</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">System.Action</a>[]<br />An variable set of actions that will run on the main thread sequentially.</dd></dl>

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td><td>*actions* is a null reference (`Nothing` in Visual Basic)</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a></td><td>A delegate callback throws an exception.</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Threading_UxrMonoDispatcher">UxrMonoDispatcher Class</a><br /><a href="Overload_UltimateXR_Core_Threading_UxrMonoDispatcher_RunOnMainThread">RunOnMainThread Overload</a><br /><a href="N_UltimateXR_Core_Threading">UltimateXR.Core.Threading Namespace</a><br />