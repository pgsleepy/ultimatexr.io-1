# UxrProjectileDeflect Class
 

Component that, added to a GameObject with a collider, will allow to deflect shots coming from <a href="T_UltimateXR_Mechanics_Weapons_UxrProjectileSource">UxrProjectileSource</a> components.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrProjectileDeflect)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1">UltimateXR.Core.Components.Composite.UxrGrabbableObjectComponent</a>(UxrProjectileDeflect)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Mechanics.Weapons.UxrProjectileDeflect<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrProjectileDeflect : UxrGrabbableObjectComponent<UxrProjectileDeflect>
```

<a href="UltimateXR/Scripts/Mechanics/Weapons/UxrProjectileDeflect.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrProjectileDeflect type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect__ctor">UxrProjectileDeflect</a></td><td /></tr></table>&nbsp;
<a href="#uxrprojectiledeflect-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_AudioDeflect">AudioDeflect</a></td><td>
Gets the sound to play when a projectile was deflected.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_CollideLayersAddOnReflect">CollideLayersAddOnReflect</a></td><td>
Optional layer mask to add to the collider after a projectile was deflected.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_DecalFadeoutDuration">DecalFadeoutDuration</a></td><td>
Gets the decal fadeout duration in seconds.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_DecalLife">DecalLife</a></td><td>
Gets the decal life in seconds after which it will fade out and be destroyed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_DecalOnReflect">DecalOnReflect</a></td><td>
Gets the decal to instantiate when a projectile was deflected.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_IsGrabbableObjectRequired">IsGrabbableObjectRequired</a></td><td>
The grabbable object is not required. When it is present it will be used to assign the <a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_Owner">Owner</a> so that the damage will be attributed to the actor instead of the original source.
 (Overrides <a href="P_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_IsGrabbableObjectRequired">UxrGrabbableObjectComponent(T).IsGrabbableObjectRequired</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_Owner">Owner</a></td><td>
Gets the owner in case the deflection object is part of an avatar or can be grabbed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_TwoSidedDecal">TwoSidedDecal</a></td><td>
Gets whether the decal requires to generate another copy on the other side.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_TwoSidedDecalThickness">TwoSidedDecalThickness</a></td><td>
Gets the object thickness in order to know how far the other side is to generate the copy on the backside of the impact.</td></tr></table>&nbsp;
<a href="#uxrprojectiledeflect-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_OnObjectGrabbed">OnObjectGrabbed</a></td><td>
Called when the object was grabbed. Will change the <a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_Owner">Owner</a>.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectGrabbed">UxrGrabbableObjectComponent(T).OnObjectGrabbed(UxrManipulationEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_OnObjectPlaced">OnObjectPlaced</a></td><td>
Called when the object was released. Will reset the <a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_Owner">Owner</a>.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectPlaced">UxrGrabbableObjectComponent(T).OnObjectPlaced(UxrManipulationEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_OnObjectReleased">OnObjectReleased</a></td><td>
Called when the object was released. Will reset the <a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_Owner">Owner</a>.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrGrabbableObjectComponent_1_OnObjectReleased">UxrGrabbableObjectComponent(T).OnObjectReleased(UxrManipulationEventArgs)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_Start">Start</a></td><td>
Initializes the component.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_Start">UxrComponent.Start()</a>.)</td></tr></table>&nbsp;
<a href="#uxrprojectiledeflect-class">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Mechanics_Weapons_UxrProjectileDeflect_ProjectileDeflected">ProjectileDeflected</a></td><td>
Event called when a projectile got deflected after hitting the object.</td></tr></table>&nbsp;
<a href="#uxrprojectiledeflect-class">Back to Top</a>

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
<a href="#uxrprojectiledeflect-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />