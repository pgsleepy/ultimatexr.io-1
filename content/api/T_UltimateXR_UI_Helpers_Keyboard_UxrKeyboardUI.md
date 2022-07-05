# UxrKeyboardUI Class
 

Component that handles a keyboard in VR for user input


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.UI.Helpers.Keyboard.UxrKeyboardUI<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_UI_Helpers_Keyboard">UltimateXR.UI.Helpers.Keyboard</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrKeyboardUI : UxrComponent
```

<a href="UltimateXR/Scripts/UI/Helpers/Keyboard/UxrKeyboardUI.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrKeyboardUI type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI__ctor">UxrKeyboardUI</a></td><td /></tr></table>&nbsp;
<a href="#uxrkeyboardui-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_AllowInput">AllowInput</a></td><td>
Gets or sets whether keyboard input is allowed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_AltEnabled">AltEnabled</a></td><td>
Gets whether the Alt key is pressed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_AltGrEnabled">AltGrEnabled</a></td><td>
Gets whether the Alt GR key is pressed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_CapsLockEnabled">CapsLockEnabled</a></td><td>
Gets whether caps lock is enabled.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_ConsoleContent">ConsoleContent</a></td><td>
Gets the current console text content.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_ConsoleContentWithCursor">ConsoleContentWithCursor</a></td><td>
Gets the current console text content including the cursor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_ControlEnabled">ControlEnabled</a></td><td>
Gets whether a Control key is pressed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_CurrentCursor">CurrentCursor</a></td><td>
Gets the current console cursor (can be empty or the cursor character as a string).</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_CurrentLine">CurrentLine</a></td><td>
Gets the current console line without the cursor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_CurrentLineWithCursor">CurrentLineWithCursor</a></td><td>
Gets the current console line including the cursor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_HidePassword">HidePassword</a></td><td>
Gets or sets whether to hide password characters when <a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_IsPassword">IsPassword</a> is used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_IsPassword">IsPassword</a></td><td>
Gets or sets whether the keyboard is being used to type in a password. This can be used to hide the content behind asterisk characters.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_PreviewCaps">PreviewCaps</a></td><td>
Gets or sets whether the key labels casing changes when the shift of caps lock key is pressed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_ShiftEnabled">ShiftEnabled</a></td><td>
Gets whether a shift key is being pressed.</td></tr></table>&nbsp;
<a href="#uxrkeyboardui-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_AddConsoleContent">AddConsoleContent</a></td><td>
Adds content to the console. This method should be used instead of the <a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_ConsoleContent">ConsoleContent</a> property since <a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_ConsoleContent">ConsoleContent</a> will not process lines.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_Awake">Awake</a></td><td>
Initializes the keyboard and clears the content.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_Awake">UxrComponent.Awake()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_Clear">Clear</a></td><td>
Clears the console content.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_EnableDefaultSymbols">EnableDefaultSymbols</a></td><td>
If different symbols are present (through a ToggleSymbols keyboard key), sets the default symbols as the currently enabled. Usually the default symbols are the regular alphabet letters.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_OnCurrentLineChanged">OnCurrentLineChanged</a></td><td>
Event trigger for the <a href="E_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_CurrentLineChanged">CurrentLineChanged</a> event.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_RegisterKey">RegisterKey</a></td><td>
Called to register a new key in the keyboard.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_UnregisterKey">UnregisterKey</a></td><td>
Called to unregister a key from the keyboard.</td></tr></table>&nbsp;
<a href="#uxrkeyboardui-class">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_CurrentLineChanged">CurrentLineChanged</a></td><td>
Event we can subscribe to if we want notifications whenever the current line being typed in using the keyboard changed.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_DisallowedKeyPressed">DisallowedKeyPressed</a></td><td>
Event called on key presses/releases when the input is disabled using <a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_AllowInput">AllowInput</a>.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardUI_KeyPressed">KeyPressed</a></td><td>
Event called on key presses/releases.</td></tr></table>&nbsp;
<a href="#uxrkeyboardui-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_MonoBehaviourExt_CheckSetEnabled">CheckSetEnabled</a></td><td>
Enables/disabled the component if it isn't enabled already.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_MonoBehaviourExt">MonoBehaviourExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetOrAddComponent__1">GetOrAddComponent(T)</a></td><td>
Gets the Component of a given type. If it doesn't exist, it is added to the GameObject.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetPathUnderScene">GetPathUnderScene</a></td><td>
Gets the full path under current scene, including all parents, but scene name, for the given component.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetSceneUid">GetSceneUid</a></td><td>
Gets an unique identifier string for the given component.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetUniqueScenePath">GetUniqueScenePath</a></td><td>
Gets an unique path in the scene for the given component. It will include scene name, sibling and component indices to make it unique.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_MonoBehaviourExt_LoopCoroutine">LoopCoroutine</a></td><td>
Creates a coroutine that simplifies executing a loop during a certain amount of time.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_MonoBehaviourExt">MonoBehaviourExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_SafeGetComponentInParent__1">SafeGetComponentInParent(T)</a></td><td>
Gets the Component of a given type in the GameObject or any of its parents. It also works on prefabs, where regular GetComponentInParent(Type, Boolean) will not work: https://issuetracker.unity3d.com/issues/getcomponentinparent-is-returning-null-when-the-gameobject-is-a-prefab
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ObjectExt_ShowInInspector">ShowInInspector(Boolean)</a></td><td>Overloaded.  
Controls whether to show the current object in the inspector.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ObjectExt">ObjectExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ObjectExt_ShowInInspector_1">ShowInInspector(Boolean, Boolean)</a></td><td>Overloaded.  
Controls whether to show the current object in the inspector and whether it is editable.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ObjectExt">ObjectExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrkeyboardui-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_UI_Helpers_Keyboard">UltimateXR.UI.Helpers.Keyboard Namespace</a><br />