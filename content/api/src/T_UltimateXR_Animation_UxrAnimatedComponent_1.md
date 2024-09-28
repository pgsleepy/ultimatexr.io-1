# UxrAnimatedComponent(*T*) Class
 

Base class to create components that animate properties. Animation components should support two main ways of usage:
&nbsp;<ul><li>Adding and setting up component using Unity's editor.</li><li>Adding and setting up component through scripting at runtime.</li></ul>

## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Animation.UxrAnimatedComponent(T)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity">UltimateXR.Animation.Lights.UxrAnimatedLightIntensity</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_Materials_UxrAnimatedMaterial">UltimateXR.Animation.Materials.UxrAnimatedMaterial</a><br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation">UltimateXR.Animation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract class UxrAnimatedComponent<T> : UxrComponent
where T : UxrAnimatedComponent<T>

```

<a href="UltimateXR/Scripts/Animation/UxrAnimatedComponent.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Type of animated component</dd></dl>&nbsp;
The UxrAnimatedComponent(T) type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1__ctor">UxrAnimatedComponent(T)</a></td><td /></tr></table>&nbsp;
<a href="#uxranimatedcomponent(*t*)-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_AnimationMode">AnimationMode</a></td><td>
Gets the animation mode.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_AnimationTime">AnimationTime</a></td><td>
Gets the current animation time in seconds. The animation time is the scaled or unscaled time relative to the time the component was enabled.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_HasFinished">HasFinished</a></td><td>
Gets whether the animation finished.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_InterpolatedValueEnd">InterpolatedValueEnd</a></td><td>
Gets or sets the end value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Interpolate</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_InterpolatedValueStart">InterpolatedValueStart</a></td><td>
Gets or sets the start value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Interpolate</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_InterpolatedValueWhenDisabled">InterpolatedValueWhenDisabled</a></td><td>
Gets or sets the value to set when the component is disabled, when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Interpolate</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_InterpolationSettings">InterpolationSettings</a></td><td>
Gets or sets the interpolation settings when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Interpolate</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_NoiseDurationSeconds">NoiseDurationSeconds</a></td><td>
Gets or sets the animation duration in seconds when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_NoiseFrequency">NoiseFrequency</a></td><td>
Gets or sets the noise frequency when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_NoiseOffset">NoiseOffset</a></td><td>
Gets or sets the noise offset when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_NoiseTimeStart">NoiseTimeStart</a></td><td>
Gets or sets the start time when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_NoiseValueEnd">NoiseValueEnd</a></td><td>
Gets or sets the end value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_NoiseValueMax">NoiseValueMax</a></td><td>
Gets or sets the noise max value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_NoiseValueMin">NoiseValueMin</a></td><td>
Gets or sets the noise min value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_NoiseValueStart">NoiseValueStart</a></td><td>
Gets or sets the start value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_Speed">Speed</a></td><td>
Gets or sets the increment per second when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Speed</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_SpeedDurationSeconds">SpeedDurationSeconds</a></td><td>
Gets or sets the animation duration in seconds when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Speed</a>. Durations of 0 or less than 0 will be considered as infinite duration.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_UxrAnimatedComponent_1_UseUnscaledTime">UseUnscaledTime</a></td><td>
Gets or sets whether to use the unscaled time (unscaledTime instead of time .</td></tr></table>&nbsp;
<a href="#uxranimatedcomponent(*t*)-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_GetParameterValue">GetParameterValue</a></td><td>
Gets the current parameter value</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_OnDisable">OnDisable</a></td><td>
Called each time the object is disabled.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_OnDisable">UxrComponent.OnDisable()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_OnEnable">OnEnable</a></td><td>
Called each time the object is enabled. Reset timer and set the curve state to unfinished.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_OnEnable">UxrComponent.OnEnable()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_OnFinished">OnFinished</a></td><td>
Called when the animation finished.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_RestoreOriginalValue">RestoreOriginalValue</a></td><td>
Restores the animated component to the state before the animation started.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_SetParameterValue">SetParameterValue</a></td><td>
Sets the parameter value</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_StartTimer">StartTimer</a></td><td>
(Re)Starts the animation timer.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_Stop">Stop(Boolean)</a></td><td>
Stops the animation on an object if it has an UxrAnimatedComponent(T) component currently attached.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_Stop_1">Stop(GameObject, Boolean)</a></td><td>
Stops the animation on an object if it has an UxrAnimatedComponent(T) component currently attached.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_ToVector4">ToVector4</a></td><td>
Converts a float value to a Vector4. Internally Vector4 values are used for everything but some animations only require to store a float value. The x component will be used to store the value.</td></tr></table>&nbsp;
<a href="#uxranimatedcomponent(*t*)-class">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Animation_UxrAnimatedComponent_1_Finished">Finished</a></td><td>
Called when the animation finished.</td></tr></table>&nbsp;
<a href="#uxranimatedcomponent(*t*)-class">Back to Top</a>

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
<a href="#uxranimatedcomponent(*t*)-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation">UltimateXR.Animation Namespace</a><br />