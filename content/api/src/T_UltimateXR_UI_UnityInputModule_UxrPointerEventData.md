# UxrPointerEventData Class
 

Event data class that adds information required by <a href="T_UltimateXR_UI_UnityInputModule_UxrPointerInputModule">UxrPointerInputModule</a> to facilitate the processing of UI interaction events.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;AbstractEventData<br />&nbsp;&nbsp;&nbsp;&nbsp;BaseEventData<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PointerEventData<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.UI.UnityInputModule.UxrPointerEventData<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_UI_UnityInputModule">UltimateXR.UI.UnityInputModule</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrPointerEventData : PointerEventData
```

<a href="UltimateXR/Scripts/UI/UnityInputModule/UxrPointerEventData.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrPointerEventData type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerEventData__ctor">UxrPointerEventData(EventSystem, UxrFingerTip)</a></td><td>
Constructor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_UI_UnityInputModule_UxrPointerEventData__ctor_1">UxrPointerEventData(EventSystem, UxrLaserPointer)</a></td><td>
Constructor.</td></tr></table>&nbsp;
<a href="#uxrpointereventdata-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_Avatar">Avatar</a></td><td>
Gets the <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> responsible for the interaction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_FingerTip">FingerTip</a></td><td>
Gets the finger tip if this event is being processed by one. Null if not.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_GameObject2D">GameObject2D</a></td><td>
Gets the gameObject if the raycast element is an object with a 2D collider.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_GameObject3D">GameObject3D</a></td><td>
Gets the gameObject if the raycast element is an object with a 3D collider.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_GameObjectClicked">GameObjectClicked</a></td><td>
Gets the GameObject that was clicked, if there was one.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_HandSide">HandSide</a></td><td>
Gets the hand responsible for the interaction.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_HasData">HasData</a></td><td>
Gets whether the event data contains valid information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_IgnoredGameObject">IgnoredGameObject</a></td><td>
Gets the UI gameObject that was ignored because it could not be interacted with.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_IsInteractive">IsInteractive</a></td><td>
Gets whether the current raycast UI element is interactive.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_IsNonUI">IsNonUI</a></td><td>
Gets whether the current raycast UI element is not a UI GameObject. This happens when the raycast is valid and the object has either a 2D or 3D collider.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_LaserPointer">LaserPointer</a></td><td>
Gets the laser pointer if this event is being processed by one. Null if not.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_PressedThisFrame">PressedThisFrame</a></td><td>
Gets whether the pointer is pressing this frame.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_PreviousWorldPos">PreviousWorldPos</a></td><td>
Gets the pointer world position during the last frame.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_ReleasedThisFrame">ReleasedThisFrame</a></td><td>
Gets whether the pointer is pressing this frame.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_Speed">Speed</a></td><td>
Gets the current cursor speed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_WorldPos">WorldPos</a></td><td>
Gets the current pointer world position.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_UI_UnityInputModule_UxrPointerEventData_WorldPosInitialized">WorldPosInitialized</a></td><td>
Gets whether the world position has been initialized.</td></tr></table>&nbsp;
<a href="#uxrpointereventdata-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrpointereventdata-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_UI_UnityInputModule">UltimateXR.UI.UnityInputModule Namespace</a><br />