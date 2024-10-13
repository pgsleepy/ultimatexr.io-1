# UxrFingerNodeDescriptor.Compute Method 
 

Creates a well-known axes system for a node, to handle transforms independently of the coordinate system being used by a hand rig.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public void Compute(
	Transform hand,
	Transform parent,
	Transform node,
	UxrUniversalLocalAxes parentLocalAxes,
	UxrUniversalLocalAxes nodeLocalAxes,
	bool computeRelativeMatrixOnly
)
```


#### Parameters
&nbsp;<dl><dt>hand</dt><dd>Type: Transform<br />Hand node</dd><dt>parent</dt><dd>Type: Transform<br />Parent node</dd><dt>node</dt><dd>Type: Transform<br />Current node being created</dd><dt>parentLocalAxes</dt><dd>Type: <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UltimateXR.Core.Math.UxrUniversalLocalAxes</a><br />In local coordinates, which parent axes point to the well-known right, up and forward directions</dd><dt>nodeLocalAxes</dt><dd>Type: <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UltimateXR.Core.Math.UxrUniversalLocalAxes</a><br />In local coordinates, which node axes point to the well-known right, up and forward directions</dd><dt>computeRelativeMatrixOnly</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Whether to compute only the <a href="P_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor_TransformRelativeToHand">TransformRelativeToHand</a> value</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_HandPoses_UxrFingerNodeDescriptor">UxrFingerNodeDescriptor Structure</a><br /><a href="N_UltimateXR_Manipulation_HandPoses">UltimateXR.Manipulation.HandPoses Namespace</a><br />