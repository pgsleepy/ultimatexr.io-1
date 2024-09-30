# UxrGrabbableObjectAnchor Class
 

Component that, added to a GameObject, will enable <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> objects to be placed on it. Some of the main features of grabbable object anchors are:
&nbsp;<ul><li>Placement mechanics are handled automatically by the <a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager</a>. There is no special requirement to set it up in a scene, the grab manager will be available as soon as it is required.</li><li>Compatible tags allow to model which objects can be placed on the anchor. If the list is empty, the anchor is compatible with all other <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> that do not have a tag.</li><li>Events such as <a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Placed">Placed</a> and <a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Removed">Removed</a> allow to write logic when a user interacts with the anchor. Each one has pre and post events.</li><li><a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_ActivateOnCompatibleNear">ActivateOnCompatibleNear</a>, <a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_ActivateOnCompatibleNotNear">ActivateOnCompatibleNotNear</a>, <a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_ActivateOnHandNearAndGrabbable">ActivateOnHandNearAndGrabbable</a>, <a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_ActivateOnPlaced">ActivateOnPlaced</a> and <a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_ActivateOnEmpty">ActivateOnEmpty</a> can be used to activate/deactivate objects on manipulation events. They can be assigned during edit-time using the inspector and also at runtime.</li><li><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_AddPlacingValidator">AddPlacingValidator(Func(UxrGrabbableObject, Boolean))</a> and <a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_RemovePlacingValidator">RemovePlacingValidator(Func(UxrGrabbableObject, Boolean))</a> can be used to model complex compatibility behaviour that changes at runtime.</li></ul>

## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrGrabbableObjectAnchor)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Manipulation.UxrGrabbableObjectAnchor<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrGrabbableObjectAnchor : UxrComponent<UxrGrabbableObjectAnchor>
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabbableObjectAnchor.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrGrabbableObjectAnchor type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor__ctor">UxrGrabbableObjectAnchor</a></td><td /></tr></table>&nbsp;
<a href="#uxrgrabbableobjectanchor-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_ActivateOnCompatibleNear">ActivateOnCompatibleNear</a></td><td>
Gets or sets the object that will be enabled or disabled depending on if there is a grabbed compatible <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> close enough to be placed on it.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_ActivateOnCompatibleNotNear">ActivateOnCompatibleNotNear</a></td><td>
Gets or sets the object that will be enabled or disabled depending on if there isn't a grabbed compatible <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> close enough to be placed on it.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_ActivateOnEmpty">ActivateOnEmpty</a></td><td>
Gets or sets the object that will be enabled or disabled depending on if there isn't a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> currently placed on the anchor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_ActivateOnHandNearAndGrabbable">ActivateOnHandNearAndGrabbable</a></td><td>
Gets or sets the object that will be enabled or disabled depending on if there is a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> currently placed on the anchor and a <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> close enough to grab it.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_ActivateOnPlaced">ActivateOnPlaced</a></td><td>
Gets or sets the object that will be enabled or disabled depending on if there is a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> currently placed on the anchor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_AlignTransform">AlignTransform</a></td><td>
Gets the Transform that will be used to snap the <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> placed on it.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_CurrentPlacedObject">CurrentPlacedObject</a></td><td>
Gets the <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> that is currently placed on the anchor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_DropProximityTransform">DropProximityTransform</a></td><td>
Gets the Transform that will be used to compute the distance to <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> that can be placed on it, in order to determine if they are close enough.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_MaxPlaceDistance">MaxPlaceDistance</a></td><td>
Gets or sets the maximum distance from which an object that is released will be placed on the anchor.</td></tr></table>&nbsp;
<a href="#uxrgrabbableobjectanchor-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_AddCompatibleTags">AddCompatibleTags</a></td><td>
Adds compatible tags to the list of compatible tags that control which objects can be placed on the anchor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_AddPlacingValidator">AddPlacingValidator</a></td><td>
Adds a placing validator to the internal list of validators. Placing validators are functions that are used in addition to compatibility tags in order to determine if a <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> can be placed on the anchor. An object can be placed on an anchor if the tag is compatible and if it is allowed by all of the placing validators.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Awake">Awake</a></td><td>
Initializes the component.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_Awake">UxrComponent(T).Awake()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_IsCompatibleObject">IsCompatibleObject</a></td><td>
Checks whether the given <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> is compatible with the anchor, which means that it can potentially be placed on it if there is no other object placed.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_OnDestroy">OnDestroy</a></td><td>
Removes the validators.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_OnDestroy">UxrComponent(T).OnDestroy()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_RemoveCompatibleTags">RemoveCompatibleTags</a></td><td>
Removes compatible tags from the list of compatible tags that control which objects can be placed on the anchor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_RemoveObject">RemoveObject</a></td><td>
Removes the currently placed object, if there is any, from the anchor.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_RemovePlacingValidator">RemovePlacingValidator</a></td><td>
Removes a placing validator added using <a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_AddPlacingValidator">AddPlacingValidator(Func(UxrGrabbableObject, Boolean))</a>.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Start">Start</a></td><td>
Performs additional initialization.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_Start">UxrComponent.Start()</a>.)</td></tr></table>&nbsp;
<a href="#uxrgrabbableobjectanchor-class">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Placed">Placed</a></td><td>
Event called right after an object was placed on the anchor.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Placing">Placing</a></td><td>
Event called right before an object is placed on the anchor.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Removed">Removed</a></td><td>
Event called right after the currently placed object is removed from the anchor.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_Removing">Removing</a></td><td>
Event called right before the currently placed object is removed from the anchor.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Manipulation_UxrGrabbableObjectAnchor_SmoothPlaceTransitionEnded">SmoothPlaceTransitionEnded</a></td><td>
Event called right after an object that was placed on the anchor ended its smooth placing transition.</td></tr></table>&nbsp;
<a href="#uxrgrabbableobjectanchor-class">Back to Top</a>

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
<a href="#uxrgrabbableobjectanchor-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />