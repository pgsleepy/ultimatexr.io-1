# ReadOnlyAttribute Class
 

Attribute to visualize inspector fields as read-only so that they can't be edited. This can be used for debugging purposes, to expose component information to the user but without the possibility to edit the data. It also provides additional functionality:
&nbsp;<ul><li>Make the field read-only during play mode but editable during edit mode.</li><li>Hide the field during edit-mode.</li></ul>

## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;<a href="https://docs.microsoft.com/dotnet/api/system.attribute" target="_blank" rel="noopener noreferrer">System.Attribute</a><br />&nbsp;&nbsp;&nbsp;&nbsp;PropertyAttribute<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Attributes.ReadOnlyAttribute<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Attributes">UltimateXR.Attributes</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class ReadOnlyAttribute : PropertyAttribute
```

<a href="UltimateXR/Scripts/Attributes/ReadOnlyAttribute.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The ReadOnlyAttribute type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Attributes_ReadOnlyAttribute__ctor">ReadOnlyAttribute</a></td><td /></tr></table>&nbsp;
<a href="#readonlyattribute-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Attributes_ReadOnlyAttribute_HideInEditMode">HideInEditMode</a></td><td>
Whether to hide the variable during edit-mode.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Attributes_ReadOnlyAttribute_OnlyWhilePlaying">OnlyWhilePlaying</a></td><td>
Whether to apply the read-only mode only while playing.</td></tr></table>&nbsp;
<a href="#readonlyattribute-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#readonlyattribute-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Attributes">UltimateXR.Attributes Namespace</a><br />