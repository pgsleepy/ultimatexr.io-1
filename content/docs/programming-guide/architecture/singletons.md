---
title: "Singletons"
---

# Singletons

## What is a singleton?

A singleton is a design pattern used in software engineering to ensure that a class has only one instance and provides a global point of access to that instance.

## Singletons in UltimateXR

Singleton support in UltimateXR is facilitated by two main classes: `UxrAbstractSingleton<T>` and `UxrSingleton<T>`.

{{% callout info %}}
As observed on the [Core Components Diagram](/docs/programming-guide/architecture/core-components-diagram), `UxrSingleton` is a subclass from `UxrAbstractSingleton<T>`, which in turn inherits from `UxrComponent`.
{{% /callout %}}

`UxrAbstractSingleton<T>` is a singleton designed to work with abstract classes, which can then serve as a foundation for creating instantiable concrete classes.

`UxrSingleton<T>` is used when the class itself can be instantiated in the scene as a `Component`. In this case the singleton will be a component in the scene.

UltimateXR defines the following singletons, all derived from `UxrSingleton<T>`:
- `UxrManager` : The main manager in UltimateXR. 
- `UxrInstanceManager` : The manager responsible for instantiation.
- `UxrGrabManager` : The manager responsible for handling object manipulation.
- `UxrWeaponManager` : The manager responsible for handling weapons and actors.
- `UxrCompass` : A compass component that guides users towards points of interest by indicating the direction they should look.

## Async Init Singletons

Additionally, two other variants, namely `UxrAsyncInitAbstractSingleton<T>` and `UxrAsyncInitSingleton<T>` are provided when the initialization of the singletons require an asynchronous process using `async`.
This can be used when the singleton requires asynchronous access to a resource for initialization, such as to a webpage or a configuration file.

## Accessing the global instance

The global instance can be accessed using the static `Instance` property. In components derived from `UxrSingleton<T>`, this will ensure that a singleton is present in the scene. If no singleton was pre-instantiated in the scene, a new singleton will be added and registered as the global singleton of that type.

The system will follow three steps:
1. It will look for a singleton component in the scene. If not found, it will try with step 2.
2. It will attempt to load a prefab with the same name from any '/Singletons' folder within the designated '/Resources' Unity folder.
3. If no prefab was found, a new GameObject with the singleton component will be added to the scene.

The first step enables the setup of a predefined prefab as the default singleton. This offers the advantage of having properly configured parameters and pre-assigned resource references.
For example, the `UxrCompass` singleton is a prefab located at /UltimateXR/Resources/Singletons/UxrCompass.prefab which comes preconfigured with parameters and texture references.

The second step guarantees that in the absence of a predefined singleton prefab, a new empty GameObject will be created, and the singleton will be added using `AddComponent()`.

## Creating Custom Singletons

Creating custom singletons can be done by inheriting from the appropriate singleton class. For example:

```c#
public class MySingleton : UxrSingleton<MySingleton>
{

}
```

To designate a prefab as a singleton instance, simply add a prefab named MySingleton to the /Resources/Singletons folder. If no prefab is found, an empty GameObject with a `MySingleton` component will be automatically created.

{{% callout caution %}}
When using Unity methods, just like when deriving from `UxrComponent`, make sure to override them and call the base implementation.
This is especially important in the case of `Awake()`, `Start()`, `OnEnable()`, `OnDisable()` and `OnDestroy()`.
{{% /callout %}}
