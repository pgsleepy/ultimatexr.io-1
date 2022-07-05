# UxrAvatarRigInfo Class
 


Stores information about the rig to facilitate transformations no matter the coordinate system used by the avatar hierarchy (See <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UxrUniversalLocalAxes</a>).
 It also stores lengths and sizes that can facilitate operations such as Inverse Kinematics, calibration, etc.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Avatar.Rig.UxrAvatarRigInfo<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrAvatarRigInfo
```

<a href="UltimateXR/Scripts/Avatar/Rig/UxrAvatarRigInfo.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAvatarRigInfo type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRigInfo__ctor">UxrAvatarRigInfo</a></td><td /></tr></table>&nbsp;
<a href="#uxravatarriginfo-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_LeftArmUniversalLocalAxes">LeftArmUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the left arm: forward is arm->elbow, up is elbow rotation axis</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_LeftClavicleUniversalLocalAxes">LeftClavicleUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the left clavicle: forward is clavicle->arm, up is avatar up axis</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_LeftFingerUniversalLocalAxes">LeftFingerUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the left fingers: right = axis around which the finger curls, up = knuckles up, forward = finger direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_LeftForearmLength">LeftForearmLength</a></td><td>
Gets the left forearm length. From elbow to wrist.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_LeftForearmUniversalLocalAxes">LeftForearmUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the left forearm: forward is arm->hand, up is elbow rotation axis</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_LeftHandUniversalLocalAxes">LeftHandUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the left hand: right = from wrist to right (thumb direction), up = -palm facing vector, forward = finger direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_LeftUpperArmLength">LeftUpperArmLength</a></td><td>
Gets the left upper arm length. From shoulder to elbow.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_LeftWristTorsionInfo">LeftWristTorsionInfo</a></td><td>
Gets the left wrist torsion info.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_RightArmUniversalLocalAxes">RightArmUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the right arm: forward is arm->elbow, up is elbow rotation axis</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_RightClavicleUniversalLocalAxes">RightClavicleUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the right clavicle: forward is clavicle->arm, up is avatar up axis</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_RightFingerUniversalLocalAxes">RightFingerUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the right fingers: right = axis around which the finger curls, up = knuckles up, forward = finger direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_RightForearmLength">RightForearmLength</a></td><td>
Gets the right forearm length. From elbow to wrist.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_RightForearmUniversalLocalAxes">RightForearmUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the right forearm: forward is arm->hand, up is elbow rotation axis</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_RightHandUniversalLocalAxes">RightHandUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the left hand: right = from wrist to right (opposite of thumb direction), up = -palm facing vector, forward = finger direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_RightUpperArmLength">RightUpperArmLength</a></td><td>
Gets the right upper arm length. From shoulder to elbow.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_RightWristTorsionInfo">RightWristTorsionInfo</a></td><td>
Gets the right wrist torsion info.</td></tr></table>&nbsp;
<a href="#uxravatarriginfo-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_ComputeFromAvatar">ComputeFromAvatar</a></td><td>
Computes the information of an avatar and a rig.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_GetArmUniversalLocalAxes">GetArmUniversalLocalAxes</a></td><td>
Gets an arm's universal local axes.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_GetClavicleUniversalLocalAxes">GetClavicleUniversalLocalAxes</a></td><td>
Gets a clavicle's universal local axes.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_GetFingerUniversalLocalAxes">GetFingerUniversalLocalAxes</a></td><td>
Gets the finger universal local axes.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_GetForearmUniversalLocalAxes">GetForearmUniversalLocalAxes</a></td><td>
Gets a forearm's universal local axes.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_GetHandUniversalLocalAxes">GetHandUniversalLocalAxes</a></td><td>
Gets a hand's universal local axes.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_SolveHandAndFingerAxes">SolveHandAndFingerAxes</a></td><td>
Tries to find out which axes are pointing right/up/forward in the hand and finger nodes. These "universal" axes will be used to rotate the nodes, so that any coordinate system can be used no matter how the hand was authored.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarRigInfo_UpdateInfo">UpdateInfo</a></td><td>
Updates information for the current frame.</td></tr></table>&nbsp;
<a href="#uxravatarriginfo-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxravatarriginfo-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />