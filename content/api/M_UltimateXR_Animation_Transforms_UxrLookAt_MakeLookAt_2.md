# UxrLookAt.MakeLookAt Method (GameObject, Vector3, Boolean, Boolean, Boolean)
 

Makes an object look in a specific direction.

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Transforms">UltimateXR.Animation.Transforms</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static void MakeLookAt(
	GameObject gameObject,
	Vector3 direction,
	bool allowRotateAroundVerticalAxis,
	bool allowRotateAroundHorizontalAxis,
	bool invertedForwardAxis
)
```


#### Parameters
&nbsp;<dl><dt>gameObject</dt><dd>Type: GameObject<br />The object that will look at the given direction</dd><dt>direction</dt><dd>Type: Vector3<br />The direction that the object will look at, in world space</dd><dt>allowRotateAroundVerticalAxis</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Should the lookAt alter the rotation around the vertical axis?</dd><dt>allowRotateAroundHorizontalAxis</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />Should the lookAt alter the rotation around the horizontal axis?</dd><dt>invertedForwardAxis</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />If true, the target's forward axis will try to point at the opposite direction where the target is. By default this is false, meaning the forward vector will try to point at the target</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Transforms_UxrLookAt">UxrLookAt Class</a><br /><a href="Overload_UltimateXR_Animation_Transforms_UxrLookAt_MakeLookAt">MakeLookAt Overload</a><br /><a href="N_UltimateXR_Animation_Transforms">UltimateXR.Animation.Transforms Namespace</a><br />