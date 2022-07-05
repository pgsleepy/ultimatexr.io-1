# UxrGrabbableObjectComponent(*T*) Class
 

Generic base class for components belonging to an object that also has a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> or in any of its parents. It allows to leverage some of the work related to accessing the <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> component and processing the events without the need to subscribe or unsubscribe to them. Instead, events can be processed by overriding the different event triggers (OnXXX methods). 
The component has also all the benefits derived from <a href="T_UltimateXR_Core_Components_UxrComponent">UxrComponent</a>.



## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(*T*)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Core.Components.Composite.UxrGrabbableObjectComponent(T)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#inheritance-hierarchy">More...</a>
**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Components_Composite">UltimateXR.Core.Components.Composite</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract class UxrGrabbableObjectComponent<T> : UxrComponent<T>
where T : UxrGrabbableObjectComponent<T>

```

<a href="UltimateXR/Scripts/Core/Components/Composite/UxrGrabbableObjectComponent.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Component type</dd></dl>&nbsp;
The UxrGrabbableObjectComponent(T) type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1__ctor">UxrGrabbableObjectComponent(T)</a></td><td /></tr></table>&nbsp;
<a href="#uxrgrabbableobjectcomponent(*t*)-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_GrabbableObject">GrabbableObject</a></td><td>
Gets the grabbable object component.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_IsBeingGrabbed">IsBeingGrabbed</a></td><td>
Gets whether the grabbable object is currently being grabbed.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="P_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_IsGrabbableObjectRequired">IsGrabbableObjectRequired</a></td><td>
Gets whether the grabbable object component is required or it's not. By default it is required but it can be overriden in child classes so that it is optional.</td></tr></table>&nbsp;
<a href="#uxrgrabbableobjectcomponent(*t*)-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_Awake">Awake</a></td><td>
Caches the grabbable object component.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_Awake">UxrComponent(T).Awake()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnDisable">OnDisable</a></td><td>
Unsubscribes from events.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_OnDisable">UxrComponent(T).OnDisable()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnEnable">OnEnable</a></td><td>
Subscribes to events.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_OnEnable">UxrComponent(T).OnEnable()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectConstraintsApplied">OnObjectConstraintsApplied</a></td><td>
Overridable event trigger method for the <a href="E_UltimateXR_Manipulation_UxrGrabbableObject_ConstraintsApplied">ConstraintsApplied</a> event that can be used to handle it without requiring to subscribe/unsubscribe.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectConstraintsApplying">OnObjectConstraintsApplying</a></td><td>
Overridable event trigger method for the <a href="E_UltimateXR_Manipulation_UxrGrabbableObject_ConstraintsApplying">ConstraintsApplying</a> event that can be used to handle it without requiring to subscribe/unsubscribe.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectGrabbed">OnObjectGrabbed</a></td><td>
Overridable event trigger method for the <a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Grabbed">Grabbed</a> event that can be used to handle it without requiring to subscribe/unsubscribe.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectGrabbing">OnObjectGrabbing</a></td><td>
Overridable event trigger method for the <a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Grabbing">Grabbing</a> event that can be used to handle it without requiring to subscribe/unsubscribe.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectPlaced">OnObjectPlaced</a></td><td>
Overridable event trigger method for the <a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Placed">Placed</a> event that can be used to handle it without requiring to subscribe/unsubscribe.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectPlacing">OnObjectPlacing</a></td><td>
Overridable event trigger method for the <a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Placing">Placing</a> event that can be used to handle it without requiring to subscribe/unsubscribe.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectReleased">OnObjectReleased</a></td><td>
Overridable event trigger method for the <a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Released">Released</a> event that can be used to handle it without requiring to subscribe/unsubscribe.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectReleasing">OnObjectReleasing</a></td><td>
Overridable event trigger method for the <a href="E_UltimateXR_Manipulation_UxrGrabbableObject_Releasing">Releasing</a> event that can be used to handle it without requiring to subscribe/unsubscribe.</td></tr></table>&nbsp;
<a href="#uxrgrabbableobjectcomponent(*t*)-class">Back to Top</a>

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
<a href="#uxrgrabbableobjectcomponent(*t*)-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Core_Components_Composite">UltimateXR.Core.Components.Composite Namespace</a><br />

## Inheritance Hierarchy<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(*T*)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Core.Components.Composite.UxrGrabbableObjectComponent(T)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Devices_Visualization_UxrMapControllerToHand">UltimateXR.Devices.Visualization.UxrMapControllerToHand</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Haptics_Helpers_UxrHapticOnImpact">UltimateXR.Haptics.Helpers.UxrHapticOnImpact</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Haptics_Helpers_UxrManipulationHapticFeedback">UltimateXR.Haptics.Helpers.UxrManipulationHapticFeedback</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Manipulation_Helpers_UxrDependentGrabbable">UltimateXR.Manipulation.Helpers.UxrDependentGrabbable</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Manipulation_Helpers_UxrReturnGrabbableObject">UltimateXR.Manipulation.Helpers.UxrReturnGrabbableObject</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect">UltimateXR.Mechanics.Weapons.UxrProjectileDeflect</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Mechanics_Weapons_UxrWeapon">UltimateXR.Mechanics.Weapons.UxrWeapon</a><br />