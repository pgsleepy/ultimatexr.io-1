# UxrAnimatedTransform.Scale Method 
 

Starts scaling at a constant speed

**Namespace:**&nbsp;<a href="N_UltimateXR_Animation_Transforms">UltimateXR.Animation.Transforms</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public static UxrAnimatedTransform Scale(
	GameObject gameObject,
	Vector3 speed,
	bool useUnscaledTime = false
)
```


#### Parameters
&nbsp;<dl><dt>gameObject</dt><dd>Type: GameObject<br />The GameObject to apply the scaling to</dd><dt>speed</dt><dd>Type: Vector3<br />The scaling speed (units per second in X/Y/Z axes)</dd><dt>useUnscaledTime (Optional)</dt><dd>Type: <a href="https://docs.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">System.Boolean</a><br />If it is true then Time.unscaledTime will be used to count seconds. By default it is false meaning Time.time will be used instead. Time.time is affected by Time.timeScale which in many cases is used for application pauses or bullet-time effects, while Time.unscaledTime is not.</dd></dl>

#### Return Value
Type: <a href="T_UltimateXR_Animation_Transforms_UxrAnimatedTransform">UxrAnimatedTransform</a><br />The animation component

## See Also


#### Reference
<a href="T_UltimateXR_Animation_Transforms_UxrAnimatedTransform">UxrAnimatedTransform Class</a><br /><a href="N_UltimateXR_Animation_Transforms">UltimateXR.Animation.Transforms Namespace</a><br />