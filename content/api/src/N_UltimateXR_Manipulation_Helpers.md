# UltimateXR.Manipulation.Helpers Namespace

## Classes
&nbsp;<table><tr><th></th><th>Class</th><th>Description</th></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Manipulation_Helpers_UxrAlignOnRelease">UxrAlignOnRelease</a></td><td>
Aligns an object smoothly whenever it is released to keep it leveled. Should be used on non physics-driven grabbable objects, which remain floating in the air when being released.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Manipulation_Helpers_UxrDependentGrabbable">UxrDependentGrabbable</a></td><td>
Component that allows an object be grabbed only if another object is being grabbed. For instance, it can be added to a grenade pin to make sure the pin is never grabbed unless the grenade is being grabbed too. Otherwise the pin could be removed by mistake when trying to grab the grenade.</td></tr><tr><td>![Public class](media/pubclass.gif "Public class")</td><td><a href="T_UltimateXR_Manipulation_Helpers_UxrReturnGrabbableObject">UxrReturnGrabbableObject</a></td><td>
Component that will always return an <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> to the <a href="T_UltimateXR_Manipulation_UxrGrabbableObjectAnchor">UxrGrabbableObjectAnchor</a> it was grabbed from whenever it is released.</td></tr></table>&nbsp;
