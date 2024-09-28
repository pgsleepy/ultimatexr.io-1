# MonoBehaviourExt.LoopCoroutine Method 
 

Creates a coroutine that simplifies executing a loop during a certain amount of time.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static IEnumerator LoopCoroutine(
	this MonoBehaviour monoBehaviour,
	float durationSeconds,
	Action<float> loopAction,
	UxrEasing easing = UxrEasing.Linear,
	bool forceLastT1 = false
)
```

<a href="UltimateXR/Scripts/Extensions/Unity/MonoBehaviourExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>monoBehaviour</dt><dd>Type: MonoBehaviour<br />Caller</dd><dt>durationSeconds</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Time in seconds of the interpolation</dd><dt>loopAction</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">System.Action</a>(<a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>)<br />The action to perform on each loop step. The action receives the interpolation value t [0.0, 1.0] as parameter.</dd><dt>easing (Optional)</dt><dd>Type: <a href="T_UltimateXR_Animation_Interpolation_UxrEasing">UltimateXR.Animation.Interpolation.UxrEasing</a><br />Easing to use in the interpolation (linear by default)</dd><dt>forceLastT1 (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Forces a last loop step with t = 1.0f exactly.</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.collections.ienumerator" target="_blank" rel="noopener noreferrer">IEnumerator</a><br />Coroutine enumerator

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type MonoBehaviour. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_MonoBehaviourExt">MonoBehaviourExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />