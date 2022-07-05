# UxrBodyIKSettings Class
 

Stores parameters that drive Inverse Kinematics for full-body avatars.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Animation.IK.UxrBodyIKSettings<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_IK">UltimateXR.Animation.IK</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrBodyIKSettings
```

<a href="UltimateXR/Scripts/Animation/IK/UxrBodyIKSettings.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrBodyIKSettings type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_IK_UxrBodyIKSettings__ctor">UxrBodyIKSettings</a></td><td /></tr></table>&nbsp;
<a href="#uxrbodyiksettings-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_BodyPivotRotationSpeed">BodyPivotRotationSpeed</a></td><td>
Gets the speed the body will turn around with. This is used to smooth out rotation.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_ChestBend">ChestBend</a></td><td>
Gets the amount the chest will bend when the head bends.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_ChestTorsion">ChestTorsion</a></td><td>
Gets the amount the chest will turn when the head turns.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_EyesBaseHeight">EyesBaseHeight</a></td><td>
Gets the height of the eyes starting from the avatar root Y. This is used to know where to place the avatar head knowing the camera will be positioned on the eyes.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_EyesForwardOffset">EyesForwardOffset</a></td><td>
Gets the forward offset of the eyes starting from the avatar root Z. This is used to know where to place the avatar head knowing the camera will be positioned on the eyes.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_HeadFreeRangeBend">HeadFreeRangeBend</a></td><td>
Gets the amount of degrees the head can bend before requiring rotation of other bones down the spine.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_HeadFreeRangeTorsion">HeadFreeRangeTorsion</a></td><td>
Gets the amount of degrees the head can turn before requiring rotation of other bones down the spine.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_LockBodyPivot">LockBodyPivot</a></td><td>
Gets whether the avatar pivot will be kept in place so that it will only rotate around.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_NeckBaseHeight">NeckBaseHeight</a></td><td>
Gets the height of the base of the neck starting from the avatar root Y. This is used to create a dummy neck when the avatar is lacking a neck bone.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_NeckForwardOffset">NeckForwardOffset</a></td><td>
Gets the forward offset of the neck starting from the avatar root Z. This is used to create a dummy neck when the avatar is lacking a neck bone.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_NeckHeadBalance">NeckHeadBalance</a></td><td>
Gets a value in [0.0, 1.0] range that tells how rotation will be distributed between the head and the neck. 0.0 will fully use the neck and 1.0 will fully use the head. Values in between will distribute it among the two.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_SpineBend">SpineBend</a></td><td>
Gets the amount the spine will bend when the head bends.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_SpineTorsion">SpineTorsion</a></td><td>
Gets the amount the spine will turn when the head turns.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_UpperChestBend">UpperChestBend</a></td><td>
Gets the amount the upper chest will bend when the head bends.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrBodyIKSettings_UpperChestTorsion">UpperChestTorsion</a></td><td>
Gets the amount the upper chest will turn when the head turns.</td></tr></table>&nbsp;
<a href="#uxrbodyiksettings-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrbodyiksettings-class">Back to Top</a>

## Remarks
For now only half-body Inverse Kinematics is supported. Full-body will be implemented at some point.

## See Also


#### Reference
<a href="N_UltimateXR_Animation_IK">UltimateXR.Animation.IK Namespace</a><br />