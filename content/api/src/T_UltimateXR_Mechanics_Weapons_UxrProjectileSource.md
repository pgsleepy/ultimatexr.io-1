# UxrProjectileSource Class
 

Component that has the ability to fire shots.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrProjectileSource)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Mechanics.Weapons.UxrProjectileSource<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrProjectileSource : UxrComponent<UxrProjectileSource>, 
	IUxrPrecacheable
```

<a href="UltimateXR/Scripts/Mechanics/Weapons/UxrProjectileSource.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrProjectileSource type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileSource__ctor">UxrProjectileSource</a></td><td /></tr></table>&nbsp;
<a href="#uxrprojectilesource-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileSource_PrecachedInstances">PrecachedInstances</a></td><td>
Gets the GameObjects, usually prefabs, that will be precached when the scene is loaded.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrProjectileSource_ShotTypes">ShotTypes</a></td><td>
The different shots that can be fired using the component.</td></tr></table>&nbsp;
<a href="#uxrprojectilesource-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileSource_GetShotDirection">GetShotDirection</a></td><td>
Gets the current world-space direction of projectiles fired using the given shot type.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileSource_GetShotOrigin">GetShotOrigin</a></td><td>
Gets the current world-space origin of projectiles fired using the given shot type.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileSource_Shoot">Shoot(Int32)</a></td><td>
Shoots a round.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileSource_Shoot_1">Shoot(Int32, Vector3, Quaternion)</a></td><td>
Shoots a round, overriding the source position and orientation.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileSource_ShootTo">ShootTo</a></td><td>
Shoots a round pointing to the given target.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileSource_ShotRaycastDistance">ShotRaycastDistance</a></td><td>
Gets the distance where a shot using the current position and orientation will impact.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrProjectileSource_TryGetWeaponOwner">TryGetWeaponOwner</a></td><td>
Tries to get the <a href="T_UltimateXR_Mechanics_Weapons_UxrActor">UxrActor</a> that holds the <a href="T_UltimateXR_Mechanics_Weapons_UxrWeapon">UxrWeapon</a> that has the UxrProjectileSource component.</td></tr></table>&nbsp;
<a href="#uxrprojectilesource-class">Back to Top</a>

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
<a href="#uxrprojectilesource-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />