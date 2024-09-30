# UxrKeyboardKeyEventArgs Class
 

Key press/release event parameters.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;<a href="https://docs.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">System.EventArgs</a><br />&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.UI.Helpers.Keyboard.UxrKeyboardKeyEventArgs<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_UI_Helpers_Keyboard">UltimateXR.UI.Helpers.Keyboard</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrKeyboardKeyEventArgs : EventArgs
```

<a href="UltimateXR/Scripts/UI/Helpers/Keyboard/UxrKeyboardKeyEventArgs.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrKeyboardKeyEventArgs type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyEventArgs__ctor">UxrKeyboardKeyEventArgs</a></td><td>
Constructor.</td></tr></table>&nbsp;
<a href="#uxrkeyboardkeyeventargs-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyEventArgs_IsPress">IsPress</a></td><td>
Gets whether it was a press (true) or release (false).</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyEventArgs_Key">Key</a></td><td>
Gets the key that was pressed/released.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyEventArgs_Line">Line</a></td><td>
Gets the current line content. If it was a keypress event and the the keypress was the ENTER key then the line before pressing ENTER is passed.</td></tr></table>&nbsp;
<a href="#uxrkeyboardkeyeventargs-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrkeyboardkeyeventargs-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_UI_Helpers_Keyboard">UltimateXR.UI.Helpers.Keyboard Namespace</a><br />