# UxrTween Class
 


Base abstract class to create tweening components to animate Unity UI elements.

Tweens are <a href="T_UltimateXR_Core_Components_UxrComponent">UxrComponent</a> components to allow access to the global list of tweens or filter by type.

They are also <a href="T_UltimateXR_Core_Components_UxrComponent_2">UxrComponent(TP, TC)</a> to allow access to the global list of tweens in a given parent canvas.



## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrTween)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_2">UltimateXR.Core.Components.UxrComponent</a>(Canvas, UxrTween)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Animation.UI.UxrTween<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_UI_UxrCanvasAlphaTween">UltimateXR.Animation.UI.UxrCanvasAlphaTween</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_UI_UxrGraphicTween">UltimateXR.Animation.UI.UxrGraphicTween</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_UI_UxrTextContentTween">UltimateXR.Animation.UI.UxrTextContentTween</a><br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract class UxrTween : UxrComponent<Canvas, UxrTween>
```

<a href="UltimateXR/Scripts/Animation/UI/UxrTween.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrTween type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween__ctor">UxrTween</a></td><td /></tr></table>&nbsp;
<a href="#uxrtween-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTween_AnimationTime">AnimationTime</a></td><td>
Gets the current animation time in seconds. The animation time is the scaled or unscaled time relative to the time the component was enabled.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTween_FinishedCallback">FinishedCallback</a></td><td>
Optional finished callback assigned by child classes.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTween_HasFinished">HasFinished</a></td><td>
Gets whether the animation finished.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTween_HasOriginalValueStored">HasOriginalValueStored</a></td><td>
Gets if the tween has gathered the original animated parameter value.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTween_InterpolationSettings">InterpolationSettings</a></td><td>
Gets or sets the interpolation settings.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="P_UltimateXR_Animation_UI_UxrTween_TargetBehaviour">TargetBehaviour</a></td><td>
Gets the Behaviour the tween animates.</td></tr></table>&nbsp;
<a href="#uxrtween-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_HasActiveTween__1">HasActiveTween(T)</a></td><td>
Checks if the given behaviour has a running tween of a specific type.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_Interpolate">Interpolate</a></td><td>
Interpolates and assigns the value corresponding to the given LERP value.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_OnEnable">OnEnable</a></td><td>
Stores the start time each time the component is enabled.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_OnEnable">UxrComponent(T).OnEnable()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_OnFinished">OnFinished</a></td><td>
Event trigger for the <a href="E_UltimateXR_Animation_UI_UxrTween_Finished">Finished</a> event.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_Restart">Restart</a></td><td>
Restarts the animation with the current parameters.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_RestoreOriginalValue">RestoreOriginalValue</a></td><td>
Restores the animated component to the state before the animation started.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_SetFinishedActions">SetFinishedActions</a></td><td>
Sets the actions to perform when the animation finished.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_Stop">Stop(Boolean)</a></td><td>
Stops the tweening animation.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_Stop__1">Stop(T)(Behaviour, Boolean)</a></td><td>
Stops the tweening animation on an object if it has a *T* component currently added.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_StopAll">StopAll(Boolean)</a></td><td>
Stops all enabled tweens.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_StopAll_1">StopAll(Behaviour, Boolean)</a></td><td>
Stops all the tweening components of a Behaviour.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_StopAll__1">StopAll(T)(Boolean)</a></td><td>
Stops all enabled tweens of a given type.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_StopAllInParentCanvas">StopAllInParentCanvas(Canvas, Boolean)</a></td><td>
Stops all enabled tweens that are in a given canvas.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_StopAllInParentCanvas__1">StopAllInParentCanvas(T)(Canvas, Boolean)</a></td><td>
Stops all enabled tweens of a given type that are in a given canvas.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UI_UxrTween_StoreOriginalValue">StoreOriginalValue</a></td><td>
Stores the original value before the animation, in order to be able to restore it later using <a href="M_UltimateXR_Animation_UI_UxrTween_RestoreOriginalValue">RestoreOriginalValue()</a>.</td></tr></table>&nbsp;
<a href="#uxrtween-class">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Animation_UI_UxrTween_Finished">Finished</a></td><td>
Called when the animation finished.</td></tr></table>&nbsp;
<a href="#uxrtween-class">Back to Top</a>

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
<a href="#uxrtween-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_UI">UltimateXR.Animation.UI Namespace</a><br />