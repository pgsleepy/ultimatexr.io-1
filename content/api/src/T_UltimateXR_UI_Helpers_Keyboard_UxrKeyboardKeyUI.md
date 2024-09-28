# UxrKeyboardKeyUI Class
 

UI component for a keyboard key.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.UI.Helpers.Keyboard.UxrKeyboardKeyUI<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_UI_Helpers_Keyboard">UltimateXR.UI.Helpers.Keyboard</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[ExecuteInEditMode]
public class UxrKeyboardKeyUI : UxrComponent
```

<a href="UltimateXR/Scripts/UI/Helpers/Keyboard/UxrKeyboardKeyUI.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrKeyboardKeyUI type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI__ctor">UxrKeyboardKeyUI</a></td><td /></tr></table>&nbsp;
<a href="#uxrkeyboardkeyui-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_ControlInput">ControlInput</a></td><td>
Gets the <a href="T_UltimateXR_UI_UnityInputModule_Controls_UxrControlInput">UxrControlInput</a> component for the key.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_CurrentToggleSymbolsPage">CurrentToggleSymbolsPage</a></td><td>
Gets the current symbols group selected, for a key that has a <a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_KeyType">KeyType</a> role of <a href="T_UltimateXR_UI_Helpers_Keyboard_UxrKeyType">ToggleSymbols</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_Enabled">Enabled</a></td><td>
Gets or sets whether the key can be interacted with.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_ForceLabel">ForceLabel</a></td><td>
Gets or sets the string that, if non-empty, will override the label content on the key.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_HasMultipleLayoutValueBottomRight">HasMultipleLayoutValueBottomRight</a></td><td>
Gets whether the key supports combination with shift and alt gr, and has a character specified for the bottom right.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_IsLetterKey">IsLetterKey</a></td><td>
Gets whether the key is a letter.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_Keyboard">Keyboard</a></td><td>
Gets the UxrKeyboardKeyUI component the key belongs to.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_KeyLayoutType">KeyLayoutType</a></td><td>
Gets the layout use for the labels on the key.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_KeyType">KeyType</a></td><td>
Gets the key type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_MultipleLayoutValueBottomLeft">MultipleLayoutValueBottomLeft</a></td><td>
Gets the character used in the bottom left corner when the key has multiple labels, because it supports combination with shift and alt gr.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_MultipleLayoutValueBottomRight">MultipleLayoutValueBottomRight</a></td><td>
Gets the character used in the bottom right corner when the key has multiple labels, because it supports combination with shift and alt gr.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_MultipleLayoutValueTopLeft">MultipleLayoutValueTopLeft</a></td><td>
Gets the character used in the top left corner when the key has multiple labels, because it supports combination with shift and alt gr.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_NextToggleSymbolsPage">NextToggleSymbolsPage</a></td><td>
Gets the next symbols group, for a key that has a <a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_KeyType">KeyType</a> role of <a href="T_UltimateXR_UI_Helpers_Keyboard_UxrKeyType">ToggleSymbols</a>, that would be selected if pressed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_SingleLayoutValue">SingleLayoutValue</a></td><td>
Gets the character used when the key has a single label.</td></tr></table>&nbsp;
<a href="#uxrkeyboardkeyui-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_Awake">Awake</a></td><td>
Initializes the component.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_Awake">UxrComponent.Awake()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_GetSingleLayoutValueNoForceLabel">GetSingleLayoutValueNoForceLabel</a></td><td>
Gets the character that would be printed if the key was pressed.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_OnDestroy">OnDestroy</a></td><td>
Called when the component is destroyed.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_OnDestroy">UxrComponent.OnDestroy()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_SetDefaultSymbols">SetDefaultSymbols</a></td><td>
Sets the default symbols as the ones currently active.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_SetupToggleSymbolsPages">SetupToggleSymbolsPages</a></td><td>
Sets up the toggle symbol entries.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_ToggleSymbols">ToggleSymbols</a></td><td>
Toggles to the next symbols.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_Helpers_Keyboard_UxrKeyboardKeyUI_UpdateLetterKeyLabel">UpdateLetterKeyLabel</a></td><td>
Updates the label on the key.</td></tr></table>&nbsp;
<a href="#uxrkeyboardkeyui-class">Back to Top</a>

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
<a href="#uxrkeyboardkeyui-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_UI_Helpers_Keyboard">UltimateXR.UI.Helpers.Keyboard Namespace</a><br />