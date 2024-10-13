# UxrShotDescriptor Class
 

Class describing all the information of a type of projectile that a GameObject having a <a href="T_UltimateXR_Mechanics_Weapons_UxrProjectileSource">UxrProjectileSource</a> component can shoot. Normally there will be a <a href="T_UltimateXR_Mechanics_Weapons_UxrFirearmWeapon">UxrFirearmWeapon</a> with a <a href="T_UltimateXR_Mechanics_Weapons_UxrProjectileSource">UxrProjectileSource</a> component supporting one or more UxrShotDescriptor. For example, a rifle with a grenade launcher attachment will be able to fire two types of projectiles: bullets and explosive grenades. <a href="T_UltimateXR_Mechanics_Weapons_UxrProjectileSource">UxrProjectileSource</a> components, however, do not require to be part of a <a href="T_UltimateXR_Mechanics_Weapons_UxrFirearmWeapon">UxrFirearmWeapon</a> and can be used on their own.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Mechanics.Weapons.UxrShotDescriptor<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrShotDescriptor
```

<a href="UltimateXR/Scripts/Mechanics/Weapons/UxrShotDescriptor.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrShotDescriptor type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrShotDescriptor__ctor">UxrShotDescriptor</a></td><td /></tr></table>&nbsp;
<a href="#uxrshotdescriptor-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_CollisionLayerMask">CollisionLayerMask</a></td><td>
The layer mask used to determine which objects can be hit.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_CreateDecalLayerMask">CreateDecalLayerMask</a></td><td>
The layer mask used to determine if an impact will generate a decal.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_DecalFadeoutDuration">DecalFadeoutDuration</a></td><td>
Duration of the fadeout effect before a <a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabScenarioImpactDecal">PrefabScenarioImpactDecal</a> is destroyed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabInstantiateOnImpact">PrefabInstantiateOnImpact</a></td><td>
An optional prefab to instantiate at the point of impact.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabInstantiateOnImpactLife">PrefabInstantiateOnImpactLife</a></td><td>
Life in seconds after which <a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabInstantiateOnImpact">PrefabInstantiateOnImpact</a> will be destroyed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabInstantiateOnTipLife">PrefabInstantiateOnTipLife</a></td><td>
Life in seconds of <a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabInstantiateOnTipWhenShot">PrefabInstantiateOnTipWhenShot</a> after which it will be destroyed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabInstantiateOnTipParent">PrefabInstantiateOnTipParent</a></td><td>
Whether <a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabInstantiateOnTipWhenShot">PrefabInstantiateOnTipWhenShot</a> will be parented to the <a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_Tip">Tip</a> after being instantiated or will remain unparented.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabInstantiateOnTipWhenShot">PrefabInstantiateOnTipWhenShot</a></td><td>
An optional prefab that will be instantiated on the <a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_Tip">Tip</a> each time a round is fired.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabScenarioImpactDecal">PrefabScenarioImpactDecal</a></td><td>
Default decal that will be used when the projectile impacted with something. Can be overriden using the <a href="T_UltimateXR_Mechanics_Weapons_UxrOverrideImpactDecal">UxrOverrideImpactDecal</a> component.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabScenarioImpactDecalLife">PrefabScenarioImpactDecalLife</a></td><td>
Life in seconds after which <a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabScenarioImpactDecal">PrefabScenarioImpactDecal</a> will fadeout and be destroyed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ProjectileDamageFar">ProjectileDamageFar</a></td><td>
The damage a projectile will do if it were to hit at the farthest distance. Damage will linearly decrease over distance from the start down to <a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ProjectileDamageFar">ProjectileDamageFar</a> until the projectile reaches _projectileMaxDistance.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ProjectileDamageNear">ProjectileDamageNear</a></td><td>
The damage a projectile will do if it were to hit at the closest distance. Damage will linearly decrease over distance down to <a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ProjectileDamageFar">ProjectileDamageFar</a> until the projectile reaches _projectileMaxDistance.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ProjectileImpactForceMultiplier">ProjectileImpactForceMultiplier</a></td><td>
The force multiplier applied to a rigidbody that was hit by a projectile. The total force applied will be speed * ForceMultiplier.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ProjectileLength">ProjectileLength</a></td><td>
The physical length of the projectile, used in ray-casting computations.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ProjectileMaxDistance">ProjectileMaxDistance</a></td><td>
Maximum reach of the projectile, after which it will be destroyed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ProjectilePrefab">ProjectilePrefab</a></td><td>
Prefab that will be instantiated as the projectile.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ProjectileSpeed">ProjectileSpeed</a></td><td>
Speed at which the projectile will move.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ShotAnimationVarName">ShotAnimationVarName</a></td><td>
Optional Animator trigger variable name that will be triggered on the weapon each time a round is fired.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_ShotSource">ShotSource</a></td><td>
Gets the Transform that is used to fire projectiles from, using the forward vector as direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_Tip">Tip</a></td><td>
Gets the Transform that is used to instantiate effects on the tip when a shot was fired, using <a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_PrefabInstantiateOnTipWhenShot">PrefabInstantiateOnTipWhenShot</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrShotDescriptor_UseAutomaticProjectileTrajectory">UseAutomaticProjectileTrajectory</a></td><td>
Gets whether the projectiles fired should be updated automatically to compute their trajectory or they will be updated manually.</td></tr></table>&nbsp;
<a href="#uxrshotdescriptor-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrshotdescriptor-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />