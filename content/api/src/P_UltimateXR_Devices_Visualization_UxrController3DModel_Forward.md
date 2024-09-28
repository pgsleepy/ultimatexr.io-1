# UxrController3DModel.Forward Property 
 

Gets the forward transform as it is currently in the scene. It can be different than the actual forward tracking when we use grab mechanics because the hand transform can be modified by the grab manager and the controller usually hangs from the hand hierarchy. If you need to know the forward controller transform using the information of tracking sensors without any intervention by external elements like the grabbing mechanics use <a href="P_UltimateXR_Devices_Visualization_UxrController3DModel_ForwardTrackingRotation">ForwardTrackingRotation</a>.

**Namespace:**&nbsp;<a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public Transform Forward { get; }
```


#### Property Value
Type: Transform

## See Also


#### Reference
<a href="T_UltimateXR_Devices_Visualization_UxrController3DModel">UxrController3DModel Class</a><br /><a href="N_UltimateXR_Devices_Visualization">UltimateXR.Devices.Visualization Namespace</a><br />