# UxrAvatarFinger Class
 

Stores bone references of an Avatar's finger.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Avatar.Rig.UxrAvatarFinger<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrAvatarFinger
```

<a href="UltimateXR/Scripts/Avatar/Rig/UxrAvatarFinger.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAvatarFinger type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarFinger__ctor">UxrAvatarFinger</a></td><td /></tr></table>&nbsp;
<a href="#uxravatarfinger-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarFinger_Distal">Distal</a></td><td>
Gets or sets the distal bone transform.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarFinger_Intermediate">Intermediate</a></td><td>
Gets or sets the intermediate bone transform.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarFinger_Metacarpal">Metacarpal</a></td><td>
Gets or sets the metacarpal bone transform. Metacarpal bones are optional.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarFinger_Proximal">Proximal</a></td><td>
Gets or sets the proximal bone transform.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_Rig_UxrAvatarFinger_Transforms">Transforms</a></td><td>
Gets a sequence of all the non-null transforms in the finger.</td></tr></table>&nbsp;
<a href="#uxravatarfinger-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarFinger_HasData">HasData</a></td><td>
Checks if the finger has the required bone references. The only optional bone is the metacarpal bone, which may be null.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_Rig_UxrAvatarFinger_SetupFingerBones">SetupFingerBones</a></td><td>
Sets up the finger bones using a list starting from the metacarpal (if there are 4 elements) or the proximal (if there are 3).</td></tr></table>&nbsp;
<a href="#uxravatarfinger-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxravatarfinger-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar_Rig">UltimateXR.Avatar.Rig Namespace</a><br />