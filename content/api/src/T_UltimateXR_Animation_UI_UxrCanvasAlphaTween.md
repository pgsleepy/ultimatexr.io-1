# UxrCanvasAlphaTween Class
 

Tweening component to animate the alpha of a CanvasGroup component programatically or using the inspector.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(<a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_2">UltimateXR.Core.Components.UxrComponent</a>(Canvas, <a href="T_UltimateXR_Animation_UI_UxrTween">UxrTween</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_UI_UxrTween">UltimateXR.Animation.UI.UxrTween</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Animation.UI.UxrCanvasAlphaTween<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[RequireComponent(typeof(CanvasGroup))]
public class UxrCanvasAlphaTween : UxrTween
```

<a href="UltimateXR/Scripts/Animation/UI/UxrCanvasAlphaTween.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrCanvasAlphaTween type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween__ctor">UxrCanvasAlphaTween</a></td><td /></tr></table>&nbsp;
<a href="#uxrcanvasalphatween-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrCanvasAlphaTween_EndAlpha">EndAlpha</a></td><td>
Animation end alpha</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrCanvasAlphaTween_StartAlpha">StartAlpha</a></td><td>
Animation start alpha</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="P_UltimateXR_Animation_UI_UxrCanvasAlphaTween_TargetBehaviour">TargetBehaviour</a></td><td>
Gets the Behaviour the tween animates.
 (Overrides <a href="P_UltimateXR_Animation_UI_UxrTween_TargetBehaviour">UxrTween.TargetBehaviour</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrCanvasAlphaTween_TargetCanvasGroup">TargetCanvasGroup</a></td><td /></tr></table>&nbsp;
<a href="#uxrcanvasalphatween-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_Animate">Animate</a></td><td>
Creates and starts a tweening animation for the alpha value of a CanvasGroup component.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_AnimateAsync">AnimateAsync</a></td><td>
Same as <a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_Animate">Animate(CanvasGroup, Single, Single, UxrInterpolationSettings, Action(UxrTween))</a> but for use with async/await.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_FadeIn">FadeIn</a></td><td>
Creates and starts a fade-in tweening animation for the alpha value of a CanvasGroup component. The alpha value will go from 0.0 to 1.0.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_FadeInAsync">FadeInAsync</a></td><td>
Same as <a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_FadeIn">FadeIn(CanvasGroup, Single, Single, Action(UxrTween))</a> but for use with async/await.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_FadeOut">FadeOut</a></td><td>
Creates and starts a fade-out tweening animation for the alpha value of a CanvasGroup component. The alpha value will go from 1.0 to 0.0.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_FadeOutAsync">FadeOutAsync</a></td><td>
Same as <a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_FadeOut">FadeOut(CanvasGroup, Single, Single, Action(UxrTween))</a> but for use with async/await.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_Interpolate">Interpolate</a></td><td>
Interpolates and assigns the value corresponding to the given LERP value.
 (Overrides <a href="M_UltimateXR_Animation_UI_UxrTween_Interpolate">UxrTween.Interpolate(Single)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_RestoreOriginalValue">RestoreOriginalValue</a></td><td>
Restores the animated component to the state before the animation started.
 (Overrides <a href="M_UltimateXR_Animation_UI_UxrTween_RestoreOriginalValue">UxrTween.RestoreOriginalValue()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrCanvasAlphaTween_StoreOriginalValue">StoreOriginalValue</a></td><td>
Stores the original value before the animation, in order to be able to restore it later using <a href="M_UltimateXR_Animation_UI_UxrTween_RestoreOriginalValue">RestoreOriginalValue()</a>.
 (Overrides <a href="M_UltimateXR_Animation_UI_UxrTween_StoreOriginalValue">UxrTween.StoreOriginalValue()</a>.)</td></tr></table>&nbsp;
<a href="#uxrcanvasalphatween-class">Back to Top</a>

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
<a href="#uxrcanvasalphatween-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />