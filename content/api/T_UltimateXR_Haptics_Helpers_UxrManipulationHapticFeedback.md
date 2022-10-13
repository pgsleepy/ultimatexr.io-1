# UxrManipulationHapticFeedback Class
 

Component that, added to a grabbable object (<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a>), sends haptic feedback to any controller that manipulates it.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrManipulationHapticFeedback)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1">UltimateXR.Core.Components.Composite.UxrGrabbableObjectComponent</a>(UxrManipulationHapticFeedback)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Haptics.Helpers.UxrManipulationHapticFeedback<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[RequireComponent(typeof(UxrGrabbableObject))]
public class UxrManipulationHapticFeedback : UxrGrabbableObjectComponent<UxrManipulationHapticFeedback>
```

<a href="UltimateXR/Scripts/Haptics/Helpers/UxrManipulationHapticFeedback.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrManipulationHapticFeedback type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback__ctor">UxrManipulationHapticFeedback</a></td><td /></tr></table>&nbsp;
<a href="#uxrmanipulationhapticfeedback-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_ContinuousManipulationHaptics">ContinuousManipulationHaptics</a></td><td>
Gets or sets whether the component will send haptic feedback continuously while the object is being grabbed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_ExternalRigidbody">ExternalRigidbody</a></td><td>
In continuous manipulation mode, allows to get the linear/rotational speed from an external rigidbody instead of the object being grabbed. This is useful to emulate the tension propagated by a connected physics-driven object. For example, in a flail weapon, the grabbable object is the handle which also has the UxrManipulationHapticFeedback component, but the physics-driven head is the object that should be monitored for haptics to generate better results.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_HapticClipOnGrab">HapticClipOnGrab</a></td><td>
Gets or sets the haptic clip played when the object is grabbed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_HapticClipOnPlace">HapticClipOnPlace</a></td><td>
Gets or sets the haptic clip played when the object is placed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_HapticClipOnRelease">HapticClipOnRelease</a></td><td>
Gets or sets the haptic clip played when the object is released.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_HapticMixMode">HapticMixMode</a></td><td>
Gets or sets the haptic feedback mix mode.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxAmplitude">MaxAmplitude</a></td><td>
Gets or sets continuous manipulation haptic feedback's maximum amplitude, which is the haptic amplitude sent when the object is moving/rotating at or over <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxSpeed">MaxSpeed</a>/<a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxAngularSpeed">MaxAngularSpeed</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxAngularSpeed">MaxAngularSpeed</a></td><td>
Gets the maximum manipulation angular speed. This is the same as <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxSpeed">MaxSpeed</a> but when rotating an object.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxFrequency">MaxFrequency</a></td><td>
Gets or sets continuous manipulation haptic feedback's maximum frequency, which is the haptic frequency sent when the object is moving/rotating at or over <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxSpeed">MaxSpeed</a>/<a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxAngularSpeed">MaxAngularSpeed</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxSpeed">MaxSpeed</a></td><td>
Gets or sets the maximum manipulation speed, which is the object travel speed while being manipulated above which the haptics will be sent with <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxFrequency">MaxFrequency</a> and <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxAmplitude">MaxAmplitude</a>. Speeds down to <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinSpeed">MinSpeed</a> will send haptic feedback with frequency and amplitude values linearly decreasing down to <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinFrequency">MinFrequency</a> and <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinAmplitude">MinAmplitude</a>. This allows to send haptic feedback with an intensity/frequency depending on how fast the object is being moved.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinAmplitude">MinAmplitude</a></td><td>
Gets or sets continuous manipulation haptic feedback's minimum amplitude, which is the haptic amplitude sent when the object is moving/rotating at or below <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinSpeed">MinSpeed</a>/<a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinAngularSpeed">MinAngularSpeed</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinAngularSpeed">MinAngularSpeed</a></td><td>
Gets the minimum manipulation angular speed. This is the same as <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinSpeed">MinSpeed</a> but when rotating an object.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinFrequency">MinFrequency</a></td><td>
Gets or sets continuous manipulation haptic feedback's minimum frequency, which is the haptic frequency sent when the object is moving/rotating at or below <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinSpeed">MinSpeed</a>/<a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinAngularSpeed">MinAngularSpeed</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinSpeed">MinSpeed</a></td><td>
Gets or sets the minimum manipulation speed, which is the object travel speed while being manipulated below which the haptics will be sent with <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinFrequency">MinFrequency</a> and <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MinAmplitude">MinAmplitude</a>. Speeds up to <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxSpeed">MaxSpeed</a> will send haptic feedback with frequency and amplitude values linearly increasing up to <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxFrequency">MaxFrequency</a> and <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_MaxAmplitude">MaxAmplitude</a>. This allows to send haptic feedback with an intensity/frequency depending on how fast the object is being moved.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_UseExternalRigidbody">UseExternalRigidbody</a></td><td>
See <a href="P_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_ExternalRigidbody">ExternalRigidbody</a>.</td></tr></table>&nbsp;
<a href="#uxrmanipulationhapticfeedback-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_OnDisable">OnDisable</a></td><td>
Stops the haptic coroutines.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnDisable">UxrGrabbableObjectComponent(T).OnDisable()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_OnObjectConstraintsApplied">OnObjectConstraintsApplied</a></td><td>
Called after all object manipulation has been processed and potential constraints have been applied. It is used to update the speed information.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectConstraintsApplied">UxrGrabbableObjectComponent(T).OnObjectConstraintsApplied(UxrApplyConstraintsEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_OnObjectGrabbed">OnObjectGrabbed</a></td><td>
Called when the object was grabbed. Sends haptic feedback if it's required.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectGrabbed">UxrGrabbableObjectComponent(T).OnObjectGrabbed(UxrManipulationEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_OnObjectPlaced">OnObjectPlaced</a></td><td>
Called when the object was placed. Sends haptic feedback if it's required.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectPlaced">UxrGrabbableObjectComponent(T).OnObjectPlaced(UxrManipulationEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback_OnObjectReleased">OnObjectReleased</a></td><td>
Called when the object was released. Sends haptic feedback if it's required.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectReleased">UxrGrabbableObjectComponent(T).OnObjectReleased(UxrManipulationEventArgs)</a>.)</td></tr></table>&nbsp;
<a href="#uxrmanipulationhapticfeedback-class">Back to Top</a>

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
<a href="#uxrmanipulationhapticfeedback-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers Namespace</a><br />