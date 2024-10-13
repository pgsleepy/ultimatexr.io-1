# UxrDamageEventArgs Class
 

Damage event parameters.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;<a href="https://docs.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">System.EventArgs</a><br />&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Mechanics.Weapons.UxrDamageEventArgs<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrDamageEventArgs : EventArgs
```

<a href="UltimateXR/Scripts/Mechanics/Weapons/UxrDamageEventArgs.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrDamageEventArgs type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs__ctor">UxrDamageEventArgs(Single, Boolean)</a></td><td>
Constructor for generic damage.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs__ctor_1">UxrDamageEventArgs(UxrActor, UxrActor, RaycastHit, Single, Boolean)</a></td><td>
Constructor for projectile damage.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs__ctor_2">UxrDamageEventArgs(UxrActor, UxrActor, Vector3, Single, Boolean)</a></td><td>
Constructor for explosive damage.</td></tr></table>&nbsp;
<a href="#uxrdamageeventargs-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_ActorSource">ActorSource</a></td><td>
Gets the actor that inflicted the damage, or null if the damage didn't come from any specific actor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_ActorTarget">ActorTarget</a></td><td>
Gets the actor that received the damage.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_Damage">Damage</a></td><td>
Gets the amount of damage taken/inflicted.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_DamageType">DamageType</a></td><td>
Gets the type of damage.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_Dies">Dies</a></td><td>
Gets whether the damage will result in the death of the receiving actor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_ExplosionPosition">ExplosionPosition</a></td><td>
Gets the source position for explosive damage. Only valid if <a href="P_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_DamageType">DamageType</a> is <a href="T_UltimateXR_Mechanics_Weapons_UxrDamageType">Explosive</a></td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_IsCanceled">IsCanceled</a></td><td>
Gets if the damage was canceled for damage pre-events. Damage post-events cannot be canceled since the damage was already inflicted.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_RaycastHit">RaycastHit</a></td><td>
Gets the raycast information for projectile hits. Only valid if <a href="P_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_DamageType">DamageType</a> is <a href="T_UltimateXR_Mechanics_Weapons_UxrDamageType">ProjectileHit</a>.</td></tr></table>&nbsp;
<a href="#uxrdamageeventargs-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_Cancel">Cancel</a></td><td>
Allows pre-events to cancel the damage. post-events can not be cancelled since the damage was already taken.</td></tr></table>&nbsp;
<a href="#uxrdamageeventargs-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrdamageeventargs-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />