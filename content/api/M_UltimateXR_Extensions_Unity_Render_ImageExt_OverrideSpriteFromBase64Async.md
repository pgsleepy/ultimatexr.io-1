# ImageExt.OverrideSpriteFromBase64Async Method 
 

Loads a sprite asynchronously from a base64 encoded string and assigns it to the overrideSprite property of an Image.

**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static Task OverrideSpriteFromBase64Async(
	this Image self,
	string base64,
	CancellationToken ct = default
)
```

<a href="UltimateXR/Scripts/Extensions/Unity/Render/ImageExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Parameters
&nbsp;<dl><dt>self</dt><dd>Type: Image<br />Target Image</dd><dt>base64</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">System.String</a><br />Base64 encoded string. See <a href="M_UltimateXR_Extensions_Unity_Render_SpriteExt_ReadSpriteBase64Async">ReadSpriteBase64Async(Image, String, CancellationToken)</a></dd><dt>ct (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">System.Threading.CancellationToken</a><br />Optional cancellation token, to cancel the operation</dd></dl>

#### Return Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a><br />\[Missing <returns> documentation for "M:UltimateXR.Extensions.Unity.Render.ImageExt.OverrideSpriteFromBase64Async(UnityEngine.UI.Image,System.String,System.Threading.CancellationToken)"\]

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type Image. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Exceptions
&nbsp;<table><tr><th>Exception</th><th>Condition</th></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td><td>*base64* is null or empty</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.operationcanceledexception" target="_blank" rel="noopener noreferrer">OperationCanceledException</a></td><td>Task canceled using *ct*</td></tr><tr><td><a href="https://docs.microsoft.com/dotnet/api/system.formatexception" target="_blank" rel="noopener noreferrer">FormatException</a></td><td>The length of *base64*, ignoring white-space characters, is not zero or a multiple of 4</td></tr></table>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_Render_ImageExt">ImageExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity_Render">UltimateXR.Extensions.Unity.Render Namespace</a><br />