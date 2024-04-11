---
title: "Singletons"
---

# Singletons

## What is a singleton?

A singleton is a design pattern used in software engineering to ensure that a class has only one instance and provides a global point of access to that instance.

## Singletons in UltimateXR

Singleton support in UltimateXR is facilitated by two main classes: `UxrAbstractSingleton<T>` and `UxrSingleton<T>`.

As observed on the [Class Diagram](/docs/programming-guide/architecture-class-diagram), `UxrSingleton` is a subclass from `UxrAbstractSingleton<T>`, which in turn inherits from `UxrComponent`.

`UxrAbstractSingleton<T>` is a singleton designed to work with abstract classes, which can then serve as a foundation for creating instantiable concrete classes.

`UxrSingleton<T>` is used when the class itself can be instantiated in the scene as a `Component`. In this case the singleton will be a component in the scene.

UltimateXR defines the following singletons, all derived from `UxrSingleton<T>`:
- `UxrManager` : The main manager in UltimateXR. 
- `UxrInstanceManager` : The manager responsible for instantiation.
- `UxrGrabManager` : The manager responsible for handling object manipulation.
- `UxrWeaponManager` : The manager responsible for handling weapons and actors.
- `UxrCompass` : A compass used to guide the user.

## Async Init Singletons

Additionally, two other variants, namely `UxrAsyncInitAbstractSingleton<T>` and `UxrAsyncInitSingleton<T>` are provided when the initialization of the singletons require an asynchronous process using `async`.
This can be used when the singleton requires asynchronous access to a resource for initialization, such as to a webpage or a configuration file.

## Accessing the global instance
