# UxrArmIKSolver Class
 

IK component that implements basic Inverse Kinematics for an arm.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent_1">UltimateXR.Core.Components.UxrComponent</a>(<a href="T_UltimateXR_Animation_IK_UxrIKSolver">UxrIKSolver</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Composite_UxrAvatarComponent_1">UltimateXR.Core.Components.Composite.UxrAvatarComponent</a>(<a href="T_UltimateXR_Animation_IK_UxrIKSolver">UxrIKSolver</a>)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Animation_IK_UxrIKSolver">UltimateXR.Animation.IK.UxrIKSolver</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Animation.IK.UxrArmIKSolver<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_IK">UltimateXR.Animation.IK</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public class UxrArmIKSolver : UxrIKSolver
```

<a href="UltimateXR/Scripts/Animation/IK/UxrArmIKSolver.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrArmIKSolver type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_IK_UxrArmIKSolver__ctor">UxrArmIKSolver</a></td><td /></tr></table>&nbsp;
<a href="#uxrarmiksolver-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrArmIKSolver_Arm">Arm</a></td><td>
Gets the arm bone.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrArmIKSolver_Clavicle">Clavicle</a></td><td>
Gets the clavicle bone.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrArmIKSolver_Forearm">Forearm</a></td><td>
Gets the forearm bone.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrArmIKSolver_Hand">Hand</a></td><td>
Gets the hand bone.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrArmIKSolver_OverExtendMode">OverExtendMode</a></td><td>
Gets or sets what happens when the real hand makes the VR arm to over-extend. This may happen if the user has a longer arm than the VR model, if the controller is placed far away or if the avatar is grabbing an object with constraints that lock the hand position.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrArmIKSolver_RelaxedElbowAperture">RelaxedElbowAperture</a></td><td>
Gets or sets how far [0.0, 1.0] the elbow will from the body when solving the IK. Lower values will bring the elbow closer to the body.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrArmIKSolver_Side">Side</a></td><td>
Gets whether it is the left or right arm.</td></tr></table>&nbsp;
<a href="#uxrarmiksolver-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_IK_UxrArmIKSolver_InternalSolveIK">InternalSolveIK</a></td><td>
Solves the IK for the current frame.
 (Overrides <a href="M_UltimateXR_Animation_IK_UxrIKSolver_InternalSolveIK">UxrIKSolver.InternalSolveIK()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_IK_UxrArmIKSolver_OnDisable">OnDisable</a></td><td>
Unsubscribes from events.
 (Overrides <a href="M_UltimateXR_Animation_IK_UxrIKSolver_OnDisable">UxrIKSolver.OnDisable()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_IK_UxrArmIKSolver_OnEnable">OnEnable</a></td><td>
Subscribe to events.
 (Overrides <a href="M_UltimateXR_Animation_IK_UxrIKSolver_OnEnable">UxrIKSolver.OnEnable()</a>.)</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_IK_UxrArmIKSolver_SolveIKPass">SolveIKPass</a></td><td>
Solves a pass in the Inverse Kinematics.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Animation_IK_UxrArmIKSolver_Start">Start</a></td><td>
Computes internal IK parameters.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_Start">UxrComponent.Start()</a>.)</td></tr></table>&nbsp;
<a href="#uxrarmiksolver-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Animation_IK_UxrArmIKSolver_DefaultArmRangeOfMotionAngle">DefaultArmRangeOfMotionAngle</a></td><td /></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Animation_IK_UxrArmIKSolver_DefaultClavicleDeformation">DefaultClavicleDeformation</a></td><td /></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Animation_IK_UxrArmIKSolver_DefaultClavicleRangeOfMotionAngle">DefaultClavicleRangeOfMotionAngle</a></td><td /></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Animation_IK_UxrArmIKSolver_DefaultElbowAperture">DefaultElbowAperture</a></td><td /></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="F_UltimateXR_Animation_IK_UxrArmIKSolver_DefaultElbowApertureRotation">DefaultElbowApertureRotation</a></td><td /></tr></table>&nbsp;
<a href="#uxrarmiksolver-class">Back to Top</a>

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
<a href="#uxrarmiksolver-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_IK">UltimateXR.Animation.IK Namespace</a><br />