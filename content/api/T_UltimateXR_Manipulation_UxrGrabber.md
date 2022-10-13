# UxrGrabber Class
 


Component that added to an <a href="T_UltimateXR_Avatar_UxrAvatar">UxrAvatar</a> allows to interact with <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> entities. Normally there are two per avatar, one on each hand. They are usually added to the hand object since it is the UxrGrabber transform where grabbable objects will be snapped to when snapping is used.

By default, the grabber transform is also used to compute distances to grabbable objects. Additional proximity transforms can be specified on the grabber so that grabbable objects can choose which one is used. This can be useful in some scenarios: In an aircraft cockpit most knobs and buttons will prefer the distance from the tip of the index finger, while bigger objects will prefer from the palm of the hand.



## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrGrabber)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1">UltimateXR.Core.Components.Composite.UxrAvatarComponent</a>(UxrGrabber)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Manipulation.UxrGrabber<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrGrabber : UxrAvatarComponent<UxrGrabber>
```

<a href="UltimateXR/Scripts/Manipulation/UxrGrabber.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrGrabber type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabber__ctor">UxrGrabber</a></td><td /></tr></table>&nbsp;
<a href="#uxrgrabber-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_AngularVelocity">AngularVelocity</a></td><td>
Gets UxrGrabber's current frame angular velocity.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_FingerDirection">FingerDirection</a></td><td>
Gets from all the positive and negative axes in the grabber's transform, the axis in world-space that is pointing to the fingers, excluding the thumb.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_GrabbedObject">GrabbedObject</a></td><td>
Gets the currently grabbed object if there is one. null if no object is being grabbed.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_HandBone">HandBone</a></td><td>
Gets the avatar hand bone that corresponds to the grabber.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_HandBoneRelativePos">HandBoneRelativePos</a></td><td>
Gets the relative position of the hand bone to the grabber.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_HandBoneRelativeRot">HandBoneRelativeRot</a></td><td>
Gets the relative rotation of the hand bone to the grabber.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_HandRenderer">HandRenderer</a></td><td>
Gets or sets the hand renderer.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_LocalFingerDirection">LocalFingerDirection</a></td><td>
Gets from all the positive and negative axes in the grabber's transform, the axis in local-space that is pointing to the fingers, excluding the thumb.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_LocalPalmOutDirection">LocalPalmOutDirection</a></td><td>
Gets from all the positive and negative axes in the grabber's transform, the axis in local-space that is pointing outwards from the palm.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_LocalPalmThumbDirection">LocalPalmThumbDirection</a></td><td>
Gets from all the positive and negative axes in the grabber's transform, the axis in local-space that is pointing towards the thumb.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_OppositeHandGrabber">OppositeHandGrabber</a></td><td>
Gets the opposite hand grabber in the same avatar.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_OppositeSide">OppositeSide</a></td><td>
Gets whether the grabber component is on the left or right hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_PalmOutDirection">PalmOutDirection</a></td><td>
Gets from all the positive and negative axes in the grabber's transform, the axis in world-space that is pointing outwards from the palm..</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_PalmThumbDirection">PalmThumbDirection</a></td><td>
Gets from all the positive and negative axes in the grabber's transform, the axis in world-space that is pointing towards the thumb.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_RequiredMirrorType">RequiredMirrorType</a></td><td>

Gets, based on <a href="P_UltimateXR_Manipulation_UxrGrabber_FingerDirection">FingerDirection</a> and <a href="P_UltimateXR_Manipulation_UxrGrabber_PalmOutDirection">PalmOutDirection</a>, which mirroring snap transforms should use with the grabber if they want to be mirrored.
 Snap transforms are GameObjects in <a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> that determine where the hand should be placed during grabs by making the UxrGrabber's transform align with the snap Transform. Mirroring snap transforms is used to quickly create/modify grab positions/orientations.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_Side">Side</a></td><td>
Gets whether the grabber component is on the left or right hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_SmoothAngularVelocity">SmoothAngularVelocity</a></td><td>
Gets UxrGrabber's angular velocity smoothed using averaged previous frame data.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_SmoothVelocity">SmoothVelocity</a></td><td>
Gets UxrGrabber's velocity smoothed using averaged previous frame data.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_UnprocessedGrabberPosition">UnprocessedGrabberPosition</a></td><td>
The unprocessed grabber position. This is the position the grabber has taking only the hand controller tracking sensor into account. The hand position is updated by the <a href="T_UltimateXR_Manipulation_UxrGrabManager">UxrGrabManager</a> and may be forced into a certain position if the object being grabbed has constraints, altering also the UxrGrabber position. Sometimes it is preferred to use the unprocessed grabber position.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_UnprocessedGrabberRotation">UnprocessedGrabberRotation</a></td><td>
Gets the unprocessed grabber rotation. See <a href="P_UltimateXR_Manipulation_UxrGrabber_UnprocessedGrabberPosition">UnprocessedGrabberPosition</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Manipulation_UxrGrabber_Velocity">Velocity</a></td><td>
Gets UxrGrabber's current frame velocity.</td></tr></table>&nbsp;
<a href="#uxrgrabber-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabber_Awake">Awake</a></td><td>
Initializes the component.
 (Overrides <a href="M_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1_Awake">UxrAvatarComponent(T).Awake()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabber_GetProximityTransform">GetProximityTransform</a></td><td>
Gets the given proximity transform, used to compute distances to<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject</a> entities</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabber_OnDestroy">OnDestroy</a></td><td>
Called when the object is destroyed. Releases any grabbed objects.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_OnDestroy">UxrComponent(T).OnDestroy()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Manipulation_UxrGrabber_OnDisable">OnDisable</a></td><td>
Called when the object is disabled. Releases any grabbed objects.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_OnDisable">UxrComponent(T).OnDisable()</a>.)</td></tr></table>&nbsp;
<a href="#uxrgrabber-class">Back to Top</a>

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
<a href="#uxrgrabber-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />