# UxrCcdLink Class
 

Defines a link -bone- in an IK chain solved using CCD.


## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;UltimateXR.Animation.IK.UxrCcdLink<br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_IK">UltimateXR.Animation.IK</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class UxrCcdLink
```

<a href="UltimateXR/Scripts/Animation/IK/UxrCcdLink.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />
The UxrCcdLink type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Animation_IK_UxrCcdLink__ctor">UxrCcdLink</a></td><td>
Default constructor.</td></tr></table>&nbsp;
<a href="#uxrccdlink-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_AlignToGoal">AlignToGoal</a></td><td>
Gets whether the effector should not only try to position itself on the goal but also use the same orientation.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Angle1">Angle1</a></td><td>
Gets rotation degrees around <a href="P_UltimateXR_Animation_IK_UxrCcdLink_RotationAxis1">RotationAxis1</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Angle2">Angle2</a></td><td>
Gets rotation degrees around <a href="P_UltimateXR_Animation_IK_UxrCcdLink_RotationAxis2">RotationAxis2</a>.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Axis1AngleMax">Axis1AngleMax</a></td><td>
Gets the higher angle limits of the first axis.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Axis1AngleMin">Axis1AngleMin</a></td><td>
Gets the lower angle limits of the first axis.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Axis1HasLimits">Axis1HasLimits</a></td><td>
Gets whether the first axis has rotational limits.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Axis2AngleMax">Axis2AngleMax</a></td><td>
Gets the higher angle limits of the second axis when there are two constraints.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Axis2AngleMin">Axis2AngleMin</a></td><td>
Gets the lower angle limits of the second axis when there are two constraints.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Axis2HasLimits">Axis2HasLimits</a></td><td>
Gets whether the second axis has rotational limits when there are two constraints.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Bone">Bone</a></td><td>
Gets the link transform.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Constraint">Constraint</a></td><td>
Gets the link constraint type.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_InitialLocalRotation">InitialLocalRotation</a></td><td>
Gets the local rotation at the beginning.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_LinkLength">LinkLength</a></td><td>
Gets the length of the link.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_LocalSpaceAxis1ZeroAngleVector">LocalSpaceAxis1ZeroAngleVector</a></td><td>
Gets a reference perpendicular to axis1 that is considered as the reference of having 0 degrees around axis1.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_LocalSpaceAxis2ZeroAngleVector">LocalSpaceAxis2ZeroAngleVector</a></td><td>
Gets a reference perpendicular to axis2 that is considered as the reference of having 0 degrees around axis2.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_MtxToLocalParent">MtxToLocalParent</a></td><td>
Gets the transformation matrix that gets from world-space to local space in the parent transform.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_ParentSpaceAxis1">ParentSpaceAxis1</a></td><td>
Gets <a href="P_UltimateXR_Animation_IK_UxrCcdLink_RotationAxis1">RotationAxis1</a> in local space of the parent object.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_ParentSpaceAxis1ZeroAngleVector">ParentSpaceAxis1ZeroAngleVector</a></td><td>
Gets <a href="P_UltimateXR_Animation_IK_UxrCcdLink_LocalSpaceAxis1ZeroAngleVector">LocalSpaceAxis1ZeroAngleVector</a> in local space of the parent object.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_ParentSpaceAxis2">ParentSpaceAxis2</a></td><td>
Gets <a href="P_UltimateXR_Animation_IK_UxrCcdLink_RotationAxis2">RotationAxis2</a> in local space of the parent object.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_ParentSpaceAxis2ZeroAngleVector">ParentSpaceAxis2ZeroAngleVector</a></td><td>
Gets <a href="P_UltimateXR_Animation_IK_UxrCcdLink_LocalSpaceAxis2ZeroAngleVector">LocalSpaceAxis2ZeroAngleVector</a> in local space of the parent object.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_RotationAxis1">RotationAxis1</a></td><td>
Gets the first rotation axis.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_RotationAxis2">RotationAxis2</a></td><td>
Gets the second rotation axis when there are two constraints.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Animation_IK_UxrCcdLink_Weight">Weight</a></td><td>
The weight among all the CCD links in the chain.</td></tr></table>&nbsp;
<a href="#uxrccdlink-class">Back to Top</a>

## Extension Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public Extension Method](media/pubextension.gif "Public Extension Method")</td><td><a href="M_UltimateXR_Extensions_System_ObjectExt_ThrowIfNull">ThrowIfNull</a></td><td>
Throws an exception if the object is null.
 (Defined by <a href="T_UltimateXR_Extensions_System_ObjectExt">ObjectExt</a>.)</td></tr></table>&nbsp;
<a href="#uxrccdlink-class">Back to Top</a>

## See Also


#### Reference
<a href="N_UltimateXR_Animation_IK">UltimateXR.Animation.IK Namespace</a><br /><a href="T_UltimateXR_Animation_IK_UxrCcdIKSolver">UltimateXR.Animation.IK.UxrCcdIKSolver</a><br />