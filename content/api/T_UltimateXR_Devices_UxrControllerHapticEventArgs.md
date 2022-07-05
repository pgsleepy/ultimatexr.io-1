# UxrControllerHapticEventArgs Class
 

Wraps information about a haptic request event.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;<a href="https://docs.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">System.EventArgs</a><br />&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Devices.UxrControllerHapticEventArgs<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrControllerHapticEventArgs : EventArgs
```

<a href="UltimateXR/Scripts/Devices/UxrControllerHapticEventArgs.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrControllerHapticEventArgs type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_UxrControllerHapticEventArgs__ctor_1">UxrControllerHapticEventArgs(UxrHandSide, UxrHapticClip)</a></td><td>
Constructor that registers a <a href="T_UltimateXR_Haptics_UxrHapticEventType">Clip</a> event.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Devices_UxrControllerHapticEventArgs__ctor">UxrControllerHapticEventArgs(UxrHandSide, Single, Single, Single, UxrHapticMode)</a></td><td>
Constructor that registers a <a href="T_UltimateXR_Haptics_UxrHapticEventType">Raw</a> event.</td></tr></table>&nbsp;
<a href="#uxrcontrollerhapticeventargs-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrControllerHapticEventArgs_Amplitude">Amplitude</a></td><td>
Gets the haptic feedback raw amplitude if the event is <a href="T_UltimateXR_Haptics_UxrHapticEventType">Raw</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrControllerHapticEventArgs_DurationSeconds">DurationSeconds</a></td><td>
Gets the haptic feedback duration in seconds if the event is <a href="T_UltimateXR_Haptics_UxrHapticEventType">Raw</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrControllerHapticEventArgs_Frequency">Frequency</a></td><td>
Gets the haptic feedback raw frequency if the event is <a href="T_UltimateXR_Haptics_UxrHapticEventType">Raw</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrControllerHapticEventArgs_HandSide">HandSide</a></td><td>
Gets the haptic feedback target hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrControllerHapticEventArgs_HapticClip">HapticClip</a></td><td>
Gets the haptic clip if the event is <a href="T_UltimateXR_Haptics_UxrHapticEventType">Clip</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrControllerHapticEventArgs_HapticEventType">HapticEventType</a></td><td>
Gets the haptic event type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrControllerHapticEventArgs_HapticMode">HapticMode</a></td><td>
Gets the haptic feedback playback mode.</td></tr></table>&nbsp;
<a href="#uxrcontrollerhapticeventargs-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Devices_UxrControllerHapticEventArgs_GetHapticStopEvent">GetHapticStopEvent</a></td><td>
Generates a <a href="T_UltimateXR_Haptics_UxrHapticEventType">Stop</a> event for the given hand</td></tr></table>&nbsp;
<a href="#uxrcontrollerhapticeventargs-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrcontrollerhapticeventargs-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />