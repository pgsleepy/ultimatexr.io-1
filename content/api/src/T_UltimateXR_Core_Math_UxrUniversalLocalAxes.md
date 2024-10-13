# UxrUniversalLocalAxes Class
 


Different parts of the framework need to deal with axes. These algorithms like IK solvers or avatar components need to know exactly where 'forward' is or which axis points to the right in avatar-space. Since modelling packages and artists may rig objects using arbitrary coordinate systems we need a way to perform operations in a way that takes this into account. The code also needs to remain readable since many math operations may increase complexity. Readability is favoured here over performance.

This class allows to transform from arbitrary coordinate systems to a universal one where different rotations can then be performed and vice versa. One example would be a finger bone curl. We create the convention that forward is the axis from one bone to the next, up points upwards and right would be the axis around which the bone should rotate to curl. This is OK but now we face the problem that different modelling packages or artists rig fingers in completely different ways using all varieties of axis systems. The purpose of this class is to help creating a system where operations can be performed in this universal system to follow our conventions and then rotated "back" to any kind of coordinate system afterwards.

tl;dr A class that helps us operate with rotations and angles of an object no matter which convention the 3D assets use. We call 'Universal' the coordinate system we use as convention for our computations, we then can use <a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_UniversalToActualAxesRotation">UniversalToActualAxesRotation</a> to transform the object back to its actual axes. This way our computations do not care which coordinate system the assets use, and is essential to simplify operations like inverse kinematics or angle computations.



## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Core.Math.UxrUniversalLocalAxes<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrUniversalLocalAxes
```

<a href="UltimateXR/Scripts/Core/Math/UxrUniversalLocalAxes.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrUniversalLocalAxes type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Math_UxrUniversalLocalAxes__ctor">UxrUniversalLocalAxes</a></td><td>
Constructor. Uses universalReference to check which axes of a transform are actually the ones that are right, up and forward. For example, universalReference may be the avatar root where we know that right, up and forward point to these actual directions and we want to know which axes of an upper body part point to these directions too. These may be completely different depending on the modelling package or artist. Using this class we can easily check which one points upwards and create a small chest torsion by rotating around this axis.</td></tr></table>&nbsp;
<a href="#uxruniversallocalaxes-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialLocalPosition">InitialLocalPosition</a></td><td>
Gets the transform's local position at the time of setting the object up.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialLocalReferenceRotation">InitialLocalReferenceRotation</a></td><td>
Gets the transform's rotation with respect to the reference transform at the time of setting the object up. This will only contain a rotation when the constructor using a reference transform was used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialLocalRotation">InitialLocalRotation</a></td><td>
Gets the transform's local rotation at the time of setting the object up.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialPosition">InitialPosition</a></td><td>
Gets the transform's position at the time of setting the object up.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialRotation">InitialRotation</a></td><td>
Gets the transform's rotation at the time of setting the object up.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialUniversalLocalReferenceRotation">InitialUniversalLocalReferenceRotation</a></td><td>
Gets the transform's rotation (in universal coordinates) with respect to the reference transform at the time of setting the object up. This will only contain a rotation when the constructor using a reference transform was used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_LocalForward">LocalForward</a></td><td>
Gets the universal 'forward' direction in transform's local space.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_LocalRight">LocalRight</a></td><td>
Gets the universal 'right' direction in transform's local space.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_LocalUp">LocalUp</a></td><td>
Gets the universal 'up' direction in transform's local space.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_UniversalLocalRotation">UniversalLocalRotation</a></td><td>
Gets the local object rotation in universal convention</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_UniversalRotation">UniversalRotation</a></td><td>
Gets the object rotation in universal convention</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Code example](media/CodeExample.png "Code example")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_UniversalToActualAxesRotation">UniversalToActualAxesRotation</a></td><td>
Gets the rotation that transforms from the universal axes to the convention that the transform follows. 

## Examples

```
// universalRotation may be a rotation around the y axis, where we know
// exactly that y points upwards in that space.
// This rotation will rotate an object around the "universal" y axis no
// matter where his actual axes point to.
transform.rotation = universalRotation * UniversalToActualAxesRotation;
```</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_WorldForward">WorldForward</a></td><td>
Gets the universal 'forward' direction in world space.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_WorldRight">WorldRight</a></td><td>
Gets the universal 'right' direction in world space.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_WorldUp">WorldUp</a></td><td>
Gets the universal 'up' direction in world space.</td></tr></table>&nbsp;
<a href="#uxruniversallocalaxes-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrUniversalLocalAxes_FromAxes">FromAxes</a></td><td>
Creates a UniversalLocalAxes object describing the universal local axes for the given transform.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrUniversalLocalAxes_FromRightForward">FromRightForward</a></td><td>
See <a href="M_UltimateXR_Core_Math_UxrUniversalLocalAxes_FromAxes">FromAxes(Transform, Vector3, Vector3, Vector3)</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrUniversalLocalAxes_FromRightUp">FromRightUp</a></td><td>
See <a href="M_UltimateXR_Core_Math_UxrUniversalLocalAxes_FromAxes">FromAxes(Transform, Vector3, Vector3, Vector3)</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrUniversalLocalAxes_FromUpForward">FromUpForward</a></td><td>
See <a href="M_UltimateXR_Core_Math_UxrUniversalLocalAxes_FromAxes">FromAxes(Transform, Vector3, Vector3, Vector3)</a>.</td></tr></table>&nbsp;
<a href="#uxruniversallocalaxes-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxruniversallocalaxes-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />