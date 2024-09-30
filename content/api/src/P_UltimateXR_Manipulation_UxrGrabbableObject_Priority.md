# UxrGrabbableObject.Priority Property 
 

Gets or sets the object priority. The priority is used to control which object will be grabbed when multiple objects are in reach and the user performs the grab gesture. The default behaviour is to use the distance and orientation to the objects in reach to select the one with the closest grip. The priority can override this behaviour by selecting the one with the highest priority value. By default all objects have priority 0.

**Namespace:**&nbsp;<a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public int Priority { get; set; }
```


#### Property Value
Type: <a href="https://docs.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

## See Also


#### Reference
<a href="T_UltimateXR_Manipulation_UxrGrabbableObject">UxrGrabbableObject Class</a><br /><a href="N_UltimateXR_Manipulation">UltimateXR.Manipulation Namespace</a><br />