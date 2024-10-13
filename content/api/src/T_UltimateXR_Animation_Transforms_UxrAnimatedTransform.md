# UxrAnimatedTransform Class
 

Component that allows to animate transforms on objects or even camera properties. Both at runtime through scripting or at edit time through the inspector properties.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Animation.Transforms.UxrAnimatedTransform<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Transforms">UltimateXR.Animation.Transforms</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public sealed class UxrAnimatedTransform : UxrComponent
```

<a href="UltimateXR/Scripts/Animation/Transforms/UxrAnimatedTransform.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAnimatedTransform type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform__ctor">UxrAnimatedTransform</a></td><td /></tr></table>&nbsp;
<a href="#uxranimatedtransform-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Transforms_UxrAnimatedTransform_HasRotationFinished">HasRotationFinished</a></td><td>
Gets whether the rotation interpolation curve finished. If no rotation interpolation curve was started it will return false.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Transforms_UxrAnimatedTransform_HasScalingFinished">HasScalingFinished</a></td><td>
Gets whether the scaling interpolation curve finished. If no scaling interpolation curve was started it will return false.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_Transforms_UxrAnimatedTransform_HasTranslationFinished">HasTranslationFinished</a></td><td>
Gets whether the translation interpolation curve finished. If no translation interpolation curve was started it will return false.</td></tr></table>&nbsp;
<a href="#uxranimatedtransform-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_PositionInterpolation">PositionInterpolation</a></td><td>
Starts a translation using an interpolation curve</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_Rotate">Rotate</a></td><td>
Starts a rotation at a constant speed</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_RotationInterpolation">RotationInterpolation(GameObject, UxrTransformRotationSpace, Quaternion, Quaternion, UxrInterpolationSettings, Action)</a></td><td>
Starts a rotation using an interpolation curve</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_RotationInterpolation_1">RotationInterpolation(GameObject, UxrTransformRotationSpace, Vector3, Vector3, UxrInterpolationSettings, Action)</a></td><td>
Starts a rotation using an interpolation curve</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_Scale">Scale</a></td><td>
Starts scaling at a constant speed</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_ScalingInterpolation">ScalingInterpolation</a></td><td>
Starts scaling using an interpolation curve</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_StopAll">StopAll(Boolean)</a></td><td>
Stops the position/rotation/scaling animations on an object if it has an UxrAnimatedTransform component currently attached.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_StopAll_1">StopAll(GameObject, Boolean)</a></td><td>
Stops the position/rotation/scaling animations on an object if it has an UxrAnimatedTransform component currently attached.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_StopRotation">StopRotation(Boolean)</a></td><td>
Stops the rotation animation on an object if it has an UxrAnimatedTransform component currently attached.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_StopRotation_1">StopRotation(GameObject, Boolean)</a></td><td>
Stops the rotation animation on an object if it has an UxrAnimatedTransform component currently attached.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_StopScaling">StopScaling(Boolean)</a></td><td>
Stops the scaling animation on an object if it has an UxrAnimatedTransform component currently attached.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_StopScaling_1">StopScaling(GameObject, Boolean)</a></td><td>
Stops the scaling animation on an object if it has an UxrAnimatedTransform component currently attached.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_StopTranslation">StopTranslation(Boolean)</a></td><td>
Stops the translation animation on an object if it has an UxrAnimatedTransform component currently attached.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_StopTranslation_1">StopTranslation(GameObject, Boolean)</a></td><td>
Stops the translation animation on an object if it has an UxrAnimatedTransform component currently attached.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Animation_Transforms_UxrAnimatedTransform_Translate">Translate</a></td><td>
Starts a translation at a constant speed</td></tr></table>&nbsp;
<a href="#uxranimatedtransform-class">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Animation_Transforms_UxrAnimatedTransform_RotationFinished">RotationFinished</a></td><td>
Event called when the rotation animation finished. This only applies to rotation animations that end.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Animation_Transforms_UxrAnimatedTransform_ScalingFinished">ScalingFinished</a></td><td>
Event called when the scaling animation finished. This only applies to scaling animations that end.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Animation_Transforms_UxrAnimatedTransform_TranslationFinished">TranslationFinished</a></td><td>
Event called when the translation animation finished. This only applies to translation animations that end.</td></tr></table>&nbsp;
<a href="#uxranimatedtransform-class">Back to Top</a>

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
<a href="#uxranimatedtransform-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_Transforms">UltimateXR.Animation.Transforms Namespace</a><br />