# UxrHapticImpactEventArgs Constructor 
 

Constructor.

**Namespace:**&nbsp;<a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public UxrHapticImpactEventArgs(
	RaycastHit hitInfo,
	float forceT,
	Vector3 velocity,
	float angleForwardVelocity,
	float anglePenetration
)
```


#### Parameters
&nbsp;<dl><dt>hitInfo</dt><dd>Type: RaycastHit<br />Hit information</dd><dt>forceT</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Hit force</dd><dt>velocity</dt><dd>Type: Vector3<br />Hit velocity</dd><dt>angleForwardVelocity</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Angle between hit transform world forward and hit transform world velocity</dd><dt>anglePenetration</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">System.Single</a><br />Angle between hit transform world and -normal</dd></dl>

## See Also


#### Reference
<a href="T_UltimateXR_Haptics_Helpers_UxrHapticImpactEventArgs">UxrHapticImpactEventArgs Class</a><br /><a href="N_UltimateXR_Haptics_Helpers">UltimateXR.Haptics.Helpers Namespace</a><br />