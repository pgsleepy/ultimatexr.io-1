# UxrSingleton(*T*) Class
 


An improved singleton implementation over <a href="T_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1">UxrAbstractSingleton(T)</a> for non-abstract classes. UxrSingleton(T) guarantees that an <a href="P_UltimateXR_Core_Components_Singleton_UxrSingleton_1_Instance">Instance</a> will always be available by instantiating the singleton if it wasn't found in the scene. Additionally, it can instantiate a prefab if there is one available in a well-known location.

The steps followed by this singleton implementation to assign the instance are the:
&nbsp;<ol><li>The singleton component is searched in the scene to see if it was pre-instantiated or is already available.</li><li>If not found, the component tries to be instantiated in the scene using a prefab in a well known Resources folder. The well known path is <a href="F_UltimateXR_Core_UxrConstants_Paths_SingletonResources">SingletonResources</a> in any Resources folder and the prefab name is the singleton class name. A prefab allows to assign initial properties to the component and also hang additional resources (meshes, textures) from the GameObject if needed.</li><li>If not found, a new GameObject is instantiated and the singleton is added using AddComponent``1().</li></ol>

## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1">UltimateXR.Core.Components.Singleton.UxrAbstractSingleton</a>(*T*)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Core.Components.Singleton.UxrSingleton(T)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Singleton_UxrAsyncInitSingleton_1">UltimateXR.Core.Components.Singleton.UxrAsyncInitSingleton(T)</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_UxrManager">UltimateXR.Core.UxrManager</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Guides_UxrCompass">UltimateXR.Guides.UxrCompass</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Manipulation_UxrGrabManager">UltimateXR.Manipulation.UxrGrabManager</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Mechanics_Weapons_UxrWeaponManager">UltimateXR.Mechanics.Weapons.UxrWeaponManager</a><br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Components_Singleton">UltimateXR.Core.Components.Singleton</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract class UxrSingleton<T> : UxrAbstractSingleton<T>
where T : UxrSingleton<T>

```

<a href="UltimateXR/Scripts/Core/Components/Singleton/UxrSingleton.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Type the singleton is for. This template can only be used with a hierarchy where *T* is specified at its lowers level (sealed). For use in abstract classes, check <a href="T_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1">UxrAbstractSingleton(T)</a>.</dd></dl>&nbsp;
The UxrSingleton(T) type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Singleton_UxrSingleton_1__ctor">UxrSingleton(T)</a></td><td /></tr></table>&nbsp;
<a href="#uxrsingleton(*t*)-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_Core_Components_Singleton_UxrSingleton_1_Instance">Instance</a></td><td>
Gets the unique, global instance of the given component.</td></tr></table>&nbsp;
<a href="#uxrsingleton(*t*)-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="M_UltimateXR_Core_Components_Singleton_UxrSingleton_1_Poke">Poke</a></td><td>
Dummy method forcing <a href="P_UltimateXR_Core_Components_Singleton_UxrSingleton_1_Instance">Instance</a> to run the instance finding/creation process.</td></tr></table>&nbsp;
<a href="#uxrsingleton(*t*)-class">Back to Top</a>

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
<a href="#uxrsingleton(*t*)-class">Back to Top</a>

## Remarks
The singleton can be a pre-existing component in a scene. If not, <a href="P_UltimateXR_Core_Components_Singleton_UxrSingleton_1_Instance">Instance</a> takes care of instancing it and make it the singleton. This singleton can only be used in sealed classes. For use in abstract classes check <a href="T_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1">UxrAbstractSingleton(T)</a> instead.

## See Also


#### Reference
<a href="N_UltimateXR_Core_Components_Singleton">UltimateXR.Core.Components.Singleton Namespace</a><br />