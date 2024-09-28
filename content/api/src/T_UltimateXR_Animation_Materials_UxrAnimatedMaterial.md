# UxrAnimatedMaterial Class
 

Component that allows to animate material properties.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_UxrAnimatedComponent_1">UltimateXR.Animation.UxrAnimatedComponent</a>(UxrAnimatedMaterial)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Animation.Materials.UxrAnimatedMaterial<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrAnimatedMaterial : UxrAnimatedComponent<UxrAnimatedMaterial>
```

<a href="UltimateXR/Scripts/Animation/Materials/UxrAnimatedMaterial.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAnimatedMaterial type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial__ctor">UxrAnimatedMaterial</a></td><td /></tr></table>&nbsp;
<a href="#uxranimatedmaterial-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Materials_UxrAnimatedMaterial_AnimateSelf">AnimateSelf</a></td><td>
Gets or sets whether the animation will be applied to the GameObject where the component is, or an external one.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Materials_UxrAnimatedMaterial_MaterialMode">MaterialMode</a></td><td>
Gets or sets the material mode, whether to use the instanced material or the shared material.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Materials_UxrAnimatedMaterial_MaterialSlot">MaterialSlot</a></td><td>
Gets or sets the material slot to apply the material animation to.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Materials_UxrAnimatedMaterial_ParameterName">ParameterName</a></td><td>
Gets or sets the material's parameter name.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Materials_UxrAnimatedMaterial_ParameterType">ParameterType</a></td><td>
Gets or sets the material's parameter type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Materials_UxrAnimatedMaterial_RestoreWhenFinished">RestoreWhenFinished</a></td><td>
Gets or sets if the original material value should be restored when finished.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Materials_UxrAnimatedMaterial_TargetGameObject">TargetGameObject</a></td><td>
Gets or sets the target GameObject when <a href="P_UltimateXR_Animation_Materials_UxrAnimatedMaterial_AnimateSelf">AnimateSelf</a> is true.</td></tr></table>&nbsp;
<a href="#uxranimatedmaterial-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_Animate">Animate</a></td><td>
Starts an animation at a constant speed</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_AnimateBlinkColor">AnimateBlinkColor</a></td><td>
Starts animating a GameObject's material making one if its color parameters blink.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_AnimateFloatBlink">AnimateFloatBlink</a></td><td>
Starts animating a GameObject's material making one if its float parameters blink.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_AnimateInterpolation">AnimateInterpolation</a></td><td>
Starts a material parameter animation using an interpolation curve</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_AnimateNoise">AnimateNoise</a></td><td>
Starts a material parameter animation using noise</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_Awake">Awake</a></td><td>
Initializes internal variables
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_Awake">UxrComponent.Awake()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_GetParameterValue">GetParameterValue</a></td><td>
Gets the parameter value from the material
 (Overrides <a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_GetParameterValue">UxrAnimatedComponent(T).GetParameterValue()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_OnFinished">OnFinished</a></td><td>
Called when the animation finished.
 (Overrides <a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_OnFinished">UxrAnimatedComponent(T).OnFinished(T)</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_RestoreOriginalSharedMaterial">RestoreOriginalSharedMaterial</a></td><td>
Restores the original (shared) material. This may have some performance advantages.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_RestoreOriginalValue">RestoreOriginalValue</a></td><td>
Restores the original value before the animation started.
 (Overrides <a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_RestoreOriginalValue">UxrAnimatedComponent(T).RestoreOriginalValue()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_Materials_UxrAnimatedMaterial_SetParameterValue">SetParameterValue</a></td><td>
Sets the material parameter value
 (Overrides <a href="M_UltimateXR_Animation_UxrAnimatedComponent_1_SetParameterValue">UxrAnimatedComponent(T).SetParameterValue(Vector4)</a>.)</td></tr></table>&nbsp;
<a href="#uxranimatedmaterial-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Animation_Materials_UxrAnimatedMaterial_DefaultBlinkFrequency">DefaultBlinkFrequency</a></td><td>
The default blink frequency</td></tr></table>&nbsp;
<a href="#uxranimatedmaterial-class">Back to Top</a>

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
<a href="#uxranimatedmaterial-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_Materials">UltimateXR.Animation.Materials Namespace</a><br />