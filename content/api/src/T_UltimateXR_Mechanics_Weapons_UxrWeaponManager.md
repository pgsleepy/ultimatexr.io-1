# UxrWeaponManager Class
 

Singleton manager in charge of updating projectiles, computing hits against entities and damage done on <a href="T_UltimateXR_Mechanics_Weapons_UxrActor">UxrActor</a> components.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1">UltimateXR.Core.Components.Singleton.UxrAbstractSingleton</a>(UxrWeaponManager)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Singleton_UxrSingleton_1">UltimateXR.Core.Components.Singleton.UxrSingleton</a>(UxrWeaponManager)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Mechanics.Weapons.UxrWeaponManager<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrWeaponManager : UxrSingleton<UxrWeaponManager>, 
	IUxrLogger
```

<a href="UltimateXR/Scripts/Mechanics/Weapons/UxrWeaponManager.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrWeaponManager type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrWeaponManager__ctor">UxrWeaponManager</a></td><td /></tr></table>&nbsp;
<a href="#uxrweaponmanager-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrWeaponManager_LogLevel">LogLevel</a></td><td>
Gets or sets the current log level. This controls the amount of information sent.</td></tr></table>&nbsp;
<a href="#uxrweaponmanager-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrWeaponManager_ApplyRadiusDamage">ApplyRadiusDamage</a></td><td>
Applies radius damage to all elements around a source position.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrWeaponManager_Awake">Awake</a></td><td>
Initializes the manager. Subscribes to actor enable/disable events.
 (Overrides <a href="M_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_Awake">UxrAbstractSingleton(T).Awake()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrWeaponManager_OnDestroy">OnDestroy</a></td><td>
Initializes the manager. Unsubscribes from actor enable/disable events.
 (Overrides <a href="M_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_OnDestroy">UxrAbstractSingleton(T).OnDestroy()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrWeaponManager_RegisterNewProjectileShot">RegisterNewProjectileShot</a></td><td>
Registers a new projectile shot so that it gets automatically update by the manager from that moment until it hits something or gets destroyed.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrWeaponManager_UpdateManager">UpdateManager</a></td><td>
Updates the manager.</td></tr></table>&nbsp;
<a href="#uxrweaponmanager-class">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Mechanics_Weapons_UxrWeaponManager_DamageReceived">DamageReceived</a></td><td>
Event triggered right after the actor received damage. Setting <a href="M_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_Cancel">Cancel()</a> is not supported, since the damage was already taken.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Mechanics_Weapons_UxrWeaponManager_DamageReceiving">DamageReceiving</a></td><td>
Event triggered right before an <a href="T_UltimateXR_Mechanics_Weapons_UxrActor">UxrActor</a> is about to receive damage. Setting <a href="M_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_Cancel">Cancel()</a> will allow not to take the damage.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Mechanics_Weapons_UxrWeaponManager_NonActorImpacted">NonActorImpacted</a></td><td>
Event called whenever there was a projectile impact but no <a href="T_UltimateXR_Mechanics_Weapons_UxrActor">UxrActor</a> was involved. Mostly hits against the scenario that still generate decals, FX, etc.</td></tr></table>&nbsp;
<a href="#uxrweaponmanager-class">Back to Top</a>

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
<a href="#uxrweaponmanager-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />