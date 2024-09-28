# QuaternionExt ClassQuaternion extensions.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Extensions.Unity.Math.QuaternionExt<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static class QuaternionExt
```

<a href="UltimateXR/Scripts/Extensions/Unity/Math/QuaternionExt.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The QuaternionExt type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_Extensions_Unity_Math_QuaternionExt_NaN">NaN</a></td><td>
Represents a NaN Quaternion.</td></tr></table>&nbsp;
<a href="#quaternionext-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_ApplyAlignment">ApplyAlignment</a></td><td>
Applies the transformation to make a rotation defined by *sourceRotation* rotate towards *targetRotation*.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_Average">Average</a></td><td>
Computes the average quaternion from a list.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_Divide">Divide</a></td><td>
Divides two quaternions component by component, checking for divisions by 0. Divisions by 0 have a result of 0.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_Inverse">Inverse</a></td><td>
Computes the inverse of a quaternion component by component (1 / value), checking for divisions by 0. Divisions by 0 have a result of 0.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_IsInfinity">IsInfinity</a></td><td>
Checks whether the given Quaternion has any infinity value.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_IsNaN">IsNaN</a></td><td>
Checks whether the given Quaternion has any NaN value.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_IsValid">IsValid</a></td><td>
Checks whether the given Quaternion contains valid data.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_IsZero">IsZero</a></td><td>
Checks whether the given Quaternion has any 0 value.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_Multiply">Multiply</a></td><td>
Multiplies two quaternions component by component.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_Parse">Parse</a></td><td>
Parses a Quaternion.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_ParseAsync">ParseAsync</a></td><td>
Parses a Quaternion asynchronously.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_ToQuaternion">ToQuaternion</a></td><td>
Creates a Quaternion from a float array. If the array does not contain enough elements, the missing components will contain NaN.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_ToVector4">ToVector4</a></td><td>
Transforms a Quaternion to a Vector4 component by component.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_Math_QuaternionExt_TryParse">TryParse</a></td><td>
Tries to parse a Quaternion.</td></tr></table>&nbsp;
<a href="#quaternionext-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Extensions_Unity_Math">UltimateXR.Extensions.Unity.Math Namespace</a><br />