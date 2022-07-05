# GameObjectExt Methods
 

The <a href="T_UltimateXR_Extensions_Unity_GameObjectExt">GameObjectExt</a> type exposes the following members.


## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_CheckSetActive">CheckSetActive</a></td><td>
Activates/deactivates the object if it isn't active already.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_CreateGameObjectAndParentSameTransform">CreateGameObjectAndParentSameTransform</a></td><td>
Creates a new GameObject in the exact same position as the given one and parents it.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_GetGeometricCenter">GetGeometricCenter</a></td><td>
Computes the geometric center of the given GameObject based on all the MeshRenderers in the hierarchy.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_GetOrAddComponent__1">GetOrAddComponent(T)</a></td><td>
Gets the Component of a given type. If it doesn't exist, it is added to the GameObject.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_GetPathUnderScene">GetPathUnderScene</a></td><td>
Gets the path in the scene of the given GameObject.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_GetTopmostCanvas">GetTopmostCanvas</a></td><td>
Gets the topmost <a href="T_UltimateXR_UI_UnityInputModule_UxrCanvas">UxrCanvas</a> upwards in the hierarchy if it exists.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_GetUniqueScenePath">GetUniqueScenePath</a></td><td>
Gets a unique path in the scene for the given GameObject. It will include sibling indices to make it unique.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_IsDynamic">IsDynamic</a></td><td>
Checks whether the given GameObject is dynamic. Since isStatic doesn't work at runtime due to the static flags being editor-only, a workaround is required to try to find out if an object is dynamic or not.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_IsInLayerMask">IsInLayerMask</a></td><td>
Checks whether the given GameObject's layer is present in a layer mask.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_IsPrefab">IsPrefab</a></td><td>
Checks if the given GameObject is a prefab.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_SafeGetComponentInParent__1">SafeGetComponentInParent(T)</a></td><td>
Gets the Component of a given type in the GameObject or any of its parents. It also works on prefabs, where regular GetComponentInParent(Type, Boolean) will not work: https://issuetracker.unity3d.com/issues/getcomponentinparent-is-returning-null-when-the-gameobject-is-a-prefab</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Extensions_Unity_GameObjectExt_SetLayerRecursively">SetLayerRecursively</a></td><td>
Sets the layer of a GameObject and all its children.</td></tr></table>&nbsp;
<a href="#gameobjectext-methods">Back to Top</a>

## See Also


#### Reference
<a href="T_UltimateXR_Extensions_Unity_GameObjectExt">GameObjectExt Class</a><br /><a href="N_UltimateXR_Extensions_Unity">UltimateXR.Extensions.Unity Namespace</a><br />