# UxrTrackingDevice Class
 

Base class for tracking devices.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrTrackingDevice)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1">UltimateXR.Core.Components.Composite.UxrAvatarComponent</a>(UxrTrackingDevice)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Devices.UxrTrackingDevice<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Devices_UxrControllerTracking">UltimateXR.Devices.UxrControllerTracking</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Devices_UxrHandTracking">UltimateXR.Devices.UxrHandTracking</a><br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Devices">UltimateXR.Devices</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract class UxrTrackingDevice : UxrAvatarComponent<UxrTrackingDevice>, 
	IUxrTrackingDevice, IUxrDevice
```

<a href="UltimateXR/Scripts/Devices/UxrTrackingDevice.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrTrackingDevice type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_UxrTrackingDevice__ctor">UxrTrackingDevice</a></td><td /></tr></table>&nbsp;
<a href="#uxrtrackingdevice-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_Devices_UxrTrackingDevice_HeadsetDeviceName">HeadsetDeviceName</a></td><td>
Gets the headset device name.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrTrackingDevice_SDKDependency">SDKDependency</a></td><td>
Gets the SDK the implemented device needs in order to be available. It should be null or empty if there is no SDK dependency. Otherwise is should use any of the SDK names in <a href="T_UltimateXR_Core_UxrManager">UxrManager</a>. For example if requires the Oculus SDK, it should return <a href="F_UltimateXR_Core_UxrManager_SdkOculus">SdkOculus</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Devices_UxrTrackingDevice_TrackingUpdateOrder">TrackingUpdateOrder</a></td><td>
There are cases where more than one tracking device might be active. We use TrackingUpdateOrder for cases where there is one that should be applied after the other(s). For example an Oculus Rift together with a Leap Motion setup has one tracking component for each. But Leap Motion should override the tracking values of the rift controllers if the Leap Motion component is active. In this case Oculus, like most tracking devices, has a value of <a href="F_UltimateXR_Devices_UxrTrackingDevice_OrderStandard">OrderStandard</a> while Leap Motion has a value of <a href="F_UltimateXR_Devices_UxrTrackingDevice_OrderPostprocess">OrderPostprocess</a> so that the tracking devices update the avatar in the correct order.</td></tr></table>&nbsp;
<a href="#uxrtrackingdevice-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Devices_UxrTrackingDevice_GetHeadsetDevice">GetHeadsetDevice</a></td><td>
Tries to get the connected headset device.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_UxrTrackingDevice_OnAvatarUpdated">OnAvatarUpdated</a></td><td>
Event trigger for the <a href="E_UltimateXR_Devices_UxrTrackingDevice_AvatarUpdated">AvatarUpdated</a> event. Can be used to override in child classes in order to use the event without subscribing to the parent.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_UxrTrackingDevice_OnAvatarUpdating">OnAvatarUpdating</a></td><td>
Event trigger for the <a href="E_UltimateXR_Devices_UxrTrackingDevice_AvatarUpdating">AvatarUpdating</a> event. Can be used to override in child classes in order to use the event without subscribing to the parent.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_UxrTrackingDevice_OnDestroy">OnDestroy</a></td><td>
Sets events to null in order to help remove unused references.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_OnDestroy">UxrComponent(T).OnDestroy()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_UxrTrackingDevice_OnDeviceConnected">OnDeviceConnected</a></td><td>
Event trigger for the <a href="E_UltimateXR_Devices_UxrTrackingDevice_DeviceConnected">DeviceConnected</a> event. Can be used to override in child classes in order to use the event without subscribing to the parent.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_UxrTrackingDevice_OnSensorsUpdated">OnSensorsUpdated</a></td><td>
Event trigger for the <a href="E_UltimateXR_Devices_UxrTrackingDevice_SensorsUpdated">SensorsUpdated</a> event. Can be used to override in child classes in order to use the event without subscribing to the parent.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_UxrTrackingDevice_OnSensorsUpdating">OnSensorsUpdating</a></td><td>
Event trigger for the <a href="E_UltimateXR_Devices_UxrTrackingDevice_SensorsUpdating">SensorsUpdating</a> event. Can be used to override in child classes in order to use the event without subscribing to the parent.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_UxrTrackingDevice_UpdateAvatar">UpdateAvatar</a></td><td>
Overriden in child classes to implement the update of the avatar using the current sensor data.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Devices_UxrTrackingDevice_UpdateSensors">UpdateSensors</a></td><td>
Overriden in child classes to implement the update of the current sensor data.</td></tr></table>&nbsp;
<a href="#uxrtrackingdevice-class">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Devices_UxrTrackingDevice_AvatarUpdated">AvatarUpdated</a></td><td>
Event called right after updating an avatar with the current sensor data.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Devices_UxrTrackingDevice_AvatarUpdating">AvatarUpdating</a></td><td>
Event called right before updating an avatar with the current sensor data.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Devices_UxrTrackingDevice_DeviceConnected">DeviceConnected</a></td><td>
Event called whenever the device is connected or disconnected</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Devices_UxrTrackingDevice_SensorsUpdated">SensorsUpdated</a></td><td>
Event called right after updating sensor data.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Devices_UxrTrackingDevice_SensorsUpdating">SensorsUpdating</a></td><td>
Event called right before updating sensor data.</td></tr></table>&nbsp;
<a href="#uxrtrackingdevice-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Devices_UxrTrackingDevice_OrderPostprocess">OrderPostprocess</a></td><td>
Default update order for post-process tracking devices such as hand-tracking.</td></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Devices_UxrTrackingDevice_OrderStandard">OrderStandard</a></td><td>
Default update order.</td></tr></table>&nbsp;
<a href="#uxrtrackingdevice-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_MonoBehaviourExt_CheckSetEnabled">CheckSetEnabled</a></td><td>
Enables/disabled the component if it isn't enabled already.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_MonoBehaviourExt">MonoBehaviourExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetOrAddComponent__1">GetOrAddComponent(T)</a></td><td>
Gets the Component of a given type. If it doesn't exist, it is added to the GameObject.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetPathUnderScene">GetPathUnderScene</a></td><td>
Gets the full path under current scene, including all parents, but scene name, for the given component.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetSceneUid">GetSceneUid</a></td><td>
Gets an unique identifier string for the given component.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_GetUniqueScenePath">GetUniqueScenePath</a></td><td>
Gets an unique path in the scene for the given component. It will include scene name, sibling and component indices to make it unique.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_MonoBehaviourExt_LoopCoroutine">LoopCoroutine</a></td><td>
Creates a coroutine that simplifies executing a loop during a certain amount of time.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_MonoBehaviourExt">MonoBehaviourExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ComponentExt_SafeGetComponentInParent__1">SafeGetComponentInParent(T)</a></td><td>
Gets the Component of a given type in the GameObject or any of its parents. It also works on prefabs, where regular GetComponentInParent(Type, Boolean) will not work: https://issuetracker.unity3d.com/issues/getcomponentinparent-is-returning-null-when-the-gameobject-is-a-prefab
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ComponentExt">ComponentExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ObjectExt_ShowInInspector">ShowInInspector(Boolean)</a></td><td>Overloaded.  
Controls whether to show the current object in the inspector.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ObjectExt">ObjectExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_Unity_ObjectExt_ShowInInspector_1">ShowInInspector(Boolean, Boolean)</a></td><td>Overloaded.  
Controls whether to show the current object in the inspector and whether it is editable.
 (Defined by <a href="T_UltimateXR_Extensions_Unity_ObjectExt">ObjectExt</a>.)</td></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrtrackingdevice-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Devices">UltimateXR.Devices Namespace</a><br />