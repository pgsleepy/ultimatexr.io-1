# Vector3Ext ClassVector3 extensions.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Extensions.Unity.Math.Vector3Ext<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static class Vector3Ext
```

<a href="UltimateXR/Scripts/Extensions/Unity/Math/Vector3Ext.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The Vector3Ext type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_Extensions_Unity_Math_Vector3Ext_NaN">NaN</a></td><td>
Represents the NaN vector, an invalid value.</td></tr></table>&nbsp;
<a href="#vector3ext-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Abs">Abs</a></td><td>
Computes the absolute value of each component in a vector.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Average">Average(IEnumerable(Vector3))</a></td><td>
Computes the average of a set of vectors.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Average_1">Average(Vector3[])</a></td><td>
Computes the average of a set of vectors.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Clamp">Clamp</a></td><td>
Clamps Vector3 values component by component.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_ClampToBox">ClampToBox</a></td><td>
Checks if a point is inside of a BoxCollider. If it is outside, it is clamped to remain inside.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_ClampToSphere">ClampToSphere</a></td><td>
Checks if a point is inside of a SphereCollider. If it is outside, it is clamped to remain inside.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_DistanceToLine">DistanceToLine</a></td><td>
Computes the distance from a point to a line.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_DistanceToSegment">DistanceToSegment</a></td><td>
Computes the distance from a point to a segment.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Divide">Divide</a></td><td>
Divides a Vector3 by another, checking for divisions by 0. Divisions by 0 have a result of 0.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_FillNanWith">FillNanWith</a></td><td>
Replaces NaN component values with *other* valid values.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_GetClosestAxis">GetClosestAxis</a></td><td>
Gets the vector which is the dominant negative or positive axis it is mostly pointing towards.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_GetClosestPointFromSegment">GetClosestPointFromSegment</a></td><td>
Computes the closest point in a segment to another point.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_GetPerpendicularVector">GetPerpendicularVector</a></td><td>
Computes a perpendicular vector.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_GetRotationAround">GetRotationAround(Vector3, Vector3, Single)</a></td><td>
Computes the rotation of a direction around an axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_GetRotationAround_1">GetRotationAround(Vector3, Vector3, Vector3, Single)</a></td><td>
Computes the rotation of a point around a pivot and an axis.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Inverse">Inverse</a></td><td>
returns a vector with all components containing 1/component, checking for divisions by 0. Divisions by 0 have a result of 0.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_IsInfinity">IsInfinity</a></td><td>
Checks whether the given vector has any infinity component.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_IsInsideBox">IsInsideBox(Vector3, BoxCollider, Vector3, Boolean)</a></td><td>
Checks if a point is inside of a BoxCollider.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_IsInsideBox_1">IsInsideBox(Vector3, Vector3, Quaternion, Vector3, Vector3, Vector3, Vector3)</a></td><td>
Checks if a point is inside of a box.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_IsInsideSphere">IsInsideSphere</a></td><td>
Checks if a point is inside a sphere. Supports spheres without uniform scaling.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_IsNaN">IsNaN</a></td><td>
Checks whether the given vector has any NaN component.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_IsValid">IsValid</a></td><td>
Checks whether the given vector contains valid data.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Max">Max(IEnumerable(Vector3))</a></td><td>
Computes the maximum values of a set of vectors.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Max_1">Max(Vector3[])</a></td><td>
Computes the maximum values of a set of vectors.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Min">Min(IEnumerable(Vector3))</a></td><td>
Computes the minimum values of a set of vectors.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Min_1">Min(Vector3[])</a></td><td>
Computes the minimum values of a set of vectors.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Multiply">Multiply</a></td><td>
Multiplies two Vector3 component by component.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_Parse">Parse</a></td><td>
Parses a Vector3 from a string.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_ParseAsync">ParseAsync</a></td><td>
Tries to parse a Vector3 from a string, asynchronously.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_ToVector3">ToVector3</a></td><td>
Transforms an array of floats to a Vector3 component by component. If there are not enough values to read, the remaining values are set to NaN.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_Vector3Ext_TryParse">TryParse</a></td><td>
Tries to parse a Vector3 from a string.</td></tr></table>&nbsp;
<a href="#vector3ext-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math Namespace</a><br />