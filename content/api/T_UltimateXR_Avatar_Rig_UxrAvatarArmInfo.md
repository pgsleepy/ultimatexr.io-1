# UxrAvatarArmInfo Class
 

Stores information of an avatar rig's arm.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Avatar.Rig.UxrAvatarArmInfo<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrAvatarArmInfo
```

The UxrAvatarArmInfo type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarArmInfo__ctor">UxrAvatarArmInfo</a></td><td /></tr></table>&nbsp;
<a href="#uxravatararminfo-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_ArmUniversalLocalAxes">ArmUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the arm: forward is arm->elbow, up is elbow rotation axis</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_ClavicleUniversalLocalAxes">ClavicleUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the clavicle: forward is clavicle->arm, up is avatar up axis</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_Fingers">Fingers</a></td><td>
Enumerates all the finger information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_FingerUniversalLocalAxes">FingerUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the fingers: right = axis around which the finger curls, up = knuckles up, forward = finger direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_ForearmLength">ForearmLength</a></td><td>
Gets the forearm length. From elbow to wrist.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_ForearmUniversalLocalAxes">ForearmUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the forearm: forward is arm->hand, up is elbow rotation axis</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_HandUniversalLocalAxes">HandUniversalLocalAxes</a></td><td>
Gets the universal coordinate system for the hand: right = from wrist to right (thumb direction), up = -palm facing vector, forward = finger direction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_IndexInfo">IndexInfo</a></td><td>
Gets the index finger information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_LittleInfo">LittleInfo</a></td><td>
Gets the little finger information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_MiddleInfo">MiddleInfo</a></td><td>
Gets the middle finger information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_RingInfo">RingInfo</a></td><td>
Gets the ring finger information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_ThumbInfo">ThumbInfo</a></td><td>
Gets the thumb finger information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_UpperArmLength">UpperArmLength</a></td><td>
Gets the upper arm length. From shoulder to elbow.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarArmInfo_WristTorsionInfo">WristTorsionInfo</a></td><td>
Gets the wrist torsion info.</td></tr></table>&nbsp;
<a href="#uxravatararminfo-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxravatararminfo-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />