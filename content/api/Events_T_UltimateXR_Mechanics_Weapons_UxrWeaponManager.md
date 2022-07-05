# UxrWeaponManager Events
 

The <a href="T_UltimateXR_Mechanics_Weapons_UxrWeaponManager">UxrWeaponManager</a> type exposes the following members.


## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Mechanics_Weapons_UxrWeaponManager_DamageReceived">DamageReceived</a></td><td>
Event triggered right after the actor received damage. Setting <a href="M_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_Cancel">Cancel()</a> is not supported, since the damage was already taken.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Mechanics_Weapons_UxrWeaponManager_DamageReceiving">DamageReceiving</a></td><td>
Event triggered right before an <a href="T_UltimateXR_Mechanics_Weapons_UxrActor">UxrActor</a> is about to receive damage. Setting <a href="M_UltimateXR_Mechanics_Weapons_UxrDamageEventArgs_Cancel">Cancel()</a> will allow not to take the damage.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Mechanics_Weapons_UxrWeaponManager_NonActorImpacted">NonActorImpacted</a></td><td>
Event called whenever there was a projectile impact but no <a href="T_UltimateXR_Mechanics_Weapons_UxrActor">UxrActor</a> was involved. Mostly hits against the scenario that still generate decals, FX, etc.</td></tr></table>&nbsp;
<a href="#uxrweaponmanager-events">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Mechanics_Weapons_UxrWeaponManager">UxrWeaponManager Class</a><br /><a href="N_UltimateXR_Mechanics_Weapons">UltimateXR.Mechanics.Weapons Namespace</a><br />