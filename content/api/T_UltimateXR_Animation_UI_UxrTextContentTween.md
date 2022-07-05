# UxrTextContentTween Class
 

Tweening component to animate text programatically or using the inspector. The text interpolation can be used to create a typewriter kind of effect. Programatically it also offers the possibility to interpolate parameters in a text string.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(<a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_2">UltimateXR.Core.Components.UxrComponent</a>(Canvas, <a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_UI_UxrTween">UltimateXR.Animation.UI.UxrTween</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Animation.UI.UxrTextContentTween<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[RequireComponent(typeof(Text))]
[DisallowMultipleComponent]
public class UxrTextContentTween : UxrTween
```

<a href="UltimateXR/Scripts/Animation/UI/UxrTextContentTween.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrTextContentTween type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTextContentTween__ctor">UxrTextContentTween</a></td><td /></tr></table>&nbsp;
<a href="#uxrtextcontenttween-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTextContentTween_EndText">EndText</a></td><td>
Animation end text</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTextContentTween_FormatString">FormatString</a></td><td>
Animation format string, when <a href="P_UltimateXR_Animation_UI_UxrTextContentTween_UsesFormatString">UsesFormatString</a> is true.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTextContentTween_FormatStringArgs">FormatStringArgs</a></td><td>
Animation format string parameter list, when <a href="P_UltimateXR_Animation_UI_UxrTextContentTween_UsesFormatString">UsesFormatString</a> is true.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTextContentTween_StartText">StartText</a></td><td>
Animation start text</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTextContentTween_TargetBehaviour">TargetBehaviour</a></td><td>
Gets the Behaviour the tween animates.
 (Overrides <a href="P_UltimateXR_Animation_UI_UxrTween_TargetBehaviour">UxrTween.TargetBehaviour</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTextContentTween_TargetText">TargetText</a></td><td>
Gets the Text component whose string will be interpolated.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTextContentTween_UsesFormatString">UsesFormatString</a></td><td>
Gets whether the interpolation uses format string parameters.
&nbsp;<ul><li>false: Interpolation will be a plain typewriter effect from <a href="P_UltimateXR_Animation_UI_UxrTextContentTween_StartText">StartText</a> to <a href="P_UltimateXR_Animation_UI_UxrTextContentTween_EndText">EndText</a></li><li>true: Interpolation will use <a href="P_UltimateXR_Animation_UI_UxrTextContentTween_FormatString">FormatString</a> and <a href="P_UltimateXR_Animation_UI_UxrTextContentTween_FormatStringArgs">FormatStringArgs</a>. For more information on how these are used see <a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_InterpolateText">UxrInterpolator.InterpolateText</a></li></ul></td></tr></table>&nbsp;
<a href="#uxrtextcontenttween-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrTextContentTween_Animate">Animate(Text, String, String, UxrInterpolationSettings, Action(UxrTween))</a></td><td>
Creates and starts a tweening animation for the text string of a Unity Text component.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrTextContentTween_Animate_1">Animate(Text, UxrInterpolationSettings, Action(UxrTween), String, Object[])</a></td><td>
Creates and starts a tweening animation for the text string of a Unity Text component. See <a href="M_UltimateXR_Animation_Interpolation_UxrInterpolator_InterpolateText">UxrInterpolator.InterpolateText</a> for information on how *formatString* and *formatStringArgs* work.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTextContentTween_Interpolate">Interpolate</a></td><td>
Interpolates and assigns the value corresponding to the given LERP value.
 (Overrides <a href="M_UltimateXR_Animation_UI_UxrTween_Interpolate">UxrTween.Interpolate(Single)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTextContentTween_RestoreOriginalValue">RestoreOriginalValue</a></td><td>
Restores the animated component to the state before the animation started.
 (Overrides <a href="M_UltimateXR_Animation_UI_UxrTween_RestoreOriginalValue">UxrTween.RestoreOriginalValue()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTextContentTween_StoreOriginalValue">StoreOriginalValue</a></td><td>
Stores the original value before the animation, in order to be able to restore it later using <a href="M_UltimateXR_Animation_UI_UxrTween_RestoreOriginalValue">RestoreOriginalValue()</a>.
 (Overrides <a href="M_UltimateXR_Animation_UI_UxrTween_StoreOriginalValue">UxrTween.StoreOriginalValue()</a>.)</td></tr></table>&nbsp;
<a href="#uxrtextcontenttween-class">Back to Top</a>

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
<a href="#uxrtextcontenttween-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />