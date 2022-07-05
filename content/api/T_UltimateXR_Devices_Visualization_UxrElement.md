# UxrElement Class
 

Describes the properties of a VR controller input element.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Devices.Visualization.UxrElement<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrElement
```

<a href="UltimateXR/Scripts/Devices/Visualization/UxrElement.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrElement type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_Visualization_UxrElement__ctor">UxrElement</a></td><td /></tr></table>&nbsp;
<a href="#uxrelement-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_ButtonPressedOffset">ButtonPressedOffset</a></td><td>
Gets the pressed offset for a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">Button</a> input element.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_DpadFirstAxisOffset">DpadFirstAxisOffset</a></td><td>
Gets the maximum positive offset for the first axis in a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">DPad</a> input element. The other side will be the negated offset.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_DpadFirstAxisOffsetAngle">DpadFirstAxisOffsetAngle</a></td><td>
Gets the maximum positive angle range for the first axis in a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">DPad</a> input element. The other side will be the negated angle.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_DpadSecondAxisOffset">DpadSecondAxisOffset</a></td><td>
Gets the maximum positive offset for the second axis in a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">DPad</a> input element. The other side will be the negated offset.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_DpadSecondAxisOffsetAngle">DpadSecondAxisOffsetAngle</a></td><td>
Gets the maximum positive angle range for the second axis in a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">DPad</a> input element. The other side will be the negated angle.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_Element">Element</a></td><td>
Gets which controller element(s) the input element describes.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_ElementObject">ElementObject</a></td><td>
Gets the object that represents the input element.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_ElementType">ElementType</a></td><td>
Gets the input element type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_Finger">Finger</a></td><td>
Gets which finger interacts with the input element.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_FingerContactPoint">FingerContactPoint</a></td><td>
Gets the finger contact point if there is any. If null it will try to contact <a href="P_UltimateXR_Devices_Visualization_UxrElement_ElementObject">ElementObject</a>'s transform.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_HandSide">HandSide</a></td><td>
Gets the hand that is used to interact with the input.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_Input1DPressedOffset">Input1DPressedOffset</a></td><td>
Gets the pressed offset for a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">Input1DPush</a> input element.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_Input1DPressedOffsetAngle">Input1DPressedOffsetAngle</a></td><td>
Gets the pressed offset euler angles for a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">Input1DRotate</a> input element.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_Input2DFirstAxisOffset">Input2DFirstAxisOffset</a></td><td>
Gets the maximum positive offset of the first axis in a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">Input2DTouch</a> input element. The other side will be the negated offset.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_Input2DFirstAxisOffsetAngle">Input2DFirstAxisOffsetAngle</a></td><td>
Gets the maximum positive angle range for the first axis in a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">Input2DJoystick</a> input element. The other side will be the negated angle.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_Input2DSecondAxisOffset">Input2DSecondAxisOffset</a></td><td>
Gets the maximum positive offset of the second axis in a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">Input2DTouch</a> input element. The other side will be the negated offset.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_Visualization_UxrElement_Input2DSecondAxisOffsetAngle">Input2DSecondAxisOffsetAngle</a></td><td>
Gets the maximum positive angle range for the second axis in a <a href="T_UltimateXR_Devices_Visualization_UxrElementType">Input2DJoystick</a> input element. The other side will be the negated angle.</td></tr></table>&nbsp;
<a href="#uxrelement-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrelement-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization Namespace</a><br />