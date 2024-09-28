# UxrAnimatedLightIntensity Class
 

Component that allows to animate a light's intensity.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_UxrAnimatedComponent_1">UltimateXR.Animation.UxrAnimatedComponent</a>(UxrAnimatedLightIntensity)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Animation.Lights.UxrAnimatedLightIntensity<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Lights">UltimateXR.Animation.Lights</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrAnimatedLightIntensity : UxrAnimatedComponent<UxrAnimatedLightIntensity>
```

<a href="UltimateXR/Scripts/Animation/Lights/UxrAnimatedLightIntensity.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAnimatedLightIntensity type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity__ctor">UxrAnimatedLightIntensity</a></td><td /></tr></table>&nbsp;
<a href="#uxranimatedlightintensity-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_InterpolatedValueEnd">InterpolatedValueEnd</a></td><td>
Gets or sets the end value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Interpolate</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_InterpolatedValueStart">InterpolatedValueStart</a></td><td>
Gets or sets the start value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Interpolate</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_InterpolatedValueWhenDisabled">InterpolatedValueWhenDisabled</a></td><td>
Gets or sets the value to set when the component is disabled, when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Interpolate</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_NoiseFrequency">NoiseFrequency</a></td><td>
Gets or sets the noise frequency when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_NoiseOffset">NoiseOffset</a></td><td>
Gets or sets the noise offset when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_NoiseValueEnd">NoiseValueEnd</a></td><td>
Gets or sets the end value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_NoiseValueMax">NoiseValueMax</a></td><td>
Gets or sets the noise max value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_NoiseValueMin">NoiseValueMin</a></td><td>
Gets or sets the noise min value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_NoiseValueStart">NoiseValueStart</a></td><td>
Gets or sets the start value when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Noise</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_Speed">Speed</a></td><td>
Gets or sets the increment per second when the animation mode is set to <a href="T_UltimateXR_Animation_UxrAnimationMode">Speed</a>.</td></tr></table>&nbsp;
<a href="#uxranimatedlightintensity-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_Animate">Animate</a></td><td>
Starts an animation at a constant speed</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_AnimateInterpolation">AnimateInterpolation</a></td><td>
Starts an animation using an interpolation curve</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_AnimateNoise">AnimateNoise</a></td><td>
Starts an animation using noise.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_Awake">Awake</a></td><td>
Stores the initial light intensity
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_Awake">UxrComponent.Awake()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_GetParameterValue">GetParameterValue</a></td><td>
Gets the current parameter value
 (Overrides <a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_GetParameterValue">UxrAnimatedComponent(T).GetParameterValue()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_OnFinished">OnFinished</a></td><td>
Called when the animation finished.
 (Overrides <a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_OnFinished">UxrAnimatedComponent(T).OnFinished(T)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_RestoreOriginalValue">RestoreOriginalValue</a></td><td>
Restores the animated component to the state before the animation started.
 (Overrides <a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_RestoreOriginalValue">UxrAnimatedComponent(T).RestoreOriginalValue()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Lights_UxrAnimatedLightIntensity_SetParameterValue">SetParameterValue</a></td><td>
Sets the parameter value
 (Overrides <a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_SetParameterValue">UxrAnimatedComponent(T).SetParameterValue(Vector4)</a>.)</td></tr></table>&nbsp;
<a href="#uxranimatedlightintensity-class">Back to Top</a>

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
<a href="#uxranimatedlightintensity-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_Lights">UltimateXR.Animation.Lights Namespace</a><br />