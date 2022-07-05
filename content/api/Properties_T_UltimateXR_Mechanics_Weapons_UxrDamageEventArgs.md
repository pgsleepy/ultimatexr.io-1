# UxrDamageEventArgs Properties
 

The <a href="T_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs">UxrDamageEventArgs</a> type exposes the following members.


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
<a href="#uxrdamageeventargs-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs">UxrDamageEventArgs Class</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />