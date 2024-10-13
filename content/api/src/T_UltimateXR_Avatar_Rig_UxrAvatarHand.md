# UxrAvatarHand Class
 

Stores bone references of an Avatar's hand.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Avatar.Rig.UxrAvatarHand<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrAvatarHand
```

<a href="UltimateXR/Scripts/Avatar/Rig/UxrAvatarHand.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAvatarHand type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarHand__ctor">UxrAvatarHand</a></td><td>
Default constructor.</td></tr></table>&nbsp;
<a href="#uxravatarhand-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarHand_FingerTransforms">FingerTransforms</a></td><td>
Gets a sequence of all the non-null finger transforms in the hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarHand_Index">Index</a></td><td>
Gets or sets the index finger.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarHand_Little">Little</a></td><td>
Gets or sets the little finger.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarHand_Middle">Middle</a></td><td>
Gets or sets the middle finger.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarHand_Ring">Ring</a></td><td>
Gets or sets the ring finger.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarHand_Thumb">Thumb</a></td><td>
Gets or sets the thumb finger.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarHand_Transforms">Transforms</a></td><td>
Gets a sequence of all the non-null transforms in the hand, including the wrist.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarHand_Wrist">Wrist</a></td><td>
Gets or sets the wrist transform. The wrist is the root transform in the hand.</td></tr></table>&nbsp;
<a href="#uxravatarhand-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarHand_GetFinger">GetFinger</a></td><td>
Gets the information of a given finger.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarHand_GetPalmCenter">GetPalmCenter</a></td><td>
Tries to compute the palm center in world coordinates.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarHand_GetPalmOutDirection">GetPalmOutDirection</a></td><td>
Tries to compute the direction that goes out of the palm in world coordinates.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarHand_GetPalmToFingerDirection">GetPalmToFingerDirection</a></td><td>
Tries to compute the palm-to-finger direction in world coordinates.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarHand_HasFingerData">HasFingerData</a></td><td>
Checks if the hand has all finger references.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarHand_HasFullHandData">HasFullHandData</a></td><td>
Checks if the hand has all finger references plus the wrist.</td></tr></table>&nbsp;
<a href="#uxravatarhand-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxravatarhand-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />