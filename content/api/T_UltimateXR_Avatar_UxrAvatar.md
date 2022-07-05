# UxrAvatar Class
 


Main class for avatars in the scene. An avatar is the visual representation of a user in the application. The minimal representation requires a single camera that allows the user to look around. More elements can be added such as hands to interact with the environment or a half/full body to have a more complete representation.

A special avatar is the local avatar, which is the avatar controlled by the user using the headset and input controllers. Non-local avatars are other avatars instantiated in the scene but not controlled by the user, either other users through the network or special cases such as automated replays. A quick way to access the local avatar is by using the <a href="P_UltimateXR_Avatar_UxrAvatar_LocalAvatar">UxrAvatar.LocalAvatar</a> static property.

Although avatars may contain significant information and components, the avatar is not in charge of updating itself. Local avatars are updated by the <a href="T_UltimateXR_Avatar_Controllers_UxrAvatarController">UxrAvatarController</a> added to the same GameObject where the UxrAvatar is. This allows to separate the update logic and functionality from the avatar representation. The standard avatar controller provided by UltimateXR is the <a href="T_UltimateXR_Avatar_Controllers_UxrStandardAvatarController">UxrStandardAvatarController</a> component. It provides high-level functionality to interact with the virtual world. Different update logic can be created by programming a new <a href="T_UltimateXR_Avatar_Controllers_UxrAvatarController">UxrAvatarController</a> component if required.

Non-local avatars (Avatars whose <a href="T_UltimateXR_Avatar_UxrAvatarMode">UxrAvatar.AvatarMode</a> is <a href="T_UltimateXR_Avatar_UxrAvatarMode">UpdateExternally</a>) can be updated by accessing their rig using <a href="P_UltimateXR_Avatar_UxrAvatar_AvatarRig">AvatarRig</a>.

Local avatar update logic is handled automatically by the <a href="T_UltimateXR_Core_UxrManager">UxrManager</a> singleton without requiring any user intervention.



## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(UxrAvatar)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Avatar.UxrAvatar<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Avatar">UltimateXR.Avatar</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[DisallowMultipleComponent]
public class UxrAvatar : UxrComponent<UxrAvatar>, 
	IUxrStateSync
```

<a href="UltimateXR/Scripts/Avatar/UxrAvatar.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrAvatar type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar__ctor">UxrAvatar</a></td><td /></tr></table>&nbsp;
<a href="#uxravatar-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_AllControllerInputs">AllControllerInputs</a></td><td>
Gets all (enabled or disabled) controller inputs belonging to the avatar, except for any <a href="T_UltimateXR_Devices_Integrations_UxrDummyControllerInput">UxrDummyControllerInput</a> component.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_AvatarController">AvatarController</a></td><td>
Gets the avatar controller, responsible for updating the avatar.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_AvatarMode">AvatarMode</a></td><td>
Gets or sets the avatar operating mode.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_AvatarRenderers">AvatarRenderers</a></td><td>
Gets the renderers used by the avatar, excluding controllers and everything related to them.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_AvatarRig">AvatarRig</a></td><td>
Gets the avatar rig.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_AvatarRigInfo">AvatarRigInfo</a></td><td>
Gets the avatar rig information.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_AvatarRigType">AvatarRigType</a></td><td>
Gets the avatar rig type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_CameraComponent">CameraComponent</a></td><td>
Gets the avatar's camera component.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_CameraController">CameraController</a></td><td>
Gets the Transform of the camera controller (the parent transform of the avatar's camera).</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_CameraFade">CameraFade</a></td><td>
Gets the avatar's camera fade component. If the camera doesn't currently have one, it will be added.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_CameraFloorPosition">CameraFloorPosition</a></td><td>
Gets the avatar's camera floor position: the camera position projected on the floor. This is useful when testing if the avatar is near a well known place or to trigger certain events.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_CameraForward">CameraForward</a></td><td>
Gets the avatar's camera forward vector.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_CameraPosition">CameraPosition</a></td><td>
Gets the avatar's camera position.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_CameraTransform">CameraTransform</a></td><td>
Gets the avatar's camera transform.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_ControllerInput">ControllerInput</a></td><td>
Gets the first enabled controller input belonging to the avatar. If there is no enabled controller input available, to avoid null checks, it returns a dummy component that sends no input events.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_DefaultHandPose">DefaultHandPose</a></td><td>
Gets or sets the default hand pose. The default hand pose is the pose a hand will have when no other event that changes the pose is happening. Usually it is a neutral, relaxed pose.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_DefaultHandPoseName">DefaultHandPoseName</a></td><td>
Gets the default hand pose name or null if there isn't any default hand pose set.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_EnabledControllerInputs">EnabledControllerInputs</a></td><td>
Gets the currently enabled controller inputs belonging to the avatar, except for any <a href="T_UltimateXR_Devices_Integrations_UxrDummyControllerInput">UxrDummyControllerInput</a> component.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_FingerTips">FingerTips</a></td><td>
Gets all the enabled <a href="T_UltimateXR_UI_UxrFingerTip">UxrFingerTip</a> components in the avatar.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_FirstControllerTracking">FirstControllerTracking</a></td><td>
Gets the first enabled tracking device that inherits from <a href="T_UltimateXR_Devices_UxrControllerTracking">UxrControllerTracking</a>, meaning a standard left+right controller setup.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_HasDummyControllerInput">HasDummyControllerInput</a></td><td>
Gets whether the current controller input is a dummy controller input component. Dummy controller input is used when there is no VR input device available in order to avoid null checking.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_IsPrefabVariant">IsPrefabVariant</a></td><td>
Gets whether the avatar's prefab has a parent avatar prefab.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_LaserPointers">LaserPointers</a></td><td>
Gets all the enabled <a href="T_UltimateXR_UI_UxrLaserPointer">UxrLaserPointer</a> components in the avatar.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_LeftGrabber">LeftGrabber</a></td><td>
Gets the left hand's grabber component. Null if no left <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> component was found.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_LeftHand">LeftHand</a></td><td>
Gets the left hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_LeftHandBone">LeftHandBone</a></td><td>
Gets the left hand bone.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_LocalAvatar">LocalAvatar</a></td><td>
Gets the local avatar or null if there is none.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_LocalAvatarCamera">LocalAvatarCamera</a></td><td>
Gets the camera component of the local avatar. If there is no local avatar it will return null.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_LocalAvatarInput">LocalAvatarInput</a></td><td>
Gets the controller input of the local avatar. If there is a local avatar present, the controller input is guaranteed to be non-null. If there is no input available, the controller input will simply return a dummy object that will generate no input events. It will return null if there is no local avatar currently in the scene.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_ParentAvatarPrefab">ParentAvatarPrefab</a></td><td>
Gets the <a href="P_UltimateXR_Avatar_UxrAvatar_ParentPrefab">ParentPrefab</a>'s UxrAvatar component.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_ParentPrefab">ParentPrefab</a></td><td>
Gets the parent prefab GameObject, if it exists.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_PrefabGuid">PrefabGuid</a></td><td>
Gets the avatar prefab Guid. It is stored instead of the GameObject because storing the GameObject would make an instantiated avatar reference itself, instead of the source prefab.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_ProjectedCameraForward">ProjectedCameraForward</a></td><td>
Gets the avatar's camera forward vector projected onto the XZ plane, the floor.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_RenderMode">RenderMode</a></td><td>
Gets or sets the avatar render mode.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_RightGrabber">RightGrabber</a></td><td>
Gets the right hand's grabber component. Null if no right <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> component was found.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_RightHand">RightHand</a></td><td>
Gets the right hand.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_RightHandBone">RightHandBone</a></td><td>
Gets the right hand bone.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_ShowControllerHands">ShowControllerHands</a></td><td>
Gets or sets whether the hands will be shown when the controllers are being rendered.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Avatar_UxrAvatar_TrackingDevices">TrackingDevices</a></td><td>
Returns all available enabled tracking devices.</td></tr></table>&nbsp;
<a href="#uxravatar-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_Awake">Awake</a></td><td>
Initializes the avatar.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_1_Awake">UxrComponent(T).Awake()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_ClearRigElements">ClearRigElements</a></td><td>
Clears all the <a href="P_UltimateXR_Avatar_UxrAvatar_AvatarRig">AvatarRig</a> element references.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_EnableFingerTips">EnableFingerTips</a></td><td>
Enables or disables the <a href="T_UltimateXR_UI_UxrFingerTip">UxrFingerTip</a> components in the avatar.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_EnableLaserPointers">EnableLaserPointers</a></td><td>
Enables or disables the <a href="T_UltimateXR_UI_UxrLaserPointer">UxrLaserPointer</a> components in the avatar.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_EnableLocomotion">EnableLocomotion</a></td><td>
Enables or disables the <a href="T_UltimateXR_Locomotion_UxrLocomotion">UxrLocomotion</a> components in the avatar.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetAllHandPoses">GetAllHandPoses</a></td><td>
Gets all hand poses in the avatar, including those inherited from parent prefabs. If more than one pose exists with the same name, only the overriden will be in the results.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetAvatarChain">GetAvatarChain</a></td><td>
Gets the UxrAvatar component chain. This is the avatar's own UxrAvatar component followed by all parent prefab UxrAvatar components up to the root parent prefab. If the avatar is an instance the first component will reference its own component instantiated in the scene, not the avatar component in the source prefab. <a href="M_UltimateXR_Avatar_UxrAvatar_GetPrefabGuidChain">GetPrefabGuidChain()</a> can be used to traverse the prefab chain information including the source prefab.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetControllerInputForward">GetControllerInputForward</a></td><td>
Gets the transform in the given hand controller that points forward. The controller needs to have a 3D model assigned to it, which all controllers in the framework have.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetCurrentRuntimeHandPose">GetCurrentRuntimeHandPose</a></td><td>
Gets the current runtime hand pose.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetGrabber">GetGrabber</a></td><td>
Gets the <a href="T_UltimateXR_Manipulation_UxrGrabber">UxrGrabber</a> component for the given hand.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetHand">GetHand</a></td><td>
Gets the <a href="T_UltimateXR_Avatar_Rig_UxrAvatarHand">UxrAvatarHand</a> rig information for the given hand.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetHandBone">GetHandBone</a></td><td>
Gets the given hand bone.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetHandPose">GetHandPose</a></td><td>
Gets a given hand pose. It can happen that the pose name is present in a prefab/instance and at the same time also in any of the parent prefabs upwards in the hierarchy. In this case the hand pose in the child will always have priority so that child prefabs can override poses that they inherit from parent prefabs.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetHandPoses">GetHandPoses</a></td><td>
Gets the hand poses in the avatar, not counting those inherited from parent prefabs.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetInitialBoneLocalPosition">GetInitialBoneLocalPosition</a></td><td>
Gets the initial local position of the given avatar bone.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetInitialBoneLocalRotation">GetInitialBoneLocalRotation</a></td><td>
Gets the initial local rotation of the given avatar bone.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetParentPrefab">GetParentPrefab(String)</a></td><td>
Gets the parent prefab that stores a given hand pose.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetParentPrefab_1">GetParentPrefab(UxrHandPoseAsset)</a></td><td>
Gets the parent prefab that stores a given hand pose.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetParentPrefabChain">GetParentPrefabChain</a></td><td>
Gets the parent prefab chain. These are all parent prefabs up to the root parent prefab.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetPrefabGuidChain">GetPrefabGuidChain</a></td><td>
Gets the prefab GUID chain. This is the source prefab Guid followed by all parent prefab GUIDs up to the root parent prefab.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_GetRuntimeHandPose">GetRuntimeHandPose</a></td><td>
Gets a given hand pose. This method is intended for use at runtime to animate the avatars. While <a href="M_UltimateXR_Avatar_UxrAvatar_GetHandPose">GetHandPose(String, Boolean)</a> uses <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UxrHandPoseAsset</a>, <a href="M_UltimateXR_Avatar_UxrAvatar_GetRuntimeHandPose">GetRuntimeHandPose(String)</a> uses <a href="T_UltimateXR_Avatar_Rig_UxrRuntimeHandPose">UxrRuntimeHandPose</a>. The main differences are:
&nbsp;<ul><li><a href="T_UltimateXR_Avatar_Rig_UxrRuntimeHandPose">UxrRuntimeHandPose</a> objects contain transforms that require less operations and are valid only for this avatar. They are high-performant and cached at the beginning, making them only available at runtime. They are used to animate the avatar hands at runtime.</li><li><a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseAsset">UxrHandPoseAsset</a> objects contain transforms that are independent of the coordinate system used. They require more operations but can be applied to any avatar. They are mainly used in editor mode.</li></ul></td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_IsHandPoseOverriden_1">IsHandPoseOverriden(UxrHandPoseAsset)</a></td><td>
Checks if a given pose has been overriden in the prefab hierarchy.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_IsHandPoseOverriden">IsHandPoseOverriden(String, UxrAvatar)</a></td><td>
Checks if a given pose has been overriden in any point in the prefab hierarchy.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_IsLookingAt">IsLookingAt</a></td><td>
Checks if the avatar is looking at a point in space.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_IsPrefabCompatibleWith">IsPrefabCompatibleWith</a></td><td>
Checks whether the avatar shares the same prefab or is a prefab variant of another avatar.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_OnHandPoseChanged">OnHandPoseChanged</a></td><td>
Event trigger for the <a href="E_UltimateXR_Avatar_UxrAvatar_HandPoseChanged">HandPoseChanged</a> and [!:GlobalHandPoseChanged] events.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_OnHandPoseChanging">OnHandPoseChanging</a></td><td>
Event trigger for the <a href="E_UltimateXR_Avatar_UxrAvatar_HandPoseChanging">HandPoseChanging</a> and [!:GlobalHandPoseChanging] events.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_SetCameraAtFloorLevel">SetCameraAtFloorLevel</a></td><td>
Places the camera at floor level.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_SetCurrentHandPose">SetCurrentHandPose</a></td><td>
Sets the currently active pose for a given hand in the avatar at runtime. Blending is used to transition between poses smoothly, which means the pose is not immediately adopted. To adopt a pose immediately at a given instant use <a href="M_UltimateXR_Avatar_UxrAvatar_SetCurrentHandPoseImmediately">SetCurrentHandPoseImmediately(UxrHandSide, UxrHandPoseAsset, UxrBlendPoseType)</a> instead.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_SetCurrentHandPoseBlendValue">SetCurrentHandPoseBlendValue</a></td><td>
Sets the currently active pose blend value, if the current pose is <a href="T_UltimateXR_Manipulation_HandPoses_UxrHandPoseType">Blend</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_SetCurrentHandPoseImmediately">SetCurrentHandPoseImmediately</a></td><td>
Adopts a given hand pose by changing the transforms immediately. The bones may be overriden at any other point or the next frame if there is a hand pose currently enabled using <a href="M_UltimateXR_Avatar_UxrAvatar_SetCurrentHandPose">SetCurrentHandPose(UxrHandSide, String, Single, Boolean)</a>.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_SetupRigElementsFromAnimator">SetupRigElementsFromAnimator</a></td><td>
Sets up the <a href="P_UltimateXR_Avatar_UxrAvatar_AvatarRig">AvatarRig</a> using information from the Animator if it describes a humanoid avatar.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_Start">Start</a></td><td>
Additional avatar initialization.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_Start">UxrComponent.Start()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_SyncState">SyncState</a></td><td>
Executes the state change described by [!:e].</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Avatar_UxrAvatar_TryToInferMissingRigElements">TryToInferMissingRigElements</a></td><td>
Tries to infer rig elements by doing some checks on names and bone hierarchy. This is useful when we have a rig that has no full humanoid avatar set up on its animator .</td></tr></table>&nbsp;
<a href="#uxravatar-class">Back to Top</a>

## Events
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_AvatarUpdated">AvatarUpdated</a></td><td>
Event called right after the avatar goes through an <a href="T_UltimateXR_Core_UxrUpdateStage">UxrUpdateStage</a> of the updating process.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_AvatarUpdating">AvatarUpdating</a></td><td>
Event called right before before the avatar goes through an <a href="T_UltimateXR_Core_UxrUpdateStage">UxrUpdateStage</a> of the updating process.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_HandPoseChanged">HandPoseChanged</a></td><td>
Event called right after the avatar changed a hand's pose.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_HandPoseChanging">HandPoseChanging</a></td><td>
Event called right before the avatar is about to change a hand's pose.</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")![Static member](media/static.gif "Static member")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_LocalAvatarStarted">LocalAvatarStarted</a></td><td>
Event called right after after the local avatar called its Start(). This is useful when the avatar is instantiated in a deferred way, such as a networking environment, and the avatar isn't ready during Awake()/OnEnable()/Start().</td></tr><tr><td>![Public event](media/pubevent.gif "Public event")</td><td><a href="E_UltimateXR_Avatar_UxrAvatar_StateChanged">StateChanged</a></td><td>
Event raised when a relevant state of an object changed and requires storage/synchronization.</td></tr></table>&nbsp;
<a href="#uxravatar-class">Back to Top</a>

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
<a href="#uxravatar-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Avatar">UltimateXR.Avatar Namespace</a><br />