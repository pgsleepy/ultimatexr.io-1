# UxrUniversalLocalAxes Properties
 

The <a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UxrUniversalLocalAxes</a> type exposes the following members.


## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialLocalPosition">InitialLocalPosition</a></td><td>
Gets the transform's local position at the time of setting the object up.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialLocalReferenceRotation">InitialLocalReferenceRotation</a></td><td>
Gets the transform's rotation with respect to the reference transform at the time of setting the object up. This will only contain a rotation when the constructor using a reference transform was used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialLocalRotation">InitialLocalRotation</a></td><td>
Gets the transform's local rotation at the time of setting the object up.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialPosition">InitialPosition</a></td><td>
Gets the transform's position at the time of setting the object up.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialRotation">InitialRotation</a></td><td>
Gets the transform's rotation at the time of setting the object up.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_InitialUniversalLocalReferenceRotation">InitialUniversalLocalReferenceRotation</a></td><td>
Gets the transform's rotation (in universal coordinates) with respect to the reference transform at the time of setting the object up. This will only contain a rotation when the constructor using a reference transform was used.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_LocalForward">LocalForward</a></td><td>
Gets the universal 'forward' direction in transform's local space.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_LocalRight">LocalRight</a></td><td>
Gets the universal 'right' direction in transform's local space.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_LocalUp">LocalUp</a></td><td>
Gets the universal 'up' direction in transform's local space.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_UniversalLocalRotation">UniversalLocalRotation</a></td><td>
Gets the local object rotation in universal convention</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_UniversalRotation">UniversalRotation</a></td><td>
Gets the object rotation in universal convention</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Code example](media/CodeExample.png "Code example")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_UniversalToActualAxesRotation">UniversalToActualAxesRotation</a></td><td>
Gets the rotation that transforms from the universal axes to the convention that the transform follows. 

## Examples

```
// universalRotation may be a rotation around the y axis, where we know
// exactly that y points upwards in that space.
// This rotation will rotate an object around the "universal" y axis no
// matter where his actual axes point to.
transform.rotation = universalRotation * UniversalToActualAxesRotation;
```</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_WorldForward">WorldForward</a></td><td>
Gets the universal 'forward' direction in world space.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_WorldRight">WorldRight</a></td><td>
Gets the universal 'right' direction in world space.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Math_UxrUniversalLocalAxes_WorldUp">WorldUp</a></td><td>
Gets the universal 'up' direction in world space.</td></tr></table>&nbsp;
<a href="#uxruniversallocalaxes-properties">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Core_Math_UxrUniversalLocalAxes">UxrUniversalLocalAxes Class</a><br /><a href="N_UltimateXR_Core_Math">UltimateXR.Core.Math Namespace</a><br />