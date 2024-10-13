# UxrAbstractSingleton(*T*) Class
 


A singleton base class that can be used with abstract classes.

The difference with <a href="T_UltimateXR_Core_Components_Singleton_UxrSingleton_1">UxrSingleton(T)</a> is that <a href="T_UltimateXR_Core_Components_Singleton_UxrSingleton_1">UxrSingleton(T)</a> guarantees that an instance will always be available in the scene by instantiating the component if it's not found. This means <a href="P_UltimateXR_Core_Components_Singleton_UxrSingleton_1_Instance">Instance</a> will always be non-null and can be used with or without an instance available in the scene. <a href="T_UltimateXR_Core_Components_Singleton_UxrSingleton_1">UxrSingleton(T)</a> also allows to use automatic prefab instantiation if a compatible singleton prefab is present in a special Resources folder. Since abstract classes can't be instantiated, <a href="P_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_Instance">Instance</a> in UxrAbstractSingleton(T) will be non-null only if a child component is available somewhere in the scene.

For design purposes, a singleton may still be desirable when programming an abstract class, hence this UxrAbstractSingleton(T) component base class.



## Inheritance Hierarchy
<a href="https://docs.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">System.Object</a><br />&nbsp;&nbsp;Object<br />&nbsp;&nbsp;&nbsp;&nbsp;Component<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Behaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonoBehaviour<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_UxrComponent">UltimateXR.Core.Components.UxrComponent</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltimateXR.Core.Components.Singleton.UxrAbstractSingleton(T)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Singleton_UxrAsyncInitAbstractSingleton_1">UltimateXR.Core.Components.Singleton.UxrAsyncInitAbstractSingleton(T)</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="T_UltimateXR_Core_Components_Singleton_UxrSingleton_1">UltimateXR.Core.Components.Singleton.UxrSingleton(T)</a><br />
**Namespace:**&nbsp;<a href="N_UltimateXR_Core_Components_Singleton">UltimateXR.Core.Components.Singleton</a><br />**Assembly:**&nbsp;UltimateXR (in UltimateXR.dll) Version: 0.0.0.0

## Syntax

**C#**<br />
``` C#
public abstract class UxrAbstractSingleton<T> : UxrComponent
where T : UxrAbstractSingleton<T>

```

<a href="UltimateXR/Scripts/Core/Components/Singleton/UxrAbstractSingleton.cs" rel="noopener noreferrer" title="View the source code">View Source</a><br />

#### Type Parameters
&nbsp;<dl><dt>T</dt><dd>Class the singleton is for</dd></dl>&nbsp;
The UxrAbstractSingleton(T) type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1__ctor">UxrAbstractSingleton(T)</a></td><td /></tr></table>&nbsp;
<a href="#uxrabstractsingleton(*t*)-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_HasInstance">HasInstance</a></td><td>
Gets whether there is a singleton instance available.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")![Static member](media/static.gif "Static member")</td><td><a href="P_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_Instance">Instance</a></td><td>
Gets the unique, global instance of the given component.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="P_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_IsInitialized">IsInitialized</a></td><td>
Gets or sets whether the singleton has been initialized.</td></tr><tr><td>![Protected property](media/protproperty.gif "Protected property")</td><td><a href="P_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_NeedsDontDestroyOnLoad">NeedsDontDestroyOnLoad</a></td><td>
Whether the singleton requires DontDestroyOnLoad(Object) applied to the GameObject so that it doesn't get destroyed when a new scene is loaded.</td></tr></table>&nbsp;
<a href="#uxrabstractsingleton(*t*)-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_Awake">Awake</a></td><td>
Tries to set the singleton instance.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_Awake">UxrComponent.Awake()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_GetInstance">GetInstance</a></td><td>
Gets the singleton instance.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_InitInternal">InitInternal</a></td><td>
The default internal initialization. Child classes can override this method if they require initialization code.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_OnDestroy">OnDestroy</a></td><td>
Destroys the singleton instance.
 (Overrides <a href="M_UltimateXR_Core_Components_UxrComponent_OnDestroy">UxrComponent.OnDestroy()</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="M_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_ReleaseInternal">ReleaseInternal</a></td><td>
The default internal release. Child classes can override this method if they required deallocation code.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")![Static member](media/static.gif "Static member")</td><td><a href="M_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_TrySetInstance">TrySetInstance</a></td><td>
Tries to set the singleton instance.</td></tr></table>&nbsp;
<a href="#uxrabstractsingleton(*t*)-class">Back to Top</a>

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
<a href="#uxrabstractsingleton(*t*)-class">Back to Top</a>

## Remarks
&nbsp;<ul><li>Make sure to call base.Awake() first in child classes where <a href="M_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_Awake">Awake()</a> is used.</li><li>Use <a href="P_UltimateXR_Core_Components_Singleton_UxrAbstractSingleton_1_HasInstance">HasInstance</a> to check whether the instance exists.</li></ul>

## See Also


#### Reference
<a href="N_UltimateXR_Core_Components_Singleton">UltimateXR.Core.Components.Singleton Namespace</a><br />