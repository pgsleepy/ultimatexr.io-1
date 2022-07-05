# UxrAxis Class
 

Class that allows to have formatted axes (A combo box with X, Y, Z strings) instead of numerical fields. It also allows conversion from and to integers and Vector3 types. See the UxrAxisPropertyDrawer editor class for the integration with Unity Editor.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Core.Math.UxrAxis<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrAxis
```

<a href="UltimateXR/Scripts/Core/Math/UxrAxis.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAxis type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Math_UxrAxis__ctor">UxrAxis</a></td><td>
Constructor.</td></tr></table>&nbsp;
<a href="#uxraxis-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrAxis_Perpendicular">Perpendicular</a></td><td>
Returns a perpendicular axis.</td></tr></table>&nbsp;
<a href="#uxraxis-class">Back to Top</a>

## Operators
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public operator](media/puboperator.gif "Public operator")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrAxis_op_Implicit">Implicit(Int32 to UxrAxis)</a></td><td>
Implicit conversion from an integer to an UxrAxis.</td></tr><tr><td>![Public operator](media/puboperator.gif "Public operator")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrAxis_op_Implicit_1">Implicit(UxrAxis to Vector3)</a></td><td>
Implicit conversion from an UxrAxis to a Vector3.</td></tr><tr><td>![Public operator](media/puboperator.gif "Public operator")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrAxis_op_Implicit_2">Implicit(UxrAxis to Int32)</a></td><td>
Implicit conversion from an UxrAxis to an integer.</td></tr><tr><td>![Public operator](media/puboperator.gif "Public operator")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Math_UxrAxis_op_UnaryNegation">UnaryNegation</a></td><td>
Unary minus operator. Negates the axis value.</td></tr></table>&nbsp;
<a href="#uxraxis-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Core_Math_UxrAxis_X">X</a></td><td /></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Core_Math_UxrAxis_Y">Y</a></td><td /></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Core_Math_UxrAxis_Z">Z</a></td><td /></tr></table>&nbsp;
<a href="#uxraxis-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxraxis-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />